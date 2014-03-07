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
        "word": "HStringTemplate"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate.Base",
          "name": "Base",
          "package": "HStringTemplate",
          "source": "src/Text-StringTemplate-Base.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text StringTemplate Base",
          "module": "Text.StringTemplate.Base",
          "name": "Base",
          "package": "HStringTemplate",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate.Base",
          "name": "SEnv",
          "package": "HStringTemplate",
          "source": "src/Text-StringTemplate-Base.html#SEnv",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text StringTemplate Base",
          "module": "Text.StringTemplate.Base",
          "name": "SEnv",
          "package": "HStringTemplate",
          "partial": "SEnv",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#t:SEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function that generates StringTemplates.\n This is conceptually a query function into a \"group\" of StringTemplates.\n\u003c/p\u003e",
          "module": "Text.StringTemplate.Base",
          "name": "STGroup",
          "package": "HStringTemplate",
          "source": "src/Text-StringTemplate-Base.html#STGroup",
          "type": "type"
        },
        "index": {
          "description": "function that generates StringTemplates This is conceptually query function into group of StringTemplates",
          "hierarchy": "Text StringTemplate Base",
          "module": "Text.StringTemplate.Base",
          "name": "STGroup",
          "package": "HStringTemplate",
          "partial": "STGroup",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#t:STGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA String with \"holes\" in it. StringTemplates may be composed of any\n \u003ccode\u003e\u003ca\u003eStringable\u003c/a\u003e\u003c/code\u003e type, which at the moment includes \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es, \u003ccode\u003eByteString\u003c/code\u003es,\n PrettyPrinter \u003ccode\u003eDoc\u003c/code\u003es, and \u003ccode\u003e\u003ca\u003eEndo\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es, which are actually of type\n \u003ccode\u003e\u003ca\u003eShowS\u003c/a\u003e\u003c/code\u003e. When a StringTemplate is composed of a type, its internals are\n as well, so it is, so to speak \"turtles all the way down.\"\n\u003c/p\u003e",
          "module": "Text.StringTemplate.Base",
          "name": "StringTemplate",
          "package": "HStringTemplate",
          "source": "src/Text-StringTemplate-Base.html#StringTemplate",
          "type": "data"
        },
        "index": {
          "description": "String with holes in it StringTemplates may be composed of any Stringable type which at the moment includes String ByteString PrettyPrinter Doc and Endo String which are actually of type ShowS When StringTemplate is composed of type its internals are as well so it is so to speak turtles all the way down",
          "hierarchy": "Text StringTemplate Base",
          "module": "Text.StringTemplate.Base",
          "name": "StringTemplate",
          "package": "HStringTemplate",
          "partial": "String Template",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#t:StringTemplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe StringTemplateShows class should be instantiated for all types that are\n directly displayed in a StringTemplate, but take an optional format string. Each such type must have an appropriate ToSElem method defined as well.\n\u003c/p\u003e",
          "module": "Text.StringTemplate.Base",
          "name": "StringTemplateShows",
          "package": "HStringTemplate",
          "source": "src/Text-StringTemplate-Classes.html#StringTemplateShows",
          "type": "class"
        },
        "index": {
          "description": "The StringTemplateShows class should be instantiated for all types that are directly displayed in StringTemplate but take an optional format string Each such type must have an appropriate ToSElem method defined as well",
          "hierarchy": "Text StringTemplate Base",
          "module": "Text.StringTemplate.Base",
          "name": "StringTemplateShows",
          "package": "HStringTemplate",
          "partial": "String Template Shows",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#t:StringTemplateShows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Stringable class should be instantiated with care.\n Generally, the provided instances should be enough for anything.\n\u003c/p\u003e",
          "module": "Text.StringTemplate.Base",
          "name": "Stringable",
          "package": "HStringTemplate",
          "source": "src/Text-StringTemplate-Classes.html#Stringable",
          "type": "class"
        },
        "index": {
          "description": "The Stringable class should be instantiated with care Generally the provided instances should be enough for anything",
          "hierarchy": "Text StringTemplate Base",
          "module": "Text.StringTemplate.Base",
          "name": "Stringable",
          "package": "HStringTemplate",
          "partial": "Stringable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#t:Stringable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe ToSElem class should be instantiated for all types that can be\n inserted as attributes into a StringTemplate.\n\u003c/p\u003e",
          "module": "Text.StringTemplate.Base",
          "name": "ToSElem",
          "package": "HStringTemplate",
          "source": "src/Text-StringTemplate-Classes.html#ToSElem",
          "type": "class"
        },
        "index": {
          "description": "The ToSElem class should be instantiated for all types that can be inserted as attributes into StringTemplate",
          "hierarchy": "Text StringTemplate Base",
          "module": "Text.StringTemplate.Base",
          "name": "ToSElem",
          "package": "HStringTemplate",
          "partial": "To SElem",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#t:ToSElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate.Base",
          "name": "SEnv",
          "package": "HStringTemplate",
          "signature": "SEnv",
          "source": "src/Text-StringTemplate-Base.html#SEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text StringTemplate Base",
          "module": "Text.StringTemplate.Base",
          "name": "SEnv",
          "package": "HStringTemplate",
          "partial": "SEnv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:SEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate.Base",
          "name": "STMP",
          "package": "HStringTemplate",
          "signature": "STMP",
          "source": "src/Text-StringTemplate-Base.html#StringTemplate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text StringTemplate Base",
          "module": "Text.StringTemplate.Base",
          "name": "STMP",
          "package": "HStringTemplate",
          "partial": "STMP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:STMP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a tuple of three Maybes. The first is set if there is a parse error in the template.\n The next is set to a list of attributes that have not been set, or Nothing if all attributes are set.\n The last is set to a list of invoked templates that cannot be looked up, or Nothing if all invoked templates can be found.\n Note that this check is shallow -- i.e. missing attributes and templates are only caught in the top level template, not any invoked subtemplate.\n\u003c/p\u003e",
          "module": "[\"Text.StringTemplate.Base\",\"Text.StringTemplate\"]",
          "name": "checkTemplate",
          "package": "HStringTemplate",
          "signature": "StringTemplate a -\u003e (Maybe String, Maybe [String], Maybe [String])",
          "source": "src/Text-StringTemplate-Base.html#checkTemplate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:checkTemplate\",\"http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate.html#v:checkTemplate\"]"
        },
        "index": {
          "description": "Returns tuple of three Maybes The first is set if there is parse error in the template The next is set to list of attributes that have not been set or Nothing if all attributes are set The last is set to list of invoked templates that cannot be looked up or Nothing if all invoked templates can be found Note that this check is shallow i.e missing attributes and templates are only caught in the top level template not any invoked subtemplate",
          "hierarchy": "Text StringTemplate Base",
          "module": "Text.StringTemplate.Base",
          "name": "checkTemplate",
          "normalized": "StringTemplate a-\u003e(Maybe String,Maybe[String],Maybe[String])",
          "package": "HStringTemplate",
          "partial": "Template",
          "signature": "StringTemplate a-\u003e(Maybe String,Maybe[String],Maybe[String])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:checkTemplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a tuple of three lists. The first is of templates with parse errors, and their erros. The next is of missing attributes, and the last is of missing templates. If there are no errors, then all lists will be empty.\n\u003c/p\u003e",
          "module": "[\"Text.StringTemplate.Base\",\"Text.StringTemplate\"]",
          "name": "checkTemplateDeep",
          "package": "HStringTemplate",
          "signature": "StringTemplate a -\u003e ([(String, String)], [String], [String])",
          "source": "src/Text-StringTemplate-Base.html#checkTemplateDeep",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:checkTemplateDeep\",\"http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate.html#v:checkTemplateDeep\"]"
        },
        "index": {
          "description": "Returns tuple of three lists The first is of templates with parse errors and their erros The next is of missing attributes and the last is of missing templates If there are no errors then all lists will be empty",
          "hierarchy": "Text StringTemplate Base",
          "module": "Text.StringTemplate.Base",
          "name": "checkTemplateDeep",
          "normalized": "StringTemplate a-\u003e([(String,String)],[String],[String])",
          "package": "HStringTemplate",
          "partial": "Template Deep",
          "signature": "StringTemplate a-\u003e([(String,String)],[String],[String])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:checkTemplateDeep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate.Base",
          "name": "chkSTMP",
          "package": "HStringTemplate",
          "signature": "SEnv a -\u003e (Maybe String, Maybe [String], Maybe [String])",
          "source": "src/Text-StringTemplate-Base.html#StringTemplate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text StringTemplate Base",
          "module": "Text.StringTemplate.Base",
          "name": "chkSTMP",
          "normalized": "SEnv a-\u003e(Maybe String,Maybe[String],Maybe[String])",
          "package": "HStringTemplate",
          "partial": "STMP",
          "signature": "SEnv a-\u003e(Maybe String,Maybe[String],Maybe[String])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:chkSTMP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA special template that simply dumps the values of all the attributes set in it.\n This may be made available to any template as a function by adding it to its group.\n I.e. \u003ccode\u003e myNewGroup = addSuperGroup myGroup $ groupStringTemplates [(\u003ca\u003edumpAttribs\u003c/a\u003e, dumpAttribs)] \u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Text.StringTemplate.Base\",\"Text.StringTemplate\"]",
          "name": "dumpAttribs",
          "package": "HStringTemplate",
          "signature": "StringTemplate a",
          "source": "src/Text-StringTemplate-Base.html#dumpAttribs",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:dumpAttribs\",\"http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate.html#v:dumpAttribs\"]"
        },
        "index": {
          "description": "special template that simply dumps the values of all the attributes set in it This may be made available to any template as function by adding it to its group I.e myNewGroup addSuperGroup myGroup groupStringTemplates dumpAttribs dumpAttribs",
          "hierarchy": "Text StringTemplate Base",
          "module": "Text.StringTemplate.Base",
          "name": "dumpAttribs",
          "package": "HStringTemplate",
          "partial": "Attribs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:dumpAttribs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQueries an String Template Group and returns Just the appropriate\n StringTemplate if it exists, otherwise, Nothing.\n\u003c/p\u003e",
          "module": "[\"Text.StringTemplate.Base\",\"Text.StringTemplate\"]",
          "name": "getStringTemplate",
          "package": "HStringTemplate",
          "signature": "String -\u003e STGroup a -\u003e Maybe (StringTemplate a)",
          "source": "src/Text-StringTemplate-Base.html#getStringTemplate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:getStringTemplate\",\"http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate.html#v:getStringTemplate\"]"
        },
        "index": {
          "description": "Queries an String Template Group and returns Just the appropriate StringTemplate if it exists otherwise Nothing",
          "hierarchy": "Text StringTemplate Base",
          "module": "Text.StringTemplate.Base",
          "name": "getStringTemplate",
          "normalized": "String-\u003eSTGroup a-\u003eMaybe(StringTemplate a)",
          "package": "HStringTemplate",
          "partial": "String Template",
          "signature": "String-\u003eSTGroup a-\u003eMaybe(StringTemplate a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:getStringTemplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs with \u003ccode\u003e\u003ca\u003egetStringTemplate\u003c/a\u003e\u003c/code\u003e but never inlined, so appropriate for use\n with volatile template groups.\n\u003c/p\u003e",
          "module": "[\"Text.StringTemplate.Base\",\"Text.StringTemplate\"]",
          "name": "getStringTemplate'",
          "package": "HStringTemplate",
          "signature": "String -\u003e STGroup a -\u003e Maybe (StringTemplate a)",
          "source": "src/Text-StringTemplate-Base.html#getStringTemplate%27",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:getStringTemplate-39-\",\"http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate.html#v:getStringTemplate-39-\"]"
        },
        "index": {
          "description": "As with getStringTemplate but never inlined so appropriate for use with volatile template groups",
          "hierarchy": "Text StringTemplate Base",
          "module": "Text.StringTemplate.Base",
          "name": "getStringTemplate'",
          "normalized": "String-\u003eSTGroup a-\u003eMaybe(StringTemplate a)",
          "package": "HStringTemplate",
          "partial": "String Template'",
          "signature": "String-\u003eSTGroup a-\u003eMaybe(StringTemplate a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:getStringTemplate-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate.Base",
          "name": "inSGen",
          "package": "HStringTemplate",
          "signature": "(STGroup a -\u003e STGroup a) -\u003e StringTemplate a -\u003e StringTemplate a",
          "source": "src/Text-StringTemplate-Base.html#inSGen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text StringTemplate Base",
          "module": "Text.StringTemplate.Base",
          "name": "inSGen",
          "normalized": "(STGroup a-\u003eSTGroup a)-\u003eStringTemplate a-\u003eStringTemplate a",
          "package": "HStringTemplate",
          "partial": "SGen",
          "signature": "(STGroup a-\u003eSTGroup a)-\u003eStringTemplate a-\u003eStringTemplate a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:inSGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefaults to  \u003ccode\u003e mconcatMap m k = foldr (mappend . k) mempty m \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.StringTemplate.Base",
          "name": "mconcatMap",
          "package": "HStringTemplate",
          "signature": "[b] -\u003e (b -\u003e a) -\u003e a",
          "source": "src/Text-StringTemplate-Classes.html#mconcatMap",
          "type": "method"
        },
        "index": {
          "description": "Defaults to mconcatMap foldr mappend mempty",
          "hierarchy": "Text StringTemplate Base",
          "module": "Text.StringTemplate.Base",
          "name": "mconcatMap",
          "normalized": "[a]-\u003e(a-\u003eb)-\u003eb",
          "package": "HStringTemplate",
          "partial": "Map",
          "signature": "[b]-\u003e(b-\u003ea)-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:mconcatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefaults to  \u003ccode\u003e (mconcat .) . intersperse \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.StringTemplate.Base",
          "name": "mintercalate",
          "package": "HStringTemplate",
          "signature": "a -\u003e [a] -\u003e a",
          "source": "src/Text-StringTemplate-Classes.html#mintercalate",
          "type": "method"
        },
        "index": {
          "description": "Defaults to mconcat intersperse",
          "hierarchy": "Text StringTemplate Base",
          "module": "Text.StringTemplate.Base",
          "name": "mintercalate",
          "normalized": "a-\u003e[a]-\u003ea",
          "package": "HStringTemplate",
          "signature": "a-\u003e[a]-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:mintercalate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefaults to  \u003ccode\u003e  mlabel x y = mconcat [x, stFromString \u003ca\u003e[\u003c/a\u003e, y, stFromString \u003ca\u003e]\u003c/a\u003e] \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.StringTemplate.Base",
          "name": "mlabel",
          "package": "HStringTemplate",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Text-StringTemplate-Classes.html#mlabel",
          "type": "method"
        },
        "index": {
          "description": "Defaults to mlabel mconcat stFromString stFromString",
          "hierarchy": "Text StringTemplate Base",
          "module": "Text.StringTemplate.Base",
          "name": "mlabel",
          "normalized": "a-\u003ea-\u003ea",
          "package": "HStringTemplate",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:mlabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a String to produce a StringTemplate, delimited by angle brackets.\n It is constructed with a stub group that cannot look up other templates.\n\u003c/p\u003e",
          "module": "[\"Text.StringTemplate.Base\",\"Text.StringTemplate\"]",
          "name": "newAngleSTMP",
          "package": "HStringTemplate",
          "signature": "String -\u003e StringTemplate a",
          "source": "src/Text-StringTemplate-Base.html#newAngleSTMP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:newAngleSTMP\",\"http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate.html#v:newAngleSTMP\"]"
        },
        "index": {
          "description": "Parses String to produce StringTemplate delimited by angle brackets It is constructed with stub group that cannot look up other templates",
          "hierarchy": "Text StringTemplate Base",
          "module": "Text.StringTemplate.Base",
          "name": "newAngleSTMP",
          "normalized": "String-\u003eStringTemplate a",
          "package": "HStringTemplate",
          "partial": "Angle STMP",
          "signature": "String-\u003eStringTemplate a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:newAngleSTMP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a String to produce a StringTemplate, with '$'s as delimiters.\n It is constructed with a stub group that cannot look up other templates.\n\u003c/p\u003e",
          "module": "[\"Text.StringTemplate.Base\",\"Text.StringTemplate\"]",
          "name": "newSTMP",
          "package": "HStringTemplate",
          "signature": "String -\u003e StringTemplate a",
          "source": "src/Text-StringTemplate-Base.html#newSTMP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:newSTMP\",\"http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate.html#v:newSTMP\"]"
        },
        "index": {
          "description": "Parses String to produce StringTemplate with as delimiters It is constructed with stub group that cannot look up other templates",
          "hierarchy": "Text StringTemplate Base",
          "module": "Text.StringTemplate.Base",
          "name": "newSTMP",
          "normalized": "String-\u003eStringTemplate a",
          "package": "HStringTemplate",
          "partial": "STMP",
          "signature": "String-\u003eStringTemplate a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:newSTMP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a set of global options to a single template\n\u003c/p\u003e",
          "module": "[\"Text.StringTemplate.Base\",\"Text.StringTemplate\"]",
          "name": "optInsertTmpl",
          "package": "HStringTemplate",
          "signature": "[(String, String)] -\u003e StringTemplate a -\u003e StringTemplate a",
          "source": "src/Text-StringTemplate-Base.html#optInsertTmpl",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:optInsertTmpl\",\"http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate.html#v:optInsertTmpl\"]"
        },
        "index": {
          "description": "Adds set of global options to single template",
          "hierarchy": "Text StringTemplate Base",
          "module": "Text.StringTemplate.Base",
          "name": "optInsertTmpl",
          "normalized": "[(String,String)]-\u003eStringTemplate a-\u003eStringTemplate a",
          "package": "HStringTemplate",
          "partial": "Insert Tmpl",
          "signature": "[(String,String)]-\u003eStringTemplate a-\u003eStringTemplate a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:optInsertTmpl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate.Base",
          "name": "paddedTrans",
          "package": "HStringTemplate",
          "signature": "a -\u003e [[a]] -\u003e [[a]]",
          "source": "src/Text-StringTemplate-Base.html#paddedTrans",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text StringTemplate Base",
          "module": "Text.StringTemplate.Base",
          "name": "paddedTrans",
          "normalized": "a-\u003e[[a]]-\u003e[[a]]",
          "package": "HStringTemplate",
          "partial": "Trans",
          "signature": "a-\u003e[[a]]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:paddedTrans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate.Base",
          "name": "parseSTMP",
          "package": "HStringTemplate",
          "signature": "(Char, Char) -\u003e String -\u003e Either String (SEnv a -\u003e a)",
          "source": "src/Text-StringTemplate-Base.html#parseSTMP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text StringTemplate Base",
          "module": "Text.StringTemplate.Base",
          "name": "parseSTMP",
          "normalized": "(Char,Char)-\u003eString-\u003eEither String(SEnv a-\u003ea)",
          "package": "HStringTemplate",
          "partial": "STMP",
          "signature": "(Char,Char)-\u003eString-\u003eEither String(SEnv a-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:parseSTMP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets all quasiquoted names, normal names & templates used in a given template.\n Must be passed a pair of chars denoting the delimeters to be used.\n\u003c/p\u003e",
          "module": "Text.StringTemplate.Base",
          "name": "parseSTMPNames",
          "package": "HStringTemplate",
          "signature": "(Char, Char) -\u003e String -\u003e Either ParseError ([String], [String], [String])",
          "source": "src/Text-StringTemplate-Base.html#parseSTMPNames",
          "type": "function"
        },
        "index": {
          "description": "Gets all quasiquoted names normal names templates used in given template Must be passed pair of chars denoting the delimeters to be used",
          "hierarchy": "Text StringTemplate Base",
          "module": "Text.StringTemplate.Base",
          "name": "parseSTMPNames",
          "normalized": "(Char,Char)-\u003eString-\u003eEither ParseError([String],[String],[String])",
          "package": "HStringTemplate",
          "partial": "STMPNames",
          "signature": "(Char,Char)-\u003eString-\u003eEither ParseError([String],[String],[String])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:parseSTMPNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric render function for a StringTemplate of any type.\n\u003c/p\u003e",
          "module": "[\"Text.StringTemplate.Base\",\"Text.StringTemplate\"]",
          "name": "render",
          "package": "HStringTemplate",
          "signature": "StringTemplate a -\u003e a",
          "source": "src/Text-StringTemplate-Base.html#render",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:render\",\"http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate.html#v:render\"]"
        },
        "index": {
          "description": "Generic render function for StringTemplate of any type",
          "hierarchy": "Text StringTemplate Base",
          "module": "Text.StringTemplate.Base",
          "name": "render",
          "normalized": "StringTemplate a-\u003ea",
          "package": "HStringTemplate",
          "signature": "StringTemplate a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:render"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate.Base",
          "name": "runSTMP",
          "package": "HStringTemplate",
          "signature": "Either String (SEnv a -\u003e a)",
          "source": "src/Text-StringTemplate-Base.html#StringTemplate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text StringTemplate Base",
          "module": "Text.StringTemplate.Base",
          "name": "runSTMP",
          "normalized": "Either String(SEnv a-\u003ea)",
          "package": "HStringTemplate",
          "partial": "STMP",
          "signature": "Either String(SEnv a-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:runSTMP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate.Base",
          "name": "senc",
          "package": "HStringTemplate",
          "signature": "a -\u003e a",
          "source": "src/Text-StringTemplate-Base.html#SEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text StringTemplate Base",
          "module": "Text.StringTemplate.Base",
          "name": "senc",
          "normalized": "a-\u003ea",
          "package": "HStringTemplate",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:senc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate.Base",
          "name": "senv",
          "package": "HStringTemplate",
          "signature": "SEnv a",
          "source": "src/Text-StringTemplate-Base.html#StringTemplate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text StringTemplate Base",
          "module": "Text.StringTemplate.Base",
          "name": "senv",
          "package": "HStringTemplate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:senv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYields a StringTemplate with the appropriate attribute set.\n If the attribute already exists, it is appended to a list.\n\u003c/p\u003e",
          "module": "[\"Text.StringTemplate.Base\",\"Text.StringTemplate\"]",
          "name": "setAttribute",
          "package": "HStringTemplate",
          "signature": "String -\u003e a -\u003e StringTemplate b -\u003e StringTemplate b",
          "source": "src/Text-StringTemplate-Base.html#setAttribute",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:setAttribute\",\"http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate.html#v:setAttribute\"]"
        },
        "index": {
          "description": "Yields StringTemplate with the appropriate attribute set If the attribute already exists it is appended to list",
          "hierarchy": "Text StringTemplate Base",
          "module": "Text.StringTemplate.Base",
          "name": "setAttribute",
          "normalized": "String-\u003ea-\u003eStringTemplate b-\u003eStringTemplate b",
          "package": "HStringTemplate",
          "partial": "Attribute",
          "signature": "String-\u003ea-\u003eStringTemplate b-\u003eStringTemplate b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:setAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets an encoding function of a template that all values are\n rendered with. For example one useful encoder would be \u003ccode\u003e\u003ca\u003estringToHtmlString\u003c/a\u003e\u003c/code\u003e. All attributes will be encoded once and only once.\n\u003c/p\u003e",
          "module": "[\"Text.StringTemplate.Base\",\"Text.StringTemplate\"]",
          "name": "setEncoder",
          "package": "HStringTemplate",
          "signature": "(a -\u003e a) -\u003e StringTemplate a -\u003e StringTemplate a",
          "source": "src/Text-StringTemplate-Base.html#setEncoder",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:setEncoder\",\"http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate.html#v:setEncoder\"]"
        },
        "index": {
          "description": "Sets an encoding function of template that all values are rendered with For example one useful encoder would be stringToHtmlString All attributes will be encoded once and only once",
          "hierarchy": "Text StringTemplate Base",
          "module": "Text.StringTemplate.Base",
          "name": "setEncoder",
          "normalized": "(a-\u003ea)-\u003eStringTemplate a-\u003eStringTemplate a",
          "package": "HStringTemplate",
          "partial": "Encoder",
          "signature": "(a-\u003ea)-\u003eStringTemplate a-\u003eStringTemplate a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:setEncoder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYields a StringTemplate with the appropriate attributes set.\n If any attribute already exists, it is appended to a list.\n\u003c/p\u003e",
          "module": "[\"Text.StringTemplate.Base\",\"Text.StringTemplate\"]",
          "name": "setManyAttrib",
          "package": "HStringTemplate",
          "signature": "[(String, a)] -\u003e StringTemplate b -\u003e StringTemplate b",
          "source": "src/Text-StringTemplate-Base.html#setManyAttrib",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:setManyAttrib\",\"http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate.html#v:setManyAttrib\"]"
        },
        "index": {
          "description": "Yields StringTemplate with the appropriate attributes set If any attribute already exists it is appended to list",
          "hierarchy": "Text StringTemplate Base",
          "module": "Text.StringTemplate.Base",
          "name": "setManyAttrib",
          "normalized": "[(String,a)]-\u003eStringTemplate b-\u003eStringTemplate b",
          "package": "HStringTemplate",
          "partial": "Many Attrib",
          "signature": "[(String,a)]-\u003eStringTemplate b-\u003eStringTemplate b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:setManyAttrib"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYields a StringTemplate with the appropriate attributes set.\n If any attribute already exists, it is appended to a list.\n Attributes are added natively, which may provide\n efficiency gains.\n\u003c/p\u003e",
          "module": "[\"Text.StringTemplate.Base\",\"Text.StringTemplate\"]",
          "name": "setManyNativeAttrib",
          "package": "HStringTemplate",
          "signature": "[(String, b)] -\u003e StringTemplate b -\u003e StringTemplate b",
          "source": "src/Text-StringTemplate-Base.html#setManyNativeAttrib",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:setManyNativeAttrib\",\"http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate.html#v:setManyNativeAttrib\"]"
        },
        "index": {
          "description": "Yields StringTemplate with the appropriate attributes set If any attribute already exists it is appended to list Attributes are added natively which may provide efficiency gains",
          "hierarchy": "Text StringTemplate Base",
          "module": "Text.StringTemplate.Base",
          "name": "setManyNativeAttrib",
          "normalized": "[(String,a)]-\u003eStringTemplate a-\u003eStringTemplate a",
          "package": "HStringTemplate",
          "partial": "Many Native Attrib",
          "signature": "[(String,b)]-\u003eStringTemplate b-\u003eStringTemplate b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:setManyNativeAttrib"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYields a StringTemplate with the appropriate attribute set.\n If the attribute already exists, it is appended to a list.\n This will not translate the attribute through any intermediate\n representation, so is more efficient when, e.g. setting\n attributes that are large bytestrings in a bytestring template.\n\u003c/p\u003e",
          "module": "[\"Text.StringTemplate.Base\",\"Text.StringTemplate\"]",
          "name": "setNativeAttribute",
          "package": "HStringTemplate",
          "signature": "String -\u003e b -\u003e StringTemplate b -\u003e StringTemplate b",
          "source": "src/Text-StringTemplate-Base.html#setNativeAttribute",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:setNativeAttribute\",\"http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate.html#v:setNativeAttribute\"]"
        },
        "index": {
          "description": "Yields StringTemplate with the appropriate attribute set If the attribute already exists it is appended to list This will not translate the attribute through any intermediate representation so is more efficient when e.g setting attributes that are large bytestrings in bytestring template",
          "hierarchy": "Text StringTemplate Base",
          "module": "Text.StringTemplate.Base",
          "name": "setNativeAttribute",
          "normalized": "String-\u003ea-\u003eStringTemplate a-\u003eStringTemplate a",
          "package": "HStringTemplate",
          "partial": "Native Attribute",
          "signature": "String-\u003eb-\u003eStringTemplate b-\u003eStringTemplate b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:setNativeAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate.Base",
          "name": "sgen",
          "package": "HStringTemplate",
          "signature": "STGroup a",
          "source": "src/Text-StringTemplate-Base.html#SEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text StringTemplate Base",
          "module": "Text.StringTemplate.Base",
          "name": "sgen",
          "package": "HStringTemplate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:sgen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate.Base",
          "name": "smp",
          "package": "HStringTemplate",
          "signature": "SMap a",
          "source": "src/Text-StringTemplate-Base.html#SEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text StringTemplate Base",
          "module": "Text.StringTemplate.Base",
          "name": "smp",
          "package": "HStringTemplate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:smp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate.Base",
          "name": "sopts",
          "package": "HStringTemplate",
          "signature": "[(String, SEnv a -\u003e SElem a)]",
          "source": "src/Text-StringTemplate-Base.html#SEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text StringTemplate Base",
          "module": "Text.StringTemplate.Base",
          "name": "sopts",
          "normalized": "[(String,SEnv a-\u003eSElem a)]",
          "package": "HStringTemplate",
          "signature": "[(String,SEnv a-\u003eSElem a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:sopts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate.Base",
          "name": "stFromByteString",
          "package": "HStringTemplate",
          "signature": "ByteString -\u003e a",
          "source": "src/Text-StringTemplate-Classes.html#stFromByteString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text StringTemplate Base",
          "module": "Text.StringTemplate.Base",
          "name": "stFromByteString",
          "normalized": "ByteString-\u003ea",
          "package": "HStringTemplate",
          "partial": "From Byte String",
          "signature": "ByteString-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:stFromByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate.Base",
          "name": "stFromString",
          "package": "HStringTemplate",
          "signature": "String -\u003e a",
          "source": "src/Text-StringTemplate-Classes.html#stFromString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text StringTemplate Base",
          "module": "Text.StringTemplate.Base",
          "name": "stFromString",
          "normalized": "String-\u003ea",
          "package": "HStringTemplate",
          "partial": "From String",
          "signature": "String-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:stFromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate.Base",
          "name": "stFromText",
          "package": "HStringTemplate",
          "signature": "Text -\u003e a",
          "source": "src/Text-StringTemplate-Classes.html#stFromText",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text StringTemplate Base",
          "module": "Text.StringTemplate.Base",
          "name": "stFromText",
          "normalized": "Text-\u003ea",
          "package": "HStringTemplate",
          "partial": "From Text",
          "signature": "Text-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:stFromText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis method should be used to create ToSElem instances for\n types defining a custom formatted show function.\n\u003c/p\u003e",
          "module": "[\"Text.StringTemplate.Base\",\"Text.StringTemplate.Classes\",\"Text.StringTemplate\"]",
          "name": "stShowsToSE",
          "package": "HStringTemplate",
          "signature": "a -\u003e SElem b",
          "source": "src/Text-StringTemplate-Classes.html#stShowsToSE",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:stShowsToSE\",\"http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Classes.html#v:stShowsToSE\",\"http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate.html#v:stShowsToSE\"]"
        },
        "index": {
          "description": "This method should be used to create ToSElem instances for types defining custom formatted show function",
          "hierarchy": "Text StringTemplate Base",
          "module": "Text.StringTemplate.Base",
          "name": "stShowsToSE",
          "normalized": "a-\u003eSElem b",
          "package": "HStringTemplate",
          "partial": "Shows To SE",
          "signature": "a-\u003eSElem b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:stShowsToSE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate.Base",
          "name": "stToString",
          "package": "HStringTemplate",
          "signature": "a -\u003e String",
          "source": "src/Text-StringTemplate-Classes.html#stToString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text StringTemplate Base",
          "module": "Text.StringTemplate.Base",
          "name": "stToString",
          "normalized": "a-\u003eString",
          "package": "HStringTemplate",
          "partial": "To String",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:stToString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefaults to  \u003ccode\u003e  _ a -\u003e stringTemplateShow a \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.StringTemplate.Base",
          "name": "stringTemplateFormattedShow",
          "package": "HStringTemplate",
          "signature": "String -\u003e a -\u003e String",
          "source": "src/Text-StringTemplate-Classes.html#stringTemplateFormattedShow",
          "type": "method"
        },
        "index": {
          "description": "Defaults to stringTemplateShow",
          "hierarchy": "Text StringTemplate Base",
          "module": "Text.StringTemplate.Base",
          "name": "stringTemplateFormattedShow",
          "normalized": "String-\u003ea-\u003eString",
          "package": "HStringTemplate",
          "partial": "Template Formatted Show",
          "signature": "String-\u003ea-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:stringTemplateFormattedShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefaults to \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.StringTemplate.Base",
          "name": "stringTemplateShow",
          "package": "HStringTemplate",
          "signature": "a -\u003e String",
          "source": "src/Text-StringTemplate-Classes.html#stringTemplateShow",
          "type": "method"
        },
        "index": {
          "description": "Defaults to show",
          "hierarchy": "Text StringTemplate Base",
          "module": "Text.StringTemplate.Base",
          "name": "stringTemplateShow",
          "normalized": "a-\u003eString",
          "package": "HStringTemplate",
          "partial": "Template Show",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:stringTemplateShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenders a StringTemplate to a \u003ccode\u003e\u003ca\u003eDoc\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Text.StringTemplate.Base\",\"Text.StringTemplate\"]",
          "name": "toPPDoc",
          "package": "HStringTemplate",
          "signature": "StringTemplate Doc -\u003e Doc",
          "source": "src/Text-StringTemplate-Base.html#toPPDoc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:toPPDoc\",\"http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate.html#v:toPPDoc\"]"
        },
        "index": {
          "description": "Renders StringTemplate to Doc",
          "hierarchy": "Text StringTemplate Base",
          "module": "Text.StringTemplate.Base",
          "name": "toPPDoc",
          "normalized": "StringTemplate Doc-\u003eDoc",
          "package": "HStringTemplate",
          "partial": "PPDoc",
          "signature": "StringTemplate Doc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:toPPDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate.Base",
          "name": "toSElem",
          "package": "HStringTemplate",
          "signature": "a -\u003e SElem b",
          "source": "src/Text-StringTemplate-Classes.html#toSElem",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text StringTemplate Base",
          "module": "Text.StringTemplate.Base",
          "name": "toSElem",
          "normalized": "a-\u003eSElem b",
          "package": "HStringTemplate",
          "partial": "SElem",
          "signature": "a-\u003eSElem b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:toSElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate.Base",
          "name": "toSElemList",
          "package": "HStringTemplate",
          "signature": "[a] -\u003e SElem b",
          "source": "src/Text-StringTemplate-Classes.html#toSElemList",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text StringTemplate Base",
          "module": "Text.StringTemplate.Base",
          "name": "toSElemList",
          "normalized": "[a]-\u003eSElem b",
          "package": "HStringTemplate",
          "partial": "SElem List",
          "signature": "[a]-\u003eSElem b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:toSElemList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenders a StringTemplate to a String.\n\u003c/p\u003e",
          "module": "[\"Text.StringTemplate.Base\",\"Text.StringTemplate\"]",
          "name": "toString",
          "package": "HStringTemplate",
          "signature": "StringTemplate String -\u003e String",
          "source": "src/Text-StringTemplate-Base.html#toString",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:toString\",\"http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate.html#v:toString\"]"
        },
        "index": {
          "description": "Renders StringTemplate to String",
          "hierarchy": "Text StringTemplate Base",
          "module": "Text.StringTemplate.Base",
          "name": "toString",
          "normalized": "StringTemplate String-\u003eString",
          "package": "HStringTemplate",
          "partial": "String",
          "signature": "StringTemplate String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:toString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplaces the attributes of a StringTemplate with those\n described in the second argument. If the argument does not yield\n a set of named attributes but only a single one, that attribute\n is named, as a default, \"it\".\n\u003c/p\u003e",
          "module": "[\"Text.StringTemplate.Base\",\"Text.StringTemplate\"]",
          "name": "withContext",
          "package": "HStringTemplate",
          "signature": "StringTemplate b -\u003e a -\u003e StringTemplate b",
          "source": "src/Text-StringTemplate-Base.html#withContext",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:withContext\",\"http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate.html#v:withContext\"]"
        },
        "index": {
          "description": "Replaces the attributes of StringTemplate with those described in the second argument If the argument does not yield set of named attributes but only single one that attribute is named as default it",
          "hierarchy": "Text StringTemplate Base",
          "module": "Text.StringTemplate.Base",
          "name": "withContext",
          "normalized": "StringTemplate a-\u003eb-\u003eStringTemplate a",
          "package": "HStringTemplate",
          "partial": "Context",
          "signature": "StringTemplate b-\u003ea-\u003eStringTemplate b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Base.html#v:withContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate.Classes",
          "name": "Classes",
          "package": "HStringTemplate",
          "source": "src/Text-StringTemplate-Classes.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text StringTemplate Classes",
          "module": "Text.StringTemplate.Classes",
          "name": "Classes",
          "package": "HStringTemplate",
          "partial": "Classes",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Classes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate.Classes",
          "name": "SElem",
          "package": "HStringTemplate",
          "source": "src/Text-StringTemplate-Classes.html#SElem",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text StringTemplate Classes",
          "module": "Text.StringTemplate.Classes",
          "name": "SElem",
          "package": "HStringTemplate",
          "partial": "SElem",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Classes.html#t:SElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate.Classes",
          "name": "SMap",
          "package": "HStringTemplate",
          "source": "src/Text-StringTemplate-Classes.html#SMap",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text StringTemplate Classes",
          "module": "Text.StringTemplate.Classes",
          "name": "SMap",
          "package": "HStringTemplate",
          "partial": "SMap",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Classes.html#t:SMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate.Classes",
          "name": "STShow",
          "package": "HStringTemplate",
          "source": "src/Text-StringTemplate-Classes.html#STShow",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text StringTemplate Classes",
          "module": "Text.StringTemplate.Classes",
          "name": "STShow",
          "package": "HStringTemplate",
          "partial": "STShow",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Classes.html#t:STShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate.Classes",
          "name": "StFirst",
          "package": "HStringTemplate",
          "source": "src/Text-StringTemplate-Classes.html#StFirst",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Text StringTemplate Classes",
          "module": "Text.StringTemplate.Classes",
          "name": "StFirst",
          "package": "HStringTemplate",
          "partial": "St First",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Classes.html#t:StFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe StringTemplateShows class should be instantiated for all types that are\n directly displayed in a StringTemplate, but take an optional format string. Each such type must have an appropriate ToSElem method defined as well.\n\u003c/p\u003e",
          "module": "Text.StringTemplate.Classes",
          "name": "StringTemplateShows",
          "package": "HStringTemplate",
          "source": "src/Text-StringTemplate-Classes.html#StringTemplateShows",
          "type": "class"
        },
        "index": {
          "description": "The StringTemplateShows class should be instantiated for all types that are directly displayed in StringTemplate but take an optional format string Each such type must have an appropriate ToSElem method defined as well",
          "hierarchy": "Text StringTemplate Classes",
          "module": "Text.StringTemplate.Classes",
          "name": "StringTemplateShows",
          "package": "HStringTemplate",
          "partial": "String Template Shows",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Classes.html#t:StringTemplateShows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Stringable class should be instantiated with care.\n Generally, the provided instances should be enough for anything.\n\u003c/p\u003e",
          "module": "Text.StringTemplate.Classes",
          "name": "Stringable",
          "package": "HStringTemplate",
          "source": "src/Text-StringTemplate-Classes.html#Stringable",
          "type": "class"
        },
        "index": {
          "description": "The Stringable class should be instantiated with care Generally the provided instances should be enough for anything",
          "hierarchy": "Text StringTemplate Classes",
          "module": "Text.StringTemplate.Classes",
          "name": "Stringable",
          "package": "HStringTemplate",
          "partial": "Stringable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Classes.html#t:Stringable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe ToSElem class should be instantiated for all types that can be\n inserted as attributes into a StringTemplate.\n\u003c/p\u003e",
          "module": "Text.StringTemplate.Classes",
          "name": "ToSElem",
          "package": "HStringTemplate",
          "source": "src/Text-StringTemplate-Classes.html#ToSElem",
          "type": "class"
        },
        "index": {
          "description": "The ToSElem class should be instantiated for all types that can be inserted as attributes into StringTemplate",
          "hierarchy": "Text StringTemplate Classes",
          "module": "Text.StringTemplate.Classes",
          "name": "ToSElem",
          "package": "HStringTemplate",
          "partial": "To SElem",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Classes.html#t:ToSElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate.Classes",
          "name": "BS",
          "package": "HStringTemplate",
          "signature": "BS ByteString",
          "source": "src/Text-StringTemplate-Classes.html#SElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text StringTemplate Classes",
          "module": "Text.StringTemplate.Classes",
          "name": "BS",
          "package": "HStringTemplate",
          "partial": "BS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Classes.html#v:BS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate.Classes",
          "name": "LI",
          "package": "HStringTemplate",
          "signature": "LI [SElem a]",
          "source": "src/Text-StringTemplate-Classes.html#SElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text StringTemplate Classes",
          "module": "Text.StringTemplate.Classes",
          "name": "LI",
          "normalized": "LI[SElem a]",
          "package": "HStringTemplate",
          "partial": "LI",
          "signature": "LI[SElem a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Classes.html#v:LI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate.Classes",
          "name": "SBLE",
          "package": "HStringTemplate",
          "signature": "SBLE a",
          "source": "src/Text-StringTemplate-Classes.html#SElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text StringTemplate Classes",
          "module": "Text.StringTemplate.Classes",
          "name": "SBLE",
          "package": "HStringTemplate",
          "partial": "SBLE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Classes.html#v:SBLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate.Classes",
          "name": "SM",
          "package": "HStringTemplate",
          "signature": "SM (SMap a)",
          "source": "src/Text-StringTemplate-Classes.html#SElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text StringTemplate Classes",
          "module": "Text.StringTemplate.Classes",
          "name": "SM",
          "package": "HStringTemplate",
          "partial": "SM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Classes.html#v:SM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate.Classes",
          "name": "SNAT",
          "package": "HStringTemplate",
          "signature": "SNAT a",
          "source": "src/Text-StringTemplate-Classes.html#SElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text StringTemplate Classes",
          "module": "Text.StringTemplate.Classes",
          "name": "SNAT",
          "package": "HStringTemplate",
          "partial": "SNAT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Classes.html#v:SNAT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate.Classes",
          "name": "SNull",
          "package": "HStringTemplate",
          "signature": "SNull",
          "source": "src/Text-StringTemplate-Classes.html#SElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text StringTemplate Classes",
          "module": "Text.StringTemplate.Classes",
          "name": "SNull",
          "package": "HStringTemplate",
          "partial": "SNull",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Classes.html#v:SNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate.Classes",
          "name": "STR",
          "package": "HStringTemplate",
          "signature": "STR String",
          "source": "src/Text-StringTemplate-Classes.html#SElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text StringTemplate Classes",
          "module": "Text.StringTemplate.Classes",
          "name": "STR",
          "package": "HStringTemplate",
          "partial": "STR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Classes.html#v:STR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate.Classes",
          "name": "STSH",
          "package": "HStringTemplate",
          "signature": "STSH STShow",
          "source": "src/Text-StringTemplate-Classes.html#SElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text StringTemplate Classes",
          "module": "Text.StringTemplate.Classes",
          "name": "STSH",
          "package": "HStringTemplate",
          "partial": "STSH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Classes.html#v:STSH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate.Classes",
          "name": "STShow",
          "package": "HStringTemplate",
          "signature": "STShow a",
          "source": "src/Text-StringTemplate-Classes.html#STShow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text StringTemplate Classes",
          "module": "Text.StringTemplate.Classes",
          "name": "STShow",
          "package": "HStringTemplate",
          "partial": "STShow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Classes.html#v:STShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate.Classes",
          "name": "StFirst",
          "package": "HStringTemplate",
          "signature": "StFirst",
          "source": "src/Text-StringTemplate-Classes.html#StFirst",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text StringTemplate Classes",
          "module": "Text.StringTemplate.Classes",
          "name": "StFirst",
          "package": "HStringTemplate",
          "partial": "St First",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Classes.html#v:StFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate.Classes",
          "name": "TXT",
          "package": "HStringTemplate",
          "signature": "TXT Text",
          "source": "src/Text-StringTemplate-Classes.html#SElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text StringTemplate Classes",
          "module": "Text.StringTemplate.Classes",
          "name": "TXT",
          "package": "HStringTemplate",
          "partial": "TXT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Classes.html#v:TXT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefaults to  \u003ccode\u003e mconcatMap m k = foldr (mappend . k) mempty m \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.StringTemplate.Classes",
          "name": "mconcatMap",
          "package": "HStringTemplate",
          "signature": "[b] -\u003e (b -\u003e a) -\u003e a",
          "source": "src/Text-StringTemplate-Classes.html#mconcatMap",
          "type": "method"
        },
        "index": {
          "description": "Defaults to mconcatMap foldr mappend mempty",
          "hierarchy": "Text StringTemplate Classes",
          "module": "Text.StringTemplate.Classes",
          "name": "mconcatMap",
          "normalized": "[a]-\u003e(a-\u003eb)-\u003eb",
          "package": "HStringTemplate",
          "partial": "Map",
          "signature": "[b]-\u003e(b-\u003ea)-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Classes.html#v:mconcatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefaults to  \u003ccode\u003e (mconcat .) . intersperse \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.StringTemplate.Classes",
          "name": "mintercalate",
          "package": "HStringTemplate",
          "signature": "a -\u003e [a] -\u003e a",
          "source": "src/Text-StringTemplate-Classes.html#mintercalate",
          "type": "method"
        },
        "index": {
          "description": "Defaults to mconcat intersperse",
          "hierarchy": "Text StringTemplate Classes",
          "module": "Text.StringTemplate.Classes",
          "name": "mintercalate",
          "normalized": "a-\u003e[a]-\u003ea",
          "package": "HStringTemplate",
          "signature": "a-\u003e[a]-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Classes.html#v:mintercalate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefaults to  \u003ccode\u003e  mlabel x y = mconcat [x, stFromString \u003ca\u003e[\u003c/a\u003e, y, stFromString \u003ca\u003e]\u003c/a\u003e] \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.StringTemplate.Classes",
          "name": "mlabel",
          "package": "HStringTemplate",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Text-StringTemplate-Classes.html#mlabel",
          "type": "method"
        },
        "index": {
          "description": "Defaults to mlabel mconcat stFromString stFromString",
          "hierarchy": "Text StringTemplate Classes",
          "module": "Text.StringTemplate.Classes",
          "name": "mlabel",
          "normalized": "a-\u003ea-\u003ea",
          "package": "HStringTemplate",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Classes.html#v:mlabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate.Classes",
          "name": "stFromByteString",
          "package": "HStringTemplate",
          "signature": "ByteString -\u003e a",
          "source": "src/Text-StringTemplate-Classes.html#stFromByteString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text StringTemplate Classes",
          "module": "Text.StringTemplate.Classes",
          "name": "stFromByteString",
          "normalized": "ByteString-\u003ea",
          "package": "HStringTemplate",
          "partial": "From Byte String",
          "signature": "ByteString-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Classes.html#v:stFromByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate.Classes",
          "name": "stFromString",
          "package": "HStringTemplate",
          "signature": "String -\u003e a",
          "source": "src/Text-StringTemplate-Classes.html#stFromString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text StringTemplate Classes",
          "module": "Text.StringTemplate.Classes",
          "name": "stFromString",
          "normalized": "String-\u003ea",
          "package": "HStringTemplate",
          "partial": "From String",
          "signature": "String-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Classes.html#v:stFromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate.Classes",
          "name": "stFromText",
          "package": "HStringTemplate",
          "signature": "Text -\u003e a",
          "source": "src/Text-StringTemplate-Classes.html#stFromText",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text StringTemplate Classes",
          "module": "Text.StringTemplate.Classes",
          "name": "stFromText",
          "normalized": "Text-\u003ea",
          "package": "HStringTemplate",
          "partial": "From Text",
          "signature": "Text-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Classes.html#v:stFromText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate.Classes",
          "name": "stGetFirst",
          "package": "HStringTemplate",
          "signature": "Maybe a",
          "source": "src/Text-StringTemplate-Classes.html#StFirst",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text StringTemplate Classes",
          "module": "Text.StringTemplate.Classes",
          "name": "stGetFirst",
          "package": "HStringTemplate",
          "partial": "Get First",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Classes.html#v:stGetFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate.Classes",
          "name": "stToString",
          "package": "HStringTemplate",
          "signature": "a -\u003e String",
          "source": "src/Text-StringTemplate-Classes.html#stToString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text StringTemplate Classes",
          "module": "Text.StringTemplate.Classes",
          "name": "stToString",
          "normalized": "a-\u003eString",
          "package": "HStringTemplate",
          "partial": "To String",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Classes.html#v:stToString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefaults to  \u003ccode\u003e  _ a -\u003e stringTemplateShow a \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.StringTemplate.Classes",
          "name": "stringTemplateFormattedShow",
          "package": "HStringTemplate",
          "signature": "String -\u003e a -\u003e String",
          "source": "src/Text-StringTemplate-Classes.html#stringTemplateFormattedShow",
          "type": "method"
        },
        "index": {
          "description": "Defaults to stringTemplateShow",
          "hierarchy": "Text StringTemplate Classes",
          "module": "Text.StringTemplate.Classes",
          "name": "stringTemplateFormattedShow",
          "normalized": "String-\u003ea-\u003eString",
          "package": "HStringTemplate",
          "partial": "Template Formatted Show",
          "signature": "String-\u003ea-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Classes.html#v:stringTemplateFormattedShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefaults to \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.StringTemplate.Classes",
          "name": "stringTemplateShow",
          "package": "HStringTemplate",
          "signature": "a -\u003e String",
          "source": "src/Text-StringTemplate-Classes.html#stringTemplateShow",
          "type": "method"
        },
        "index": {
          "description": "Defaults to show",
          "hierarchy": "Text StringTemplate Classes",
          "module": "Text.StringTemplate.Classes",
          "name": "stringTemplateShow",
          "normalized": "a-\u003eString",
          "package": "HStringTemplate",
          "partial": "Template Show",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Classes.html#v:stringTemplateShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate.Classes",
          "name": "toSElem",
          "package": "HStringTemplate",
          "signature": "a -\u003e SElem b",
          "source": "src/Text-StringTemplate-Classes.html#toSElem",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text StringTemplate Classes",
          "module": "Text.StringTemplate.Classes",
          "name": "toSElem",
          "normalized": "a-\u003eSElem b",
          "package": "HStringTemplate",
          "partial": "SElem",
          "signature": "a-\u003eSElem b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Classes.html#v:toSElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate.Classes",
          "name": "toSElemList",
          "package": "HStringTemplate",
          "signature": "[a] -\u003e SElem b",
          "source": "src/Text-StringTemplate-Classes.html#toSElemList",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text StringTemplate Classes",
          "module": "Text.StringTemplate.Classes",
          "name": "toSElemList",
          "normalized": "[a]-\u003eSElem b",
          "package": "HStringTemplate",
          "partial": "SElem List",
          "signature": "[a]-\u003eSElem b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-Classes.html#v:toSElemList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneric Instance for ToSElem using standard Data.Generic libraries.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.StringTemplate.GenericStandard",
          "name": "GenericStandard",
          "package": "HStringTemplate",
          "source": "src/Text-StringTemplate-GenericStandard.html",
          "type": "module"
        },
        "index": {
          "description": "Generic Instance for ToSElem using standard Data.Generic libraries",
          "hierarchy": "Text StringTemplate GenericStandard",
          "module": "Text.StringTemplate.GenericStandard",
          "name": "GenericStandard",
          "package": "HStringTemplate",
          "partial": "Generic Standard",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-GenericStandard.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides stmp, a quasi-quoter for StringTemplate expressions.\n Quoted templates are guaranteed syntactically well-formed at compile time,\n and antiquotation (of identifiers only) is provided by backticks.\n Usage: \u003ccode\u003e let var = [0,1,2] in toString [$stmp|($`var`; separator = ', '$)|] === \"(0, 1, 2)\"\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.StringTemplate.QQ",
          "name": "QQ",
          "package": "HStringTemplate",
          "source": "src/Text-StringTemplate-QQ.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides stmp quasi-quoter for StringTemplate expressions Quoted templates are guaranteed syntactically well-formed at compile time and antiquotation of identifiers only is provided by backticks Usage let var in toString stmp var separator",
          "hierarchy": "Text StringTemplate QQ",
          "module": "Text.StringTemplate.QQ",
          "name": "QQ",
          "package": "HStringTemplate",
          "partial": "QQ",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-QQ.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate.QQ",
          "name": "stmp",
          "package": "HStringTemplate",
          "signature": "QuasiQuoter",
          "source": "src/Text-StringTemplate-QQ.html#stmp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text StringTemplate QQ",
          "module": "Text.StringTemplate.QQ",
          "name": "stmp",
          "package": "HStringTemplate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate-QQ.html#v:stmp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA StringTemplate is a String with \"holes\" in it.\n This is a port of the Java StringTemplate library written by Terrence Parr.\n (\u003ca\u003ehttp://www.stringtemplate.org\u003c/a\u003e). User-contributed documentation available at\n \u003ca\u003ehttp://www.haskell.org/haskellwiki/HStringTemplate\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThis library implements the basic 3.1 grammar, lacking group files\n (though not groups themselves), Regions, and Interfaces.\n The goal is not to blindly copy the StringTemplate API, but rather to\n take its central ideas and implement them in a Haskellish manner.\n Indentation and wrapping, for example, are implemented through the\n HughesPJ Pretty Printing library. Calling toPPDoc on a StringTemplate\n yields a Doc with appropriate paragraph-fill wrapping that can be\n rendered in the usual fashion.\n\u003c/p\u003e\u003cp\u003eBasic instances are provided of the StringTemplateShows and ToSElem class.\n Any type deriving ToSElem can be passed automatically as a StringTemplate\n attribute. This package can be installed with syb-with-class bindings\n that provide a ToSElem instance for anything deriving\n \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e. When defining an instance of\n ToSElem that can take a format parameter, you should first define an\n instance of StringTemplateShows, and then define an instance of ToSElem\n where \u003ccode\u003e toSElem = stShowsToSE\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.StringTemplate",
          "name": "StringTemplate",
          "package": "HStringTemplate",
          "source": "src/Text-StringTemplate.html",
          "type": "module"
        },
        "index": {
          "description": "StringTemplate is String with holes in it This is port of the Java StringTemplate library written by Terrence Parr http www.stringtemplate.org User-contributed documentation available at http www.haskell.org haskellwiki HStringTemplate This library implements the basic grammar lacking group files though not groups themselves Regions and Interfaces The goal is not to blindly copy the StringTemplate API but rather to take its central ideas and implement them in Haskellish manner Indentation and wrapping for example are implemented through the HughesPJ Pretty Printing library Calling toPPDoc on StringTemplate yields Doc with appropriate paragraph-fill wrapping that can be rendered in the usual fashion Basic instances are provided of the StringTemplateShows and ToSElem class Any type deriving ToSElem can be passed automatically as StringTemplate attribute This package can be installed with syb-with-class bindings that provide ToSElem instance for anything deriving Data When defining an instance of ToSElem that can take format parameter you should first define an instance of StringTemplateShows and then define an instance of ToSElem where toSElem stShowsToSE",
          "hierarchy": "Text StringTemplate",
          "module": "Text.StringTemplate",
          "name": "StringTemplate",
          "package": "HStringTemplate",
          "partial": "String Template",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate",
          "name": "SEType",
          "package": "HStringTemplate",
          "source": "src/Text-StringTemplate-Renderf.html#SEType",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text StringTemplate",
          "module": "Text.StringTemplate",
          "name": "SEType",
          "package": "HStringTemplate",
          "partial": "SEType",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate.html#t:SEType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function that generates StringTemplates.\n This is conceptually a query function into a \"group\" of StringTemplates.\n\u003c/p\u003e",
          "module": "Text.StringTemplate",
          "name": "STGroup",
          "package": "HStringTemplate",
          "source": "src/Text-StringTemplate-Base.html#STGroup",
          "type": "type"
        },
        "index": {
          "description": "function that generates StringTemplates This is conceptually query function into group of StringTemplates",
          "hierarchy": "Text StringTemplate",
          "module": "Text.StringTemplate",
          "name": "STGroup",
          "package": "HStringTemplate",
          "partial": "STGroup",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate.html#t:STGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA String with \"holes\" in it. StringTemplates may be composed of any\n \u003ccode\u003e\u003ca\u003eStringable\u003c/a\u003e\u003c/code\u003e type, which at the moment includes \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es, \u003ccode\u003eByteString\u003c/code\u003es,\n PrettyPrinter \u003ccode\u003eDoc\u003c/code\u003es, and \u003ccode\u003e\u003ca\u003eEndo\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es, which are actually of type\n \u003ccode\u003e\u003ca\u003eShowS\u003c/a\u003e\u003c/code\u003e. When a StringTemplate is composed of a type, its internals are\n as well, so it is, so to speak \"turtles all the way down.\"\n\u003c/p\u003e",
          "module": "Text.StringTemplate",
          "name": "StringTemplate",
          "package": "HStringTemplate",
          "source": "src/Text-StringTemplate-Base.html#StringTemplate",
          "type": "data"
        },
        "index": {
          "description": "String with holes in it StringTemplates may be composed of any Stringable type which at the moment includes String ByteString PrettyPrinter Doc and Endo String which are actually of type ShowS When StringTemplate is composed of type its internals are as well so it is so to speak turtles all the way down",
          "hierarchy": "Text StringTemplate",
          "module": "Text.StringTemplate",
          "name": "StringTemplate",
          "package": "HStringTemplate",
          "partial": "String Template",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate.html#t:StringTemplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe StringTemplateShows class should be instantiated for all types that are\n directly displayed in a StringTemplate, but take an optional format string. Each such type must have an appropriate ToSElem method defined as well.\n\u003c/p\u003e",
          "module": "Text.StringTemplate",
          "name": "StringTemplateShows",
          "package": "HStringTemplate",
          "source": "src/Text-StringTemplate-Classes.html#StringTemplateShows",
          "type": "class"
        },
        "index": {
          "description": "The StringTemplateShows class should be instantiated for all types that are directly displayed in StringTemplate but take an optional format string Each such type must have an appropriate ToSElem method defined as well",
          "hierarchy": "Text StringTemplate",
          "module": "Text.StringTemplate",
          "name": "StringTemplateShows",
          "package": "HStringTemplate",
          "partial": "String Template Shows",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate.html#t:StringTemplateShows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Stringable class should be instantiated with care.\n Generally, the provided instances should be enough for anything.\n\u003c/p\u003e",
          "module": "Text.StringTemplate",
          "name": "Stringable",
          "package": "HStringTemplate",
          "source": "src/Text-StringTemplate-Classes.html#Stringable",
          "type": "class"
        },
        "index": {
          "description": "The Stringable class should be instantiated with care Generally the provided instances should be enough for anything",
          "hierarchy": "Text StringTemplate",
          "module": "Text.StringTemplate",
          "name": "Stringable",
          "package": "HStringTemplate",
          "partial": "Stringable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate.html#t:Stringable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe ToSElem class should be instantiated for all types that can be\n inserted as attributes into a StringTemplate.\n\u003c/p\u003e",
          "module": "Text.StringTemplate",
          "name": "ToSElem",
          "package": "HStringTemplate",
          "source": "src/Text-StringTemplate-Classes.html#ToSElem",
          "type": "class"
        },
        "index": {
          "description": "The ToSElem class should be instantiated for all types that can be inserted as attributes into StringTemplate",
          "hierarchy": "Text StringTemplate",
          "module": "Text.StringTemplate",
          "name": "ToSElem",
          "package": "HStringTemplate",
          "partial": "To SElem",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate.html#t:ToSElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate",
          "name": "(|=)",
          "package": "HStringTemplate",
          "signature": "a -\u003e m a1 -\u003e m (a, a1)",
          "source": "src/Text-StringTemplate-Renderf.html#%7C%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text StringTemplate",
          "module": "Text.StringTemplate",
          "name": "(|=) |=",
          "normalized": "a-\u003eb a-\u003eb(a,a)",
          "package": "HStringTemplate",
          "signature": "a-\u003em a-\u003em(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate.html#v:-124--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a \"subgroup\" to any StringTemplate group such that templates from\n the original group now have template calls \"shadowed\" by the subgroup.\n\u003c/p\u003e",
          "module": "Text.StringTemplate",
          "name": "addSubGroup",
          "package": "HStringTemplate",
          "signature": "STGroup a -\u003e STGroup a -\u003e STGroup a",
          "source": "src/Text-StringTemplate-Group.html#addSubGroup",
          "type": "function"
        },
        "index": {
          "description": "Adds subgroup to any StringTemplate group such that templates from the original group now have template calls shadowed by the subgroup",
          "hierarchy": "Text StringTemplate",
          "module": "Text.StringTemplate",
          "name": "addSubGroup",
          "normalized": "STGroup a-\u003eSTGroup a-\u003eSTGroup a",
          "package": "HStringTemplate",
          "partial": "Sub Group",
          "signature": "STGroup a-\u003eSTGroup a-\u003eSTGroup a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate.html#v:addSubGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a supergroup to any StringTemplate group such that templates from\n the original group are now able to call ones from the supergroup as well.\n\u003c/p\u003e",
          "module": "Text.StringTemplate",
          "name": "addSuperGroup",
          "package": "HStringTemplate",
          "signature": "STGroup a -\u003e STGroup a -\u003e STGroup a",
          "source": "src/Text-StringTemplate-Group.html#addSuperGroup",
          "type": "function"
        },
        "index": {
          "description": "Adds supergroup to any StringTemplate group such that templates from the original group are now able to call ones from the supergroup as well",
          "hierarchy": "Text StringTemplate",
          "module": "Text.StringTemplate",
          "name": "addSuperGroup",
          "normalized": "STGroup a-\u003eSTGroup a-\u003eSTGroup a",
          "package": "HStringTemplate",
          "partial": "Super Group",
          "signature": "STGroup a-\u003eSTGroup a-\u003eSTGroup a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate.html#v:addSuperGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a path, returns a group which generates all files in said directory\n which have the proper \"st\" extension.\n This function is strict, with all files read once. As it performs file IO,\n expect it to throw the usual exceptions.\n\u003c/p\u003e",
          "module": "Text.StringTemplate",
          "name": "directoryGroup",
          "package": "HStringTemplate",
          "signature": "FilePath -\u003e IO (STGroup a)",
          "source": "src/Text-StringTemplate-Group.html#directoryGroup",
          "type": "function"
        },
        "index": {
          "description": "Given path returns group which generates all files in said directory which have the proper st extension This function is strict with all files read once As it performs file IO expect it to throw the usual exceptions",
          "hierarchy": "Text StringTemplate",
          "module": "Text.StringTemplate",
          "name": "directoryGroup",
          "normalized": "FilePath-\u003eIO(STGroup a)",
          "package": "HStringTemplate",
          "partial": "Group",
          "signature": "FilePath-\u003eIO(STGroup a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate.html#v:directoryGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a path, returns a group which generates all files in said directory which have the supplied extension.\n\u003c/p\u003e",
          "module": "Text.StringTemplate",
          "name": "directoryGroupExt",
          "package": "HStringTemplate",
          "signature": "FilePath -\u003e FilePath -\u003e IO (STGroup a)",
          "source": "src/Text-StringTemplate-Group.html#directoryGroupExt",
          "type": "function"
        },
        "index": {
          "description": "Given path returns group which generates all files in said directory which have the supplied extension",
          "hierarchy": "Text StringTemplate",
          "module": "Text.StringTemplate",
          "name": "directoryGroupExt",
          "normalized": "FilePath-\u003eFilePath-\u003eIO(STGroup a)",
          "package": "HStringTemplate",
          "partial": "Group Ext",
          "signature": "FilePath-\u003eFilePath-\u003eIO(STGroup a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate.html#v:directoryGroupExt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a path, returns a group which generates all files in said directory\n which have the proper \"st\" extension.\n This function is lazy in the same way that readFile is lazy, with all\n files read on demand, but no more than once. The list of files, however,\n is generated at the time the function is called. As this performs file IO,\n expect it to throw the usual exceptions. And, as it is lazy, expect\n these exceptions in unexpected places.\n\u003c/p\u003e",
          "module": "Text.StringTemplate",
          "name": "directoryGroupLazy",
          "package": "HStringTemplate",
          "signature": "FilePath -\u003e IO (STGroup a)",
          "source": "src/Text-StringTemplate-Group.html#directoryGroupLazy",
          "type": "function"
        },
        "index": {
          "description": "Given path returns group which generates all files in said directory which have the proper st extension This function is lazy in the same way that readFile is lazy with all files read on demand but no more than once The list of files however is generated at the time the function is called As this performs file IO expect it to throw the usual exceptions And as it is lazy expect these exceptions in unexpected places",
          "hierarchy": "Text StringTemplate",
          "module": "Text.StringTemplate",
          "name": "directoryGroupLazy",
          "normalized": "FilePath-\u003eIO(STGroup a)",
          "package": "HStringTemplate",
          "partial": "Group Lazy",
          "signature": "FilePath-\u003eIO(STGroup a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate.html#v:directoryGroupLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a path, returns a group which generates all files in said directory which have the supplied extension.\n\u003c/p\u003e",
          "module": "Text.StringTemplate",
          "name": "directoryGroupLazyExt",
          "package": "HStringTemplate",
          "signature": "FilePath -\u003e FilePath -\u003e IO (STGroup a)",
          "source": "src/Text-StringTemplate-Group.html#directoryGroupLazyExt",
          "type": "function"
        },
        "index": {
          "description": "Given path returns group which generates all files in said directory which have the supplied extension",
          "hierarchy": "Text StringTemplate",
          "module": "Text.StringTemplate",
          "name": "directoryGroupLazyExt",
          "normalized": "FilePath-\u003eFilePath-\u003eIO(STGroup a)",
          "package": "HStringTemplate",
          "partial": "Group Lazy Ext",
          "signature": "FilePath-\u003eFilePath-\u003eIO(STGroup a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate.html#v:directoryGroupLazyExt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs with \u003ccode\u003e\u003ca\u003edirectoryGroup\u003c/a\u003e\u003c/code\u003e, but traverses subdirectories as well. A template named\n \"foo\u003cem\u003ebar.st\\\" may be referenced by \\\"foo\u003c/em\u003ebar\" in the returned group.\n\u003c/p\u003e",
          "module": "Text.StringTemplate",
          "name": "directoryGroupRecursive",
          "package": "HStringTemplate",
          "signature": "FilePath -\u003e IO (STGroup a)",
          "source": "src/Text-StringTemplate-Group.html#directoryGroupRecursive",
          "type": "function"
        },
        "index": {
          "description": "As with directoryGroup but traverses subdirectories as well template named foo bar.st may be referenced by foo bar in the returned group",
          "hierarchy": "Text StringTemplate",
          "module": "Text.StringTemplate",
          "name": "directoryGroupRecursive",
          "normalized": "FilePath-\u003eIO(STGroup a)",
          "package": "HStringTemplate",
          "partial": "Group Recursive",
          "signature": "FilePath-\u003eIO(STGroup a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate.html#v:directoryGroupRecursive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs with \u003ccode\u003e\u003ca\u003edirectoryGroupRecursive\u003c/a\u003e\u003c/code\u003e, but a template extension is supplied.\n\u003c/p\u003e",
          "module": "Text.StringTemplate",
          "name": "directoryGroupRecursiveExt",
          "package": "HStringTemplate",
          "signature": "FilePath -\u003e FilePath -\u003e IO (STGroup a)",
          "source": "src/Text-StringTemplate-Group.html#directoryGroupRecursiveExt",
          "type": "function"
        },
        "index": {
          "description": "As with directoryGroupRecursive but template extension is supplied",
          "hierarchy": "Text StringTemplate",
          "module": "Text.StringTemplate",
          "name": "directoryGroupRecursiveExt",
          "normalized": "FilePath-\u003eFilePath-\u003eIO(STGroup a)",
          "package": "HStringTemplate",
          "partial": "Group Recursive Ext",
          "signature": "FilePath-\u003eFilePath-\u003eIO(STGroup a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate.html#v:directoryGroupRecursiveExt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee documentation for \u003ccode\u003e\u003ca\u003edirectoryGroupRecursive\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.StringTemplate",
          "name": "directoryGroupRecursiveLazy",
          "package": "HStringTemplate",
          "signature": "FilePath -\u003e IO (STGroup a)",
          "source": "src/Text-StringTemplate-Group.html#directoryGroupRecursiveLazy",
          "type": "function"
        },
        "index": {
          "description": "See documentation for directoryGroupRecursive",
          "hierarchy": "Text StringTemplate",
          "module": "Text.StringTemplate",
          "name": "directoryGroupRecursiveLazy",
          "normalized": "FilePath-\u003eIO(STGroup a)",
          "package": "HStringTemplate",
          "partial": "Group Recursive Lazy",
          "signature": "FilePath-\u003eIO(STGroup a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate.html#v:directoryGroupRecursiveLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs with \u003ccode\u003e\u003ca\u003edirectoryGroupRecursiveLazy\u003c/a\u003e\u003c/code\u003e, but a template extension is supplied.\n\u003c/p\u003e",
          "module": "Text.StringTemplate",
          "name": "directoryGroupRecursiveLazyExt",
          "package": "HStringTemplate",
          "signature": "FilePath -\u003e FilePath -\u003e IO (STGroup a)",
          "source": "src/Text-StringTemplate-Group.html#directoryGroupRecursiveLazyExt",
          "type": "function"
        },
        "index": {
          "description": "As with directoryGroupRecursiveLazy but template extension is supplied",
          "hierarchy": "Text StringTemplate",
          "module": "Text.StringTemplate",
          "name": "directoryGroupRecursiveLazyExt",
          "normalized": "FilePath-\u003eFilePath-\u003eIO(STGroup a)",
          "package": "HStringTemplate",
          "partial": "Group Recursive Lazy Ext",
          "signature": "FilePath-\u003eFilePath-\u003eIO(STGroup a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate.html#v:directoryGroupRecursiveLazyExt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a list of named of StringTemplates, returns a group which generates\n them such that they can call one another.\n\u003c/p\u003e",
          "module": "Text.StringTemplate",
          "name": "groupStringTemplates",
          "package": "HStringTemplate",
          "signature": "[(String, StringTemplate a)] -\u003e STGroup a",
          "source": "src/Text-StringTemplate-Group.html#groupStringTemplates",
          "type": "function"
        },
        "index": {
          "description": "Given list of named of StringTemplates returns group which generates them such that they can call one another",
          "hierarchy": "Text StringTemplate",
          "module": "Text.StringTemplate",
          "name": "groupStringTemplates",
          "normalized": "[(String,StringTemplate a)]-\u003eSTGroup a",
          "package": "HStringTemplate",
          "partial": "String Templates",
          "signature": "[(String,StringTemplate a)]-\u003eSTGroup a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate.html#v:groupStringTemplates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefaults to  \u003ccode\u003e mconcatMap m k = foldr (mappend . k) mempty m \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.StringTemplate",
          "name": "mconcatMap",
          "package": "HStringTemplate",
          "signature": "[b] -\u003e (b -\u003e a) -\u003e a",
          "source": "src/Text-StringTemplate-Classes.html#mconcatMap",
          "type": "method"
        },
        "index": {
          "description": "Defaults to mconcatMap foldr mappend mempty",
          "hierarchy": "Text StringTemplate",
          "module": "Text.StringTemplate",
          "name": "mconcatMap",
          "normalized": "[a]-\u003e(a-\u003eb)-\u003eb",
          "package": "HStringTemplate",
          "partial": "Map",
          "signature": "[b]-\u003e(b-\u003ea)-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate.html#v:mconcatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerges two groups into a single group. This function is left-biased,\n prefering bindings from the first group when there is a conflict.\n\u003c/p\u003e",
          "module": "Text.StringTemplate",
          "name": "mergeSTGroups",
          "package": "HStringTemplate",
          "signature": "STGroup a -\u003e STGroup a -\u003e STGroup a",
          "source": "src/Text-StringTemplate-Group.html#mergeSTGroups",
          "type": "function"
        },
        "index": {
          "description": "Merges two groups into single group This function is left-biased prefering bindings from the first group when there is conflict",
          "hierarchy": "Text StringTemplate",
          "module": "Text.StringTemplate",
          "name": "mergeSTGroups",
          "normalized": "STGroup a-\u003eSTGroup a-\u003eSTGroup a",
          "package": "HStringTemplate",
          "partial": "STGroups",
          "signature": "STGroup a-\u003eSTGroup a-\u003eSTGroup a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate.html#v:mergeSTGroups"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefaults to  \u003ccode\u003e (mconcat .) . intersperse \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.StringTemplate",
          "name": "mintercalate",
          "package": "HStringTemplate",
          "signature": "a -\u003e [a] -\u003e a",
          "source": "src/Text-StringTemplate-Classes.html#mintercalate",
          "type": "method"
        },
        "index": {
          "description": "Defaults to mconcat intersperse",
          "hierarchy": "Text StringTemplate",
          "module": "Text.StringTemplate",
          "name": "mintercalate",
          "normalized": "a-\u003e[a]-\u003ea",
          "package": "HStringTemplate",
          "signature": "a-\u003e[a]-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate.html#v:mintercalate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefaults to  \u003ccode\u003e  mlabel x y = mconcat [x, stFromString \u003ca\u003e[\u003c/a\u003e, y, stFromString \u003ca\u003e]\u003c/a\u003e] \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.StringTemplate",
          "name": "mlabel",
          "package": "HStringTemplate",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Text-StringTemplate-Classes.html#mlabel",
          "type": "method"
        },
        "index": {
          "description": "Defaults to mlabel mconcat stFromString stFromString",
          "hierarchy": "Text StringTemplate",
          "module": "Text.StringTemplate",
          "name": "mlabel",
          "normalized": "a-\u003ea-\u003ea",
          "package": "HStringTemplate",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate.html#v:mlabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor any requested template, returns a message that the template was\n unable to be found. Useful to add as a super group for a set of templates\n under development, to aid in debugging.\n\u003c/p\u003e",
          "module": "Text.StringTemplate",
          "name": "nullGroup",
          "package": "HStringTemplate",
          "signature": "STGroup a",
          "source": "src/Text-StringTemplate-Group.html#nullGroup",
          "type": "function"
        },
        "index": {
          "description": "For any requested template returns message that the template was unable to be found Useful to add as super group for set of templates under development to aid in debugging",
          "hierarchy": "Text StringTemplate",
          "module": "Text.StringTemplate",
          "name": "nullGroup",
          "package": "HStringTemplate",
          "partial": "Group",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate.html#v:nullGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a set of global options to a group\n\u003c/p\u003e",
          "module": "Text.StringTemplate",
          "name": "optInsertGroup",
          "package": "HStringTemplate",
          "signature": "[(String, String)] -\u003e STGroup a -\u003e STGroup a",
          "source": "src/Text-StringTemplate-Group.html#optInsertGroup",
          "type": "function"
        },
        "index": {
          "description": "Adds set of global options to group",
          "hierarchy": "Text StringTemplate",
          "module": "Text.StringTemplate",
          "name": "optInsertGroup",
          "normalized": "[(String,String)]-\u003eSTGroup a-\u003eSTGroup a",
          "package": "HStringTemplate",
          "partial": "Insert Group",
          "signature": "[(String,String)]-\u003eSTGroup a-\u003eSTGroup a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate.html#v:optInsertGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate",
          "name": "renderf",
          "package": "HStringTemplate",
          "signature": "StringTemplate b -\u003e a",
          "source": "src/Text-StringTemplate-Renderf.html#renderf",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text StringTemplate",
          "module": "Text.StringTemplate",
          "name": "renderf",
          "normalized": "StringTemplate a-\u003eb",
          "package": "HStringTemplate",
          "signature": "StringTemplate b-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate.html#v:renderf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets an encoding function of a group that all values are\n rendered with in each enclosed template\n\u003c/p\u003e",
          "module": "Text.StringTemplate",
          "name": "setEncoderGroup",
          "package": "HStringTemplate",
          "signature": "(a -\u003e a) -\u003e STGroup a -\u003e STGroup a",
          "source": "src/Text-StringTemplate-Group.html#setEncoderGroup",
          "type": "function"
        },
        "index": {
          "description": "Sets an encoding function of group that all values are rendered with in each enclosed template",
          "hierarchy": "Text StringTemplate",
          "module": "Text.StringTemplate",
          "name": "setEncoderGroup",
          "normalized": "(a-\u003ea)-\u003eSTGroup a-\u003eSTGroup a",
          "package": "HStringTemplate",
          "partial": "Encoder Group",
          "signature": "(a-\u003ea)-\u003eSTGroup a-\u003eSTGroup a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate.html#v:setEncoderGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate",
          "name": "stFromByteString",
          "package": "HStringTemplate",
          "signature": "ByteString -\u003e a",
          "source": "src/Text-StringTemplate-Classes.html#stFromByteString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text StringTemplate",
          "module": "Text.StringTemplate",
          "name": "stFromByteString",
          "normalized": "ByteString-\u003ea",
          "package": "HStringTemplate",
          "partial": "From Byte String",
          "signature": "ByteString-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate.html#v:stFromByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate",
          "name": "stFromString",
          "package": "HStringTemplate",
          "signature": "String -\u003e a",
          "source": "src/Text-StringTemplate-Classes.html#stFromString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text StringTemplate",
          "module": "Text.StringTemplate",
          "name": "stFromString",
          "normalized": "String-\u003ea",
          "package": "HStringTemplate",
          "partial": "From String",
          "signature": "String-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate.html#v:stFromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate",
          "name": "stFromText",
          "package": "HStringTemplate",
          "signature": "Text -\u003e a",
          "source": "src/Text-StringTemplate-Classes.html#stFromText",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text StringTemplate",
          "module": "Text.StringTemplate",
          "name": "stFromText",
          "normalized": "Text-\u003ea",
          "package": "HStringTemplate",
          "partial": "From Text",
          "signature": "Text-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate.html#v:stFromText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate",
          "name": "stToString",
          "package": "HStringTemplate",
          "signature": "a -\u003e String",
          "source": "src/Text-StringTemplate-Classes.html#stToString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text StringTemplate",
          "module": "Text.StringTemplate",
          "name": "stToString",
          "normalized": "a-\u003eString",
          "package": "HStringTemplate",
          "partial": "To String",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate.html#v:stToString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefaults to  \u003ccode\u003e  _ a -\u003e stringTemplateShow a \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.StringTemplate",
          "name": "stringTemplateFormattedShow",
          "package": "HStringTemplate",
          "signature": "String -\u003e a -\u003e String",
          "source": "src/Text-StringTemplate-Classes.html#stringTemplateFormattedShow",
          "type": "method"
        },
        "index": {
          "description": "Defaults to stringTemplateShow",
          "hierarchy": "Text StringTemplate",
          "module": "Text.StringTemplate",
          "name": "stringTemplateFormattedShow",
          "normalized": "String-\u003ea-\u003eString",
          "package": "HStringTemplate",
          "partial": "Template Formatted Show",
          "signature": "String-\u003ea-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate.html#v:stringTemplateFormattedShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefaults to \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.StringTemplate",
          "name": "stringTemplateShow",
          "package": "HStringTemplate",
          "signature": "a -\u003e String",
          "source": "src/Text-StringTemplate-Classes.html#stringTemplateShow",
          "type": "method"
        },
        "index": {
          "description": "Defaults to show",
          "hierarchy": "Text StringTemplate",
          "module": "Text.StringTemplate",
          "name": "stringTemplateShow",
          "normalized": "a-\u003eString",
          "package": "HStringTemplate",
          "partial": "Template Show",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate.html#v:stringTemplateShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate",
          "name": "toSElem",
          "package": "HStringTemplate",
          "signature": "a -\u003e SElem b",
          "source": "src/Text-StringTemplate-Classes.html#toSElem",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text StringTemplate",
          "module": "Text.StringTemplate",
          "name": "toSElem",
          "normalized": "a-\u003eSElem b",
          "package": "HStringTemplate",
          "partial": "SElem",
          "signature": "a-\u003eSElem b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate.html#v:toSElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate",
          "name": "toSElemList",
          "package": "HStringTemplate",
          "signature": "[a] -\u003e SElem b",
          "source": "src/Text-StringTemplate-Classes.html#toSElemList",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text StringTemplate",
          "module": "Text.StringTemplate",
          "name": "toSElemList",
          "normalized": "[a]-\u003eSElem b",
          "package": "HStringTemplate",
          "partial": "SElem List",
          "signature": "[a]-\u003eSElem b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate.html#v:toSElemList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an integral amount of seconds and a path, returns a group generating\n all files in said directory and subdirectories with the proper \"st\" extension,\n cached for that amount of seconds. IO errors are \"swallowed\" by this so\n that exceptions don't arise in unexpected places.\n This violates referential transparency, but can be very useful in developing\n templates for any sort of server application. It should be swapped out for\n production purposes. The dumpAttribs template is added to the returned group\n by default, as it should prove useful for debugging and developing templates.\n\u003c/p\u003e",
          "module": "Text.StringTemplate",
          "name": "unsafeVolatileDirectoryGroup",
          "package": "HStringTemplate",
          "signature": "FilePath -\u003e Int -\u003e IO (STGroup a)",
          "source": "src/Text-StringTemplate-Group.html#unsafeVolatileDirectoryGroup",
          "type": "function"
        },
        "index": {
          "description": "Given an integral amount of seconds and path returns group generating all files in said directory and subdirectories with the proper st extension cached for that amount of seconds IO errors are swallowed by this so that exceptions don arise in unexpected places This violates referential transparency but can be very useful in developing templates for any sort of server application It should be swapped out for production purposes The dumpAttribs template is added to the returned group by default as it should prove useful for debugging and developing templates",
          "hierarchy": "Text StringTemplate",
          "module": "Text.StringTemplate",
          "name": "unsafeVolatileDirectoryGroup",
          "normalized": "FilePath-\u003eInt-\u003eIO(STGroup a)",
          "package": "HStringTemplate",
          "partial": "Volatile Directory Group",
          "signature": "FilePath-\u003eInt-\u003eIO(STGroup a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplate/docs/Text-StringTemplate.html#v:unsafeVolatileDirectoryGroup"
      }
    }
  ]
]