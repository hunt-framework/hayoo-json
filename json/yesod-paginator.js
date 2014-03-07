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
        "word": "yesod-paginator"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Paginator.Widget",
          "name": "Widget",
          "package": "yesod-paginator",
          "source": "src/Yesod-Paginator-Widget.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Yesod Paginator Widget",
          "module": "Yesod.Paginator.Widget",
          "name": "Widget",
          "package": "yesod-paginator",
          "partial": "Widget",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yesod-paginator/docs/Yesod-Paginator-Widget.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecurrentPage, itemsPerPage, totalItems -\u003e widget\n\u003c/p\u003e",
          "module": "Yesod.Paginator.Widget",
          "name": "PageWidget",
          "package": "yesod-paginator",
          "source": "src/Yesod-Paginator-Widget.html#PageWidget",
          "type": "type"
        },
        "index": {
          "description": "currentPage itemsPerPage totalItems widget",
          "hierarchy": "Yesod Paginator Widget",
          "module": "Yesod.Paginator.Widget",
          "name": "PageWidget",
          "package": "yesod-paginator",
          "partial": "Page Widget",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yesod-paginator/docs/Yesod-Paginator-Widget.html#t:PageWidget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Paginator.Widget",
          "name": "PageWidgetConfig",
          "package": "yesod-paginator",
          "source": "src/Yesod-Paginator-Widget.html#PageWidgetConfig",
          "type": "data"
        },
        "index": {
          "hierarchy": "Yesod Paginator Widget",
          "module": "Yesod.Paginator.Widget",
          "name": "PageWidgetConfig",
          "package": "yesod-paginator",
          "partial": "Page Widget Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yesod-paginator/docs/Yesod-Paginator-Widget.html#t:PageWidgetConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Paginator.Widget",
          "name": "PageWidgetConfig",
          "package": "yesod-paginator",
          "signature": "PageWidgetConfig",
          "source": "src/Yesod-Paginator-Widget.html#PageWidgetConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Paginator Widget",
          "module": "Yesod.Paginator.Widget",
          "name": "PageWidgetConfig",
          "package": "yesod-paginator",
          "partial": "Page Widget Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-paginator/docs/Yesod-Paginator-Widget.html#v:PageWidgetConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether to list pages in ascending order.\n\u003c/p\u003e",
          "module": "Yesod.Paginator.Widget",
          "name": "ascending",
          "package": "yesod-paginator",
          "signature": "Bool",
          "source": "src/Yesod-Paginator-Widget.html#PageWidgetConfig",
          "type": "function"
        },
        "index": {
          "description": "Whether to list pages in ascending order",
          "hierarchy": "Yesod Paginator Widget",
          "module": "Yesod.Paginator.Widget",
          "name": "ascending",
          "package": "yesod-paginator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-paginator/docs/Yesod-Paginator-Widget.html#v:ascending"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault widget config provided for easy overriding of only some fields.\n\u003c/p\u003e",
          "module": "Yesod.Paginator.Widget",
          "name": "defaultPageWidgetConfig",
          "package": "yesod-paginator",
          "signature": "PageWidgetConfig",
          "source": "src/Yesod-Paginator-Widget.html#defaultPageWidgetConfig",
          "type": "function"
        },
        "index": {
          "description": "Default widget config provided for easy overriding of only some fields",
          "hierarchy": "Yesod Paginator Widget",
          "module": "Yesod.Paginator.Widget",
          "name": "defaultPageWidgetConfig",
          "package": "yesod-paginator",
          "partial": "Page Widget Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-paginator/docs/Yesod-Paginator-Widget.html#v:defaultPageWidgetConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Paginator.Widget",
          "name": "defaultWidget",
          "package": "yesod-paginator",
          "signature": "PageWidget m",
          "source": "src/Yesod-Paginator-Widget.html#defaultWidget",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Paginator Widget",
          "module": "Yesod.Paginator.Widget",
          "name": "defaultWidget",
          "package": "yesod-paginator",
          "partial": "Widget",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-paginator/docs/Yesod-Paginator-Widget.html#v:defaultWidget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elooks up the \"p\" GET param and converts it to an Int. returns a\n   default of 1 when conversion fails.\n\u003c/p\u003e",
          "module": "Yesod.Paginator.Widget",
          "name": "getCurrentPage",
          "package": "yesod-paginator",
          "signature": "HandlerT m IO Int",
          "source": "src/Yesod-Paginator-Widget.html#getCurrentPage",
          "type": "function"
        },
        "index": {
          "description": "looks up the GET param and converts it to an Int returns default of when conversion fails",
          "hierarchy": "Yesod Paginator Widget",
          "module": "Yesod.Paginator.Widget",
          "name": "getCurrentPage",
          "package": "yesod-paginator",
          "partial": "Current Page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-paginator/docs/Yesod-Paginator-Widget.html#v:getCurrentPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdditional classes for top level list\n\u003c/p\u003e",
          "module": "Yesod.Paginator.Widget",
          "name": "listClasses",
          "package": "yesod-paginator",
          "signature": "[Text]",
          "source": "src/Yesod-Paginator-Widget.html#PageWidgetConfig",
          "type": "function"
        },
        "index": {
          "description": "Additional classes for top level list",
          "hierarchy": "Yesod Paginator Widget",
          "module": "Yesod.Paginator.Widget",
          "name": "listClasses",
          "normalized": "[Text]",
          "package": "yesod-paginator",
          "partial": "Classes",
          "signature": "[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-paginator/docs/Yesod-Paginator-Widget.html#v:listClasses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe text for the 'next page' link.\n\u003c/p\u003e",
          "module": "Yesod.Paginator.Widget",
          "name": "nextText",
          "package": "yesod-paginator",
          "signature": "Text",
          "source": "src/Yesod-Paginator-Widget.html#PageWidgetConfig",
          "type": "function"
        },
        "index": {
          "description": "The text for the next page link",
          "hierarchy": "Yesod Paginator Widget",
          "module": "Yesod.Paginator.Widget",
          "name": "nextText",
          "package": "yesod-paginator",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-paginator/docs/Yesod-Paginator-Widget.html#v:nextText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of page links to show\n\u003c/p\u003e",
          "module": "Yesod.Paginator.Widget",
          "name": "pageCount",
          "package": "yesod-paginator",
          "signature": "Int",
          "source": "src/Yesod-Paginator-Widget.html#PageWidgetConfig",
          "type": "function"
        },
        "index": {
          "description": "The number of page links to show",
          "hierarchy": "Yesod Paginator Widget",
          "module": "Yesod.Paginator.Widget",
          "name": "pageCount",
          "package": "yesod-paginator",
          "partial": "Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-paginator/docs/Yesod-Paginator-Widget.html#v:pageCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA widget showing pagination links. Follows bootstrap principles.\n   Utilizes a \"p\" GET param but leaves all other GET params intact.\n\u003c/p\u003e",
          "module": "Yesod.Paginator.Widget",
          "name": "paginationWidget",
          "package": "yesod-paginator",
          "signature": "PageWidgetConfig -\u003e PageWidget m",
          "source": "src/Yesod-Paginator-Widget.html#paginationWidget",
          "type": "function"
        },
        "index": {
          "description": "widget showing pagination links Follows bootstrap principles Utilizes GET param but leaves all other GET params intact",
          "hierarchy": "Yesod Paginator Widget",
          "module": "Yesod.Paginator.Widget",
          "name": "paginationWidget",
          "normalized": "PageWidgetConfig-\u003ePageWidget a",
          "package": "yesod-paginator",
          "partial": "Widget",
          "signature": "PageWidgetConfig-\u003ePageWidget m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-paginator/docs/Yesod-Paginator-Widget.html#v:paginationWidget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe text for the 'previous page' link.\n\u003c/p\u003e",
          "module": "Yesod.Paginator.Widget",
          "name": "prevText",
          "package": "yesod-paginator",
          "signature": "Text",
          "source": "src/Yesod-Paginator-Widget.html#PageWidgetConfig",
          "type": "function"
        },
        "index": {
          "description": "The text for the previous page link",
          "hierarchy": "Yesod Paginator Widget",
          "module": "Yesod.Paginator.Widget",
          "name": "prevText",
          "package": "yesod-paginator",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-paginator/docs/Yesod-Paginator-Widget.html#v:prevText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether to show an ellipsis if there are\n   more pages than pageCount\n\u003c/p\u003e",
          "module": "Yesod.Paginator.Widget",
          "name": "showEllipsis",
          "package": "yesod-paginator",
          "signature": "Bool",
          "source": "src/Yesod-Paginator-Widget.html#PageWidgetConfig",
          "type": "function"
        },
        "index": {
          "description": "Whether to show an ellipsis if there are more pages than pageCount",
          "hierarchy": "Yesod Paginator Widget",
          "module": "Yesod.Paginator.Widget",
          "name": "showEllipsis",
          "package": "yesod-paginator",
          "partial": "Ellipsis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-paginator/docs/Yesod-Paginator-Widget.html#v:showEllipsis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInspiration from a concept by ajdunlap:\n      \u003ca\u003ehttp://hackage.haskell.org/package/yesod-paginate\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eBut uses an entirely different approach.\n\u003c/p\u003e\u003cp\u003eThere are two pagination functions. One for arbitrary items where you\n provide the list of things to be paginated:\n\u003c/p\u003e\u003cpre\u003e getSomeRoute = do\n     things' \u003c- getAllThings\n\n     (things, widget) \u003c- paginate 10 things'\n\n     defaultLayout $ do\n         [whamlet|\n             $forall thing \u003c- things\n                 ^{showThing thing}\n\n             \u003cdiv .pagination\u003e\n                  ^{widget}\n             |]\n\u003c/pre\u003e\u003cp\u003eAnd another for paginating directly out of the database, you provide\n the same filters as you would to \u003ccode\u003eselectList\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e getSomeRoute something = do\n     -- note: things is [Entity val] just like selectList returns\n     (things, widget) \u003c- runDB $ selectPaginated 10 [SomeThing ==. something] []\n\n     defaultLayout $ do\n         [whamlet|\n             $forall thing \u003c- things\n                 ^{showThing $ entityVal thing}\n\n             \u003cdiv .pagination\u003e\n                  ^{widget}\n             |]\n\u003c/pre\u003e\u003cp\u003eBoth functions return a tuple: the first element being the list of\n items (or Entities) to display on this page and the second being a\n widget showing the pagination navagation links.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Yesod.Paginator",
          "name": "Paginator",
          "package": "yesod-paginator",
          "source": "src/Yesod-Paginator.html",
          "type": "module"
        },
        "index": {
          "description": "Inspiration from concept by ajdunlap http hackage.haskell.org package yesod-paginate But uses an entirely different approach There are two pagination functions One for arbitrary items where you provide the list of things to be paginated getSomeRoute do things getAllThings things widget paginate things defaultLayout do whamlet forall thing things showThing thing div pagination widget And another for paginating directly out of the database you provide the same filters as you would to selectList getSomeRoute something do note things is Entity val just like selectList returns things widget runDB selectPaginated SomeThing something defaultLayout do whamlet forall thing things showThing entityVal thing div pagination widget Both functions return tuple the first element being the list of items or Entities to display on this page and the second being widget showing the pagination navagation links",
          "hierarchy": "Yesod Paginator",
          "module": "Yesod.Paginator",
          "name": "Paginator",
          "package": "yesod-paginator",
          "partial": "Paginator",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yesod-paginator/docs/Yesod-Paginator.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Paginator",
          "name": "paginate",
          "package": "yesod-paginator",
          "signature": "Int -\u003e [a] -\u003e HandlerT m IO ([a], WidgetT m IO ())",
          "source": "src/Yesod-Paginator.html#paginate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Paginator",
          "module": "Yesod.Paginator",
          "name": "paginate",
          "normalized": "Int-\u003e[a]-\u003eHandlerT b IO([a],WidgetT b IO())",
          "package": "yesod-paginator",
          "signature": "Int-\u003e[a]-\u003eHandlerT m IO([a],WidgetT m IO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-paginator/docs/Yesod-Paginator.html#v:paginate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Paginator",
          "name": "paginateWith",
          "package": "yesod-paginator",
          "signature": "PageWidget m -\u003e Int -\u003e [a] -\u003e HandlerT m IO ([a], WidgetT m IO ())",
          "source": "src/Yesod-Paginator.html#paginateWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Paginator",
          "module": "Yesod.Paginator",
          "name": "paginateWith",
          "normalized": "PageWidget a-\u003eInt-\u003e[b]-\u003eHandlerT a IO([b],WidgetT a IO())",
          "package": "yesod-paginator",
          "partial": "With",
          "signature": "PageWidget m-\u003eInt-\u003e[a]-\u003eHandlerT m IO([a],WidgetT m IO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-paginator/docs/Yesod-Paginator.html#v:paginateWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Paginator",
          "name": "selectPaginated",
          "package": "yesod-paginator",
          "signature": "Int -\u003e [Filter val] -\u003e [SelectOpt val] -\u003e YesodDB m ([Entity val], WidgetT m IO ())",
          "source": "src/Yesod-Paginator.html#selectPaginated",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Paginator",
          "module": "Yesod.Paginator",
          "name": "selectPaginated",
          "normalized": "Int-\u003e[Filter a]-\u003e[SelectOpt a]-\u003eYesodDB b([Entity a],WidgetT b IO())",
          "package": "yesod-paginator",
          "partial": "Paginated",
          "signature": "Int-\u003e[Filter val]-\u003e[SelectOpt val]-\u003eYesodDB m([Entity val],WidgetT m IO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-paginator/docs/Yesod-Paginator.html#v:selectPaginated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Paginator",
          "name": "selectPaginatedWith",
          "package": "yesod-paginator",
          "signature": "PageWidget m -\u003e Int -\u003e [Filter val] -\u003e [SelectOpt val] -\u003e YesodDB m ([Entity val], WidgetT m IO ())",
          "source": "src/Yesod-Paginator.html#selectPaginatedWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Paginator",
          "module": "Yesod.Paginator",
          "name": "selectPaginatedWith",
          "normalized": "PageWidget a-\u003eInt-\u003e[Filter b]-\u003e[SelectOpt b]-\u003eYesodDB a([Entity b],WidgetT a IO())",
          "package": "yesod-paginator",
          "partial": "Paginated With",
          "signature": "PageWidget m-\u003eInt-\u003e[Filter val]-\u003e[SelectOpt val]-\u003eYesodDB m([Entity val],WidgetT m IO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-paginator/docs/Yesod-Paginator.html#v:selectPaginatedWith"
      }
    }
  ]
]