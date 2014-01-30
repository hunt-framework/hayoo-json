[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-FromJSValue.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInterface for extracting data from JSValue.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.JSON.FromJSValue",
        "fct-package": "fields-json",
        "fct-signature": "module",
        "fct-source": "src/Text-JSON-FromJSValue.html",
        "fct-type": "module",
        "title": "FromJSValue"
      },
      "index": {
        "description": "Interface for extracting data from JSValue",
        "hierarchy": "Text JSON FromJSValue",
        "module": "Text.JSON.FromJSValue",
        "name": "FromJSValue",
        "normalized": "",
        "package": "fields-json",
        "partial": "From JSValue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-FromJSValue.html#t:FromJSValue",
      "description": {
        "fct-descr": "\u003cp\u003eStructures that can be \u003ccode\u003eparsed\u003c/code\u003e from JSON. Instances must declare either \u003ccode\u003e\u003ca\u003efromJSValue\u003c/a\u003e\u003c/code\u003e (parse directly from \u003ccode\u003e\u003ca\u003eJSValue\u003c/a\u003e\u003c/code\u003e) or \u003ccode\u003e\u003ca\u003efromJSValueM\u003c/a\u003e\u003c/code\u003e (uses \u003ccode\u003eMonadReader\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Text.JSON.FromJSValue",
        "fct-package": "fields-json",
        "fct-signature": "class",
        "fct-source": "src/Text-JSON-FromJSValue.html#FromJSValue",
        "fct-type": "class",
        "title": "FromJSValue"
      },
      "index": {
        "description": "Structures that can be parsed from JSON Instances must declare either fromJSValue parse directly from JSValue or fromJSValueM uses MonadReader",
        "hierarchy": "Text JSON FromJSValue",
        "module": "Text.JSON.FromJSValue",
        "name": "FromJSValue",
        "normalized": "",
        "package": "fields-json",
        "partial": "From JSValue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-FromJSValue.html#t:FromJSValueWithUpdate",
      "description": {
        "fct-descr": "\u003cp\u003eStructures that can be \u003ccode\u003eparsed\u003c/code\u003e from JSON if some structure for update is provided\n\u003c/p\u003e",
        "fct-module": "Text.JSON.FromJSValue",
        "fct-package": "fields-json",
        "fct-signature": "class",
        "fct-source": "src/Text-JSON-FromJSValue.html#FromJSValueWithUpdate",
        "fct-type": "class",
        "title": "FromJSValueWithUpdate"
      },
      "index": {
        "description": "Structures that can be parsed from JSON if some structure for update is provided",
        "hierarchy": "Text JSON FromJSValue",
        "module": "Text.JSON.FromJSValue",
        "name": "FromJSValueWithUpdate",
        "normalized": "",
        "package": "fields-json",
        "partial": "From JSValue With Update",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-FromJSValue.html#t:MatchWithJSValue",
      "description": {
        "fct-descr": "\u003cp\u003eStructures that can be matched with JSValue\n\u003c/p\u003e",
        "fct-module": "Text.JSON.FromJSValue",
        "fct-package": "fields-json",
        "fct-signature": "class",
        "fct-source": "src/Text-JSON-FromJSValue.html#MatchWithJSValue",
        "fct-type": "class",
        "title": "MatchWithJSValue"
      },
      "index": {
        "description": "Structures that can be matched with JSValue",
        "hierarchy": "Text JSON FromJSValue",
        "module": "Text.JSON.FromJSValue",
        "name": "MatchWithJSValue",
        "normalized": "",
        "package": "fields-json",
        "partial": "Match With JSValue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-FromJSValue.html#v:fromJSValue",
      "description": {
        "fct-module": "Text.JSON.FromJSValue",
        "fct-package": "fields-json",
        "fct-signature": "JSValue -\u003e Maybe a",
        "fct-source": "src/Text-JSON-FromJSValue.html#fromJSValue",
        "fct-type": "method",
        "title": "fromJSValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON FromJSValue",
        "module": "Text.JSON.FromJSValue",
        "name": "fromJSValue",
        "normalized": "JSValue-\u003eMaybe a",
        "package": "fields-json",
        "partial": "JSValue",
        "signature": "JSValue-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-FromJSValue.html#v:fromJSValueCustomList",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralization of \u003ccode\u003e\u003ca\u003efromJSValueCustomMany\u003c/a\u003e\u003c/code\u003e, where each element of array can have different parser.\n\u003c/p\u003e",
        "fct-module": "Text.JSON.FromJSValue",
        "fct-package": "fields-json",
        "fct-signature": "[m (Maybe a)] -\u003e m (Maybe [a])",
        "fct-source": "src/Text-JSON-FromJSValue.html#fromJSValueCustomList",
        "fct-type": "function",
        "title": "fromJSValueCustomList"
      },
      "index": {
        "description": "Generalization of fromJSValueCustomMany where each element of array can have different parser",
        "hierarchy": "Text JSON FromJSValue",
        "module": "Text.JSON.FromJSValue",
        "name": "fromJSValueCustomList",
        "normalized": "[a(Maybe b)]-\u003ea(Maybe[b])",
        "package": "fields-json",
        "partial": "JSValue Custom List",
        "signature": "[m(Maybe a)]-\u003em(Maybe[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-FromJSValue.html#v:fromJSValueCustomMany",
      "description": {
        "fct-descr": "\u003cp\u003eRuns parser on each element of underlaying json. Returns Just iff JSON is array.\n\u003c/p\u003e",
        "fct-module": "Text.JSON.FromJSValue",
        "fct-package": "fields-json",
        "fct-signature": "m (Maybe a) -\u003e m (Maybe [a])",
        "fct-source": "src/Text-JSON-FromJSValue.html#fromJSValueCustomMany",
        "fct-type": "function",
        "title": "fromJSValueCustomMany"
      },
      "index": {
        "description": "Runs parser on each element of underlaying json Returns Just iff JSON is array",
        "hierarchy": "Text JSON FromJSValue",
        "module": "Text.JSON.FromJSValue",
        "name": "fromJSValueCustomMany",
        "normalized": "a(Maybe b)-\u003ea(Maybe[b])",
        "package": "fields-json",
        "partial": "JSValue Custom Many",
        "signature": "m(Maybe a)-\u003em(Maybe[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-FromJSValue.html#v:fromJSValueField",
      "description": {
        "fct-descr": "\u003cp\u003eReading the value that is on some field. With fail if current JSON is not object.\n | It can be ussed with 'Maybe a'. In such case Nothing will be returned iif field was not set.\n\u003c/p\u003e",
        "fct-module": "Text.JSON.FromJSValue",
        "fct-package": "fields-json",
        "fct-signature": "String -\u003e m (Maybe a)",
        "fct-source": "src/Text-JSON-FromJSValue.html#fromJSValueField",
        "fct-type": "function",
        "title": "fromJSValueField"
      },
      "index": {
        "description": "Reading the value that is on some field With fail if current JSON is not object It can be ussed with Maybe In such case Nothing will be returned iif field was not set",
        "hierarchy": "Text JSON FromJSValue",
        "module": "Text.JSON.FromJSValue",
        "name": "fromJSValueField",
        "normalized": "String-\u003ea(Maybe b)",
        "package": "fields-json",
        "partial": "JSValue Field",
        "signature": "String-\u003em(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-FromJSValue.html#v:fromJSValueFieldBase64",
      "description": {
        "fct-descr": "\u003cp\u003eVersion of \u003ccode\u003e\u003ca\u003efromJSValueField\u003c/a\u003e\u003c/code\u003e for Base64 encoded data to  avoid memory leak.\n\u003c/p\u003e",
        "fct-module": "Text.JSON.FromJSValue",
        "fct-package": "fields-json",
        "fct-signature": "String -\u003e m (Maybe ByteString)",
        "fct-source": "src/Text-JSON-FromJSValue.html#fromJSValueFieldBase64",
        "fct-type": "function",
        "title": "fromJSValueFieldBase64"
      },
      "index": {
        "description": "Version of fromJSValueField for Base64 encoded data to avoid memory leak",
        "hierarchy": "Text JSON FromJSValue",
        "module": "Text.JSON.FromJSValue",
        "name": "fromJSValueFieldBase64",
        "normalized": "String-\u003ea(Maybe ByteString)",
        "package": "fields-json",
        "partial": "JSValue Field Base",
        "signature": "String-\u003em(Maybe ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-FromJSValue.html#v:fromJSValueFieldCustom",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralization of \u003ccode\u003e\u003ca\u003efromJSValueField\u003c/a\u003e\u003c/code\u003e. Does not use \u003ccode\u003e\u003ca\u003eFromJSValue\u003c/a\u003e\u003c/code\u003e instances\n\u003c/p\u003e",
        "fct-module": "Text.JSON.FromJSValue",
        "fct-package": "fields-json",
        "fct-signature": "String -\u003e m (Maybe a) -\u003e m (Maybe a)",
        "fct-source": "src/Text-JSON-FromJSValue.html#fromJSValueFieldCustom",
        "fct-type": "function",
        "title": "fromJSValueFieldCustom"
      },
      "index": {
        "description": "Generalization of fromJSValueField Does not use FromJSValue instances",
        "hierarchy": "Text JSON FromJSValue",
        "module": "Text.JSON.FromJSValue",
        "name": "fromJSValueFieldCustom",
        "normalized": "String-\u003ea(Maybe b)-\u003ea(Maybe b)",
        "package": "fields-json",
        "partial": "JSValue Field Custom",
        "signature": "String-\u003em(Maybe a)-\u003em(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-FromJSValue.html#v:fromJSValueM",
      "description": {
        "fct-module": "Text.JSON.FromJSValue",
        "fct-package": "fields-json",
        "fct-signature": "m (Maybe a)",
        "fct-source": "src/Text-JSON-FromJSValue.html#fromJSValueM",
        "fct-type": "method",
        "title": "fromJSValueM"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON FromJSValue",
        "module": "Text.JSON.FromJSValue",
        "name": "fromJSValueM",
        "normalized": "",
        "package": "fields-json",
        "partial": "JSValue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-FromJSValue.html#v:fromJSValueManyWithUpdate",
      "description": {
        "fct-descr": "\u003cp\u003eRuns parser on each element of underlaying json. Returns Just iff JSON is array.\n\u003c/p\u003e",
        "fct-module": "Text.JSON.FromJSValue",
        "fct-package": "fields-json",
        "fct-signature": "[a] -\u003e m (Maybe [a])",
        "fct-source": "src/Text-JSON-FromJSValue.html#fromJSValueManyWithUpdate",
        "fct-type": "function",
        "title": "fromJSValueManyWithUpdate"
      },
      "index": {
        "description": "Runs parser on each element of underlaying json Returns Just iff JSON is array",
        "hierarchy": "Text JSON FromJSValue",
        "module": "Text.JSON.FromJSValue",
        "name": "fromJSValueManyWithUpdate",
        "normalized": "[a]-\u003eb(Maybe[a])",
        "package": "fields-json",
        "partial": "JSValue Many With Update",
        "signature": "[a]-\u003em(Maybe[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-FromJSValue.html#v:fromJSValueWithUpdate",
      "description": {
        "fct-module": "Text.JSON.FromJSValue",
        "fct-package": "fields-json",
        "fct-signature": "Maybe a -\u003e JSValue -\u003e Maybe a",
        "fct-source": "src/Text-JSON-FromJSValue.html#fromJSValueWithUpdate",
        "fct-type": "method",
        "title": "fromJSValueWithUpdate"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON FromJSValue",
        "module": "Text.JSON.FromJSValue",
        "name": "fromJSValueWithUpdate",
        "normalized": "Maybe a-\u003eJSValue-\u003eMaybe a",
        "package": "fields-json",
        "partial": "JSValue With Update",
        "signature": "Maybe a-\u003eJSValue-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-FromJSValue.html#v:fromJSValueWithUpdateM",
      "description": {
        "fct-module": "Text.JSON.FromJSValue",
        "fct-package": "fields-json",
        "fct-signature": "Maybe a -\u003e m (Maybe a)",
        "fct-source": "src/Text-JSON-FromJSValue.html#fromJSValueWithUpdateM",
        "fct-type": "method",
        "title": "fromJSValueWithUpdateM"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON FromJSValue",
        "module": "Text.JSON.FromJSValue",
        "name": "fromJSValueWithUpdateM",
        "normalized": "Maybe a-\u003eb(Maybe a)",
        "package": "fields-json",
        "partial": "JSValue With Update",
        "signature": "Maybe a-\u003em(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-FromJSValue.html#v:jsValueField",
      "description": {
        "fct-descr": "\u003cp\u003eReading the value that is on some field. Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if\n JSON is not an object or field is present but cannot be parsed,\n 'Just Nothing' if absent, and 'Just (Just a)' otherwise\n\u003c/p\u003e",
        "fct-module": "Text.JSON.FromJSValue",
        "fct-package": "fields-json",
        "fct-signature": "String -\u003e m (Maybe (Maybe a))",
        "fct-source": "src/Text-JSON-FromJSValue.html#jsValueField",
        "fct-type": "function",
        "title": "jsValueField"
      },
      "index": {
        "description": "Reading the value that is on some field Returns Nothing if JSON is not an object or field is present but cannot be parsed Just Nothing if absent and Just Just otherwise",
        "hierarchy": "Text JSON FromJSValue",
        "module": "Text.JSON.FromJSValue",
        "name": "jsValueField",
        "normalized": "String-\u003ea(Maybe(Maybe b))",
        "package": "fields-json",
        "partial": "Value Field",
        "signature": "String-\u003em(Maybe(Maybe a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-FromJSValue.html#v:matchesWithJSValue",
      "description": {
        "fct-module": "Text.JSON.FromJSValue",
        "fct-package": "fields-json",
        "fct-signature": "a -\u003e JSValue -\u003e Bool",
        "fct-source": "src/Text-JSON-FromJSValue.html#matchesWithJSValue",
        "fct-type": "method",
        "title": "matchesWithJSValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON FromJSValue",
        "module": "Text.JSON.FromJSValue",
        "name": "matchesWithJSValue",
        "normalized": "a-\u003eJSValue-\u003eBool",
        "package": "fields-json",
        "partial": "With JSValue",
        "signature": "a-\u003eJSValue-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-FromJSValue.html#v:matchesWithJSValueM",
      "description": {
        "fct-module": "Text.JSON.FromJSValue",
        "fct-package": "fields-json",
        "fct-signature": "a -\u003e m Bool",
        "fct-source": "src/Text-JSON-FromJSValue.html#matchesWithJSValueM",
        "fct-type": "method",
        "title": "matchesWithJSValueM"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON FromJSValue",
        "module": "Text.JSON.FromJSValue",
        "name": "matchesWithJSValueM",
        "normalized": "a-\u003eb Bool",
        "package": "fields-json",
        "partial": "With JSValue",
        "signature": "a-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-FromJSValue.html#v:withJSValue",
      "description": {
        "fct-descr": "\u003cp\u003eSimple runner\n\u003c/p\u003e",
        "fct-module": "Text.JSON.FromJSValue",
        "fct-package": "fields-json",
        "fct-signature": "JSValue -\u003e ReaderT JSValue m a -\u003e m a",
        "fct-source": "src/Text-JSON-FromJSValue.html#withJSValue",
        "fct-type": "function",
        "title": "withJSValue"
      },
      "index": {
        "description": "Simple runner",
        "hierarchy": "Text JSON FromJSValue",
        "module": "Text.JSON.FromJSValue",
        "name": "withJSValue",
        "normalized": "JSValue-\u003eReaderT JSValue a b-\u003ea b",
        "package": "fields-json",
        "partial": "JSValue",
        "signature": "JSValue-\u003eReaderT JSValue m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-Gen.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAbusing monadic 'do' notation library for generating JSON object. \n Hard-binded to json package from hackage.\n Main ideas\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Overloaded function \u003ccode\u003e\u003ca\u003evalue\u003c/a\u003e\u003c/code\u003e to set values in underlying JSON - \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, lists  etc.\n\u003c/li\u003e\u003cli\u003e JSON generation may not be pure  with \u003ccode\u003e\u003ca\u003evalueM\u003c/a\u003e\u003c/code\u003e. You can perform some IO while generating JSON. This is usefull skip useless inner binding.\n\u003c/li\u003e\u003cli\u003e Compositionality - use \u003ccode\u003e\u003ca\u003eobject\u003c/a\u003e\u003c/code\u003e to easy create JSON objects\n\u003c/li\u003e\u003cli\u003e Monadic notation - it really looks nicer then composition with \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e or some magic combinator\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e\n runJSONGen $ do\n     value \"a\" \"a\"\n     value \"b\" [1,2,3]\n     object \"c\" $ do\n         value \"x\" True\n         value \"y\" False\n\n\u003c/pre\u003e\u003cp\u003eWill generate json object \n  {a : \u003ca\u003ea\u003c/a\u003e, b: [1,2,3], c: {x: true, y : false}} \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.JSON.Gen",
        "fct-package": "fields-json",
        "fct-signature": "module",
        "fct-source": "src/Text-JSON-Gen.html",
        "fct-type": "module",
        "title": "Gen"
      },
      "index": {
        "description": "Abusing monadic do notation library for generating JSON object Hard-binded to json package from hackage Main ideas Overloaded function value to set values in underlying JSON Bool Int String lists etc JSON generation may not be pure with valueM You can perform some IO while generating JSON This is usefull skip useless inner binding Compositionality use object to easy create JSON objects Monadic notation it really looks nicer then composition with or some magic combinator runJSONGen do value value object do value True value False Will generate json object true false",
        "hierarchy": "Text JSON Gen",
        "module": "Text.JSON.Gen",
        "name": "Gen",
        "normalized": "",
        "package": "fields-json",
        "partial": "Gen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-Gen.html#t:JSONGen",
      "description": {
        "fct-descr": "\u003cp\u003eBasic types\n\u003c/p\u003e",
        "fct-module": "Text.JSON.Gen",
        "fct-package": "fields-json",
        "fct-signature": "type",
        "fct-source": "src/Text-JSON-Gen.html#JSONGen",
        "fct-type": "type",
        "title": "JSONGen"
      },
      "index": {
        "description": "Basic types",
        "hierarchy": "Text JSON Gen",
        "module": "Text.JSON.Gen",
        "name": "JSONGen",
        "normalized": "",
        "package": "fields-json",
        "partial": "JSONGen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-Gen.html#t:JSONGenT",
      "description": {
        "fct-module": "Text.JSON.Gen",
        "fct-package": "fields-json",
        "fct-signature": "data",
        "fct-source": "src/Text-JSON-Gen.html#JSONGenT",
        "fct-type": "data",
        "title": "JSONGenT"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON Gen",
        "module": "Text.JSON.Gen",
        "name": "JSONGenT",
        "normalized": "",
        "package": "fields-json",
        "partial": "JSONGen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-Gen.html#v:object",
      "description": {
        "fct-descr": "\u003cp\u003eEmbed other JSON object as field in resulting JSON object.\n\u003c/p\u003e",
        "fct-module": "Text.JSON.Gen",
        "fct-package": "fields-json",
        "fct-signature": "String -\u003e JSONGenT m () -\u003e JSONGenT m ()",
        "fct-source": "src/Text-JSON-Gen.html#object",
        "fct-type": "function",
        "title": "object"
      },
      "index": {
        "description": "Embed other JSON object as field in resulting JSON object",
        "hierarchy": "Text JSON Gen",
        "module": "Text.JSON.Gen",
        "name": "object",
        "normalized": "String-\u003eJSONGenT a()-\u003eJSONGenT a()",
        "package": "fields-json",
        "partial": "",
        "signature": "String-\u003eJSONGenT m()-\u003eJSONGenT m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-Gen.html#v:objects",
      "description": {
        "fct-descr": "\u003cp\u003eVersion for lists of objects.  \n\u003c/p\u003e",
        "fct-module": "Text.JSON.Gen",
        "fct-package": "fields-json",
        "fct-signature": "String -\u003e [JSONGenT m ()] -\u003e JSONGenT m ()",
        "fct-source": "src/Text-JSON-Gen.html#objects",
        "fct-type": "function",
        "title": "objects"
      },
      "index": {
        "description": "Version for lists of objects",
        "hierarchy": "Text JSON Gen",
        "module": "Text.JSON.Gen",
        "name": "objects",
        "normalized": "String-\u003e[JSONGenT a()]-\u003eJSONGenT a()",
        "package": "fields-json",
        "partial": "",
        "signature": "String-\u003e[JSONGenT m()]-\u003eJSONGenT m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-Gen.html#v:runJSONGen",
      "description": {
        "fct-descr": "\u003cp\u003eSimple runner\n\u003c/p\u003e",
        "fct-module": "Text.JSON.Gen",
        "fct-package": "fields-json",
        "fct-signature": "JSONGen () -\u003e JSValue",
        "fct-source": "src/Text-JSON-Gen.html#runJSONGen",
        "fct-type": "function",
        "title": "runJSONGen"
      },
      "index": {
        "description": "Simple runner",
        "hierarchy": "Text JSON Gen",
        "module": "Text.JSON.Gen",
        "name": "runJSONGen",
        "normalized": "JSONGen()-\u003eJSValue",
        "package": "fields-json",
        "partial": "JSONGen",
        "signature": "JSONGen()-\u003eJSValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-Gen.html#v:runJSONGenT",
      "description": {
        "fct-module": "Text.JSON.Gen",
        "fct-package": "fields-json",
        "fct-signature": "JSONGenT m () -\u003e m JSValue",
        "fct-source": "src/Text-JSON-Gen.html#runJSONGenT",
        "fct-type": "function",
        "title": "runJSONGenT"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON Gen",
        "module": "Text.JSON.Gen",
        "name": "runJSONGenT",
        "normalized": "JSONGenT a()-\u003ea JSValue",
        "package": "fields-json",
        "partial": "JSONGen",
        "signature": "JSONGenT m()-\u003em JSValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-Gen.html#v:value",
      "description": {
        "fct-descr": "\u003cp\u003eSet pure value under given name in final JSON object\n\u003c/p\u003e",
        "fct-module": "Text.JSON.Gen",
        "fct-package": "fields-json",
        "fct-signature": "String -\u003e a -\u003e JSONGenT m ()",
        "fct-source": "src/Text-JSON-Gen.html#value",
        "fct-type": "function",
        "title": "value"
      },
      "index": {
        "description": "Set pure value under given name in final JSON object",
        "hierarchy": "Text JSON Gen",
        "module": "Text.JSON.Gen",
        "name": "value",
        "normalized": "String-\u003ea-\u003eJSONGenT b()",
        "package": "fields-json",
        "partial": "",
        "signature": "String-\u003ea-\u003eJSONGenT m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-Gen.html#v:valueM",
      "description": {
        "fct-descr": "\u003cp\u003eMonadic verion of \u003ccode\u003e\u003ca\u003evalue\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.JSON.Gen",
        "fct-package": "fields-json",
        "fct-signature": "String -\u003e m a -\u003e JSONGenT m ()",
        "fct-source": "src/Text-JSON-Gen.html#valueM",
        "fct-type": "function",
        "title": "valueM"
      },
      "index": {
        "description": "Monadic verion of value",
        "hierarchy": "Text JSON Gen",
        "module": "Text.JSON.Gen",
        "name": "valueM",
        "normalized": "String-\u003ea b-\u003eJSONGenT a()",
        "package": "fields-json",
        "partial": "",
        "signature": "String-\u003em a-\u003eJSONGenT m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-JSValueContainer.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eData structures that hold JSValue inside.\n Value can be extracted or replaced, but is always inside.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.JSON.JSValueContainer",
        "fct-package": "fields-json",
        "fct-signature": "module",
        "fct-source": "src/Text-JSON-JSValueContainer.html",
        "fct-type": "module",
        "title": "JSValueContainer"
      },
      "index": {
        "description": "Data structures that hold JSValue inside Value can be extracted or replaced but is always inside",
        "hierarchy": "Text JSON JSValueContainer",
        "module": "Text.JSON.JSValueContainer",
        "name": "JSValueContainer",
        "normalized": "",
        "package": "fields-json",
        "partial": "JSValue Container",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-JSValueContainer.html#t:JSValueContainer",
      "description": {
        "fct-module": "Text.JSON.JSValueContainer",
        "fct-package": "fields-json",
        "fct-signature": "class",
        "fct-source": "src/Text-JSON-JSValueContainer.html#JSValueContainer",
        "fct-type": "class",
        "title": "JSValueContainer"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON JSValueContainer",
        "module": "Text.JSON.JSValueContainer",
        "name": "JSValueContainer",
        "normalized": "",
        "package": "fields-json",
        "partial": "JSValue Container",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-JSValueContainer.html#v:getJSValue",
      "description": {
        "fct-module": "Text.JSON.JSValueContainer",
        "fct-package": "fields-json",
        "fct-signature": "a -\u003e JSValue",
        "fct-source": "src/Text-JSON-JSValueContainer.html#getJSValue",
        "fct-type": "method",
        "title": "getJSValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON JSValueContainer",
        "module": "Text.JSON.JSValueContainer",
        "name": "getJSValue",
        "normalized": "a-\u003eJSValue",
        "package": "fields-json",
        "partial": "JSValue",
        "signature": "a-\u003eJSValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-JSValueContainer.html#v:setJSValue",
      "description": {
        "fct-module": "Text.JSON.JSValueContainer",
        "fct-package": "fields-json",
        "fct-signature": "JSValue -\u003e a -\u003e a",
        "fct-source": "src/Text-JSON-JSValueContainer.html#setJSValue",
        "fct-type": "method",
        "title": "setJSValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON JSValueContainer",
        "module": "Text.JSON.JSValueContainer",
        "name": "setJSValue",
        "normalized": "JSValue-\u003ea-\u003ea",
        "package": "fields-json",
        "partial": "JSValue",
        "signature": "JSValue-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-ToJSValue.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUnifing some structures so they can be serialized to JSValue\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.JSON.ToJSValue",
        "fct-package": "fields-json",
        "fct-signature": "module",
        "fct-source": "src/Text-JSON-ToJSValue.html",
        "fct-type": "module",
        "title": "ToJSValue"
      },
      "index": {
        "description": "Unifing some structures so they can be serialized to JSValue",
        "hierarchy": "Text JSON ToJSValue",
        "module": "Text.JSON.ToJSValue",
        "name": "ToJSValue",
        "normalized": "",
        "package": "fields-json",
        "partial": "To JSValue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-ToJSValue.html#t:ToJSValue",
      "description": {
        "fct-module": "Text.JSON.ToJSValue",
        "fct-package": "fields-json",
        "fct-signature": "class",
        "fct-source": "src/Text-JSON-ToJSValue.html#ToJSValue",
        "fct-type": "class",
        "title": "ToJSValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON ToJSValue",
        "module": "Text.JSON.ToJSValue",
        "name": "ToJSValue",
        "normalized": "",
        "package": "fields-json",
        "partial": "To JSValue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-ToJSValue.html#v:toJSValue",
      "description": {
        "fct-module": "Text.JSON.ToJSValue",
        "fct-package": "fields-json",
        "fct-signature": "a -\u003e JSValue",
        "fct-source": "src/Text-JSON-ToJSValue.html#toJSValue",
        "fct-type": "method",
        "title": "toJSValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON ToJSValue",
        "module": "Text.JSON.ToJSValue",
        "name": "toJSValue",
        "normalized": "a-\u003eJSValue",
        "package": "fields-json",
        "partial": "JSValue",
        "signature": "a-\u003eJSValue"
      }
    }
  }
]