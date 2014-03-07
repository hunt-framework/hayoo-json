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
        "word": "aeson-lens"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aeson.Lens",
          "name": "Lens",
          "package": "aeson-lens",
          "source": "src/Data-Aeson-Lens.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Aeson Lens",
          "module": "Data.Aeson.Lens",
          "name": "Lens",
          "package": "aeson-lens",
          "partial": "Lens",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/aeson-lens/docs/Data-Aeson-Lens.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aeson.Lens",
          "name": "ValueIx",
          "package": "aeson-lens",
          "source": "src/Data-Aeson-Lens.html#ValueIx",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Aeson Lens",
          "module": "Data.Aeson.Lens",
          "name": "ValueIx",
          "package": "aeson-lens",
          "partial": "Value Ix",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aeson-lens/docs/Data-Aeson-Lens.html#t:ValueIx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aeson.Lens",
          "name": "ArrIx",
          "package": "aeson-lens",
          "signature": "ArrIx Int",
          "source": "src/Data-Aeson-Lens.html#ValueIx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aeson Lens",
          "module": "Data.Aeson.Lens",
          "name": "ArrIx",
          "package": "aeson-lens",
          "partial": "Arr Ix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson-lens/docs/Data-Aeson-Lens.html#v:ArrIx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aeson.Lens",
          "name": "ObjIx",
          "package": "aeson-lens",
          "signature": "ObjIx Text",
          "source": "src/Data-Aeson-Lens.html#ValueIx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aeson Lens",
          "module": "Data.Aeson.Lens",
          "name": "ObjIx",
          "package": "aeson-lens",
          "partial": "Obj Ix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson-lens/docs/Data-Aeson-Lens.html#v:ObjIx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLens of Bool\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet v = decode (L.pack \"{\\\"foo\\\": {\\\"baz\\\": false}, \\\"bar\\\": [123, false, null]}\") :: Maybe Value\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ev ^. key (T.pack \"foo\") . key (T.pack \"baz\") . asBool\n\u003c/code\u003e\u003c/strong\u003eJust False\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ev ^. key (T.pack \"bar\") . asBool\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ev ^. key (T.pack \"hoge\") . asBool\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e",
          "module": "Data.Aeson.Lens",
          "name": "asBool",
          "package": "aeson-lens",
          "signature": "Lens' (Maybe Value) (Maybe Bool)",
          "source": "src/Data-Aeson-Lens.html#asBool",
          "type": "function"
        },
        "index": {
          "description": "Lens of Bool let decode L.pack foo baz false bar false null Maybe Value key T.pack foo key T.pack baz asBool Just False key T.pack bar asBool Nothing key T.pack hoge asBool Nothing",
          "hierarchy": "Data Aeson Lens",
          "module": "Data.Aeson.Lens",
          "name": "asBool",
          "package": "aeson-lens",
          "partial": "Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson-lens/docs/Data-Aeson-Lens.html#v:asBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLens of Double\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet v = decode (L.pack \"{\\\"foo\\\": {\\\"baz\\\": 3.14}, \\\"bar\\\": [123, false, null]}\") :: Maybe Value\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ev ^. key (T.pack \"foo\") . key (T.pack \"baz\") . asDouble\n\u003c/code\u003e\u003c/strong\u003eJust 3.14\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ev ^. key (T.pack \"bar\") . asDouble\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ev ^. key (T.pack \"hoge\") . asDouble\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e",
          "module": "Data.Aeson.Lens",
          "name": "asDouble",
          "package": "aeson-lens",
          "signature": "Lens' (Maybe Value) (Maybe Double)",
          "source": "src/Data-Aeson-Lens.html#asDouble",
          "type": "function"
        },
        "index": {
          "description": "Lens of Double let decode L.pack foo baz bar false null Maybe Value key T.pack foo key T.pack baz asDouble Just key T.pack bar asDouble Nothing key T.pack hoge asDouble Nothing",
          "hierarchy": "Data Aeson Lens",
          "module": "Data.Aeson.Lens",
          "name": "asDouble",
          "package": "aeson-lens",
          "partial": "Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson-lens/docs/Data-Aeson-Lens.html#v:asDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLens of Text\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet v = decode (L.pack \"{\\\"foo\\\": {\\\"baz\\\": \\\"3.14\\\"}, \\\"bar\\\": [123, false, null]}\") :: Maybe Value\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ev ^. key (T.pack \"foo\") . key (T.pack \"baz\") . asText\n\u003c/code\u003e\u003c/strong\u003eJust \"3.14\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ev ^. key (T.pack \"bar\") . asText\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ev ^. key (T.pack \"hoge\") . asText\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e",
          "module": "Data.Aeson.Lens",
          "name": "asText",
          "package": "aeson-lens",
          "signature": "Lens' (Maybe Value) (Maybe Text)",
          "source": "src/Data-Aeson-Lens.html#asText",
          "type": "function"
        },
        "index": {
          "description": "Lens of Text let decode L.pack foo baz bar false null Maybe Value key T.pack foo key T.pack baz asText Just key T.pack bar asText Nothing key T.pack hoge asText Nothing",
          "hierarchy": "Data Aeson Lens",
          "module": "Data.Aeson.Lens",
          "name": "asText",
          "package": "aeson-lens",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson-lens/docs/Data-Aeson-Lens.html#v:asText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLens of Object\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet v = decode (L.pack \"{\\\"foo\\\": {\\\"baz\\\": 3.14}, \\\"bar\\\": [123, false, null]}\") :: Maybe Value\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ev ^. key (T.pack \"foo\") . key (T.pack \"baz\") :: Maybe Double\n\u003c/code\u003e\u003c/strong\u003eJust 3.14\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ev ^. key (T.pack \"foo\") . key (T.pack \"baz\") :: Maybe Object\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ev ^. key (T.pack \"foo\") . key (T.pack \"hoge\") :: Maybe Value\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ev ^. key (T.pack \"hoge\") :: Maybe Value\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet w = Nothing & key (T.pack \"a\") .~ Just 2.23\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eL.unpack $ encode w\n\u003c/code\u003e\u003c/strong\u003e\"{\\\"a\\\":2.23}\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet x = w & key (T.pack \"b\") . key (T.pack \"c\") .~ Just True\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eL.unpack $ encode x\n\u003c/code\u003e\u003c/strong\u003e\"{\\\"b\\\":{\\\"c\\\":true},\\\"a\\\":2.23}\"\n\u003c/pre\u003e",
          "module": "Data.Aeson.Lens",
          "name": "key",
          "package": "aeson-lens",
          "signature": "Text -\u003e IndexedLens' ValueIx (Maybe Value) (Maybe v)",
          "source": "src/Data-Aeson-Lens.html#key",
          "type": "function"
        },
        "index": {
          "description": "Lens of Object let decode L.pack foo baz bar false null Maybe Value key T.pack foo key T.pack baz Maybe Double Just key T.pack foo key T.pack baz Maybe Object Nothing key T.pack foo key T.pack hoge Maybe Value Nothing key T.pack hoge Maybe Value Nothing let Nothing key T.pack Just L.unpack encode let key T.pack key T.pack Just True L.unpack encode true",
          "hierarchy": "Data Aeson Lens",
          "module": "Data.Aeson.Lens",
          "name": "key",
          "normalized": "Text-\u003eIndexedLens' ValueIx(Maybe Value)(Maybe a)",
          "package": "aeson-lens",
          "signature": "Text-\u003eIndexedLens' ValueIx(Maybe Value)(Maybe v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson-lens/docs/Data-Aeson-Lens.html#v:key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aeson.Lens",
          "name": "key'",
          "package": "aeson-lens",
          "signature": "Text -\u003e IndexedLens ValueIx (Maybe Value) (Maybe Value) (Maybe u) (Maybe v)",
          "source": "src/Data-Aeson-Lens.html#key%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aeson Lens",
          "module": "Data.Aeson.Lens",
          "name": "key'",
          "normalized": "Text-\u003eIndexedLens ValueIx(Maybe Value)(Maybe Value)(Maybe a)(Maybe b)",
          "package": "aeson-lens",
          "signature": "Text-\u003eIndexedLens ValueIx(Maybe Value)(Maybe Value)(Maybe u)(Maybe v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson-lens/docs/Data-Aeson-Lens.html#v:key-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLens of Array\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet v = decode (L.pack \"{\\\"foo\\\": {\\\"baz\\\": 3.14}, \\\"bar\\\": [123, false, null]}\") :: Maybe Value\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ev ^. key (T.pack \"bar\") . nth 1 :: Maybe Bool\n\u003c/code\u003e\u003c/strong\u003eJust False\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ev ^. key (T.pack \"bar\") . nth 1 :: Maybe String\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ev ^. key (T.pack \"bar\") . nth 3 :: Maybe Value\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ev ^. nth 0 :: Maybe Value\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet x = Nothing & nth 0 .~ Just 1\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eL.unpack $ encode x\n\u003c/code\u003e\u003c/strong\u003e\"[1]\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet y = x & nth 1 .~ Just \"hoge\"\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eL.unpack $ encode y\n\u003c/code\u003e\u003c/strong\u003e\"[1,\\\"hoge\\\"]\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet z = y & nth 0 .~ Just False\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eL.unpack $ encode z\n\u003c/code\u003e\u003c/strong\u003e\"[false,\\\"hoge\\\"]\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet v = decode (L.pack \"[]\") :: Maybe Value\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ev & nth 0 .~ Just \"hello\"\n\u003c/code\u003e\u003c/strong\u003eJust (Array (fromList [String \"hello\"]))\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ev & nth 1 .~ Just \"hello\"\n\u003c/code\u003e\u003c/strong\u003eJust (Array (fromList [Null,String \"hello\"]))\n\u003c/pre\u003e",
          "module": "Data.Aeson.Lens",
          "name": "nth",
          "package": "aeson-lens",
          "signature": "Int -\u003e IndexedLens' ValueIx (Maybe Value) (Maybe v)",
          "source": "src/Data-Aeson-Lens.html#nth",
          "type": "function"
        },
        "index": {
          "description": "Lens of Array let decode L.pack foo baz bar false null Maybe Value key T.pack bar nth Maybe Bool Just False key T.pack bar nth Maybe String Nothing key T.pack bar nth Maybe Value Nothing nth Maybe Value Nothing let Nothing nth Just L.unpack encode let nth Just hoge L.unpack encode hoge let nth Just False L.unpack encode false hoge let decode L.pack Maybe Value nth Just hello Just Array fromList String hello nth Just hello Just Array fromList Null String hello",
          "hierarchy": "Data Aeson Lens",
          "module": "Data.Aeson.Lens",
          "name": "nth",
          "normalized": "Int-\u003eIndexedLens' ValueIx(Maybe Value)(Maybe a)",
          "package": "aeson-lens",
          "signature": "Int-\u003eIndexedLens' ValueIx(Maybe Value)(Maybe v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson-lens/docs/Data-Aeson-Lens.html#v:nth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aeson.Lens",
          "name": "nth'",
          "package": "aeson-lens",
          "signature": "Int -\u003e IndexedLens ValueIx (Maybe Value) (Maybe Value) (Maybe u) (Maybe v)",
          "source": "src/Data-Aeson-Lens.html#nth%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aeson Lens",
          "module": "Data.Aeson.Lens",
          "name": "nth'",
          "normalized": "Int-\u003eIndexedLens ValueIx(Maybe Value)(Maybe Value)(Maybe a)(Maybe b)",
          "package": "aeson-lens",
          "signature": "Int-\u003eIndexedLens ValueIx(Maybe Value)(Maybe Value)(Maybe u)(Maybe v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson-lens/docs/Data-Aeson-Lens.html#v:nth-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndexed traversal of Array\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet v = decode (L.pack \"[1, true, null]\") :: Maybe Value\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ev & catMaybes . toListOf traverseArray :: [Value]\n\u003c/code\u003e\u003c/strong\u003e[Number 1,Bool True,Null]\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet w = decode (L.pack \"[{\\\"name\\\": \\\"tanakh\\\", \\\"age\\\": 29}, {\\\"name\\\": \\\"nushio\\\", \\\"age\\\": 28}]\") :: Maybe Value\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ew & catMaybes . toListOf (traverseArray . key (T.pack \"name\")) :: [T.Text]\n\u003c/code\u003e\u003c/strong\u003e[\"tanakh\",\"nushio\"]\n\u003c/pre\u003e",
          "module": "Data.Aeson.Lens",
          "name": "traverseArray",
          "package": "aeson-lens",
          "signature": "IndexedTraversal' Int (Maybe Value) (Maybe v)",
          "source": "src/Data-Aeson-Lens.html#traverseArray",
          "type": "function"
        },
        "index": {
          "description": "Indexed traversal of Array let decode L.pack true null Maybe Value catMaybes toListOf traverseArray Value Number Bool True Null let decode L.pack name tanakh age name nushio age Maybe Value catMaybes toListOf traverseArray key T.pack name T.Text tanakh nushio",
          "hierarchy": "Data Aeson Lens",
          "module": "Data.Aeson.Lens",
          "name": "traverseArray",
          "package": "aeson-lens",
          "partial": "Array",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson-lens/docs/Data-Aeson-Lens.html#v:traverseArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType-changing indexed traversal of an Array\n\u003c/p\u003e",
          "module": "Data.Aeson.Lens",
          "name": "traverseArray'",
          "package": "aeson-lens",
          "signature": "IndexedTraversal Int (Maybe Value) (Maybe Value) (Maybe u) (Maybe v)",
          "source": "src/Data-Aeson-Lens.html#traverseArray%27",
          "type": "function"
        },
        "index": {
          "description": "Type-changing indexed traversal of an Array",
          "hierarchy": "Data Aeson Lens",
          "module": "Data.Aeson.Lens",
          "name": "traverseArray'",
          "package": "aeson-lens",
          "partial": "Array'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson-lens/docs/Data-Aeson-Lens.html#v:traverseArray-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndexed traversal of Object\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet w = decode (L.pack \"[{\\\"name\\\": \\\"tanakh\\\", \\\"age\\\": 29}, {\\\"name\\\": \\\"nushio\\\", \\\"age\\\": 28}]\") :: Maybe Value\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ew & catMaybes . toListOf (traverseArray . traverseObject) :: [Value]\n\u003c/code\u003e\u003c/strong\u003e[String \"tanakh\",Number 29,String \"nushio\",Number 28]\n\u003c/pre\u003e",
          "module": "Data.Aeson.Lens",
          "name": "traverseObject",
          "package": "aeson-lens",
          "signature": "IndexedTraversal' Text (Maybe Value) (Maybe v)",
          "source": "src/Data-Aeson-Lens.html#traverseObject",
          "type": "function"
        },
        "index": {
          "description": "Indexed traversal of Object let decode L.pack name tanakh age name nushio age Maybe Value catMaybes toListOf traverseArray traverseObject Value String tanakh Number String nushio Number",
          "hierarchy": "Data Aeson Lens",
          "module": "Data.Aeson.Lens",
          "name": "traverseObject",
          "package": "aeson-lens",
          "partial": "Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson-lens/docs/Data-Aeson-Lens.html#v:traverseObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType-changing indexed traversal of Object\n\u003c/p\u003e",
          "module": "Data.Aeson.Lens",
          "name": "traverseObject'",
          "package": "aeson-lens",
          "signature": "IndexedTraversal Text (Maybe Value) (Maybe Value) (Maybe u) (Maybe v)",
          "source": "src/Data-Aeson-Lens.html#traverseObject%27",
          "type": "function"
        },
        "index": {
          "description": "Type-changing indexed traversal of Object",
          "hierarchy": "Data Aeson Lens",
          "module": "Data.Aeson.Lens",
          "name": "traverseObject'",
          "package": "aeson-lens",
          "partial": "Object'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson-lens/docs/Data-Aeson-Lens.html#v:traverseObject-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLens of Value\n\u003c/p\u003e",
          "module": "Data.Aeson.Lens",
          "name": "valueAt",
          "package": "aeson-lens",
          "signature": "ValueIx -\u003e IndexedLens ValueIx (Maybe Value) (Maybe Value) (Maybe u) (Maybe v)",
          "source": "src/Data-Aeson-Lens.html#valueAt",
          "type": "function"
        },
        "index": {
          "description": "Lens of Value",
          "hierarchy": "Data Aeson Lens",
          "module": "Data.Aeson.Lens",
          "name": "valueAt",
          "normalized": "ValueIx-\u003eIndexedLens ValueIx(Maybe Value)(Maybe Value)(Maybe a)(Maybe b)",
          "package": "aeson-lens",
          "partial": "At",
          "signature": "ValueIx-\u003eIndexedLens ValueIx(Maybe Value)(Maybe Value)(Maybe u)(Maybe v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson-lens/docs/Data-Aeson-Lens.html#v:valueAt"
      }
    }
  ]
]