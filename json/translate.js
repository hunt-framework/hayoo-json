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
        "word": "translate"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Language.Detect",
          "name": "Detect",
          "package": "translate",
          "source": "src/Text-Language-Detect.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Language Detect",
          "module": "Text.Language.Detect",
          "name": "Detect",
          "package": "translate",
          "partial": "Detect",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/translate/docs/Text-Language-Detect.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a triple where the first component is the language code associated with\n   given text, the second is a boolean representing whether or not the detection interval \n   believes the language code is reliable for the given text, and the third is a\n   numeric value between 0-1.0 that represents the confidence level in the language code\n   for the given text.\n\u003c/p\u003e",
          "module": "Text.Language.Detect",
          "name": "detect",
          "package": "translate",
          "signature": "String -\u003e IO (Maybe (String, Bool, Double))",
          "source": "src/Text-Language-Detect.html#detect",
          "type": "function"
        },
        "index": {
          "description": "Returns triple where the first component is the language code associated with given text the second is boolean representing whether or not the detection interval believes the language code is reliable for the given text and the third is numeric value between that represents the confidence level in the language code for the given text",
          "hierarchy": "Text Language Detect",
          "module": "Text.Language.Detect",
          "name": "detect",
          "normalized": "String-\u003eIO(Maybe(String,Bool,Double))",
          "package": "translate",
          "signature": "String-\u003eIO(Maybe(String,Bool,Double))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/translate/docs/Text-Language-Detect.html#v:detect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the language code associated with the given text\n\u003c/p\u003e",
          "module": "Text.Language.Detect",
          "name": "detectCode",
          "package": "translate",
          "signature": "String -\u003e IO (Maybe String)",
          "source": "src/Text-Language-Detect.html#detectCode",
          "type": "function"
        },
        "index": {
          "description": "Returns the language code associated with the given text",
          "hierarchy": "Text Language Detect",
          "module": "Text.Language.Detect",
          "name": "detectCode",
          "normalized": "String-\u003eIO(Maybe String)",
          "package": "translate",
          "partial": "Code",
          "signature": "String-\u003eIO(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/translate/docs/Text-Language-Detect.html#v:detectCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Language.Internals",
          "name": "Internals",
          "package": "translate",
          "source": "src/Text-Language-Internals.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Language Internals",
          "module": "Text.Language.Internals",
          "name": "Internals",
          "package": "translate",
          "partial": "Internals",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/translate/docs/Text-Language-Internals.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Language.Internals",
          "name": "RBad",
          "package": "translate",
          "source": "src/Text-Language-Internals.html#RBad",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Language Internals",
          "module": "Text.Language.Internals",
          "name": "RBad",
          "package": "translate",
          "partial": "RBad",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/translate/docs/Text-Language-Internals.html#t:RBad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Language.Internals",
          "name": "RStatus",
          "package": "translate",
          "source": "src/Text-Language-Internals.html#RStatus",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Language Internals",
          "module": "Text.Language.Internals",
          "name": "RStatus",
          "package": "translate",
          "partial": "RStatus",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/translate/docs/Text-Language-Internals.html#t:RStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Language.Internals",
          "name": "(-)",
          "package": "translate",
          "signature": "(a -\u003e b) -\u003e a -\u003e b",
          "source": "src/Text-Language-Internals.html#-",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Language Internals",
          "module": "Text.Language.Internals",
          "name": "(-) -",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb",
          "package": "translate",
          "signature": "(a-\u003eb)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/translate/docs/Text-Language-Internals.html#v:-45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Language.Internals",
          "name": "(.)",
          "package": "translate",
          "signature": "a -\u003e (a -\u003e b) -\u003e b",
          "source": "src/Text-Language-Internals.html#.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Language Internals",
          "module": "Text.Language.Internals",
          "name": "(.) .",
          "normalized": "a-\u003e(a-\u003eb)-\u003eb",
          "package": "translate",
          "signature": "a-\u003e(a-\u003eb)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/translate/docs/Text-Language-Internals.html#v:."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Language.Internals",
          "name": "RBad",
          "package": "translate",
          "signature": "RBad",
          "source": "src/Text-Language-Internals.html#RBad",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Language Internals",
          "module": "Text.Language.Internals",
          "name": "RBad",
          "package": "translate",
          "partial": "RBad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/translate/docs/Text-Language-Internals.html#v:RBad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Language.Internals",
          "name": "RStatus",
          "package": "translate",
          "signature": "RStatus",
          "source": "src/Text-Language-Internals.html#RStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Language Internals",
          "module": "Text.Language.Internals",
          "name": "RStatus",
          "package": "translate",
          "partial": "RStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/translate/docs/Text-Language-Internals.html#v:RStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a request using Network.Curl\n\u003c/p\u003e",
          "module": "Text.Language.Internals",
          "name": "curl",
          "package": "translate",
          "signature": "String -\u003e IO (Maybe String)",
          "source": "src/Text-Language-Internals.html#curl",
          "type": "function"
        },
        "index": {
          "description": "Perform request using Network.Curl",
          "hierarchy": "Text Language Internals",
          "module": "Text.Language.Internals",
          "name": "curl",
          "normalized": "String-\u003eIO(Maybe String)",
          "package": "translate",
          "signature": "String-\u003eIO(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/translate/docs/Text-Language-Internals.html#v:curl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEscapes a special character with UTF-8.\n\u003c/p\u003e",
          "module": "Text.Language.Internals",
          "name": "escapeURIChar",
          "package": "translate",
          "signature": "(Char -\u003e Bool) -\u003e Char -\u003e String",
          "source": "src/Text-Language-Internals.html#escapeURIChar",
          "type": "function"
        },
        "index": {
          "description": "Escapes special character with UTF-8",
          "hierarchy": "Text Language Internals",
          "module": "Text.Language.Internals",
          "name": "escapeURIChar",
          "normalized": "(Char-\u003eBool)-\u003eChar-\u003eString",
          "package": "translate",
          "partial": "URIChar",
          "signature": "(Char-\u003eBool)-\u003eChar-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/translate/docs/Text-Language-Internals.html#v:escapeURIChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCan be used to make a string valid for use in a URI.\n\u003c/p\u003e",
          "module": "Text.Language.Internals",
          "name": "escapeURIString",
          "package": "translate",
          "signature": "(Char -\u003e Bool)-\u003e String-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Can be used to make string valid for use in URI",
          "hierarchy": "Text Language Internals",
          "module": "Text.Language.Internals",
          "name": "escapeURIString",
          "normalized": "(Char-\u003eBool)-\u003eString-\u003eString",
          "package": "translate",
          "partial": "URIString",
          "signature": "(Char-\u003eBool)-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/translate/docs/Text-Language-Internals.html#v:escapeURIString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCan be used to validate the URI sent to Google's API\n\u003c/p\u003e",
          "module": "Text.Language.Internals",
          "name": "escape_uri",
          "package": "translate",
          "signature": "String -\u003e String",
          "source": "src/Text-Language-Internals.html#escape_uri",
          "type": "function"
        },
        "index": {
          "description": "Can be used to validate the URI sent to Google API",
          "hierarchy": "Text Language Internals",
          "module": "Text.Language.Internals",
          "name": "escape_uri",
          "normalized": "String-\u003eString",
          "package": "translate",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/translate/docs/Text-Language-Internals.html#v:escape_uri"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a string with the given arguments ready to be sent\n   to Google's APIs\n\u003c/p\u003e",
          "module": "Text.Language.Internals",
          "name": "google_api",
          "package": "translate",
          "signature": "String -\u003e [(String, String)] -\u003e String",
          "source": "src/Text-Language-Internals.html#google_api",
          "type": "function"
        },
        "index": {
          "description": "Constructs string with the given arguments ready to be sent to Google APIs",
          "hierarchy": "Text Language Internals",
          "module": "Text.Language.Internals",
          "name": "google_api",
          "normalized": "String-\u003e[(String,String)]-\u003eString",
          "package": "translate",
          "signature": "String-\u003e[(String,String)]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/translate/docs/Text-Language-Internals.html#v:google_api"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Language.Internals",
          "name": "join",
          "package": "translate",
          "signature": "[a] -\u003e [[a]] -\u003e [a]",
          "source": "src/Text-Language-Internals.html#join",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Language Internals",
          "module": "Text.Language.Internals",
          "name": "join",
          "normalized": "[a]-\u003e[[a]]-\u003e[a]",
          "package": "translate",
          "signature": "[a]-\u003e[[a]]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/translate/docs/Text-Language-Internals.html#v:join"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Language.Internals",
          "name": "responseDetails",
          "package": "translate",
          "signature": "String",
          "source": "src/Text-Language-Internals.html#RBad",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Language Internals",
          "module": "Text.Language.Internals",
          "name": "responseDetails",
          "package": "translate",
          "partial": "Details",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/translate/docs/Text-Language-Internals.html#v:responseDetails"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Language.Internals",
          "name": "responseStatus",
          "package": "translate",
          "signature": "Integer",
          "source": "src/Text-Language-Internals.html#RStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Language Internals",
          "module": "Text.Language.Internals",
          "name": "responseStatus",
          "package": "translate",
          "partial": "Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/translate/docs/Text-Language-Internals.html#v:responseStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Language.Translate",
          "name": "Translate",
          "package": "translate",
          "source": "src/Text-Language-Translate.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Language Translate",
          "module": "Text.Language.Translate",
          "name": "Translate",
          "package": "translate",
          "partial": "Translate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/translate/docs/Text-Language-Translate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.Language.Translate\",\"Text.Translate\"]",
          "name": "translate",
          "package": "translate",
          "signature": "String -\u003e String -\u003e String -\u003e IO (Maybe String)",
          "source": "src/Text-Language-Translate.html#translate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/translate/docs/Text-Language-Translate.html#v:translate\",\"http://hackage.haskell.org/package/translate/docs/Text-Translate.html#v:translate\"]"
        },
        "index": {
          "hierarchy": "Text Language Translate",
          "module": "Text.Language.Translate",
          "name": "translate",
          "normalized": "String-\u003eString-\u003eString-\u003eIO(Maybe String)",
          "package": "translate",
          "signature": "String-\u003eString-\u003eString-\u003eIO(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/translate/docs/Text-Language-Translate.html#v:translate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Translate",
          "name": "Translate",
          "package": "translate",
          "source": "src/Text-Translate.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Translate",
          "module": "Text.Translate",
          "name": "Translate",
          "package": "translate",
          "partial": "Translate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/translate/docs/Text-Translate.html#"
      }
    }
  ]
]