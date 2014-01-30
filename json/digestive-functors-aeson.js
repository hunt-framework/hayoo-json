[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/digestive-functors-aeson/docs/Text-Digestive-Aeson.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRun digestive-functors forms against JSON.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Digestive.Aeson",
        "fct-package": "digestive-functors-aeson",
        "fct-signature": "module",
        "fct-source": "src/Text-Digestive-Aeson.html",
        "fct-type": "module",
        "title": "Aeson"
      },
      "index": {
        "description": "Run digestive-functors forms against JSON",
        "hierarchy": "Text Digestive Aeson",
        "module": "Text.Digestive.Aeson",
        "name": "Aeson",
        "normalized": "",
        "package": "digestive-functors-aeson",
        "partial": "Aeson",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/digestive-functors-aeson/docs/Text-Digestive-Aeson.html#v:digestJSON",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a JSON document and a form, attempt to use the JSON document to\nevaluation the form. If the form fails validation, then \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is\nreturned.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e     import Data.Aeson (json)\n     import Data.Attoparsec.Lazy (parse, maybeResult)\n     import Text.Digestive.Aeson (digestJSON)\n     ...\n     Just parsedJson \u003c- maybeResult . parse json \u003c$\u003e fetchJsonText\n     digestJSON \"\" myForm parsedJson\n\u003c/pre\u003e",
        "fct-module": "Text.Digestive.Aeson",
        "fct-package": "digestive-functors-aeson",
        "fct-signature": "Form v m a-\u003e Value-\u003e m (View v, Maybe a)",
        "fct-type": "function",
        "title": "digestJSON"
      },
      "index": {
        "description": "Given JSON document and form attempt to use the JSON document to evaluation the form If the form fails validation then Nothing is returned Example import Data.Aeson json import Data.Attoparsec.Lazy parse maybeResult import Text.Digestive.Aeson digestJSON Just parsedJson maybeResult parse json fetchJsonText digestJSON myForm parsedJson",
        "hierarchy": "Text Digestive Aeson",
        "module": "Text.Digestive.Aeson",
        "name": "digestJSON",
        "normalized": "Form a b c-\u003eValue-\u003eb(View a,Maybe c)",
        "package": "digestive-functors-aeson",
        "partial": "JSON",
        "signature": "Form v m a-\u003eValue-\u003em(View v,Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/digestive-functors-aeson/docs/Text-Digestive-Aeson.html#v:jsonErrors",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a \u003ccode\u003e\u003ca\u003eView\u003c/a\u003e\u003c/code\u003e and displays any errors in a hierachical format that matches\nthe expected input.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e     \u003e jsonErrors myForm\n     {\"person\":{\"name\":\"This field is required\"}}\n\u003c/pre\u003e",
        "fct-module": "Text.Digestive.Aeson",
        "fct-package": "digestive-functors-aeson",
        "fct-signature": "View a -\u003e Value",
        "fct-source": "src/Text-Digestive-Aeson.html#jsonErrors",
        "fct-type": "function",
        "title": "jsonErrors"
      },
      "index": {
        "description": "Takes View and displays any errors in hierachical format that matches the expected input Example jsonErrors myForm person name This field is required",
        "hierarchy": "Text Digestive Aeson",
        "module": "Text.Digestive.Aeson",
        "name": "jsonErrors",
        "normalized": "View a-\u003eValue",
        "package": "digestive-functors-aeson",
        "partial": "Errors",
        "signature": "View a-\u003eValue"
      }
    }
  }
]