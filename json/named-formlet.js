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
        "word": "named-formlet"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMini formlets library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Formlet",
          "name": "Formlet",
          "package": "named-formlet",
          "source": "src/Text-Formlet.html",
          "type": "module"
        },
        "index": {
          "description": "Mini formlets library",
          "hierarchy": "Text Formlet",
          "module": "Text.Formlet",
          "name": "Formlet",
          "package": "named-formlet",
          "partial": "Formlet",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/named-formlet/docs/Text-Formlet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple formlet data type, collects errors.\n\u003c/p\u003e",
          "module": "Text.Formlet",
          "name": "Formlet",
          "package": "named-formlet",
          "source": "src/Text-Formlet.html#Formlet",
          "type": "data"
        },
        "index": {
          "description": "simple formlet data type collects errors",
          "hierarchy": "Text Formlet",
          "module": "Text.Formlet",
          "name": "Formlet",
          "package": "named-formlet",
          "partial": "Formlet",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/named-formlet/docs/Text-Formlet.html#t:Formlet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Formlet",
          "name": "Formlet",
          "package": "named-formlet",
          "signature": "Formlet",
          "source": "src/Text-Formlet.html#Formlet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Formlet",
          "module": "Text.Formlet",
          "name": "Formlet",
          "package": "named-formlet",
          "partial": "Formlet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/named-formlet/docs/Text-Formlet.html#v:Formlet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a textarea input with a label.\n\u003c/p\u003e",
          "module": "Text.Formlet",
          "name": "areaInput",
          "package": "named-formlet",
          "signature": "Text -\u003e Text -\u003e Maybe Text -\u003e Formlet Text",
          "source": "src/Text-Formlet.html#areaInput",
          "type": "function"
        },
        "index": {
          "description": "Make textarea input with label",
          "hierarchy": "Text Formlet",
          "module": "Text.Formlet",
          "name": "areaInput",
          "normalized": "Text-\u003eText-\u003eMaybe Text-\u003eFormlet Text",
          "package": "named-formlet",
          "partial": "Input",
          "signature": "Text-\u003eText-\u003eMaybe Text-\u003eFormlet Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/named-formlet/docs/Text-Formlet.html#v:areaInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a drop down input with a label.\n\u003c/p\u003e",
          "module": "Text.Formlet",
          "name": "dropInput",
          "package": "named-formlet",
          "signature": "[(Text, Text)] -\u003e Text -\u003e Text -\u003e Text -\u003e Formlet Text",
          "source": "src/Text-Formlet.html#dropInput",
          "type": "function"
        },
        "index": {
          "description": "Make drop down input with label",
          "hierarchy": "Text Formlet",
          "module": "Text.Formlet",
          "name": "dropInput",
          "normalized": "[(Text,Text)]-\u003eText-\u003eText-\u003eText-\u003eFormlet Text",
          "package": "named-formlet",
          "partial": "Input",
          "signature": "[(Text,Text)]-\u003eText-\u003eText-\u003eText-\u003eFormlet Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/named-formlet/docs/Text-Formlet.html#v:dropInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup a real internal id from a slug.\n\u003c/p\u003e",
          "module": "Text.Formlet",
          "name": "findOption",
          "package": "named-formlet",
          "signature": "(o -\u003e Bool) -\u003e [o] -\u003e (o -\u003e internalid) -\u003e Either Text internalid",
          "source": "src/Text-Formlet.html#findOption",
          "type": "function"
        },
        "index": {
          "description": "Lookup real internal id from slug",
          "hierarchy": "Text Formlet",
          "module": "Text.Formlet",
          "name": "findOption",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e(a-\u003eb)-\u003eEither Text b",
          "package": "named-formlet",
          "partial": "Option",
          "signature": "(o-\u003eBool)-\u003e[o]-\u003e(o-\u003einternalid)-\u003eEither Text internalid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/named-formlet/docs/Text-Formlet.html#v:findOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a simple formlet.\n\u003c/p\u003e",
          "module": "Text.Formlet",
          "name": "formlet",
          "package": "named-formlet",
          "signature": "Text -\u003e (Maybe Text -\u003e Html) -\u003e Formlet Text",
          "source": "src/Text-Formlet.html#formlet",
          "type": "function"
        },
        "index": {
          "description": "Make simple formlet",
          "hierarchy": "Text Formlet",
          "module": "Text.Formlet",
          "name": "formlet",
          "normalized": "Text-\u003e(Maybe Text-\u003eHtml)-\u003eFormlet Text",
          "package": "named-formlet",
          "signature": "Text-\u003e(Maybe Text-\u003eHtml)-\u003eFormlet Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/named-formlet/docs/Text-Formlet.html#v:formlet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Formlet",
          "name": "formletHtml",
          "package": "named-formlet",
          "signature": "Params -\u003e Html",
          "source": "src/Text-Formlet.html#Formlet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Formlet",
          "module": "Text.Formlet",
          "name": "formletHtml",
          "normalized": "Params-\u003eHtml",
          "package": "named-formlet",
          "partial": "Html",
          "signature": "Params-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/named-formlet/docs/Text-Formlet.html#v:formletHtml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Formlet",
          "name": "formletName",
          "package": "named-formlet",
          "signature": "Maybe Text",
          "source": "src/Text-Formlet.html#Formlet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Formlet",
          "module": "Text.Formlet",
          "name": "formletName",
          "package": "named-formlet",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/named-formlet/docs/Text-Formlet.html#v:formletName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Formlet",
          "name": "formletValue",
          "package": "named-formlet",
          "signature": "Params -\u003e Either [Text] a",
          "source": "src/Text-Formlet.html#Formlet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Formlet",
          "module": "Text.Formlet",
          "name": "formletValue",
          "normalized": "Params-\u003eEither[Text]a",
          "package": "named-formlet",
          "partial": "Value",
          "signature": "Params-\u003eEither[Text]a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/named-formlet/docs/Text-Formlet.html#v:formletValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInteger parser.\n\u003c/p\u003e",
          "module": "Text.Formlet",
          "name": "integer",
          "package": "named-formlet",
          "signature": "Text -\u003e Either Text Integer",
          "source": "src/Text-Formlet.html#integer",
          "type": "function"
        },
        "index": {
          "description": "Integer parser",
          "hierarchy": "Text Formlet",
          "module": "Text.Formlet",
          "name": "integer",
          "normalized": "Text-\u003eEither Text Integer",
          "package": "named-formlet",
          "signature": "Text-\u003eEither Text Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/named-formlet/docs/Text-Formlet.html#v:integer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake an input optional (empty text is nothing).\n\u003c/p\u003e",
          "module": "Text.Formlet",
          "name": "opt",
          "package": "named-formlet",
          "signature": "Formlet Text -\u003e Formlet (Maybe Text)",
          "source": "src/Text-Formlet.html#opt",
          "type": "function"
        },
        "index": {
          "description": "Make an input optional empty text is nothing",
          "hierarchy": "Text Formlet",
          "module": "Text.Formlet",
          "name": "opt",
          "normalized": "Formlet Text-\u003eFormlet(Maybe Text)",
          "package": "named-formlet",
          "signature": "Formlet Text-\u003eFormlet(Maybe Text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/named-formlet/docs/Text-Formlet.html#v:opt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a list of options for use with the option formlet.\n\u003c/p\u003e",
          "module": "Text.Formlet",
          "name": "options",
          "package": "named-formlet",
          "signature": "(o -\u003e Text) -\u003e (o -\u003e Text) -\u003e [o] -\u003e [(Text, Text)]",
          "source": "src/Text-Formlet.html#options",
          "type": "function"
        },
        "index": {
          "description": "Make list of options for use with the option formlet",
          "hierarchy": "Text Formlet",
          "module": "Text.Formlet",
          "name": "options",
          "normalized": "(a-\u003eText)-\u003e(a-\u003eText)-\u003e[a]-\u003e[(Text,Text)]",
          "package": "named-formlet",
          "signature": "(o-\u003eText)-\u003e(o-\u003eText)-\u003e[o]-\u003e[(Text,Text)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/named-formlet/docs/Text-Formlet.html#v:options"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a form value.\n\u003c/p\u003e",
          "module": "Text.Formlet",
          "name": "parse",
          "package": "named-formlet",
          "signature": "(a -\u003e Either Text b) -\u003e Formlet a -\u003e Formlet b",
          "source": "src/Text-Formlet.html#parse",
          "type": "function"
        },
        "index": {
          "description": "Parse form value",
          "hierarchy": "Text Formlet",
          "module": "Text.Formlet",
          "name": "parse",
          "normalized": "(a-\u003eEither Text b)-\u003eFormlet a-\u003eFormlet b",
          "package": "named-formlet",
          "signature": "(a-\u003eEither Text b)-\u003eFormlet a-\u003eFormlet b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/named-formlet/docs/Text-Formlet.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake an input required (non-empty text).\n\u003c/p\u003e",
          "module": "Text.Formlet",
          "name": "req",
          "package": "named-formlet",
          "signature": "Formlet Text -\u003e Formlet Text",
          "source": "src/Text-Formlet.html#req",
          "type": "function"
        },
        "index": {
          "description": "Make an input required non-empty text",
          "hierarchy": "Text Formlet",
          "module": "Text.Formlet",
          "name": "req",
          "normalized": "Formlet Text-\u003eFormlet Text",
          "package": "named-formlet",
          "signature": "Formlet Text-\u003eFormlet Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/named-formlet/docs/Text-Formlet.html#v:req"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a submit (captioned) button.\n\u003c/p\u003e",
          "module": "Text.Formlet",
          "name": "submitInput",
          "package": "named-formlet",
          "signature": "Text -\u003e Text -\u003e Html",
          "source": "src/Text-Formlet.html#submitInput",
          "type": "function"
        },
        "index": {
          "description": "Make submit captioned button",
          "hierarchy": "Text Formlet",
          "module": "Text.Formlet",
          "name": "submitInput",
          "normalized": "Text-\u003eText-\u003eHtml",
          "package": "named-formlet",
          "partial": "Input",
          "signature": "Text-\u003eText-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/named-formlet/docs/Text-Formlet.html#v:submitInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a text input formlet with a label.\n\u003c/p\u003e",
          "module": "Text.Formlet",
          "name": "textInput",
          "package": "named-formlet",
          "signature": "Text -\u003e Text -\u003e Maybe Text -\u003e Formlet Text",
          "source": "src/Text-Formlet.html#textInput",
          "type": "function"
        },
        "index": {
          "description": "Make text input formlet with label",
          "hierarchy": "Text Formlet",
          "module": "Text.Formlet",
          "name": "textInput",
          "normalized": "Text-\u003eText-\u003eMaybe Text-\u003eFormlet Text",
          "package": "named-formlet",
          "partial": "Input",
          "signature": "Text-\u003eText-\u003eMaybe Text-\u003eFormlet Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/named-formlet/docs/Text-Formlet.html#v:textInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap/transform formlet's HTML.\n\u003c/p\u003e",
          "module": "Text.Formlet",
          "name": "wrap",
          "package": "named-formlet",
          "signature": "(Html -\u003e Html) -\u003e Formlet Text -\u003e Formlet Text",
          "source": "src/Text-Formlet.html#wrap",
          "type": "function"
        },
        "index": {
          "description": "Wrap transform formlet HTML",
          "hierarchy": "Text Formlet",
          "module": "Text.Formlet",
          "name": "wrap",
          "normalized": "(Html-\u003eHtml)-\u003eFormlet Text-\u003eFormlet Text",
          "package": "named-formlet",
          "signature": "(Html-\u003eHtml)-\u003eFormlet Text-\u003eFormlet Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/named-formlet/docs/Text-Formlet.html#v:wrap"
      }
    }
  ]
]