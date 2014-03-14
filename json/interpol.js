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
        "word": "interpol"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSupport module for the \u003ccode\u003einterpol\u003c/code\u003e preprocessor.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Interpol",
          "name": "Interpol",
          "package": "interpol",
          "source": "src/Text-Interpol.html",
          "type": "module"
        },
        "index": {
          "description": "Support module for the interpol preprocessor",
          "hierarchy": "Text Interpol",
          "module": "Text.Interpol",
          "name": "Interpol",
          "package": "interpol",
          "partial": "Interpol",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/interpol/docs/Text-Interpol.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Interpol",
          "name": "ToString",
          "package": "interpol",
          "source": "src/Text-Interpol.html#ToString",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text Interpol",
          "module": "Text.Interpol",
          "name": "ToString",
          "package": "interpol",
          "partial": "To String",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/interpol/docs/Text-Interpol.html#t:ToString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend a showable value to a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e in a smart way.  In\n particular, do \u003cem\u003enot\u003c/em\u003e \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, as this encloses it in\n \"quotes\".  So, depending on the type of the second parameter,\n \u003ccode\u003e\u003ca\u003e^-^\u003c/a\u003e\u003c/code\u003e is equivalent to one of the following\n\u003c/p\u003e\u003cpre\u003e\n   x ^-^ y = x ++ y\n   x ^-^ y = x ++ show y\n\u003c/pre\u003e\u003cp\u003eFor all intents and purposes, the \u003ccode\u003e\u003ca\u003eToString\u003c/a\u003e\u003c/code\u003e type-class is a\n wrapper around \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e, so any type that has an instance for \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e\n will also have an instance for \u003ccode\u003eInterpol\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Interpol",
          "name": "(^-^)",
          "package": "interpol",
          "signature": "a -\u003e b -\u003e String",
          "source": "src/Text-Interpol.html#%5E-%5E",
          "type": "function"
        },
        "index": {
          "description": "Append showable value to String in smart way In particular do not show String as this encloses it in quotes So depending on the type of the second parameter is equivalent to one of the following show For all intents and purposes the ToString type-class is wrapper around Show so any type that has an instance for Show will also have an instance for Interpol",
          "hierarchy": "Text Interpol",
          "module": "Text.Interpol",
          "name": "(^-^) ^-^",
          "normalized": "a-\u003eb-\u003eString",
          "package": "interpol",
          "signature": "a-\u003eb-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/interpol/docs/Text-Interpol.html#v:-94--45--94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend a showable value to a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e in a smart way.  In\n particular, do \u003cem\u003enot\u003c/em\u003e \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, as this encloses it in\n \"quotes\".  So, depending on the type of the second parameter,\n \u003ccode\u003e\u003ca\u003e^-^\u003c/a\u003e\u003c/code\u003e is equivalent to one of the following\n\u003c/p\u003e\u003cpre\u003e\n   x ^-^ y = x ++ y\n   x ^-^ y = x ++ show y\n\u003c/pre\u003e\u003cp\u003eFor all intents and purposes, the \u003ccode\u003e\u003ca\u003eToString\u003c/a\u003e\u003c/code\u003e type-class is a\n wrapper around \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e, so any type that has an instance for \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e\n will also have an instance for \u003ccode\u003eInterpol\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Interpol",
          "name": "interpol",
          "package": "interpol",
          "signature": "a -\u003e b -\u003e String",
          "source": "src/Text-Interpol.html#%5E-%5E",
          "type": "function"
        },
        "index": {
          "description": "Append showable value to String in smart way In particular do not show String as this encloses it in quotes So depending on the type of the second parameter is equivalent to one of the following show For all intents and purposes the ToString type-class is wrapper around Show so any type that has an instance for Show will also have an instance for Interpol",
          "hierarchy": "Text Interpol",
          "module": "Text.Interpol",
          "name": "interpol",
          "normalized": "a-\u003eb-\u003eString",
          "package": "interpol",
          "signature": "a-\u003eb-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/interpol/docs/Text-Interpol.html#v:interpol"
      }
    }
  ]
]