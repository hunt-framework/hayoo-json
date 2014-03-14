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
        "word": "placeholders"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines placeholders that you can use while coding to\n allow incomplete code to compile. They work just like \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e,\n but with improved error messages and compile-time warnings.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Development.Placeholders",
          "name": "Placeholders",
          "package": "placeholders",
          "source": "src/Development-Placeholders.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines placeholders that you can use while coding to allow incomplete code to compile They work just like undefined but with improved error messages and compile-time warnings",
          "hierarchy": "Development Placeholders",
          "module": "Development.Placeholders",
          "name": "Placeholders",
          "package": "placeholders",
          "partial": "Placeholders",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/placeholders/docs/Development-Placeholders.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrown when attempting to evaluate a placeholder at runtime.\n\u003c/p\u003e",
          "module": "Development.Placeholders",
          "name": "PlaceholderException",
          "package": "placeholders",
          "source": "src/Development-Placeholders.html#PlaceholderException",
          "type": "data"
        },
        "index": {
          "description": "Thrown when attempting to evaluate placeholder at runtime",
          "hierarchy": "Development Placeholders",
          "module": "Development.Placeholders",
          "name": "PlaceholderException",
          "package": "placeholders",
          "partial": "Placeholder Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/placeholders/docs/Development-Placeholders.html#t:PlaceholderException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Development.Placeholders",
          "name": "PlaceholderException",
          "package": "placeholders",
          "signature": "PlaceholderException String",
          "source": "src/Development-Placeholders.html#PlaceholderException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Development Placeholders",
          "module": "Development.Placeholders",
          "name": "PlaceholderException",
          "package": "placeholders",
          "partial": "Placeholder Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/placeholders/docs/Development-Placeholders.html#v:PlaceholderException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicates that this piece of code has not yet been implemented.\n\u003c/p\u003e\u003cpre\u003e$notImplemented = $(placeholder \"Unimplemented feature\")\u003c/pre\u003e",
          "module": "Development.Placeholders",
          "name": "notImplemented",
          "package": "placeholders",
          "signature": "Q Exp",
          "source": "src/Development-Placeholders.html#notImplemented",
          "type": "function"
        },
        "index": {
          "description": "Indicates that this piece of code has not yet been implemented notImplemented placeholder Unimplemented feature",
          "hierarchy": "Development Placeholders",
          "module": "Development.Placeholders",
          "name": "notImplemented",
          "package": "placeholders",
          "partial": "Implemented",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/placeholders/docs/Development-Placeholders.html#v:notImplemented"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates an expression of any type that, if evaluated at runtime will\n throw a \u003ccode\u003e\u003ca\u003ePlaceholderException\u003c/a\u003e\u003c/code\u003e. It is therefore similar to \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e, except\n that the source location is automatically included. Also, a warning is\n generated at compile time so you won't forget to replace placeholders\n before packaging your code.\n\u003c/p\u003e",
          "module": "Development.Placeholders",
          "name": "placeholder",
          "package": "placeholders",
          "signature": "String -\u003e Q Exp",
          "source": "src/Development-Placeholders.html#placeholder",
          "type": "function"
        },
        "index": {
          "description": "Generates an expression of any type that if evaluated at runtime will throw PlaceholderException It is therefore similar to error except that the source location is automatically included Also warning is generated at compile time so you won forget to replace placeholders before packaging your code",
          "hierarchy": "Development Placeholders",
          "module": "Development.Placeholders",
          "name": "placeholder",
          "normalized": "String-\u003eQ Exp",
          "package": "placeholders",
          "signature": "String-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/placeholders/docs/Development-Placeholders.html#v:placeholder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003eplaceholder\u003c/a\u003e\u003c/code\u003e, but does not generate a compiler warning. Use\n with care!\n\u003c/p\u003e",
          "module": "Development.Placeholders",
          "name": "placeholderNoWarning",
          "package": "placeholders",
          "signature": "String -\u003e Q Exp",
          "source": "src/Development-Placeholders.html#placeholderNoWarning",
          "type": "function"
        },
        "index": {
          "description": "Similar to placeholder but does not generate compiler warning Use with care",
          "hierarchy": "Development Placeholders",
          "module": "Development.Placeholders",
          "name": "placeholderNoWarning",
          "normalized": "String-\u003eQ Exp",
          "package": "placeholders",
          "partial": "No Warning",
          "signature": "String-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/placeholders/docs/Development-Placeholders.html#v:placeholderNoWarning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicates unimplemented code or a known bug with a custom message.\n\u003c/p\u003e\u003cpre\u003e$(todo msg) = $(placeholder (\"TODO: \" ++ msg))\u003c/pre\u003e",
          "module": "Development.Placeholders",
          "name": "todo",
          "package": "placeholders",
          "signature": "String -\u003e Q Exp",
          "source": "src/Development-Placeholders.html#todo",
          "type": "function"
        },
        "index": {
          "description": "Indicates unimplemented code or known bug with custom message todo msg placeholder TODO msg",
          "hierarchy": "Development Placeholders",
          "module": "Development.Placeholders",
          "name": "todo",
          "normalized": "String-\u003eQ Exp",
          "package": "placeholders",
          "signature": "String-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/placeholders/docs/Development-Placeholders.html#v:todo"
      }
    }
  ]
]