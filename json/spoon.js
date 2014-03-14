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
        "word": "spoon"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTwo functions for catching pureish exceptions in pure values. This library\n considers pureish to be any error call or undefined, failed pattern matches, \n arithmetic exceptions, and array bounds exceptions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Spoon",
          "name": "Spoon",
          "package": "spoon",
          "source": "src/Control-Spoon.html",
          "type": "module"
        },
        "index": {
          "description": "Two functions for catching pureish exceptions in pure values This library considers pureish to be any error call or undefined failed pattern matches arithmetic exceptions and array bounds exceptions",
          "hierarchy": "Control Spoon",
          "module": "Control.Spoon",
          "name": "Spoon",
          "package": "spoon",
          "partial": "Spoon",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/spoon/docs/Control-Spoon.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Spoon",
          "name": "Handles",
          "package": "spoon",
          "source": "src/Control-Spoon.html#Handles",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Spoon",
          "module": "Control.Spoon",
          "name": "Handles",
          "package": "spoon",
          "partial": "Handles",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/spoon/docs/Control-Spoon.html#t:Handles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Spoon",
          "name": "defaultHandles",
          "package": "spoon",
          "signature": "Handles a",
          "source": "src/Control-Spoon.html#defaultHandles",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Spoon",
          "module": "Control.Spoon",
          "name": "defaultHandles",
          "package": "spoon",
          "partial": "Handles",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spoon/docs/Control-Spoon.html#v:defaultHandles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a value to normal form and return Nothing if any exceptions are thrown during evaluation. For any error-free value, \u003ccode\u003espoon = Just\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Spoon",
          "name": "spoon",
          "package": "spoon",
          "signature": "a -\u003e Maybe a",
          "source": "src/Control-Spoon.html#spoon",
          "type": "function"
        },
        "index": {
          "description": "Evaluate value to normal form and return Nothing if any exceptions are thrown during evaluation For any error-free value spoon Just",
          "hierarchy": "Control Spoon",
          "module": "Control.Spoon",
          "name": "spoon",
          "normalized": "a-\u003eMaybe a",
          "package": "spoon",
          "signature": "a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spoon/docs/Control-Spoon.html#v:spoon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a value to normal form and return Nothing if any exceptions are thrown during evaluation. For any error-free value, \u003ccode\u003espoon = Just\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Spoon",
          "name": "spoonWithHandles",
          "package": "spoon",
          "signature": "Handles a -\u003e a -\u003e Maybe a",
          "source": "src/Control-Spoon.html#spoonWithHandles",
          "type": "function"
        },
        "index": {
          "description": "Evaluate value to normal form and return Nothing if any exceptions are thrown during evaluation For any error-free value spoon Just",
          "hierarchy": "Control Spoon",
          "module": "Control.Spoon",
          "name": "spoonWithHandles",
          "normalized": "Handles a-\u003ea-\u003eMaybe a",
          "package": "spoon",
          "partial": "With Handles",
          "signature": "Handles a-\u003ea-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spoon/docs/Control-Spoon.html#v:spoonWithHandles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003espoon\u003c/a\u003e\u003c/code\u003e, but only evaluates to WHNF.\n\u003c/p\u003e",
          "module": "Control.Spoon",
          "name": "teaspoon",
          "package": "spoon",
          "signature": "a -\u003e Maybe a",
          "source": "src/Control-Spoon.html#teaspoon",
          "type": "function"
        },
        "index": {
          "description": "Like spoon but only evaluates to WHNF",
          "hierarchy": "Control Spoon",
          "module": "Control.Spoon",
          "name": "teaspoon",
          "normalized": "a-\u003eMaybe a",
          "package": "spoon",
          "signature": "a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spoon/docs/Control-Spoon.html#v:teaspoon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Spoon",
          "name": "teaspoonWithHandles",
          "package": "spoon",
          "signature": "Handles a -\u003e a -\u003e Maybe a",
          "source": "src/Control-Spoon.html#teaspoonWithHandles",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Spoon",
          "module": "Control.Spoon",
          "name": "teaspoonWithHandles",
          "normalized": "Handles a-\u003ea-\u003eMaybe a",
          "package": "spoon",
          "partial": "With Handles",
          "signature": "Handles a-\u003ea-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spoon/docs/Control-Spoon.html#v:teaspoonWithHandles"
      }
    }
  ]
]