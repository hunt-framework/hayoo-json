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
        "word": "yahoo-web-search"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Application ID\nQuery string\nContext string\nNumber of results to return\n",
          "module": "Text.Yahoo.ContextSearch",
          "name": "3AcontextQuery",
          "package": "yahoo-web-search",
          "signature": "UserString-\u003e UserString-\u003e UserString-\u003e Int-\u003e Query",
          "source": "http://hackage.haskell.org/package/yahoo-web-search/docs/src/Text-Yahoo-Internal.html#contextQuery",
          "type": "function"
        },
        "index": {
          "description": "Application ID Query string Context string Number of results to return",
          "hierarchy": "Text Yahoo ContextSearch",
          "module": "Text.Yahoo.ContextSearch",
          "name": "3AcontextQuery",
          "normalized": "UserString-\u003eUserString-\u003eUserString-\u003eInt-\u003eQuery",
          "package": "yahoo-web-search",
          "partial": "Acontext Query",
          "signature": "UserString-\u003eUserString-\u003eUserString-\u003eInt-\u003eQuery",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yahoo-web-search/docs/Text-Yahoo-ContextSearch.html#v:3AcontextQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003ctt\u003e\u003ca\u003econtextSearch\u003c/a\u003e\u003c/tt\u003e is like webSearch but performs a contextual search.\n",
          "module": "Text.Yahoo.ContextSearch",
          "name": "3AcontextSearch",
          "package": "yahoo-web-search",
          "signature": "Query -\u003e IO (Either Error ResultSet)",
          "source": "http://hackage.haskell.org/package/yahoo-web-search/docs/src/Text-Yahoo-ContextSearch.html#contextSearch",
          "type": "function"
        },
        "index": {
          "description": "contextSearch is like webSearch but performs contextual search",
          "hierarchy": "Text Yahoo ContextSearch",
          "module": "Text.Yahoo.ContextSearch",
          "name": "3AcontextSearch",
          "normalized": "Query-\u003eIO(Either Error ResultSet)",
          "package": "yahoo-web-search",
          "partial": "Acontext Search",
          "signature": "Query-\u003eIO(Either Error ResultSet)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yahoo-web-search/docs/Text-Yahoo-ContextSearch.html#v:3AcontextSearch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Perform a Related Suggestion query\n",
          "module": "Text.Yahoo.RelatedSuggestion",
          "name": "3ArelatedSuggest",
          "package": "yahoo-web-search",
          "signature": "RSQuery -\u003e IO (Either Error RSResultSet)",
          "source": "http://hackage.haskell.org/package/yahoo-web-search/docs/src/Text-Yahoo-RelatedSuggestion.html#relatedSuggest",
          "type": "function"
        },
        "index": {
          "description": "Perform Related Suggestion query",
          "hierarchy": "Text Yahoo RelatedSuggestion",
          "module": "Text.Yahoo.RelatedSuggestion",
          "name": "3ArelatedSuggest",
          "normalized": "RSQuery-\u003eIO(Either Error RSResultSet)",
          "package": "yahoo-web-search",
          "partial": "Arelated Suggest",
          "signature": "RSQuery-\u003eIO(Either Error RSResultSet)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yahoo-web-search/docs/Text-Yahoo-RelatedSuggestion.html#v:3ArelatedSuggest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Perform a Spelling Suggestion query\n",
          "module": "Text.Yahoo.SpellingSuggestion",
          "name": "3AspellingSuggest",
          "package": "yahoo-web-search",
          "signature": "RSQuery -\u003e IO (Either Error RSResultSet)",
          "source": "http://hackage.haskell.org/package/yahoo-web-search/docs/src/Text-Yahoo-SpellingSuggestion.html#spellingSuggest",
          "type": "function"
        },
        "index": {
          "description": "Perform Spelling Suggestion query",
          "hierarchy": "Text Yahoo SpellingSuggestion",
          "module": "Text.Yahoo.SpellingSuggestion",
          "name": "3AspellingSuggest",
          "normalized": "RSQuery-\u003eIO(Either Error RSResultSet)",
          "package": "yahoo-web-search",
          "partial": "Aspelling Suggest",
          "signature": "RSQuery-\u003eIO(Either Error RSResultSet)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yahoo-web-search/docs/Text-Yahoo-SpellingSuggestion.html#v:3AspellingSuggest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Yahoo.Types",
          "name": "3ACountry",
          "package": "yahoo-web-search",
          "source": "http://hackage.haskell.org/package/yahoo-web-search/docs/src/Text-Yahoo-Types.html#Country",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Yahoo Types",
          "module": "Text.Yahoo.Types",
          "name": "3ACountry",
          "package": "yahoo-web-search",
          "partial": "ACountry",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yahoo-web-search/docs/Text-Yahoo-Types.html#t:3ACountry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Yahoo.Types",
          "name": "3ADate",
          "package": "yahoo-web-search",
          "source": "http://hackage.haskell.org/package/yahoo-web-search/docs/src/Text-Yahoo-Types.html#Date",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Yahoo Types",
          "module": "Text.Yahoo.Types",
          "name": "3ADate",
          "package": "yahoo-web-search",
          "partial": "ADate",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yahoo-web-search/docs/Text-Yahoo-Types.html#t:3ADate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Yahoo.Types",
          "name": "3AError",
          "package": "yahoo-web-search",
          "source": "http://hackage.haskell.org/package/yahoo-web-search/docs/src/Text-Yahoo-Types.html#Error",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Yahoo Types",
          "module": "Text.Yahoo.Types",
          "name": "3AError",
          "package": "yahoo-web-search",
          "partial": "AError",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yahoo-web-search/docs/Text-Yahoo-Types.html#t:3AError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Yahoo.Types",
          "name": "3AFormat",
          "package": "yahoo-web-search",
          "source": "http://hackage.haskell.org/package/yahoo-web-search/docs/src/Text-Yahoo-Types.html#Format",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Yahoo Types",
          "module": "Text.Yahoo.Types",
          "name": "3AFormat",
          "package": "yahoo-web-search",
          "partial": "AFormat",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yahoo-web-search/docs/Text-Yahoo-Types.html#t:3AFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Yahoo.Types",
          "name": "3ALanguage",
          "package": "yahoo-web-search",
          "source": "http://hackage.haskell.org/package/yahoo-web-search/docs/src/Text-Yahoo-Types.html#Language",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Yahoo Types",
          "module": "Text.Yahoo.Types",
          "name": "3ALanguage",
          "package": "yahoo-web-search",
          "partial": "ALanguage",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yahoo-web-search/docs/Text-Yahoo-Types.html#t:3ALanguage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Yahoo.Types",
          "name": "3ALicense",
          "package": "yahoo-web-search",
          "source": "http://hackage.haskell.org/package/yahoo-web-search/docs/src/Text-Yahoo-Types.html#License",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Yahoo Types",
          "module": "Text.Yahoo.Types",
          "name": "3ALicense",
          "package": "yahoo-web-search",
          "partial": "ALicense",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yahoo-web-search/docs/Text-Yahoo-Types.html#t:3ALicense"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Yahoo.Types",
          "name": "3AMIME",
          "package": "yahoo-web-search",
          "source": "http://hackage.haskell.org/package/yahoo-web-search/docs/src/Text-Yahoo-Types.html#MIME",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Yahoo Types",
          "module": "Text.Yahoo.Types",
          "name": "3AMIME",
          "package": "yahoo-web-search",
          "partial": "AMIME",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yahoo-web-search/docs/Text-Yahoo-Types.html#t:3AMIME"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Yahoo.Types",
          "name": "3AQuery",
          "package": "yahoo-web-search",
          "source": "http://hackage.haskell.org/package/yahoo-web-search/docs/src/Text-Yahoo-Types.html#Query",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Yahoo Types",
          "module": "Text.Yahoo.Types",
          "name": "3AQuery",
          "package": "yahoo-web-search",
          "partial": "AQuery",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yahoo-web-search/docs/Text-Yahoo-Types.html#t:3AQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Yahoo.Types",
          "name": "3ARSQuery",
          "package": "yahoo-web-search",
          "source": "http://hackage.haskell.org/package/yahoo-web-search/docs/src/Text-Yahoo-Types.html#RSQuery",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Yahoo Types",
          "module": "Text.Yahoo.Types",
          "name": "3ARSQuery",
          "package": "yahoo-web-search",
          "partial": "ARSQuery",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yahoo-web-search/docs/Text-Yahoo-Types.html#t:3ARSQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Related Suggestion and Spelling Suggestion results\n",
          "module": "Text.Yahoo.Types",
          "name": "3ARSResultSet",
          "package": "yahoo-web-search",
          "source": "http://hackage.haskell.org/package/yahoo-web-search/docs/src/Text-Yahoo-Types.html#RSResultSet",
          "type": "type"
        },
        "index": {
          "description": "Related Suggestion and Spelling Suggestion results",
          "hierarchy": "Text Yahoo Types",
          "module": "Text.Yahoo.Types",
          "name": "3ARSResultSet",
          "package": "yahoo-web-search",
          "partial": "ARSResult Set",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yahoo-web-search/docs/Text-Yahoo-Types.html#t:3ARSResultSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Yahoo.Types",
          "name": "3ARegion",
          "package": "yahoo-web-search",
          "source": "http://hackage.haskell.org/package/yahoo-web-search/docs/src/Text-Yahoo-Types.html#Region",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Yahoo Types",
          "module": "Text.Yahoo.Types",
          "name": "3ARegion",
          "package": "yahoo-web-search",
          "partial": "ARegion",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yahoo-web-search/docs/Text-Yahoo-Types.html#t:3ARegion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Yahoo.Types",
          "name": "3AResult",
          "package": "yahoo-web-search",
          "source": "http://hackage.haskell.org/package/yahoo-web-search/docs/src/Text-Yahoo-Types.html#Result",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Yahoo Types",
          "module": "Text.Yahoo.Types",
          "name": "3AResult",
          "package": "yahoo-web-search",
          "partial": "AResult",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yahoo-web-search/docs/Text-Yahoo-Types.html#t:3AResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Yahoo.Types",
          "name": "3AResultSet",
          "package": "yahoo-web-search",
          "source": "http://hackage.haskell.org/package/yahoo-web-search/docs/src/Text-Yahoo-Types.html#ResultSet",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Yahoo Types",
          "module": "Text.Yahoo.Types",
          "name": "3AResultSet",
          "package": "yahoo-web-search",
          "partial": "AResult Set",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yahoo-web-search/docs/Text-Yahoo-Types.html#t:3AResultSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Yahoo.Types",
          "name": "3ASize",
          "package": "yahoo-web-search",
          "source": "http://hackage.haskell.org/package/yahoo-web-search/docs/src/Text-Yahoo-Types.html#Size",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Yahoo Types",
          "module": "Text.Yahoo.Types",
          "name": "3ASize",
          "package": "yahoo-web-search",
          "partial": "ASize",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yahoo-web-search/docs/Text-Yahoo-Types.html#t:3ASize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Yahoo.Types",
          "name": "3ASubscription",
          "package": "yahoo-web-search",
          "source": "http://hackage.haskell.org/package/yahoo-web-search/docs/src/Text-Yahoo-Types.html#Subscription",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Yahoo Types",
          "module": "Text.Yahoo.Types",
          "name": "3ASubscription",
          "package": "yahoo-web-search",
          "partial": "ASubscription",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yahoo-web-search/docs/Text-Yahoo-Types.html#t:3ASubscription"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Yahoo.Types",
          "name": "3AType",
          "package": "yahoo-web-search",
          "source": "http://hackage.haskell.org/package/yahoo-web-search/docs/src/Text-Yahoo-Types.html#Type",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Yahoo Types",
          "module": "Text.Yahoo.Types",
          "name": "3AType",
          "package": "yahoo-web-search",
          "partial": "AType",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yahoo-web-search/docs/Text-Yahoo-Types.html#t:3AType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Yahoo.Types",
          "name": "3AURL",
          "package": "yahoo-web-search",
          "source": "http://hackage.haskell.org/package/yahoo-web-search/docs/src/Text-Yahoo-Types.html#URL",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Yahoo Types",
          "module": "Text.Yahoo.Types",
          "name": "3AURL",
          "package": "yahoo-web-search",
          "partial": "AURL",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yahoo-web-search/docs/Text-Yahoo-Types.html#t:3AURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Yahoo.Types",
          "name": "3AUserString",
          "package": "yahoo-web-search",
          "source": "http://hackage.haskell.org/package/yahoo-web-search/docs/src/Text-Yahoo-Types.html#UserString",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Yahoo Types",
          "module": "Text.Yahoo.Types",
          "name": "3AUserString",
          "package": "yahoo-web-search",
          "partial": "AUser String",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yahoo-web-search/docs/Text-Yahoo-Types.html#t:3AUserString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Coerce a \u003ctt\u003e\u003ca\u003eUserString\u003c/a\u003e\u003c/tt\u003e to a \u003ctt\u003e\u003ca\u003eString\u003c/a\u003e\u003c/tt\u003e\n",
          "module": "Text.Yahoo.Types",
          "name": "3Asanitize",
          "package": "yahoo-web-search",
          "signature": "UserString -\u003e String",
          "source": "http://hackage.haskell.org/package/yahoo-web-search/docs/src/Text-Yahoo-Types.html#sanitize",
          "type": "function"
        },
        "index": {
          "description": "Coerce UserString to String",
          "hierarchy": "Text Yahoo Types",
          "module": "Text.Yahoo.Types",
          "name": "3Asanitize",
          "normalized": "UserString-\u003eString",
          "package": "yahoo-web-search",
          "partial": "Asanitize",
          "signature": "UserString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yahoo-web-search/docs/Text-Yahoo-Types.html#v:3Asanitize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Application ID\nQuery string\nNumber of results to return\n",
          "module": "Text.Yahoo.WebSearch",
          "name": "3AsimpleQuery",
          "package": "yahoo-web-search",
          "signature": "UserString-\u003e UserString-\u003e Int-\u003e Query",
          "source": "http://hackage.haskell.org/package/yahoo-web-search/docs/src/Text-Yahoo-Internal.html#simpleQuery",
          "type": "function"
        },
        "index": {
          "description": "Application ID Query string Number of results to return",
          "hierarchy": "Text Yahoo WebSearch",
          "module": "Text.Yahoo.WebSearch",
          "name": "3AsimpleQuery",
          "normalized": "UserString-\u003eUserString-\u003eInt-\u003eQuery",
          "package": "yahoo-web-search",
          "partial": "Asimple Query",
          "signature": "UserString-\u003eUserString-\u003eInt-\u003eQuery",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yahoo-web-search/docs/Text-Yahoo-WebSearch.html#v:3AsimpleQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003ctt\u003e\u003ca\u003ewebSearch\u003c/a\u003e\u003c/tt\u003e returns as a \u003ctt\u003e\u003ca\u003eResultSet\u003c/a\u003e\u003c/tt\u003e the Yahoo results matching \u003ctt\u003e\u003ca\u003eQuery\u003c/a\u003e\u003c/tt\u003e.\n",
          "module": "Text.Yahoo.WebSearch",
          "name": "3AwebSearch",
          "package": "yahoo-web-search",
          "signature": "Query -\u003e IO (Either Error ResultSet)",
          "source": "http://hackage.haskell.org/package/yahoo-web-search/docs/src/Text-Yahoo-WebSearch.html#webSearch",
          "type": "function"
        },
        "index": {
          "description": "webSearch returns as ResultSet the Yahoo results matching Query",
          "hierarchy": "Text Yahoo WebSearch",
          "module": "Text.Yahoo.WebSearch",
          "name": "3AwebSearch",
          "normalized": "Query-\u003eIO(Either Error ResultSet)",
          "package": "yahoo-web-search",
          "partial": "Aweb Search",
          "signature": "Query-\u003eIO(Either Error ResultSet)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yahoo-web-search/docs/Text-Yahoo-WebSearch.html#v:3AwebSearch"
      }
    }
  ]
]