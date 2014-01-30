[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/placeholders/docs/Development-Placeholders.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines placeholders that you can use while coding to\n allow incomplete code to compile. They work just like \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e,\n but with improved error messages and compile-time warnings.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Development.Placeholders",
        "fct-package": "placeholders",
        "fct-signature": "module",
        "fct-source": "src/Development-Placeholders.html",
        "fct-type": "module",
        "title": "Placeholders"
      },
      "index": {
        "description": "This module defines placeholders that you can use while coding to allow incomplete code to compile They work just like undefined but with improved error messages and compile-time warnings",
        "hierarchy": "Development Placeholders",
        "module": "Development.Placeholders",
        "name": "Placeholders",
        "normalized": "",
        "package": "placeholders",
        "partial": "Placeholders",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/placeholders/docs/Development-Placeholders.html#t:PlaceholderException",
      "description": {
        "fct-descr": "\u003cp\u003eThrown when attempting to evaluate a placeholder at runtime.\n\u003c/p\u003e",
        "fct-module": "Development.Placeholders",
        "fct-package": "placeholders",
        "fct-signature": "data",
        "fct-source": "src/Development-Placeholders.html#PlaceholderException",
        "fct-type": "data",
        "title": "PlaceholderException"
      },
      "index": {
        "description": "Thrown when attempting to evaluate placeholder at runtime",
        "hierarchy": "Development Placeholders",
        "module": "Development.Placeholders",
        "name": "PlaceholderException",
        "normalized": "",
        "package": "placeholders",
        "partial": "Placeholder Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/placeholders/docs/Development-Placeholders.html#v:PlaceholderException",
      "description": {
        "fct-module": "Development.Placeholders",
        "fct-package": "placeholders",
        "fct-signature": "PlaceholderException String",
        "fct-source": "src/Development-Placeholders.html#PlaceholderException",
        "fct-type": "function",
        "title": "PlaceholderException"
      },
      "index": {
        "description": "",
        "hierarchy": "Development Placeholders",
        "module": "Development.Placeholders",
        "name": "PlaceholderException",
        "normalized": "",
        "package": "placeholders",
        "partial": "Placeholder Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/placeholders/docs/Development-Placeholders.html#v:notImplemented",
      "description": {
        "fct-descr": "\u003cp\u003eIndicates that this piece of code has not yet been implemented.\n\u003c/p\u003e\u003cpre\u003e$notImplemented = $(placeholder \"Unimplemented feature\")\u003c/pre\u003e",
        "fct-module": "Development.Placeholders",
        "fct-package": "placeholders",
        "fct-signature": "Q Exp",
        "fct-source": "src/Development-Placeholders.html#notImplemented",
        "fct-type": "function",
        "title": "notImplemented"
      },
      "index": {
        "description": "Indicates that this piece of code has not yet been implemented notImplemented placeholder Unimplemented feature",
        "hierarchy": "Development Placeholders",
        "module": "Development.Placeholders",
        "name": "notImplemented",
        "normalized": "",
        "package": "placeholders",
        "partial": "Implemented",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/placeholders/docs/Development-Placeholders.html#v:placeholder",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates an expression of any type that, if evaluated at runtime will\n throw a \u003ccode\u003e\u003ca\u003ePlaceholderException\u003c/a\u003e\u003c/code\u003e. It is therefore similar to \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e, except\n that the source location is automatically included. Also, a warning is\n generated at compile time so you won't forget to replace placeholders\n before packaging your code.\n\u003c/p\u003e",
        "fct-module": "Development.Placeholders",
        "fct-package": "placeholders",
        "fct-signature": "String -\u003e Q Exp",
        "fct-source": "src/Development-Placeholders.html#placeholder",
        "fct-type": "function",
        "title": "placeholder"
      },
      "index": {
        "description": "Generates an expression of any type that if evaluated at runtime will throw PlaceholderException It is therefore similar to error except that the source location is automatically included Also warning is generated at compile time so you won forget to replace placeholders before packaging your code",
        "hierarchy": "Development Placeholders",
        "module": "Development.Placeholders",
        "name": "placeholder",
        "normalized": "String-\u003eQ Exp",
        "package": "placeholders",
        "partial": "",
        "signature": "String-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/placeholders/docs/Development-Placeholders.html#v:placeholderNoWarning",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003eplaceholder\u003c/a\u003e\u003c/code\u003e, but does not generate a compiler warning. Use\n with care!\n\u003c/p\u003e",
        "fct-module": "Development.Placeholders",
        "fct-package": "placeholders",
        "fct-signature": "String -\u003e Q Exp",
        "fct-source": "src/Development-Placeholders.html#placeholderNoWarning",
        "fct-type": "function",
        "title": "placeholderNoWarning"
      },
      "index": {
        "description": "Similar to placeholder but does not generate compiler warning Use with care",
        "hierarchy": "Development Placeholders",
        "module": "Development.Placeholders",
        "name": "placeholderNoWarning",
        "normalized": "String-\u003eQ Exp",
        "package": "placeholders",
        "partial": "No Warning",
        "signature": "String-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/placeholders/docs/Development-Placeholders.html#v:todo",
      "description": {
        "fct-descr": "\u003cp\u003eIndicates unimplemented code or a known bug with a custom message.\n\u003c/p\u003e\u003cpre\u003e$(todo msg) = $(placeholder (\"TODO: \" ++ msg))\u003c/pre\u003e",
        "fct-module": "Development.Placeholders",
        "fct-package": "placeholders",
        "fct-signature": "String -\u003e Q Exp",
        "fct-source": "src/Development-Placeholders.html#todo",
        "fct-type": "function",
        "title": "todo"
      },
      "index": {
        "description": "Indicates unimplemented code or known bug with custom message todo msg placeholder TODO msg",
        "hierarchy": "Development Placeholders",
        "module": "Development.Placeholders",
        "name": "todo",
        "normalized": "String-\u003eQ Exp",
        "package": "placeholders",
        "partial": "",
        "signature": "String-\u003eQ Exp"
      }
    }
  }
]