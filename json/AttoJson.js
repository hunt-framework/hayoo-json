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
        "word": "AttoJson"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.AttoJSON",
          "name": "AttoJSON",
          "package": "AttoJson",
          "source": "src/Text-JSON-AttoJSON.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text JSON AttoJSON",
          "module": "Text.JSON.AttoJSON",
          "name": "AttoJSON",
          "package": "AttoJson",
          "partial": "Atto JSON",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AttoJson/docs/Text-JSON-AttoJSON.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType Class for the value that can be converted from/into \u003ccode\u003e\u003ca\u003eJSValue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.JSON.AttoJSON",
          "name": "JSON",
          "package": "AttoJson",
          "source": "src/Text-JSON-AttoJSON.html#JSON",
          "type": "class"
        },
        "index": {
          "description": "Type Class for the value that can be converted from into JSValue",
          "hierarchy": "Text JSON AttoJSON",
          "module": "Text.JSON.AttoJSON",
          "name": "JSON",
          "package": "AttoJson",
          "partial": "JSON",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/AttoJson/docs/Text-JSON-AttoJSON.html#t:JSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData types for JSON value.\n\u003c/p\u003e",
          "module": "Text.JSON.AttoJSON",
          "name": "JSValue",
          "package": "AttoJson",
          "source": "src/Text-JSON-AttoJSON.html#JSValue",
          "type": "data"
        },
        "index": {
          "description": "Data types for JSON value",
          "hierarchy": "Text JSON AttoJSON",
          "module": "Text.JSON.AttoJSON",
          "name": "JSValue",
          "package": "AttoJson",
          "partial": "JSValue",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AttoJson/docs/Text-JSON-AttoJSON.html#t:JSValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJSON Array\n\u003c/p\u003e",
          "module": "Text.JSON.AttoJSON",
          "name": "JSArray",
          "package": "AttoJson",
          "signature": "JSArray [JSValue]",
          "source": "src/Text-JSON-AttoJSON.html#JSValue",
          "type": "function"
        },
        "index": {
          "description": "JSON Array",
          "hierarchy": "Text JSON AttoJSON",
          "module": "Text.JSON.AttoJSON",
          "name": "JSArray",
          "normalized": "JSArray[JSValue]",
          "package": "AttoJson",
          "partial": "JSArray",
          "signature": "JSArray[JSValue]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AttoJson/docs/Text-JSON-AttoJSON.html#v:JSArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJSON Bool\n\u003c/p\u003e",
          "module": "Text.JSON.AttoJSON",
          "name": "JSBool",
          "package": "AttoJson",
          "signature": "JSBool !Bool",
          "source": "src/Text-JSON-AttoJSON.html#JSValue",
          "type": "function"
        },
        "index": {
          "description": "JSON Bool",
          "hierarchy": "Text JSON AttoJSON",
          "module": "Text.JSON.AttoJSON",
          "name": "JSBool",
          "package": "AttoJson",
          "partial": "JSBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AttoJson/docs/Text-JSON-AttoJSON.html#v:JSBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJSON Null\n\u003c/p\u003e",
          "module": "Text.JSON.AttoJSON",
          "name": "JSNull",
          "package": "AttoJson",
          "signature": "JSNull",
          "source": "src/Text-JSON-AttoJSON.html#JSValue",
          "type": "function"
        },
        "index": {
          "description": "JSON Null",
          "hierarchy": "Text JSON AttoJSON",
          "module": "Text.JSON.AttoJSON",
          "name": "JSNull",
          "package": "AttoJson",
          "partial": "JSNull",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AttoJson/docs/Text-JSON-AttoJSON.html#v:JSNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJSON Number\n\u003c/p\u003e",
          "module": "Text.JSON.AttoJSON",
          "name": "JSNumber",
          "package": "AttoJson",
          "signature": "JSNumber Rational",
          "source": "src/Text-JSON-AttoJSON.html#JSValue",
          "type": "function"
        },
        "index": {
          "description": "JSON Number",
          "hierarchy": "Text JSON AttoJSON",
          "module": "Text.JSON.AttoJSON",
          "name": "JSNumber",
          "package": "AttoJson",
          "partial": "JSNumber",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AttoJson/docs/Text-JSON-AttoJSON.html#v:JSNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJSON Object\n\u003c/p\u003e",
          "module": "Text.JSON.AttoJSON",
          "name": "JSObject",
          "package": "AttoJson",
          "signature": "JSObject (Map ByteString JSValue)",
          "source": "src/Text-JSON-AttoJSON.html#JSValue",
          "type": "function"
        },
        "index": {
          "description": "JSON Object",
          "hierarchy": "Text JSON AttoJSON",
          "module": "Text.JSON.AttoJSON",
          "name": "JSObject",
          "package": "AttoJson",
          "partial": "JSObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AttoJson/docs/Text-JSON-AttoJSON.html#v:JSObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJSON String\n\u003c/p\u003e",
          "module": "Text.JSON.AttoJSON",
          "name": "JSString",
          "package": "AttoJson",
          "signature": "JSString",
          "source": "src/Text-JSON-AttoJSON.html#JSValue",
          "type": "function"
        },
        "index": {
          "description": "JSON String",
          "hierarchy": "Text JSON AttoJSON",
          "module": "Text.JSON.AttoJSON",
          "name": "JSString",
          "package": "AttoJson",
          "partial": "JSString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AttoJson/docs/Text-JSON-AttoJSON.html#v:JSString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003egetFields\u003c/a\u003e\u003c/code\u003e with default value.\n\u003c/p\u003e",
          "module": "Text.JSON.AttoJSON",
          "name": "findDeepWithDefault",
          "package": "AttoJson",
          "signature": "a -\u003e [ByteString] -\u003e JSValue -\u003e a",
          "source": "src/Text-JSON-AttoJSON.html#findDeepWithDefault",
          "type": "function"
        },
        "index": {
          "description": "getFields with default value",
          "hierarchy": "Text JSON AttoJSON",
          "module": "Text.JSON.AttoJSON",
          "name": "findDeepWithDefault",
          "normalized": "a-\u003e[ByteString]-\u003eJSValue-\u003ea",
          "package": "AttoJson",
          "partial": "Deep With Default",
          "signature": "a-\u003e[ByteString]-\u003eJSValue-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AttoJson/docs/Text-JSON-AttoJSON.html#v:findDeepWithDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e with default value.\n\u003c/p\u003e",
          "module": "Text.JSON.AttoJSON",
          "name": "findWithDefault",
          "package": "AttoJson",
          "signature": "a -\u003e ByteString -\u003e JSValue -\u003e a",
          "source": "src/Text-JSON-AttoJSON.html#findWithDefault",
          "type": "function"
        },
        "index": {
          "description": "lookup with default value",
          "hierarchy": "Text JSON AttoJSON",
          "module": "Text.JSON.AttoJSON",
          "name": "findWithDefault",
          "normalized": "a-\u003eByteString-\u003eJSValue-\u003ea",
          "package": "AttoJson",
          "partial": "With Default",
          "signature": "a-\u003eByteString-\u003eJSValue-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AttoJson/docs/Text-JSON-AttoJSON.html#v:findWithDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode from JSValue\n\u003c/p\u003e",
          "module": "Text.JSON.AttoJSON",
          "name": "fromJSON",
          "package": "AttoJson",
          "signature": "JSValue -\u003e Maybe a",
          "source": "src/Text-JSON-AttoJSON.html#fromJSON",
          "type": "method"
        },
        "index": {
          "description": "Decode from JSValue",
          "hierarchy": "Text JSON AttoJSON",
          "module": "Text.JSON.AttoJSON",
          "name": "fromJSON",
          "normalized": "JSValue-\u003eMaybe a",
          "package": "AttoJson",
          "partial": "JSON",
          "signature": "JSValue-\u003eMaybe a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AttoJson/docs/Text-JSON-AttoJSON.html#v:fromJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.AttoJSON",
          "name": "fromJSString",
          "package": "AttoJson",
          "signature": "ByteString",
          "source": "src/Text-JSON-AttoJSON.html#JSValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSON AttoJSON",
          "module": "Text.JSON.AttoJSON",
          "name": "fromJSString",
          "package": "AttoJson",
          "partial": "JSString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AttoJson/docs/Text-JSON-AttoJSON.html#v:fromJSString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDEPRECATED: Alias of \u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e. Use \u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.JSON.AttoJSON",
          "name": "getField",
          "package": "AttoJson",
          "signature": "ByteString -\u003e JSValue -\u003e Maybe a",
          "source": "src/Text-JSON-AttoJSON.html#getField",
          "type": "function"
        },
        "index": {
          "description": "DEPRECATED Alias of lookup Use lookup",
          "hierarchy": "Text JSON AttoJSON",
          "module": "Text.JSON.AttoJSON",
          "name": "getField",
          "normalized": "ByteString-\u003eJSValue-\u003eMaybe a",
          "package": "AttoJson",
          "partial": "Field",
          "signature": "ByteString-\u003eJSValue-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AttoJson/docs/Text-JSON-AttoJSON.html#v:getField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDEPRECATED: Alias of \u003ccode\u003e\u003ca\u003elookupDeep\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.JSON.AttoJSON",
          "name": "getFields",
          "package": "AttoJson",
          "signature": "[ByteString] -\u003e JSValue -\u003e Maybe a",
          "source": "src/Text-JSON-AttoJSON.html#getFields",
          "type": "function"
        },
        "index": {
          "description": "DEPRECATED Alias of lookupDeep",
          "hierarchy": "Text JSON AttoJSON",
          "module": "Text.JSON.AttoJSON",
          "name": "getFields",
          "normalized": "[ByteString]-\u003eJSValue-\u003eMaybe a",
          "package": "AttoJson",
          "partial": "Fields",
          "signature": "[ByteString]-\u003eJSValue-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AttoJson/docs/Text-JSON-AttoJSON.html#v:getFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the value for field in Object and decode it.\n\u003c/p\u003e",
          "module": "Text.JSON.AttoJSON",
          "name": "lookup",
          "package": "AttoJson",
          "signature": "ByteString -\u003e JSValue -\u003e Maybe a",
          "source": "src/Text-JSON-AttoJSON.html#lookup",
          "type": "function"
        },
        "index": {
          "description": "Get the value for field in Object and decode it",
          "hierarchy": "Text JSON AttoJSON",
          "module": "Text.JSON.AttoJSON",
          "name": "lookup",
          "normalized": "ByteString-\u003eJSValue-\u003eMaybe a",
          "package": "AttoJson",
          "signature": "ByteString-\u003eJSValue-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AttoJson/docs/Text-JSON-AttoJSON.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e but it can process nested Object. ex:\n\u003c/p\u003e\u003cpre\u003e\n   lookupDeep [\"user\", \"name\"] (JSObject [(\"user\", JSObject [(\"name\", JSString \"hoge\")])]) == Just \"hoge\"\n\u003c/pre\u003e",
          "module": "Text.JSON.AttoJSON",
          "name": "lookupDeep",
          "package": "AttoJson",
          "signature": "[ByteString] -\u003e JSValue -\u003e Maybe a",
          "source": "src/Text-JSON-AttoJSON.html#lookupDeep",
          "type": "function"
        },
        "index": {
          "description": "Same as lookup but it can process nested Object ex lookupDeep user name JSObject user JSObject name JSString hoge Just hoge",
          "hierarchy": "Text JSON AttoJSON",
          "module": "Text.JSON.AttoJSON",
          "name": "lookupDeep",
          "normalized": "[ByteString]-\u003eJSValue-\u003eMaybe a",
          "package": "AttoJson",
          "partial": "Deep",
          "signature": "[ByteString]-\u003eJSValue-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AttoJson/docs/Text-JSON-AttoJSON.html#v:lookupDeep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse JSON source. Returns \u003ccode\u003e\u003ca\u003eJSValue\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e) if succeed, Returns \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e if failed.\n\u003c/p\u003e\u003cp\u003eThe input string should be UTF8-encoded.  Unicode escapes (e.g. \u003ccode\u003e\"\\u266B\"\u003c/code\u003e) are encoded in UTF8\n  by the parser, so incompatibilities will arise if you try to use AttoJSON with other encodings.\n\u003c/p\u003e",
          "module": "Text.JSON.AttoJSON",
          "name": "parseJSON",
          "package": "AttoJson",
          "signature": "ByteString -\u003e Either String JSValue",
          "source": "src/Text-JSON-AttoJSON.html#parseJSON",
          "type": "function"
        },
        "index": {
          "description": "Parse JSON source Returns JSValue Right if succeed Returns Left if failed The input string should be UTF8-encoded Unicode escapes e.g u266B are encoded in UTF8 by the parser so incompatibilities will arise if you try to use AttoJSON with other encodings",
          "hierarchy": "Text JSON AttoJSON",
          "module": "Text.JSON.AttoJSON",
          "name": "parseJSON",
          "normalized": "ByteString-\u003eEither String JSValue",
          "package": "AttoJson",
          "partial": "JSON",
          "signature": "ByteString-\u003eEither String JSValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AttoJson/docs/Text-JSON-AttoJSON.html#v:parseJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaybe version of \u003ccode\u003e\u003ca\u003eparseJSON\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.JSON.AttoJSON",
          "name": "readJSON",
          "package": "AttoJson",
          "signature": "ByteString -\u003e Maybe JSValue",
          "source": "src/Text-JSON-AttoJSON.html#readJSON",
          "type": "function"
        },
        "index": {
          "description": "Maybe version of parseJSON",
          "hierarchy": "Text JSON AttoJSON",
          "module": "Text.JSON.AttoJSON",
          "name": "readJSON",
          "normalized": "ByteString-\u003eMaybe JSValue",
          "package": "AttoJson",
          "partial": "JSON",
          "signature": "ByteString-\u003eMaybe JSValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AttoJson/docs/Text-JSON-AttoJSON.html#v:readJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint \u003ccode\u003e\u003ca\u003eJSValue\u003c/a\u003e\u003c/code\u003e as JSON source (not pretty).\n\u003c/p\u003e\u003cp\u003eThe output string will be in UTF8 (provided the JSValue was constructed with UTF8 strings).\n  Only characters that have to be escaped (control characters, \u003ccode\u003e\\\u003c/code\u003e, and \u003ccode\u003e\"\u003c/code\u003e) will be escaped.\n\u003c/p\u003e",
          "module": "Text.JSON.AttoJSON",
          "name": "showJSON",
          "package": "AttoJson",
          "signature": "JSValue -\u003e ByteString",
          "source": "src/Text-JSON-AttoJSON.html#showJSON",
          "type": "function"
        },
        "index": {
          "description": "Print JSValue as JSON source not pretty The output string will be in UTF8 provided the JSValue was constructed with UTF8 strings Only characters that have to be escaped control characters and will be escaped",
          "hierarchy": "Text JSON AttoJSON",
          "module": "Text.JSON.AttoJSON",
          "name": "showJSON",
          "normalized": "JSValue-\u003eByteString",
          "package": "AttoJson",
          "partial": "JSON",
          "signature": "JSValue-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AttoJson/docs/Text-JSON-AttoJSON.html#v:showJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eshowJSON\u003c/a\u003e\u003c/code\u003e, but escape non-ASCII characters as well.\n\u003c/p\u003e",
          "module": "Text.JSON.AttoJSON",
          "name": "showJSON'",
          "package": "AttoJson",
          "signature": "JSValue -\u003e ByteString",
          "source": "src/Text-JSON-AttoJSON.html#showJSON%27",
          "type": "function"
        },
        "index": {
          "description": "Same as showJSON but escape non-ASCII characters as well",
          "hierarchy": "Text JSON AttoJSON",
          "module": "Text.JSON.AttoJSON",
          "name": "showJSON'",
          "normalized": "JSValue-\u003eByteString",
          "package": "AttoJson",
          "partial": "JSON'",
          "signature": "JSValue-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AttoJson/docs/Text-JSON-AttoJSON.html#v:showJSON-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode into JSValue\n\u003c/p\u003e",
          "module": "Text.JSON.AttoJSON",
          "name": "toJSON",
          "package": "AttoJson",
          "signature": "a -\u003e JSValue",
          "source": "src/Text-JSON-AttoJSON.html#toJSON",
          "type": "method"
        },
        "index": {
          "description": "Encode into JSValue",
          "hierarchy": "Text JSON AttoJSON",
          "module": "Text.JSON.AttoJSON",
          "name": "toJSON",
          "normalized": "a-\u003eJSValue",
          "package": "AttoJson",
          "partial": "JSON",
          "signature": "a-\u003eJSValue",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AttoJson/docs/Text-JSON-AttoJSON.html#v:toJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate or Insert the value for field in Object.\n\u003c/p\u003e",
          "module": "Text.JSON.AttoJSON",
          "name": "updateField",
          "package": "AttoJson",
          "signature": "ByteString -\u003e a -\u003e JSValue -\u003e JSValue",
          "source": "src/Text-JSON-AttoJSON.html#updateField",
          "type": "function"
        },
        "index": {
          "description": "Update or Insert the value for field in Object",
          "hierarchy": "Text JSON AttoJSON",
          "module": "Text.JSON.AttoJSON",
          "name": "updateField",
          "normalized": "ByteString-\u003ea-\u003eJSValue-\u003eJSValue",
          "package": "AttoJson",
          "partial": "Field",
          "signature": "ByteString-\u003ea-\u003eJSValue-\u003eJSValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AttoJson/docs/Text-JSON-AttoJSON.html#v:updateField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.AttoJSON",
          "name": "updateFields",
          "package": "AttoJson",
          "signature": "[(ByteString, JSValue)] -\u003e JSValue -\u003e JSValue",
          "source": "src/Text-JSON-AttoJSON.html#updateFields",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSON AttoJSON",
          "module": "Text.JSON.AttoJSON",
          "name": "updateFields",
          "normalized": "[(ByteString,JSValue)]-\u003eJSValue-\u003eJSValue",
          "package": "AttoJson",
          "partial": "Fields",
          "signature": "[(ByteString,JSValue)]-\u003eJSValue-\u003eJSValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AttoJson/docs/Text-JSON-AttoJSON.html#v:updateFields"
      }
    }
  ]
]