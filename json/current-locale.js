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
        "word": "current-locale"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGet the current system locale in \u003ccode\u003e\u003ca\u003eLocale\u003c/a\u003e\u003c/code\u003e format.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.CurrentLocale",
          "name": "CurrentLocale",
          "package": "current-locale",
          "source": "src/System-CurrentLocale.html",
          "type": "module"
        },
        "index": {
          "description": "Get the current system locale in Locale format",
          "hierarchy": "System CurrentLocale",
          "module": "System.CurrentLocale",
          "name": "CurrentLocale",
          "package": "current-locale",
          "partial": "Current Locale",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/current-locale/docs/System-CurrentLocale.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the current system locale.\n\u003c/p\u003e",
          "module": "System.CurrentLocale",
          "name": "currentLocale",
          "package": "current-locale",
          "signature": "IO TimeLocale",
          "source": "src/System-CurrentLocale.html#currentLocale",
          "type": "function"
        },
        "index": {
          "description": "Get the current system locale",
          "hierarchy": "System CurrentLocale",
          "module": "System.CurrentLocale",
          "name": "currentLocale",
          "package": "current-locale",
          "partial": "Locale",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/current-locale/docs/System-CurrentLocale.html#v:currentLocale"
      }
    }
  ]
]