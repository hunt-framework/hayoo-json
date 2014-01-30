[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/spoon/docs/Control-Spoon.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTwo functions for catching pureish exceptions in pure values. This library\n considers pureish to be any error call or undefined, failed pattern matches, \n arithmetic exceptions, and array bounds exceptions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Spoon",
        "fct-package": "spoon",
        "fct-signature": "module",
        "fct-source": "src/Control-Spoon.html",
        "fct-type": "module",
        "title": "Spoon"
      },
      "index": {
        "description": "Two functions for catching pureish exceptions in pure values This library considers pureish to be any error call or undefined failed pattern matches arithmetic exceptions and array bounds exceptions",
        "hierarchy": "Control Spoon",
        "module": "Control.Spoon",
        "name": "Spoon",
        "normalized": "",
        "package": "spoon",
        "partial": "Spoon",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/spoon/docs/Control-Spoon.html#t:Handles",
      "description": {
        "fct-module": "Control.Spoon",
        "fct-package": "spoon",
        "fct-signature": "type",
        "fct-source": "src/Control-Spoon.html#Handles",
        "fct-type": "type",
        "title": "Handles"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Spoon",
        "module": "Control.Spoon",
        "name": "Handles",
        "normalized": "",
        "package": "spoon",
        "partial": "Handles",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/spoon/docs/Control-Spoon.html#v:defaultHandles",
      "description": {
        "fct-module": "Control.Spoon",
        "fct-package": "spoon",
        "fct-signature": "Handles a",
        "fct-source": "src/Control-Spoon.html#defaultHandles",
        "fct-type": "function",
        "title": "defaultHandles"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Spoon",
        "module": "Control.Spoon",
        "name": "defaultHandles",
        "normalized": "",
        "package": "spoon",
        "partial": "Handles",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/spoon/docs/Control-Spoon.html#v:spoon",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a value to normal form and return Nothing if any exceptions are thrown during evaluation. For any error-free value, \u003ccode\u003espoon = Just\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Spoon",
        "fct-package": "spoon",
        "fct-signature": "a -\u003e Maybe a",
        "fct-source": "src/Control-Spoon.html#spoon",
        "fct-type": "function",
        "title": "spoon"
      },
      "index": {
        "description": "Evaluate value to normal form and return Nothing if any exceptions are thrown during evaluation For any error-free value spoon Just",
        "hierarchy": "Control Spoon",
        "module": "Control.Spoon",
        "name": "spoon",
        "normalized": "a-\u003eMaybe a",
        "package": "spoon",
        "partial": "",
        "signature": "a-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/spoon/docs/Control-Spoon.html#v:spoonWithHandles",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a value to normal form and return Nothing if any exceptions are thrown during evaluation. For any error-free value, \u003ccode\u003espoon = Just\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Spoon",
        "fct-package": "spoon",
        "fct-signature": "Handles a -\u003e a -\u003e Maybe a",
        "fct-source": "src/Control-Spoon.html#spoonWithHandles",
        "fct-type": "function",
        "title": "spoonWithHandles"
      },
      "index": {
        "description": "Evaluate value to normal form and return Nothing if any exceptions are thrown during evaluation For any error-free value spoon Just",
        "hierarchy": "Control Spoon",
        "module": "Control.Spoon",
        "name": "spoonWithHandles",
        "normalized": "Handles a-\u003ea-\u003eMaybe a",
        "package": "spoon",
        "partial": "With Handles",
        "signature": "Handles a-\u003ea-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/spoon/docs/Control-Spoon.html#v:teaspoon",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003espoon\u003c/a\u003e\u003c/code\u003e, but only evaluates to WHNF.\n\u003c/p\u003e",
        "fct-module": "Control.Spoon",
        "fct-package": "spoon",
        "fct-signature": "a -\u003e Maybe a",
        "fct-source": "src/Control-Spoon.html#teaspoon",
        "fct-type": "function",
        "title": "teaspoon"
      },
      "index": {
        "description": "Like spoon but only evaluates to WHNF",
        "hierarchy": "Control Spoon",
        "module": "Control.Spoon",
        "name": "teaspoon",
        "normalized": "a-\u003eMaybe a",
        "package": "spoon",
        "partial": "",
        "signature": "a-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/spoon/docs/Control-Spoon.html#v:teaspoonWithHandles",
      "description": {
        "fct-module": "Control.Spoon",
        "fct-package": "spoon",
        "fct-signature": "Handles a -\u003e a -\u003e Maybe a",
        "fct-source": "src/Control-Spoon.html#teaspoonWithHandles",
        "fct-type": "function",
        "title": "teaspoonWithHandles"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Spoon",
        "module": "Control.Spoon",
        "name": "teaspoonWithHandles",
        "normalized": "Handles a-\u003ea-\u003eMaybe a",
        "package": "spoon",
        "partial": "With Handles",
        "signature": "Handles a-\u003ea-\u003eMaybe a"
      }
    }
  }
]