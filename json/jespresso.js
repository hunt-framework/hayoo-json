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
        "word": "jespresso"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA wrapper around Network.HTTP to present a simpler interface for\n requesting pages via HTTP\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Browser.Simple",
          "name": "Simple",
          "package": "jespresso",
          "source": "src/Network-Browser-Simple.html",
          "type": "module"
        },
        "index": {
          "description": "wrapper around Network.HTTP to present simpler interface for requesting pages via HTTP",
          "hierarchy": "Network Browser Simple",
          "module": "Network.Browser.Simple",
          "name": "Simple",
          "package": "jespresso",
          "partial": "Simple",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/jespresso/docs/Network-Browser-Simple.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequests a web page specified by the URI, including optional\n cookies. Returns the contents of the page as a \u003ccode\u003eString\u003c/code\u003e and new\n cookies. Follows redirects, decodes the response body, if\n possible. Can fail if decoding is impossible.\n\u003c/p\u003e",
          "module": "Network.Browser.Simple",
          "name": "download",
          "package": "jespresso",
          "signature": "URI -\u003e [Cookie] -\u003e IO (String, [Cookie])",
          "source": "src/Network-Browser-Simple.html#download",
          "type": "function"
        },
        "index": {
          "description": "Requests web page specified by the URI including optional cookies Returns the contents of the page as String and new cookies Follows redirects decodes the response body if possible Can fail if decoding is impossible",
          "hierarchy": "Network Browser Simple",
          "module": "Network.Browser.Simple",
          "name": "download",
          "normalized": "URI-\u003e[Cookie]-\u003eIO(String,[Cookie])",
          "package": "jespresso",
          "signature": "URI-\u003e[Cookie]-\u003eIO(String,[Cookie])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jespresso/docs/Network-Browser-Simple.html#v:download"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExtraction and consolidation of JavaScript code in an HTML page.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Html.Consolidate",
          "name": "Consolidate",
          "package": "jespresso",
          "source": "src/Text-Html-Consolidate.html",
          "type": "module"
        },
        "index": {
          "description": "Extraction and consolidation of JavaScript code in an HTML page",
          "hierarchy": "Text Html Consolidate",
          "module": "Text.Html.Consolidate",
          "name": "Consolidate",
          "package": "jespresso",
          "partial": "Consolidate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/jespresso/docs/Text-Html-Consolidate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsolidation state\n\u003c/p\u003e",
          "module": "Text.Html.Consolidate",
          "name": "ConsState",
          "package": "jespresso",
          "source": "src/Text-Html-Consolidate.html#ConsState",
          "type": "data"
        },
        "index": {
          "description": "Consolidation state",
          "hierarchy": "Text Html Consolidate",
          "module": "Text.Html.Consolidate",
          "name": "ConsState",
          "package": "jespresso",
          "partial": "Cons State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/jespresso/docs/Text-Html-Consolidate.html#t:ConsState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOur XML transformation arrow type\n\u003c/p\u003e",
          "module": "Text.Html.Consolidate",
          "name": "TArr",
          "package": "jespresso",
          "source": "src/Text-Html-Consolidate.html#TArr",
          "type": "type"
        },
        "index": {
          "description": "Our XML transformation arrow type",
          "hierarchy": "Text Html Consolidate",
          "module": "Text.Html.Consolidate",
          "name": "TArr",
          "package": "jespresso",
          "partial": "TArr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/jespresso/docs/Text-Html-Consolidate.html#t:TArr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes an HTML page source as a string and an optional base URI\n (for resolving relative URI's) and produces an HTML page with all\n the scripts consolidated in one inline script element.\n\u003c/p\u003e",
          "module": "Text.Html.Consolidate",
          "name": "consolidate",
          "package": "jespresso",
          "signature": "String -\u003e Maybe URI -\u003e IO String",
          "source": "src/Text-Html-Consolidate.html#consolidate",
          "type": "function"
        },
        "index": {
          "description": "Takes an HTML page source as string and an optional base URI for resolving relative URI and produces an HTML page with all the scripts consolidated in one inline script element",
          "hierarchy": "Text Html Consolidate",
          "module": "Text.Html.Consolidate",
          "name": "consolidate",
          "normalized": "String-\u003eMaybe URI-\u003eIO String",
          "package": "jespresso",
          "signature": "String-\u003eMaybe URI-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jespresso/docs/Text-Html-Consolidate.html#v:consolidate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe consolidation function with an arrow interface.\n\u003c/p\u003e\u003cpre\u003e consolidateArr = extractJSArr \u003e\u003e\u003e insertJSArr\n\u003c/pre\u003e",
          "module": "Text.Html.Consolidate",
          "name": "consolidateArr",
          "package": "jespresso",
          "signature": "TArr XmlTree XmlTree",
          "source": "src/Text-Html-Consolidate.html#consolidateArr",
          "type": "function"
        },
        "index": {
          "description": "The consolidation function with an arrow interface consolidateArr extractJSArr insertJSArr",
          "hierarchy": "Text Html Consolidate",
          "module": "Text.Html.Consolidate",
          "name": "consolidateArr",
          "package": "jespresso",
          "partial": "Arr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jespresso/docs/Text-Html-Consolidate.html#v:consolidateArr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtacts all JavaScript code in the given\n HTML page source as a single program. Takes an optional base URI\n for resolving relative URI's.\n\u003c/p\u003e",
          "module": "Text.Html.Consolidate",
          "name": "extract",
          "package": "jespresso",
          "signature": "String -\u003e Maybe URI -\u003e IO (JavaScript ())",
          "source": "src/Text-Html-Consolidate.html#extract",
          "type": "function"
        },
        "index": {
          "description": "Extacts all JavaScript code in the given HTML page source as single program Takes an optional base URI for resolving relative URI",
          "hierarchy": "Text Html Consolidate",
          "module": "Text.Html.Consolidate",
          "name": "extract",
          "normalized": "String-\u003eMaybe URI-\u003eIO(JavaScript())",
          "package": "jespresso",
          "signature": "String-\u003eMaybe URI-\u003eIO(JavaScript())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jespresso/docs/Text-Html-Consolidate.html#v:extract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts all JavaScript from HTML. There shouldn't be any\n JavaScript in the resulting XmlTree\n\u003c/p\u003e",
          "module": "Text.Html.Consolidate",
          "name": "extractJSArr",
          "package": "jespresso",
          "signature": "TArr XmlTree (XmlTree, JavaScript ())",
          "source": "src/Text-Html-Consolidate.html#extractJSArr",
          "type": "function"
        },
        "index": {
          "description": "Extracts all JavaScript from HTML There shouldn be any JavaScript in the resulting XmlTree",
          "hierarchy": "Text Html Consolidate",
          "module": "Text.Html.Consolidate",
          "name": "extractJSArr",
          "normalized": "TArr XmlTree(XmlTree,JavaScript())",
          "package": "jespresso",
          "partial": "JSArr",
          "signature": "TArr XmlTree(XmlTree,JavaScript())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jespresso/docs/Text-Html-Consolidate.html#v:extractJSArr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtacts and pretty-prints all JavaScript code in the given\n HTML page source as a single program. Takes an optional base URI\n for resolving relative URI's.\n\u003c/p\u003e\u003cpre\u003e extractPretty s muri = liftM (show . prettyPrint) $ extract s muri\n\u003c/pre\u003e",
          "module": "Text.Html.Consolidate",
          "name": "extractPretty",
          "package": "jespresso",
          "signature": "String -\u003e Maybe URI -\u003e IO String",
          "source": "src/Text-Html-Consolidate.html#extractPretty",
          "type": "function"
        },
        "index": {
          "description": "Extacts and pretty-prints all JavaScript code in the given HTML page source as single program Takes an optional base URI for resolving relative URI extractPretty muri liftM show prettyPrint extract muri",
          "hierarchy": "Text Html Consolidate",
          "module": "Text.Html.Consolidate",
          "name": "extractPretty",
          "normalized": "String-\u003eMaybe URI-\u003eIO String",
          "package": "jespresso",
          "partial": "Pretty",
          "signature": "String-\u003eMaybe URI-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jespresso/docs/Text-Html-Consolidate.html#v:extractPretty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA constructor function for making an initial consolidation state\n (needed for running the arrows in the advanced API). Example usage:\n\u003c/p\u003e\u003cpre\u003e runXIOState (initialState $ initialConsState ignoreErrors muri []) $ someArrow\n\u003c/pre\u003e",
          "module": "Text.Html.Consolidate",
          "name": "initialConsState",
          "package": "jespresso",
          "signature": "Bool-\u003e Maybe URI-\u003e [Cookie]-\u003e ConsState",
          "type": "function"
        },
        "index": {
          "description": "constructor function for making an initial consolidation state needed for running the arrows in the advanced API Example usage runXIOState initialState initialConsState ignoreErrors muri someArrow",
          "hierarchy": "Text Html Consolidate",
          "module": "Text.Html.Consolidate",
          "name": "initialConsState",
          "normalized": "Bool-\u003eMaybe URI-\u003e[Cookie]-\u003eConsState",
          "package": "jespresso",
          "partial": "Cons State",
          "signature": "Bool-\u003eMaybe URI-\u003e[Cookie]-\u003eConsState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jespresso/docs/Text-Html-Consolidate.html#v:initialConsState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInserts JavaScript at the end of the HTML body.\n\u003c/p\u003e",
          "module": "Text.Html.Consolidate",
          "name": "insertJSArr",
          "package": "jespresso",
          "signature": "TArr (XmlTree, JavaScript a) XmlTree",
          "source": "src/Text-Html-Consolidate.html#insertJSArr",
          "type": "function"
        },
        "index": {
          "description": "Inserts JavaScript at the end of the HTML body",
          "hierarchy": "Text Html Consolidate",
          "module": "Text.Html.Consolidate",
          "name": "insertJSArr",
          "normalized": "TArr(XmlTree,JavaScript a)XmlTree",
          "package": "jespresso",
          "partial": "JSArr",
          "signature": "TArr(XmlTree,JavaScript a)XmlTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jespresso/docs/Text-Html-Consolidate.html#v:insertJSArr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper around the hxt parser with commonly used arguments\n\u003c/p\u003e",
          "module": "Text.Html.Consolidate",
          "name": "parseHTML",
          "package": "jespresso",
          "signature": "String -\u003e Maybe URI -\u003e TArr a XmlTree",
          "source": "src/Text-Html-Consolidate.html#parseHTML",
          "type": "function"
        },
        "index": {
          "description": "wrapper around the hxt parser with commonly used arguments",
          "hierarchy": "Text Html Consolidate",
          "module": "Text.Html.Consolidate",
          "name": "parseHTML",
          "normalized": "String-\u003eMaybe URI-\u003eTArr a XmlTree",
          "package": "jespresso",
          "partial": "HTML",
          "signature": "String-\u003eMaybe URI-\u003eTArr a XmlTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jespresso/docs/Text-Html-Consolidate.html#v:parseHTML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper around hxt to pretty print html out of the arrow\n\u003c/p\u003e",
          "module": "Text.Html.Consolidate",
          "name": "renderHTML",
          "package": "jespresso",
          "signature": "ConsState -\u003e TArr XmlTree XmlTree -\u003e IO String",
          "source": "src/Text-Html-Consolidate.html#renderHTML",
          "type": "function"
        },
        "index": {
          "description": "wrapper around hxt to pretty print html out of the arrow",
          "hierarchy": "Text Html Consolidate",
          "module": "Text.Html.Consolidate",
          "name": "renderHTML",
          "normalized": "ConsState-\u003eTArr XmlTree XmlTree-\u003eIO String",
          "package": "jespresso",
          "partial": "HTML",
          "signature": "ConsState-\u003eTArr XmlTree XmlTree-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jespresso/docs/Text-Html-Consolidate.html#v:renderHTML"
      }
    }
  ]
]