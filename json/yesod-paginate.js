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
        "word": "yesod-paginate"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides a pagination subsite for Yesod.\n\u003c/p\u003e\u003cp\u003eRoute layout:\n\u003c/p\u003e\u003cpre\u003e /           PaginateHomeR   GET\n /#Int       PaginateStartR  GET\n /#Int/#Int  PaginateR       GET\n\u003c/pre\u003e\u003cp\u003eIf no numbers are given, display the items starting from the beginning with the default count. If one number is given,\n display the items starting from that index with the default count. If two numbers are given, the first one is the count\n and the second is the starting index. (This is so the user can modify the end of the URL to move forward in the pagination.)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Yesod.Paginate",
          "name": "Paginate",
          "package": "yesod-paginate",
          "source": "src/Yesod-Paginate.html",
          "type": "module"
        },
        "index": {
          "description": "Provides pagination subsite for Yesod Route layout PaginateHomeR GET Int PaginateStartR GET Int Int PaginateR GET If no numbers are given display the items starting from the beginning with the default count If one number is given display the items starting from that index with the default count If two numbers are given the first one is the count and the second is the starting index This is so the user can modify the end of the URL to move forward in the pagination",
          "hierarchy": "Yesod Paginate",
          "module": "Yesod.Paginate",
          "name": "Paginate",
          "package": "yesod-paginate",
          "partial": "Paginate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yesod-paginate/docs/Yesod-Paginate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Paginate",
          "name": "Paginate",
          "package": "yesod-paginate",
          "source": "src/Yesod-Paginate.html#Paginate",
          "type": "data"
        },
        "index": {
          "hierarchy": "Yesod Paginate",
          "module": "Yesod.Paginate",
          "name": "Paginate",
          "package": "yesod-paginate",
          "partial": "Paginate",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yesod-paginate/docs/Yesod-Paginate.html#t:Paginate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Paginate",
          "name": "PaginateRoute",
          "package": "yesod-paginate",
          "source": "src/Yesod-Paginate.html#PaginateRoute",
          "type": "data"
        },
        "index": {
          "hierarchy": "Yesod Paginate",
          "module": "Yesod.Paginate",
          "name": "PaginateRoute",
          "package": "yesod-paginate",
          "partial": "Paginate Route",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yesod-paginate/docs/Yesod-Paginate.html#t:PaginateRoute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Paginate",
          "name": "Paginate",
          "package": "yesod-paginate",
          "signature": "Paginate",
          "source": "src/Yesod-Paginate.html#Paginate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Paginate",
          "module": "Yesod.Paginate",
          "name": "Paginate",
          "package": "yesod-paginate",
          "partial": "Paginate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-paginate/docs/Yesod-Paginate.html#v:Paginate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Paginate",
          "name": "PaginateHomeR",
          "package": "yesod-paginate",
          "signature": "PaginateHomeR",
          "source": "src/Yesod-Paginate.html#PaginateRoute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Paginate",
          "module": "Yesod.Paginate",
          "name": "PaginateHomeR",
          "package": "yesod-paginate",
          "partial": "Paginate Home",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-paginate/docs/Yesod-Paginate.html#v:PaginateHomeR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Paginate",
          "name": "PaginateR",
          "package": "yesod-paginate",
          "signature": "PaginateR Int Int",
          "source": "src/Yesod-Paginate.html#PaginateRoute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Paginate",
          "module": "Yesod.Paginate",
          "name": "PaginateR",
          "package": "yesod-paginate",
          "partial": "Paginate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-paginate/docs/Yesod-Paginate.html#v:PaginateR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Paginate",
          "name": "PaginateStartR",
          "package": "yesod-paginate",
          "signature": "PaginateStartR Int",
          "source": "src/Yesod-Paginate.html#PaginateRoute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Paginate",
          "module": "Yesod.Paginate",
          "name": "PaginateStartR",
          "package": "yesod-paginate",
          "partial": "Paginate Start",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-paginate/docs/Yesod-Paginate.html#v:PaginateStartR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Paginate",
          "name": "defaultPaginate",
          "package": "yesod-paginate",
          "signature": "Int-\u003e [Filter a]-\u003e [Order a]-\u003e (Int -\u003e Int -\u003e [a] -\u003e GHandler (Paginate master rep a) master rep)-\u003e Paginate master rep a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Paginate",
          "module": "Yesod.Paginate",
          "name": "defaultPaginate",
          "normalized": "Int-\u003e[Filter a]-\u003e[Order a]-\u003e(Int-\u003eInt-\u003e[a]-\u003eGHandler(Paginate b c a)b c)-\u003ePaginate b c a",
          "package": "yesod-paginate",
          "partial": "Paginate",
          "signature": "Int-\u003e[Filter a]-\u003e[Order a]-\u003e(Int-\u003eInt-\u003e[a]-\u003eGHandler(Paginate master rep a)master rep)-\u003ePaginate master rep a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-paginate/docs/Yesod-Paginate.html#v:defaultPaginate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLink to the next page.\n\u003c/p\u003e",
          "module": "Yesod.Paginate",
          "name": "nextLink",
          "package": "yesod-paginate",
          "signature": "Paginate master rep a -\u003e Int -\u003e Int -\u003e GHandler (Paginate master rep a) master (Maybe (Route (Paginate master rep a)))",
          "source": "src/Yesod-Paginate.html#nextLink",
          "type": "function"
        },
        "index": {
          "description": "Link to the next page",
          "hierarchy": "Yesod Paginate",
          "module": "Yesod.Paginate",
          "name": "nextLink",
          "normalized": "Paginate a b c-\u003eInt-\u003eInt-\u003eGHandler(Paginate a b c)a(Maybe(Route(Paginate a b c)))",
          "package": "yesod-paginate",
          "partial": "Link",
          "signature": "Paginate master rep a-\u003eInt-\u003eInt-\u003eGHandler(Paginate master rep a)master(Maybe(Route(Paginate master rep a)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-paginate/docs/Yesod-Paginate.html#v:nextLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow many items to show per page by default\n\u003c/p\u003e",
          "module": "Yesod.Paginate",
          "name": "pgnDefaultCount",
          "package": "yesod-paginate",
          "signature": "Int",
          "source": "src/Yesod-Paginate.html#Paginate",
          "type": "function"
        },
        "index": {
          "description": "How many items to show per page by default",
          "hierarchy": "Yesod Paginate",
          "module": "Yesod.Paginate",
          "name": "pgnDefaultCount",
          "package": "yesod-paginate",
          "partial": "Default Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-paginate/docs/Yesod-Paginate.html#v:pgnDefaultCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender the items on a page given the count and offset\n\u003c/p\u003e",
          "module": "Yesod.Paginate",
          "name": "pgnDisplayItems",
          "package": "yesod-paginate",
          "signature": "Int -\u003e Int -\u003e [a] -\u003e GHandler (Paginate master rep a) master rep",
          "source": "src/Yesod-Paginate.html#Paginate",
          "type": "function"
        },
        "index": {
          "description": "Render the items on page given the count and offset",
          "hierarchy": "Yesod Paginate",
          "module": "Yesod.Paginate",
          "name": "pgnDisplayItems",
          "normalized": "Int-\u003eInt-\u003e[a]-\u003eGHandler(Paginate b c a)b c",
          "package": "yesod-paginate",
          "partial": "Display Items",
          "signature": "Int-\u003eInt-\u003e[a]-\u003eGHandler(Paginate master rep a)master rep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-paginate/docs/Yesod-Paginate.html#v:pgnDisplayItems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a certain count of items at a certain offset\n\u003c/p\u003e",
          "module": "Yesod.Paginate",
          "name": "pgnGetItems",
          "package": "yesod-paginate",
          "signature": "Int -\u003e Int -\u003e GHandler (Paginate master rep a) master [a]",
          "source": "src/Yesod-Paginate.html#Paginate",
          "type": "function"
        },
        "index": {
          "description": "Get certain count of items at certain offset",
          "hierarchy": "Yesod Paginate",
          "module": "Yesod.Paginate",
          "name": "pgnGetItems",
          "normalized": "Int-\u003eInt-\u003eGHandler(Paginate a b c)a[c]",
          "package": "yesod-paginate",
          "partial": "Get Items",
          "signature": "Int-\u003eInt-\u003eGHandler(Paginate master rep a)master[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-paginate/docs/Yesod-Paginate.html#v:pgnGetItems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow many items there are in all\n\u003c/p\u003e",
          "module": "Yesod.Paginate",
          "name": "pgnItemCount",
          "package": "yesod-paginate",
          "signature": "GHandler (Paginate master rep a) master Int",
          "source": "src/Yesod-Paginate.html#Paginate",
          "type": "function"
        },
        "index": {
          "description": "How many items there are in all",
          "hierarchy": "Yesod Paginate",
          "module": "Yesod.Paginate",
          "name": "pgnItemCount",
          "package": "yesod-paginate",
          "partial": "Item Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-paginate/docs/Yesod-Paginate.html#v:pgnItemCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLink to the previous page.\n\u003c/p\u003e",
          "module": "Yesod.Paginate",
          "name": "prevLink",
          "package": "yesod-paginate",
          "signature": "Paginate master rep a -\u003e Int -\u003e Int -\u003e Maybe (Route (Paginate master rep a))",
          "source": "src/Yesod-Paginate.html#prevLink",
          "type": "function"
        },
        "index": {
          "description": "Link to the previous page",
          "hierarchy": "Yesod Paginate",
          "module": "Yesod.Paginate",
          "name": "prevLink",
          "normalized": "Paginate a b c-\u003eInt-\u003eInt-\u003eMaybe(Route(Paginate a b c))",
          "package": "yesod-paginate",
          "partial": "Link",
          "signature": "Paginate master rep a-\u003eInt-\u003eInt-\u003eMaybe(Route(Paginate master rep a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-paginate/docs/Yesod-Paginate.html#v:prevLink"
      }
    }
  ]
]