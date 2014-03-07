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
        "word": "hakyll-elm"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Web.Elm",
          "name": "Elm",
          "package": "hakyll-elm",
          "source": "src/Hakyll-Web-Elm.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hakyll Web Elm",
          "module": "Hakyll.Web.Elm",
          "name": "Elm",
          "package": "hakyll-elm",
          "partial": "Elm",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hakyll-elm/docs/Hakyll-Web-Elm.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompiles an elm file to a div and inline Javascript.\n\u003c/p\u003e\u003cp\u003eExpects elm-runtime.js to have already been loaded on the page.\n\u003c/p\u003e\u003cp\u003eWorks for files that only import from modules in the elm runtime.\n\u003c/p\u003e",
          "module": "Hakyll.Web.Elm",
          "name": "elmStandaloneCompiler",
          "package": "hakyll-elm",
          "signature": "Compiler (Item String)",
          "source": "src/Hakyll-Web-Elm.html#elmStandaloneCompiler",
          "type": "function"
        },
        "index": {
          "description": "Compiles an elm file to div and inline Javascript Expects elm-runtime.js to have already been loaded on the page Works for files that only import from modules in the elm runtime",
          "hierarchy": "Hakyll Web Elm",
          "module": "Hakyll.Web.Elm",
          "name": "elmStandaloneCompiler",
          "package": "hakyll-elm",
          "partial": "Standalone Compiler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll-elm/docs/Hakyll-Web-Elm.html#v:elmStandaloneCompiler"
      }
    }
  ]
]