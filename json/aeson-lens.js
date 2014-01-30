[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson-lens/docs/Data-Aeson-Lens.html#",
      "description": {
        "fct-module": "Data.Aeson.Lens",
        "fct-package": "aeson-lens",
        "fct-signature": "module",
        "fct-source": "src/Data-Aeson-Lens.html",
        "fct-type": "module",
        "title": "Lens"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Aeson Lens",
        "module": "Data.Aeson.Lens",
        "name": "Lens",
        "normalized": "",
        "package": "aeson-lens",
        "partial": "Lens",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson-lens/docs/Data-Aeson-Lens.html#t:ValueIx",
      "description": {
        "fct-module": "Data.Aeson.Lens",
        "fct-package": "aeson-lens",
        "fct-signature": "data",
        "fct-source": "src/Data-Aeson-Lens.html#ValueIx",
        "fct-type": "data",
        "title": "ValueIx"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Aeson Lens",
        "module": "Data.Aeson.Lens",
        "name": "ValueIx",
        "normalized": "",
        "package": "aeson-lens",
        "partial": "Value Ix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson-lens/docs/Data-Aeson-Lens.html#v:ArrIx",
      "description": {
        "fct-module": "Data.Aeson.Lens",
        "fct-package": "aeson-lens",
        "fct-signature": "ArrIx Int",
        "fct-source": "src/Data-Aeson-Lens.html#ValueIx",
        "fct-type": "function",
        "title": "ArrIx"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Aeson Lens",
        "module": "Data.Aeson.Lens",
        "name": "ArrIx",
        "normalized": "",
        "package": "aeson-lens",
        "partial": "Arr Ix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson-lens/docs/Data-Aeson-Lens.html#v:ObjIx",
      "description": {
        "fct-module": "Data.Aeson.Lens",
        "fct-package": "aeson-lens",
        "fct-signature": "ObjIx Text",
        "fct-source": "src/Data-Aeson-Lens.html#ValueIx",
        "fct-type": "function",
        "title": "ObjIx"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Aeson Lens",
        "module": "Data.Aeson.Lens",
        "name": "ObjIx",
        "normalized": "",
        "package": "aeson-lens",
        "partial": "Obj Ix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson-lens/docs/Data-Aeson-Lens.html#v:asBool",
      "description": {
        "fct-descr": "\u003cp\u003eLens of Bool\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet v = decode (L.pack \"{\\\"foo\\\": {\\\"baz\\\": false}, \\\"bar\\\": [123, false, null]}\") :: Maybe Value\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ev ^. key (T.pack \"foo\") . key (T.pack \"baz\") . asBool\n\u003c/code\u003e\u003c/strong\u003eJust False\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ev ^. key (T.pack \"bar\") . asBool\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ev ^. key (T.pack \"hoge\") . asBool\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e",
        "fct-module": "Data.Aeson.Lens",
        "fct-package": "aeson-lens",
        "fct-signature": "Lens' (Maybe Value) (Maybe Bool)",
        "fct-source": "src/Data-Aeson-Lens.html#asBool",
        "fct-type": "function",
        "title": "asBool"
      },
      "index": {
        "description": "Lens of Bool let decode L.pack foo baz false bar false null Maybe Value key T.pack foo key T.pack baz asBool Just False key T.pack bar asBool Nothing key T.pack hoge asBool Nothing",
        "hierarchy": "Data Aeson Lens",
        "module": "Data.Aeson.Lens",
        "name": "asBool",
        "normalized": "",
        "package": "aeson-lens",
        "partial": "Bool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson-lens/docs/Data-Aeson-Lens.html#v:asDouble",
      "description": {
        "fct-descr": "\u003cp\u003eLens of Double\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet v = decode (L.pack \"{\\\"foo\\\": {\\\"baz\\\": 3.14}, \\\"bar\\\": [123, false, null]}\") :: Maybe Value\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ev ^. key (T.pack \"foo\") . key (T.pack \"baz\") . asDouble\n\u003c/code\u003e\u003c/strong\u003eJust 3.14\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ev ^. key (T.pack \"bar\") . asDouble\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ev ^. key (T.pack \"hoge\") . asDouble\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e",
        "fct-module": "Data.Aeson.Lens",
        "fct-package": "aeson-lens",
        "fct-signature": "Lens' (Maybe Value) (Maybe Double)",
        "fct-source": "src/Data-Aeson-Lens.html#asDouble",
        "fct-type": "function",
        "title": "asDouble"
      },
      "index": {
        "description": "Lens of Double let decode L.pack foo baz bar false null Maybe Value key T.pack foo key T.pack baz asDouble Just key T.pack bar asDouble Nothing key T.pack hoge asDouble Nothing",
        "hierarchy": "Data Aeson Lens",
        "module": "Data.Aeson.Lens",
        "name": "asDouble",
        "normalized": "",
        "package": "aeson-lens",
        "partial": "Double",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson-lens/docs/Data-Aeson-Lens.html#v:asText",
      "description": {
        "fct-descr": "\u003cp\u003eLens of Text\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet v = decode (L.pack \"{\\\"foo\\\": {\\\"baz\\\": \\\"3.14\\\"}, \\\"bar\\\": [123, false, null]}\") :: Maybe Value\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ev ^. key (T.pack \"foo\") . key (T.pack \"baz\") . asText\n\u003c/code\u003e\u003c/strong\u003eJust \"3.14\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ev ^. key (T.pack \"bar\") . asText\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ev ^. key (T.pack \"hoge\") . asText\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e",
        "fct-module": "Data.Aeson.Lens",
        "fct-package": "aeson-lens",
        "fct-signature": "Lens' (Maybe Value) (Maybe Text)",
        "fct-source": "src/Data-Aeson-Lens.html#asText",
        "fct-type": "function",
        "title": "asText"
      },
      "index": {
        "description": "Lens of Text let decode L.pack foo baz bar false null Maybe Value key T.pack foo key T.pack baz asText Just key T.pack bar asText Nothing key T.pack hoge asText Nothing",
        "hierarchy": "Data Aeson Lens",
        "module": "Data.Aeson.Lens",
        "name": "asText",
        "normalized": "",
        "package": "aeson-lens",
        "partial": "Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson-lens/docs/Data-Aeson-Lens.html#v:key",
      "description": {
        "fct-descr": "\u003cp\u003eLens of Object\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet v = decode (L.pack \"{\\\"foo\\\": {\\\"baz\\\": 3.14}, \\\"bar\\\": [123, false, null]}\") :: Maybe Value\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ev ^. key (T.pack \"foo\") . key (T.pack \"baz\") :: Maybe Double\n\u003c/code\u003e\u003c/strong\u003eJust 3.14\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ev ^. key (T.pack \"foo\") . key (T.pack \"baz\") :: Maybe Object\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ev ^. key (T.pack \"foo\") . key (T.pack \"hoge\") :: Maybe Value\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ev ^. key (T.pack \"hoge\") :: Maybe Value\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet w = Nothing & key (T.pack \"a\") .~ Just 2.23\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eL.unpack $ encode w\n\u003c/code\u003e\u003c/strong\u003e\"{\\\"a\\\":2.23}\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet x = w & key (T.pack \"b\") . key (T.pack \"c\") .~ Just True\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eL.unpack $ encode x\n\u003c/code\u003e\u003c/strong\u003e\"{\\\"b\\\":{\\\"c\\\":true},\\\"a\\\":2.23}\"\n\u003c/pre\u003e",
        "fct-module": "Data.Aeson.Lens",
        "fct-package": "aeson-lens",
        "fct-signature": "Text -\u003e IndexedLens' ValueIx (Maybe Value) (Maybe v)",
        "fct-source": "src/Data-Aeson-Lens.html#key",
        "fct-type": "function",
        "title": "key"
      },
      "index": {
        "description": "Lens of Object let decode L.pack foo baz bar false null Maybe Value key T.pack foo key T.pack baz Maybe Double Just key T.pack foo key T.pack baz Maybe Object Nothing key T.pack foo key T.pack hoge Maybe Value Nothing key T.pack hoge Maybe Value Nothing let Nothing key T.pack Just L.unpack encode let key T.pack key T.pack Just True L.unpack encode true",
        "hierarchy": "Data Aeson Lens",
        "module": "Data.Aeson.Lens",
        "name": "key",
        "normalized": "Text-\u003eIndexedLens' ValueIx(Maybe Value)(Maybe a)",
        "package": "aeson-lens",
        "partial": "",
        "signature": "Text-\u003eIndexedLens' ValueIx(Maybe Value)(Maybe v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson-lens/docs/Data-Aeson-Lens.html#v:key-39-",
      "description": {
        "fct-module": "Data.Aeson.Lens",
        "fct-package": "aeson-lens",
        "fct-signature": "Text -\u003e IndexedLens ValueIx (Maybe Value) (Maybe Value) (Maybe u) (Maybe v)",
        "fct-source": "src/Data-Aeson-Lens.html#key%27",
        "fct-type": "function",
        "title": "key'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Aeson Lens",
        "module": "Data.Aeson.Lens",
        "name": "key'",
        "normalized": "Text-\u003eIndexedLens ValueIx(Maybe Value)(Maybe Value)(Maybe a)(Maybe b)",
        "package": "aeson-lens",
        "partial": "",
        "signature": "Text-\u003eIndexedLens ValueIx(Maybe Value)(Maybe Value)(Maybe u)(Maybe v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson-lens/docs/Data-Aeson-Lens.html#v:nth",
      "description": {
        "fct-descr": "\u003cp\u003eLens of Array\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet v = decode (L.pack \"{\\\"foo\\\": {\\\"baz\\\": 3.14}, \\\"bar\\\": [123, false, null]}\") :: Maybe Value\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ev ^. key (T.pack \"bar\") . nth 1 :: Maybe Bool\n\u003c/code\u003e\u003c/strong\u003eJust False\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ev ^. key (T.pack \"bar\") . nth 1 :: Maybe String\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ev ^. key (T.pack \"bar\") . nth 3 :: Maybe Value\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ev ^. nth 0 :: Maybe Value\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet x = Nothing & nth 0 .~ Just 1\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eL.unpack $ encode x\n\u003c/code\u003e\u003c/strong\u003e\"[1]\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet y = x & nth 1 .~ Just \"hoge\"\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eL.unpack $ encode y\n\u003c/code\u003e\u003c/strong\u003e\"[1,\\\"hoge\\\"]\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet z = y & nth 0 .~ Just False\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eL.unpack $ encode z\n\u003c/code\u003e\u003c/strong\u003e\"[false,\\\"hoge\\\"]\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet v = decode (L.pack \"[]\") :: Maybe Value\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ev & nth 0 .~ Just \"hello\"\n\u003c/code\u003e\u003c/strong\u003eJust (Array (fromList [String \"hello\"]))\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ev & nth 1 .~ Just \"hello\"\n\u003c/code\u003e\u003c/strong\u003eJust (Array (fromList [Null,String \"hello\"]))\n\u003c/pre\u003e",
        "fct-module": "Data.Aeson.Lens",
        "fct-package": "aeson-lens",
        "fct-signature": "Int -\u003e IndexedLens' ValueIx (Maybe Value) (Maybe v)",
        "fct-source": "src/Data-Aeson-Lens.html#nth",
        "fct-type": "function",
        "title": "nth"
      },
      "index": {
        "description": "Lens of Array let decode L.pack foo baz bar false null Maybe Value key T.pack bar nth Maybe Bool Just False key T.pack bar nth Maybe String Nothing key T.pack bar nth Maybe Value Nothing nth Maybe Value Nothing let Nothing nth Just L.unpack encode let nth Just hoge L.unpack encode hoge let nth Just False L.unpack encode false hoge let decode L.pack Maybe Value nth Just hello Just Array fromList String hello nth Just hello Just Array fromList Null String hello",
        "hierarchy": "Data Aeson Lens",
        "module": "Data.Aeson.Lens",
        "name": "nth",
        "normalized": "Int-\u003eIndexedLens' ValueIx(Maybe Value)(Maybe a)",
        "package": "aeson-lens",
        "partial": "",
        "signature": "Int-\u003eIndexedLens' ValueIx(Maybe Value)(Maybe v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson-lens/docs/Data-Aeson-Lens.html#v:nth-39-",
      "description": {
        "fct-module": "Data.Aeson.Lens",
        "fct-package": "aeson-lens",
        "fct-signature": "Int -\u003e IndexedLens ValueIx (Maybe Value) (Maybe Value) (Maybe u) (Maybe v)",
        "fct-source": "src/Data-Aeson-Lens.html#nth%27",
        "fct-type": "function",
        "title": "nth'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Aeson Lens",
        "module": "Data.Aeson.Lens",
        "name": "nth'",
        "normalized": "Int-\u003eIndexedLens ValueIx(Maybe Value)(Maybe Value)(Maybe a)(Maybe b)",
        "package": "aeson-lens",
        "partial": "",
        "signature": "Int-\u003eIndexedLens ValueIx(Maybe Value)(Maybe Value)(Maybe u)(Maybe v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson-lens/docs/Data-Aeson-Lens.html#v:traverseArray",
      "description": {
        "fct-descr": "\u003cp\u003eIndexed traversal of Array\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet v = decode (L.pack \"[1, true, null]\") :: Maybe Value\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ev & catMaybes . toListOf traverseArray :: [Value]\n\u003c/code\u003e\u003c/strong\u003e[Number 1,Bool True,Null]\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet w = decode (L.pack \"[{\\\"name\\\": \\\"tanakh\\\", \\\"age\\\": 29}, {\\\"name\\\": \\\"nushio\\\", \\\"age\\\": 28}]\") :: Maybe Value\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ew & catMaybes . toListOf (traverseArray . key (T.pack \"name\")) :: [T.Text]\n\u003c/code\u003e\u003c/strong\u003e[\"tanakh\",\"nushio\"]\n\u003c/pre\u003e",
        "fct-module": "Data.Aeson.Lens",
        "fct-package": "aeson-lens",
        "fct-signature": "IndexedTraversal' Int (Maybe Value) (Maybe v)",
        "fct-source": "src/Data-Aeson-Lens.html#traverseArray",
        "fct-type": "function",
        "title": "traverseArray"
      },
      "index": {
        "description": "Indexed traversal of Array let decode L.pack true null Maybe Value catMaybes toListOf traverseArray Value Number Bool True Null let decode L.pack name tanakh age name nushio age Maybe Value catMaybes toListOf traverseArray key T.pack name T.Text tanakh nushio",
        "hierarchy": "Data Aeson Lens",
        "module": "Data.Aeson.Lens",
        "name": "traverseArray",
        "normalized": "",
        "package": "aeson-lens",
        "partial": "Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson-lens/docs/Data-Aeson-Lens.html#v:traverseArray-39-",
      "description": {
        "fct-descr": "\u003cp\u003eType-changing indexed traversal of an Array\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.Lens",
        "fct-package": "aeson-lens",
        "fct-signature": "IndexedTraversal Int (Maybe Value) (Maybe Value) (Maybe u) (Maybe v)",
        "fct-source": "src/Data-Aeson-Lens.html#traverseArray%27",
        "fct-type": "function",
        "title": "traverseArray'"
      },
      "index": {
        "description": "Type-changing indexed traversal of an Array",
        "hierarchy": "Data Aeson Lens",
        "module": "Data.Aeson.Lens",
        "name": "traverseArray'",
        "normalized": "",
        "package": "aeson-lens",
        "partial": "Array'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson-lens/docs/Data-Aeson-Lens.html#v:traverseObject",
      "description": {
        "fct-descr": "\u003cp\u003eIndexed traversal of Object\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet w = decode (L.pack \"[{\\\"name\\\": \\\"tanakh\\\", \\\"age\\\": 29}, {\\\"name\\\": \\\"nushio\\\", \\\"age\\\": 28}]\") :: Maybe Value\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ew & catMaybes . toListOf (traverseArray . traverseObject) :: [Value]\n\u003c/code\u003e\u003c/strong\u003e[String \"tanakh\",Number 29,String \"nushio\",Number 28]\n\u003c/pre\u003e",
        "fct-module": "Data.Aeson.Lens",
        "fct-package": "aeson-lens",
        "fct-signature": "IndexedTraversal' Text (Maybe Value) (Maybe v)",
        "fct-source": "src/Data-Aeson-Lens.html#traverseObject",
        "fct-type": "function",
        "title": "traverseObject"
      },
      "index": {
        "description": "Indexed traversal of Object let decode L.pack name tanakh age name nushio age Maybe Value catMaybes toListOf traverseArray traverseObject Value String tanakh Number String nushio Number",
        "hierarchy": "Data Aeson Lens",
        "module": "Data.Aeson.Lens",
        "name": "traverseObject",
        "normalized": "",
        "package": "aeson-lens",
        "partial": "Object",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson-lens/docs/Data-Aeson-Lens.html#v:traverseObject-39-",
      "description": {
        "fct-descr": "\u003cp\u003eType-changing indexed traversal of Object\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.Lens",
        "fct-package": "aeson-lens",
        "fct-signature": "IndexedTraversal Text (Maybe Value) (Maybe Value) (Maybe u) (Maybe v)",
        "fct-source": "src/Data-Aeson-Lens.html#traverseObject%27",
        "fct-type": "function",
        "title": "traverseObject'"
      },
      "index": {
        "description": "Type-changing indexed traversal of Object",
        "hierarchy": "Data Aeson Lens",
        "module": "Data.Aeson.Lens",
        "name": "traverseObject'",
        "normalized": "",
        "package": "aeson-lens",
        "partial": "Object'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson-lens/docs/Data-Aeson-Lens.html#v:valueAt",
      "description": {
        "fct-descr": "\u003cp\u003eLens of Value\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.Lens",
        "fct-package": "aeson-lens",
        "fct-signature": "ValueIx -\u003e IndexedLens ValueIx (Maybe Value) (Maybe Value) (Maybe u) (Maybe v)",
        "fct-source": "src/Data-Aeson-Lens.html#valueAt",
        "fct-type": "function",
        "title": "valueAt"
      },
      "index": {
        "description": "Lens of Value",
        "hierarchy": "Data Aeson Lens",
        "module": "Data.Aeson.Lens",
        "name": "valueAt",
        "normalized": "ValueIx-\u003eIndexedLens ValueIx(Maybe Value)(Maybe Value)(Maybe a)(Maybe b)",
        "package": "aeson-lens",
        "partial": "At",
        "signature": "ValueIx-\u003eIndexedLens ValueIx(Maybe Value)(Maybe Value)(Maybe u)(Maybe v)"
      }
    }
  }
]