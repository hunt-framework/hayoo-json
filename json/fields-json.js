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
        "word": "fields-json"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInterface for extracting data from JSValue.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.JSON.FromJSValue",
          "name": "FromJSValue",
          "package": "fields-json",
          "source": "src/Text-JSON-FromJSValue.html",
          "type": "module"
        },
        "index": {
          "description": "Interface for extracting data from JSValue",
          "hierarchy": "Text JSON FromJSValue",
          "module": "Text.JSON.FromJSValue",
          "name": "FromJSValue",
          "package": "fields-json",
          "partial": "From JSValue",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-FromJSValue.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStructures that can be \u003ccode\u003eparsed\u003c/code\u003e from JSON. Instances must declare\n either \u003ccode\u003e\u003ca\u003efromJSValue\u003c/a\u003e\u003c/code\u003e (parse directly from \u003ccode\u003e\u003ca\u003eJSValue\u003c/a\u003e\u003c/code\u003e) or\n \u003ccode\u003e\u003ca\u003efromJSValueM\u003c/a\u003e\u003c/code\u003e (uses \u003ccode\u003e\u003ca\u003eMonadReader\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Text.JSON.FromJSValue",
          "name": "FromJSValue",
          "package": "fields-json",
          "source": "src/Text-JSON-FromJSValue.html#FromJSValue",
          "type": "class"
        },
        "index": {
          "description": "Structures that can be parsed from JSON Instances must declare either fromJSValue parse directly from JSValue or fromJSValueM uses MonadReader",
          "hierarchy": "Text JSON FromJSValue",
          "module": "Text.JSON.FromJSValue",
          "name": "FromJSValue",
          "package": "fields-json",
          "partial": "From JSValue",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-FromJSValue.html#t:FromJSValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStructures that can be \u003ccode\u003eparsed\u003c/code\u003e from JSON if some structure for\n update is provided\n\u003c/p\u003e",
          "module": "Text.JSON.FromJSValue",
          "name": "FromJSValueWithUpdate",
          "package": "fields-json",
          "source": "src/Text-JSON-FromJSValue.html#FromJSValueWithUpdate",
          "type": "class"
        },
        "index": {
          "description": "Structures that can be parsed from JSON if some structure for update is provided",
          "hierarchy": "Text JSON FromJSValue",
          "module": "Text.JSON.FromJSValue",
          "name": "FromJSValueWithUpdate",
          "package": "fields-json",
          "partial": "From JSValue With Update",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-FromJSValue.html#t:FromJSValueWithUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStructures that can be matched with JSValue\n\u003c/p\u003e",
          "module": "Text.JSON.FromJSValue",
          "name": "MatchWithJSValue",
          "package": "fields-json",
          "source": "src/Text-JSON-FromJSValue.html#MatchWithJSValue",
          "type": "class"
        },
        "index": {
          "description": "Structures that can be matched with JSValue",
          "hierarchy": "Text JSON FromJSValue",
          "module": "Text.JSON.FromJSValue",
          "name": "MatchWithJSValue",
          "package": "fields-json",
          "partial": "Match With JSValue",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-FromJSValue.html#t:MatchWithJSValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.FromJSValue",
          "name": "fromJSValue",
          "package": "fields-json",
          "signature": "JSValue -\u003e Maybe a",
          "source": "src/Text-JSON-FromJSValue.html#fromJSValue",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text JSON FromJSValue",
          "module": "Text.JSON.FromJSValue",
          "name": "fromJSValue",
          "normalized": "JSValue-\u003eMaybe a",
          "package": "fields-json",
          "partial": "JSValue",
          "signature": "JSValue-\u003eMaybe a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-FromJSValue.html#v:fromJSValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralization of \u003ccode\u003e\u003ca\u003efromJSValueCustomMany\u003c/a\u003e\u003c/code\u003e, where each element of\n array can have different parser.\n\u003c/p\u003e",
          "module": "Text.JSON.FromJSValue",
          "name": "fromJSValueCustomList",
          "package": "fields-json",
          "signature": "[m (Maybe a)] -\u003e m (Maybe [a])",
          "source": "src/Text-JSON-FromJSValue.html#fromJSValueCustomList",
          "type": "function"
        },
        "index": {
          "description": "Generalization of fromJSValueCustomMany where each element of array can have different parser",
          "hierarchy": "Text JSON FromJSValue",
          "module": "Text.JSON.FromJSValue",
          "name": "fromJSValueCustomList",
          "normalized": "[a(Maybe b)]-\u003ea(Maybe[b])",
          "package": "fields-json",
          "partial": "JSValue Custom List",
          "signature": "[m(Maybe a)]-\u003em(Maybe[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-FromJSValue.html#v:fromJSValueCustomList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns parser on each element of underlaying json. Returns Just iff\n JSON is array.\n\u003c/p\u003e",
          "module": "Text.JSON.FromJSValue",
          "name": "fromJSValueCustomMany",
          "package": "fields-json",
          "signature": "m (Maybe a) -\u003e m (Maybe [a])",
          "source": "src/Text-JSON-FromJSValue.html#fromJSValueCustomMany",
          "type": "function"
        },
        "index": {
          "description": "Runs parser on each element of underlaying json Returns Just iff JSON is array",
          "hierarchy": "Text JSON FromJSValue",
          "module": "Text.JSON.FromJSValue",
          "name": "fromJSValueCustomMany",
          "normalized": "a(Maybe b)-\u003ea(Maybe[b])",
          "package": "fields-json",
          "partial": "JSValue Custom Many",
          "signature": "m(Maybe a)-\u003em(Maybe[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-FromJSValue.html#v:fromJSValueCustomMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReading the value that is on a field. Semantics are a bit\n involved, example GHCi session should clarify:\n\u003c/p\u003e\u003cpre\u003e\n Prelude\u003e :set -XNoMonomorphismRestriction\n Prelude\u003e let x = withJSValue (JSObject (toJSObject [(\u003ca\u003ekey\u003c/a\u003e,JSString $ toJSString \u003ca\u003evalue\u003c/a\u003e)]))\n Prelude\u003e x (fromJSValueField \u003ca\u003ekey\u003c/a\u003e) :: IO (Maybe Int)\n Nothing\n Prelude\u003e x (fromJSValueField \u003ca\u003ekey\u003c/a\u003e) :: IO (Maybe (Maybe Int))\n Just Nothing\n Prelude\u003e x (fromJSValueField \u003ca\u003ekey\u003c/a\u003e) :: IO (Maybe (Maybe (Maybe Int)))\n Just (Just Nothing)\n Prelude\u003e x (fromJSValueField \u003ca\u003ekey\u003c/a\u003e) :: IO (Maybe String)\n Just \u003ca\u003evalue\u003c/a\u003e\n Prelude\u003e x (fromJSValueField \u003ca\u003ekey\u003c/a\u003e) :: IO (Maybe (Maybe String))\n Just (Just \u003ca\u003evalue\u003c/a\u003e)\n Prelude\u003e x (fromJSValueField \u003ca\u003ekey\u003c/a\u003e) :: IO (Maybe (Maybe (Maybe String)))\n Just (Just (Just \u003ca\u003evalue\u003c/a\u003e))\n Prelude\u003e let x = withJSValue (JSArray [])\n Prelude\u003e x (fromJSValueField \u003ca\u003ekey\u003c/a\u003e) :: IO (Maybe String)\n Nothing\n Prelude\u003e x (fromJSValueField \u003ca\u003ekey\u003c/a\u003e) :: IO (Maybe (Maybe String))\n Nothing\n Prelude\u003e x (fromJSValueField \u003ca\u003ekey\u003c/a\u003e) :: IO (Maybe (Maybe (Maybe String)))\n Nothing\n\u003c/pre\u003e",
          "module": "Text.JSON.FromJSValue",
          "name": "fromJSValueField",
          "package": "fields-json",
          "signature": "String -\u003e m (Maybe a)",
          "source": "src/Text-JSON-FromJSValue.html#fromJSValueField",
          "type": "function"
        },
        "index": {
          "description": "Reading the value that is on field Semantics are bit involved example GHCi session should clarify Prelude set XNoMonomorphismRestriction Prelude let withJSValue JSObject toJSObject key JSString toJSString value Prelude fromJSValueField key IO Maybe Int Nothing Prelude fromJSValueField key IO Maybe Maybe Int Just Nothing Prelude fromJSValueField key IO Maybe Maybe Maybe Int Just Just Nothing Prelude fromJSValueField key IO Maybe String Just value Prelude fromJSValueField key IO Maybe Maybe String Just Just value Prelude fromJSValueField key IO Maybe Maybe Maybe String Just Just Just value Prelude let withJSValue JSArray Prelude fromJSValueField key IO Maybe String Nothing Prelude fromJSValueField key IO Maybe Maybe String Nothing Prelude fromJSValueField key IO Maybe Maybe Maybe String Nothing",
          "hierarchy": "Text JSON FromJSValue",
          "module": "Text.JSON.FromJSValue",
          "name": "fromJSValueField",
          "normalized": "String-\u003ea(Maybe b)",
          "package": "fields-json",
          "partial": "JSValue Field",
          "signature": "String-\u003em(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-FromJSValue.html#v:fromJSValueField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVersion of \u003ccode\u003e\u003ca\u003efromJSValueField\u003c/a\u003e\u003c/code\u003e for Base64 encoded data to avoid\n memory leak.\n\u003c/p\u003e",
          "module": "Text.JSON.FromJSValue",
          "name": "fromJSValueFieldBase64",
          "package": "fields-json",
          "signature": "String -\u003e m (Maybe ByteString)",
          "source": "src/Text-JSON-FromJSValue.html#fromJSValueFieldBase64",
          "type": "function"
        },
        "index": {
          "description": "Version of fromJSValueField for Base64 encoded data to avoid memory leak",
          "hierarchy": "Text JSON FromJSValue",
          "module": "Text.JSON.FromJSValue",
          "name": "fromJSValueFieldBase64",
          "normalized": "String-\u003ea(Maybe ByteString)",
          "package": "fields-json",
          "partial": "JSValue Field Base",
          "signature": "String-\u003em(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-FromJSValue.html#v:fromJSValueFieldBase64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralization of \u003ccode\u003e\u003ca\u003efromJSValueField\u003c/a\u003e\u003c/code\u003e. Does not use \u003ccode\u003e\u003ca\u003eFromJSValue\u003c/a\u003e\u003c/code\u003e\n instances.\n\u003c/p\u003e",
          "module": "Text.JSON.FromJSValue",
          "name": "fromJSValueFieldCustom",
          "package": "fields-json",
          "signature": "String -\u003e m (Maybe a) -\u003e m (Maybe a)",
          "source": "src/Text-JSON-FromJSValue.html#fromJSValueFieldCustom",
          "type": "function"
        },
        "index": {
          "description": "Generalization of fromJSValueField Does not use FromJSValue instances",
          "hierarchy": "Text JSON FromJSValue",
          "module": "Text.JSON.FromJSValue",
          "name": "fromJSValueFieldCustom",
          "normalized": "String-\u003ea(Maybe b)-\u003ea(Maybe b)",
          "package": "fields-json",
          "partial": "JSValue Field Custom",
          "signature": "String-\u003em(Maybe a)-\u003em(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-FromJSValue.html#v:fromJSValueFieldCustom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.FromJSValue",
          "name": "fromJSValueM",
          "package": "fields-json",
          "signature": "m (Maybe a)",
          "source": "src/Text-JSON-FromJSValue.html#fromJSValueM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text JSON FromJSValue",
          "module": "Text.JSON.FromJSValue",
          "name": "fromJSValueM",
          "package": "fields-json",
          "partial": "JSValue",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-FromJSValue.html#v:fromJSValueM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns parser on each element of underlying json. Returns \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e iff\n JSON is an array.\n\u003c/p\u003e\u003cp\u003eNote: This method has quadratic complexity. It is better to write\n less general matching algorithms that use Maps.\n\u003c/p\u003e",
          "module": "Text.JSON.FromJSValue",
          "name": "fromJSValueManyWithUpdate",
          "package": "fields-json",
          "signature": "[a] -\u003e m (Maybe [a])",
          "source": "src/Text-JSON-FromJSValue.html#fromJSValueManyWithUpdate",
          "type": "function"
        },
        "index": {
          "description": "Runs parser on each element of underlying json Returns Just iff JSON is an array Note This method has quadratic complexity It is better to write less general matching algorithms that use Maps",
          "hierarchy": "Text JSON FromJSValue",
          "module": "Text.JSON.FromJSValue",
          "name": "fromJSValueManyWithUpdate",
          "normalized": "[a]-\u003eb(Maybe[a])",
          "package": "fields-json",
          "partial": "JSValue Many With Update",
          "signature": "[a]-\u003em(Maybe[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-FromJSValue.html#v:fromJSValueManyWithUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.FromJSValue",
          "name": "fromJSValueWithUpdate",
          "package": "fields-json",
          "signature": "Maybe a -\u003e JSValue -\u003e Maybe a",
          "source": "src/Text-JSON-FromJSValue.html#fromJSValueWithUpdate",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text JSON FromJSValue",
          "module": "Text.JSON.FromJSValue",
          "name": "fromJSValueWithUpdate",
          "normalized": "Maybe a-\u003eJSValue-\u003eMaybe a",
          "package": "fields-json",
          "partial": "JSValue With Update",
          "signature": "Maybe a-\u003eJSValue-\u003eMaybe a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-FromJSValue.html#v:fromJSValueWithUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.FromJSValue",
          "name": "fromJSValueWithUpdateM",
          "package": "fields-json",
          "signature": "Maybe a -\u003e m (Maybe a)",
          "source": "src/Text-JSON-FromJSValue.html#fromJSValueWithUpdateM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text JSON FromJSValue",
          "module": "Text.JSON.FromJSValue",
          "name": "fromJSValueWithUpdateM",
          "normalized": "Maybe a-\u003eb(Maybe a)",
          "package": "fields-json",
          "partial": "JSValue With Update",
          "signature": "Maybe a-\u003em(Maybe a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-FromJSValue.html#v:fromJSValueWithUpdateM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReading the value that is on some field. Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if\n JSON is not an object or field is present but cannot be parsed,\n 'Just Nothing' if absent, and 'Just (Just a)' otherwise\n\u003c/p\u003e",
          "module": "Text.JSON.FromJSValue",
          "name": "jsValueField",
          "package": "fields-json",
          "signature": "String -\u003e m (Maybe (Maybe a))",
          "source": "src/Text-JSON-FromJSValue.html#jsValueField",
          "type": "function"
        },
        "index": {
          "description": "Reading the value that is on some field Returns Nothing if JSON is not an object or field is present but cannot be parsed Just Nothing if absent and Just Just otherwise",
          "hierarchy": "Text JSON FromJSValue",
          "module": "Text.JSON.FromJSValue",
          "name": "jsValueField",
          "normalized": "String-\u003ea(Maybe(Maybe b))",
          "package": "fields-json",
          "partial": "Value Field",
          "signature": "String-\u003em(Maybe(Maybe a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-FromJSValue.html#v:jsValueField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.FromJSValue",
          "name": "matchesWithJSValue",
          "package": "fields-json",
          "signature": "a -\u003e JSValue -\u003e Bool",
          "source": "src/Text-JSON-FromJSValue.html#matchesWithJSValue",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text JSON FromJSValue",
          "module": "Text.JSON.FromJSValue",
          "name": "matchesWithJSValue",
          "normalized": "a-\u003eJSValue-\u003eBool",
          "package": "fields-json",
          "partial": "With JSValue",
          "signature": "a-\u003eJSValue-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-FromJSValue.html#v:matchesWithJSValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.FromJSValue",
          "name": "matchesWithJSValueM",
          "package": "fields-json",
          "signature": "a -\u003e m Bool",
          "source": "src/Text-JSON-FromJSValue.html#matchesWithJSValueM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text JSON FromJSValue",
          "module": "Text.JSON.FromJSValue",
          "name": "matchesWithJSValueM",
          "normalized": "a-\u003eb Bool",
          "package": "fields-json",
          "partial": "With JSValue",
          "signature": "a-\u003em Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-FromJSValue.html#v:matchesWithJSValueM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple runner\n\u003c/p\u003e",
          "module": "Text.JSON.FromJSValue",
          "name": "withJSValue",
          "package": "fields-json",
          "signature": "JSValue -\u003e ReaderT JSValue m a -\u003e m a",
          "source": "src/Text-JSON-FromJSValue.html#withJSValue",
          "type": "function"
        },
        "index": {
          "description": "Simple runner",
          "hierarchy": "Text JSON FromJSValue",
          "module": "Text.JSON.FromJSValue",
          "name": "withJSValue",
          "normalized": "JSValue-\u003eReaderT JSValue a b-\u003ea b",
          "package": "fields-json",
          "partial": "JSValue",
          "signature": "JSValue-\u003eReaderT JSValue m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-FromJSValue.html#v:withJSValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAbusing monadic 'do' notation library for generating JSON object. \n Hard-binded to json package from hackage.\n Main ideas\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Overloaded function \u003ccode\u003e\u003ca\u003evalue\u003c/a\u003e\u003c/code\u003e to set values in underlying JSON - \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, lists  etc.\n\u003c/li\u003e\u003cli\u003e JSON generation may not be pure  with \u003ccode\u003e\u003ca\u003evalueM\u003c/a\u003e\u003c/code\u003e. You can perform some IO while generating JSON. This is usefull skip useless inner binding.\n\u003c/li\u003e\u003cli\u003e Compositionality - use \u003ccode\u003e\u003ca\u003eobject\u003c/a\u003e\u003c/code\u003e to easy create JSON objects\n\u003c/li\u003e\u003cli\u003e Monadic notation - it really looks nicer then composition with \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e or some magic combinator\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e\n runJSONGen $ do\n     value \"a\" \"a\"\n     value \"b\" [1,2,3]\n     object \"c\" $ do\n         value \"x\" True\n         value \"y\" False\n\n\u003c/pre\u003e\u003cp\u003eWill generate json object \n  {a : \u003ca\u003ea\u003c/a\u003e, b: [1,2,3], c: {x: true, y : false}} \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.JSON.Gen",
          "name": "Gen",
          "package": "fields-json",
          "source": "src/Text-JSON-Gen.html",
          "type": "module"
        },
        "index": {
          "description": "Abusing monadic do notation library for generating JSON object Hard-binded to json package from hackage Main ideas Overloaded function value to set values in underlying JSON Bool Int String lists etc JSON generation may not be pure with valueM You can perform some IO while generating JSON This is usefull skip useless inner binding Compositionality use object to easy create JSON objects Monadic notation it really looks nicer then composition with or some magic combinator runJSONGen do value value object do value True value False Will generate json object true false",
          "hierarchy": "Text JSON Gen",
          "module": "Text.JSON.Gen",
          "name": "Gen",
          "package": "fields-json",
          "partial": "Gen",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-Gen.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBasic types\n\u003c/p\u003e",
          "module": "Text.JSON.Gen",
          "name": "JSONGen",
          "package": "fields-json",
          "source": "src/Text-JSON-Gen.html#JSONGen",
          "type": "type"
        },
        "index": {
          "description": "Basic types",
          "hierarchy": "Text JSON Gen",
          "module": "Text.JSON.Gen",
          "name": "JSONGen",
          "package": "fields-json",
          "partial": "JSONGen",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-Gen.html#t:JSONGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.Gen",
          "name": "JSONGenT",
          "package": "fields-json",
          "source": "src/Text-JSON-Gen.html#JSONGenT",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text JSON Gen",
          "module": "Text.JSON.Gen",
          "name": "JSONGenT",
          "package": "fields-json",
          "partial": "JSONGen",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-Gen.html#t:JSONGenT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmbed other JSON object as field in resulting JSON object.\n\u003c/p\u003e",
          "module": "Text.JSON.Gen",
          "name": "object",
          "package": "fields-json",
          "signature": "String -\u003e JSONGenT m () -\u003e JSONGenT m ()",
          "source": "src/Text-JSON-Gen.html#object",
          "type": "function"
        },
        "index": {
          "description": "Embed other JSON object as field in resulting JSON object",
          "hierarchy": "Text JSON Gen",
          "module": "Text.JSON.Gen",
          "name": "object",
          "normalized": "String-\u003eJSONGenT a()-\u003eJSONGenT a()",
          "package": "fields-json",
          "signature": "String-\u003eJSONGenT m()-\u003eJSONGenT m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-Gen.html#v:object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVersion for lists of objects.  \n\u003c/p\u003e",
          "module": "Text.JSON.Gen",
          "name": "objects",
          "package": "fields-json",
          "signature": "String -\u003e [JSONGenT m ()] -\u003e JSONGenT m ()",
          "source": "src/Text-JSON-Gen.html#objects",
          "type": "function"
        },
        "index": {
          "description": "Version for lists of objects",
          "hierarchy": "Text JSON Gen",
          "module": "Text.JSON.Gen",
          "name": "objects",
          "normalized": "String-\u003e[JSONGenT a()]-\u003eJSONGenT a()",
          "package": "fields-json",
          "signature": "String-\u003e[JSONGenT m()]-\u003eJSONGenT m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-Gen.html#v:objects"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple runner\n\u003c/p\u003e",
          "module": "Text.JSON.Gen",
          "name": "runJSONGen",
          "package": "fields-json",
          "signature": "JSONGen () -\u003e JSValue",
          "source": "src/Text-JSON-Gen.html#runJSONGen",
          "type": "function"
        },
        "index": {
          "description": "Simple runner",
          "hierarchy": "Text JSON Gen",
          "module": "Text.JSON.Gen",
          "name": "runJSONGen",
          "normalized": "JSONGen()-\u003eJSValue",
          "package": "fields-json",
          "partial": "JSONGen",
          "signature": "JSONGen()-\u003eJSValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-Gen.html#v:runJSONGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.Gen",
          "name": "runJSONGenT",
          "package": "fields-json",
          "signature": "JSONGenT m () -\u003e m JSValue",
          "source": "src/Text-JSON-Gen.html#runJSONGenT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSON Gen",
          "module": "Text.JSON.Gen",
          "name": "runJSONGenT",
          "normalized": "JSONGenT a()-\u003ea JSValue",
          "package": "fields-json",
          "partial": "JSONGen",
          "signature": "JSONGenT m()-\u003em JSValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-Gen.html#v:runJSONGenT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet pure value under given name in final JSON object\n\u003c/p\u003e",
          "module": "Text.JSON.Gen",
          "name": "value",
          "package": "fields-json",
          "signature": "String -\u003e a -\u003e JSONGenT m ()",
          "source": "src/Text-JSON-Gen.html#value",
          "type": "function"
        },
        "index": {
          "description": "Set pure value under given name in final JSON object",
          "hierarchy": "Text JSON Gen",
          "module": "Text.JSON.Gen",
          "name": "value",
          "normalized": "String-\u003ea-\u003eJSONGenT b()",
          "package": "fields-json",
          "signature": "String-\u003ea-\u003eJSONGenT m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-Gen.html#v:value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic verion of \u003ccode\u003e\u003ca\u003evalue\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.JSON.Gen",
          "name": "valueM",
          "package": "fields-json",
          "signature": "String -\u003e m a -\u003e JSONGenT m ()",
          "source": "src/Text-JSON-Gen.html#valueM",
          "type": "function"
        },
        "index": {
          "description": "Monadic verion of value",
          "hierarchy": "Text JSON Gen",
          "module": "Text.JSON.Gen",
          "name": "valueM",
          "normalized": "String-\u003ea b-\u003eJSONGenT a()",
          "package": "fields-json",
          "signature": "String-\u003em a-\u003eJSONGenT m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-Gen.html#v:valueM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eData structures that hold JSValue inside.\n Value can be extracted or replaced, but is always inside.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.JSON.JSValueContainer",
          "name": "JSValueContainer",
          "package": "fields-json",
          "source": "src/Text-JSON-JSValueContainer.html",
          "type": "module"
        },
        "index": {
          "description": "Data structures that hold JSValue inside Value can be extracted or replaced but is always inside",
          "hierarchy": "Text JSON JSValueContainer",
          "module": "Text.JSON.JSValueContainer",
          "name": "JSValueContainer",
          "package": "fields-json",
          "partial": "JSValue Container",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-JSValueContainer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.JSValueContainer",
          "name": "JSValueContainer",
          "package": "fields-json",
          "source": "src/Text-JSON-JSValueContainer.html#JSValueContainer",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text JSON JSValueContainer",
          "module": "Text.JSON.JSValueContainer",
          "name": "JSValueContainer",
          "package": "fields-json",
          "partial": "JSValue Container",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-JSValueContainer.html#t:JSValueContainer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.JSValueContainer",
          "name": "getJSValue",
          "package": "fields-json",
          "signature": "a -\u003e JSValue",
          "source": "src/Text-JSON-JSValueContainer.html#getJSValue",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text JSON JSValueContainer",
          "module": "Text.JSON.JSValueContainer",
          "name": "getJSValue",
          "normalized": "a-\u003eJSValue",
          "package": "fields-json",
          "partial": "JSValue",
          "signature": "a-\u003eJSValue",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-JSValueContainer.html#v:getJSValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.JSValueContainer",
          "name": "setJSValue",
          "package": "fields-json",
          "signature": "JSValue -\u003e a -\u003e a",
          "source": "src/Text-JSON-JSValueContainer.html#setJSValue",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text JSON JSValueContainer",
          "module": "Text.JSON.JSValueContainer",
          "name": "setJSValue",
          "normalized": "JSValue-\u003ea-\u003ea",
          "package": "fields-json",
          "partial": "JSValue",
          "signature": "JSValue-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-JSValueContainer.html#v:setJSValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUnifing some structures so they can be serialized to JSValue\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.JSON.ToJSValue",
          "name": "ToJSValue",
          "package": "fields-json",
          "source": "src/Text-JSON-ToJSValue.html",
          "type": "module"
        },
        "index": {
          "description": "Unifing some structures so they can be serialized to JSValue",
          "hierarchy": "Text JSON ToJSValue",
          "module": "Text.JSON.ToJSValue",
          "name": "ToJSValue",
          "package": "fields-json",
          "partial": "To JSValue",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-ToJSValue.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.ToJSValue",
          "name": "ToJSValue",
          "package": "fields-json",
          "source": "src/Text-JSON-ToJSValue.html#ToJSValue",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text JSON ToJSValue",
          "module": "Text.JSON.ToJSValue",
          "name": "ToJSValue",
          "package": "fields-json",
          "partial": "To JSValue",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-ToJSValue.html#t:ToJSValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.ToJSValue",
          "name": "toJSValue",
          "package": "fields-json",
          "signature": "a -\u003e JSValue",
          "source": "src/Text-JSON-ToJSValue.html#toJSValue",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text JSON ToJSValue",
          "module": "Text.JSON.ToJSValue",
          "name": "toJSValue",
          "normalized": "a-\u003eJSValue",
          "package": "fields-json",
          "partial": "JSValue",
          "signature": "a-\u003eJSValue",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fields-json/docs/Text-JSON-ToJSValue.html#v:toJSValue"
      }
    }
  ]
]