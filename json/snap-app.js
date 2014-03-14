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
        "word": "snap-app"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAbstraction of environment functions (could be state, could be\n   reader, whatever). Intended to ease migration from Reader/State.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Env",
          "name": "Env",
          "package": "snap-app",
          "source": "src/Control-Monad-Env.html",
          "type": "module"
        },
        "index": {
          "description": "Abstraction of environment functions could be state could be reader whatever Intended to ease migration from Reader State",
          "hierarchy": "Control Monad Env",
          "module": "Control.Monad.Env",
          "name": "Env",
          "package": "snap-app",
          "partial": "Env",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Control-Monad-Env.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Env",
          "name": "env",
          "package": "snap-app",
          "signature": "(env -\u003e val) -\u003e m val",
          "source": "src/Control-Monad-Env.html#env",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Env",
          "module": "Control.Monad.Env",
          "name": "env",
          "normalized": "(a-\u003eb)-\u003ec b",
          "package": "snap-app",
          "signature": "(env-\u003eval)-\u003em val",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Control-Monad-Env.html#v:env"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUseful operator (++) = mappend.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Monoid.Operator",
          "name": "Operator",
          "package": "snap-app",
          "source": "src/Data-Monoid-Operator.html",
          "type": "module"
        },
        "index": {
          "description": "Useful operator mappend",
          "hierarchy": "Data Monoid Operator",
          "module": "Data.Monoid.Operator",
          "name": "Operator",
          "package": "snap-app",
          "partial": "Operator",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Data-Monoid-Operator.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Operator",
          "name": "(++)",
          "package": "snap-app",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Data-Monoid-Operator.html#%2B%2B",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid Operator",
          "module": "Data.Monoid.Operator",
          "name": "(++) ++",
          "normalized": "a-\u003ea-\u003ea",
          "package": "snap-app",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Data-Monoid-Operator.html#v:-43--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eData pagination.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Pagination",
          "name": "Pagination",
          "package": "snap-app",
          "source": "src/Data-Pagination.html",
          "type": "module"
        },
        "index": {
          "description": "Data pagination",
          "hierarchy": "Data Pagination",
          "module": "Data.Pagination",
          "name": "Pagination",
          "package": "snap-app",
          "partial": "Pagination",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Data-Pagination.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pagination object, holds information about the name, total, per\n   page, current page, etc.\n\u003c/p\u003e",
          "module": "Data.Pagination",
          "name": "Pagination",
          "package": "snap-app",
          "source": "src/Data-Pagination.html#Pagination",
          "type": "data"
        },
        "index": {
          "description": "pagination object holds information about the name total per page current page etc",
          "hierarchy": "Data Pagination",
          "module": "Data.Pagination",
          "name": "Pagination",
          "package": "snap-app",
          "partial": "Pagination",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Data-Pagination.html#t:Pagination"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Pagination",
          "name": "Pagination",
          "package": "snap-app",
          "signature": "Pagination",
          "source": "src/Data-Pagination.html#Pagination",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Pagination",
          "module": "Data.Pagination",
          "name": "Pagination",
          "package": "snap-app",
          "partial": "Pagination",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Data-Pagination.html#v:Pagination"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd the current page of the pagination from the current URI.\n\u003c/p\u003e",
          "module": "Data.Pagination",
          "name": "addCurrentPNData",
          "package": "snap-app",
          "signature": "URI -\u003e Pagination -\u003e Pagination",
          "source": "src/Data-Pagination.html#addCurrentPNData",
          "type": "function"
        },
        "index": {
          "description": "Add the current page of the pagination from the current URI",
          "hierarchy": "Data Pagination",
          "module": "Data.Pagination",
          "name": "addCurrentPNData",
          "normalized": "URI-\u003ePagination-\u003ePagination",
          "package": "snap-app",
          "partial": "Current PNData",
          "signature": "URI-\u003ePagination-\u003ePagination",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Data-Pagination.html#v:addCurrentPNData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Pagination",
          "name": "pnCurrentPage",
          "package": "snap-app",
          "signature": "Integer",
          "source": "src/Data-Pagination.html#Pagination",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Pagination",
          "module": "Data.Pagination",
          "name": "pnCurrentPage",
          "package": "snap-app",
          "partial": "Current Page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Data-Pagination.html#v:pnCurrentPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Pagination",
          "name": "pnName",
          "package": "snap-app",
          "signature": "String",
          "source": "src/Data-Pagination.html#Pagination",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Pagination",
          "module": "Data.Pagination",
          "name": "pnName",
          "package": "snap-app",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Data-Pagination.html#v:pnName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the page count of the pagination results.\n\u003c/p\u003e",
          "module": "Data.Pagination",
          "name": "pnPageCount",
          "package": "snap-app",
          "signature": "Pagination -\u003e Integer",
          "source": "src/Data-Pagination.html#pnPageCount",
          "type": "function"
        },
        "index": {
          "description": "Get the page count of the pagination results",
          "hierarchy": "Data Pagination",
          "module": "Data.Pagination",
          "name": "pnPageCount",
          "normalized": "Pagination-\u003eInteger",
          "package": "snap-app",
          "partial": "Page Count",
          "signature": "Pagination-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Data-Pagination.html#v:pnPageCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Pagination",
          "name": "pnPerPage",
          "package": "snap-app",
          "signature": "Integer",
          "source": "src/Data-Pagination.html#Pagination",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Pagination",
          "module": "Data.Pagination",
          "name": "pnPerPage",
          "package": "snap-app",
          "partial": "Per Page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Data-Pagination.html#v:pnPerPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Pagination",
          "name": "pnShowDesc",
          "package": "snap-app",
          "signature": "Bool",
          "source": "src/Data-Pagination.html#Pagination",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Pagination",
          "module": "Data.Pagination",
          "name": "pnShowDesc",
          "package": "snap-app",
          "partial": "Show Desc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Data-Pagination.html#v:pnShowDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Pagination",
          "name": "pnTotal",
          "package": "snap-app",
          "signature": "Integer",
          "source": "src/Data-Pagination.html#Pagination",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Pagination",
          "module": "Data.Pagination",
          "name": "pnTotal",
          "package": "snap-app",
          "partial": "Total",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Data-Pagination.html#v:pnTotal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.URI.Params",
          "name": "Params",
          "package": "snap-app",
          "source": "src/Network-URI-Params.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network URI Params",
          "module": "Network.URI.Params",
          "name": "Params",
          "package": "snap-app",
          "partial": "Params",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Network-URI-Params.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.URI.Params",
          "name": "clearUrlQueries",
          "package": "snap-app",
          "signature": "URI -\u003e URI",
          "source": "src/Network-URI-Params.html#clearUrlQueries",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network URI Params",
          "module": "Network.URI.Params",
          "name": "clearUrlQueries",
          "normalized": "URI-\u003eURI",
          "package": "snap-app",
          "partial": "Url Queries",
          "signature": "URI-\u003eURI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Network-URI-Params.html#v:clearUrlQueries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.URI.Params",
          "name": "deleteQueryKey",
          "package": "snap-app",
          "signature": "String -\u003e URI -\u003e URI",
          "source": "src/Network-URI-Params.html#deleteQueryKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network URI Params",
          "module": "Network.URI.Params",
          "name": "deleteQueryKey",
          "normalized": "String-\u003eURI-\u003eURI",
          "package": "snap-app",
          "partial": "Query Key",
          "signature": "String-\u003eURI-\u003eURI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Network-URI-Params.html#v:deleteQueryKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.URI.Params",
          "name": "editQuery",
          "package": "snap-app",
          "signature": "([(String, String)] -\u003e [(String, String)]) -\u003e String -\u003e String",
          "source": "src/Network-URI-Params.html#editQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network URI Params",
          "module": "Network.URI.Params",
          "name": "editQuery",
          "normalized": "([(String,String)]-\u003e[(String,String)])-\u003eString-\u003eString",
          "package": "snap-app",
          "partial": "Query",
          "signature": "([(String,String)]-\u003e[(String,String)])-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Network-URI-Params.html#v:editQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.URI.Params",
          "name": "formEncodeUrl",
          "package": "snap-app",
          "signature": "[(String, String)] -\u003e [Char]",
          "source": "src/Network-URI-Params.html#formEncodeUrl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network URI Params",
          "module": "Network.URI.Params",
          "name": "formEncodeUrl",
          "normalized": "[(String,String)]-\u003e[Char]",
          "package": "snap-app",
          "partial": "Encode Url",
          "signature": "[(String,String)]-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Network-URI-Params.html#v:formEncodeUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.URI.Params",
          "name": "updateUrlParam",
          "package": "snap-app",
          "signature": "String -\u003e String -\u003e URI -\u003e URI",
          "source": "src/Network-URI-Params.html#updateUrlParam",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network URI Params",
          "module": "Network.URI.Params",
          "name": "updateUrlParam",
          "normalized": "String-\u003eString-\u003eURI-\u003eURI",
          "package": "snap-app",
          "partial": "Url Param",
          "signature": "String-\u003eString-\u003eURI-\u003eURI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Network-URI-Params.html#v:updateUrlParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.URI.Params",
          "name": "updateUrlParams",
          "package": "snap-app",
          "signature": "[(String, String)] -\u003e URI -\u003e URI",
          "source": "src/Network-URI-Params.html#updateUrlParams",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network URI Params",
          "module": "Network.URI.Params",
          "name": "updateUrlParams",
          "normalized": "[(String,String)]-\u003eURI-\u003eURI",
          "package": "snap-app",
          "partial": "Url Params",
          "signature": "[(String,String)]-\u003eURI-\u003eURI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Network-URI-Params.html#v:updateUrlParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.URI.Params",
          "name": "uriParams",
          "package": "snap-app",
          "signature": "URI -\u003e [(String, String)]",
          "source": "src/Network-URI-Params.html#uriParams",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network URI Params",
          "module": "Network.URI.Params",
          "name": "uriParams",
          "normalized": "URI-\u003e[(String,String)]",
          "package": "snap-app",
          "partial": "Params",
          "signature": "URI-\u003e[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Network-URI-Params.html#v:uriParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCaching of Blaze HTML pages caching.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Snap.App.Cache",
          "name": "Cache",
          "package": "snap-app",
          "source": "src/Snap-App-Cache.html",
          "type": "module"
        },
        "index": {
          "description": "Caching of Blaze HTML pages caching",
          "hierarchy": "Snap App Cache",
          "module": "Snap.App.Cache",
          "name": "Cache",
          "package": "snap-app",
          "partial": "Cache",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Cache.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA config that can return a cache directory.\n\u003c/p\u003e",
          "module": "Snap.App.Cache",
          "name": "CacheDir",
          "package": "snap-app",
          "source": "src/Snap-App-Cache.html#CacheDir",
          "type": "class"
        },
        "index": {
          "description": "config that can return cache directory",
          "hierarchy": "Snap App Cache",
          "module": "Snap.App.Cache",
          "name": "CacheDir",
          "package": "snap-app",
          "partial": "Cache Dir",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Cache.html#t:CacheDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA key for the cache.\n\u003c/p\u003e",
          "module": "Snap.App.Cache",
          "name": "Key",
          "package": "snap-app",
          "source": "src/Snap-App-Cache.html#Key",
          "type": "class"
        },
        "index": {
          "description": "key for the cache",
          "hierarchy": "Snap App Cache",
          "module": "Snap.App.Cache",
          "name": "Key",
          "package": "snap-app",
          "partial": "Key",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Cache.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate and save into the cache, or retrieve existing from the\n | cache.\n\u003c/p\u003e",
          "module": "Snap.App.Cache",
          "name": "cache",
          "package": "snap-app",
          "signature": "key -\u003e Controller c s (Maybe Markup) -\u003e Controller c s (Maybe Text)",
          "source": "src/Snap-App-Cache.html#cache",
          "type": "function"
        },
        "index": {
          "description": "Generate and save into the cache or retrieve existing from the cache",
          "hierarchy": "Snap App Cache",
          "module": "Snap.App.Cache",
          "name": "cache",
          "normalized": "a-\u003eController b c(Maybe Markup)-\u003eController b c(Maybe Text)",
          "package": "snap-app",
          "signature": "key-\u003eController c s(Maybe Markup)-\u003eController c s(Maybe Text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Cache.html#v:cache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCache conditionally.\n\u003c/p\u003e",
          "module": "Snap.App.Cache",
          "name": "cacheIf",
          "package": "snap-app",
          "signature": "Bool -\u003e key -\u003e Controller c s (Maybe Markup) -\u003e Controller c s (Maybe Text)",
          "source": "src/Snap-App-Cache.html#cacheIf",
          "type": "function"
        },
        "index": {
          "description": "Cache conditionally",
          "hierarchy": "Snap App Cache",
          "module": "Snap.App.Cache",
          "name": "cacheIf",
          "normalized": "Bool-\u003ea-\u003eController b c(Maybe Markup)-\u003eController b c(Maybe Text)",
          "package": "snap-app",
          "partial": "If",
          "signature": "Bool-\u003ekey-\u003eController c s(Maybe Markup)-\u003eController c s(Maybe Text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Cache.html#v:cacheIf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClear the whole cache.\n\u003c/p\u003e",
          "module": "Snap.App.Cache",
          "name": "clearCache",
          "package": "snap-app",
          "signature": "c -\u003e IO ()",
          "source": "src/Snap-App-Cache.html#clearCache",
          "type": "function"
        },
        "index": {
          "description": "Clear the whole cache",
          "hierarchy": "Snap App Cache",
          "module": "Snap.App.Cache",
          "name": "clearCache",
          "normalized": "a-\u003eIO()",
          "package": "snap-app",
          "partial": "Cache",
          "signature": "c-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Cache.html#v:clearCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.App.Cache",
          "name": "getCacheDir",
          "package": "snap-app",
          "signature": "config -\u003e FilePath",
          "source": "src/Snap-App-Cache.html#getCacheDir",
          "type": "method"
        },
        "index": {
          "hierarchy": "Snap App Cache",
          "module": "Snap.App.Cache",
          "name": "getCacheDir",
          "normalized": "a-\u003eFilePath",
          "package": "snap-app",
          "partial": "Cache Dir",
          "signature": "config-\u003eFilePath",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Cache.html#v:getCacheDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.App.Cache",
          "name": "keyToString",
          "package": "snap-app",
          "signature": "key -\u003e FilePath",
          "source": "src/Snap-App-Cache.html#keyToString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Snap App Cache",
          "module": "Snap.App.Cache",
          "name": "keyToString",
          "normalized": "a-\u003eFilePath",
          "package": "snap-app",
          "partial": "To String",
          "signature": "key-\u003eFilePath",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Cache.html#v:keyToString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReset an item in the cache.\n\u003c/p\u003e",
          "module": "Snap.App.Cache",
          "name": "resetCache",
          "package": "snap-app",
          "signature": "key -\u003e Controller c s ()",
          "source": "src/Snap-App-Cache.html#resetCache",
          "type": "function"
        },
        "index": {
          "description": "Reset an item in the cache",
          "hierarchy": "Snap App Cache",
          "module": "Snap.App.Cache",
          "name": "resetCache",
          "normalized": "a-\u003eController b c()",
          "package": "snap-app",
          "partial": "Cache",
          "signature": "key-\u003eController c s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Cache.html#v:resetCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReset an item in the cache.\n\u003c/p\u003e",
          "module": "Snap.App.Cache",
          "name": "resetCacheModel",
          "package": "snap-app",
          "signature": "key -\u003e Model c s ()",
          "source": "src/Snap-App-Cache.html#resetCacheModel",
          "type": "function"
        },
        "index": {
          "description": "Reset an item in the cache",
          "hierarchy": "Snap App Cache",
          "module": "Snap.App.Cache",
          "name": "resetCacheModel",
          "normalized": "a-\u003eModel b c()",
          "package": "snap-app",
          "partial": "Cache Model",
          "signature": "key-\u003eModel c s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Cache.html#v:resetCacheModel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eView some HTML generator cached.\n\u003c/p\u003e",
          "module": "Snap.App.Cache",
          "name": "viewCached",
          "package": "snap-app",
          "signature": "key -\u003e Controller c s Markup -\u003e Controller c s ()",
          "source": "src/Snap-App-Cache.html#viewCached",
          "type": "function"
        },
        "index": {
          "description": "View some HTML generator cached",
          "hierarchy": "Snap App Cache",
          "module": "Snap.App.Cache",
          "name": "viewCached",
          "normalized": "a-\u003eController b c Markup-\u003eController b c()",
          "package": "snap-app",
          "partial": "Cached",
          "signature": "key-\u003eController c s Markup-\u003eController c s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Cache.html#v:viewCached"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eController routing/handling.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Snap.App.Controller",
          "name": "Controller",
          "package": "snap-app",
          "source": "src/Snap-App-Controller.html",
          "type": "module"
        },
        "index": {
          "description": "Controller routing handling",
          "hierarchy": "Snap App Controller",
          "module": "Snap.App.Controller",
          "name": "Controller",
          "package": "snap-app",
          "partial": "Controller",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Controller.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet integer parmater.\n\u003c/p\u003e",
          "module": "Snap.App.Controller",
          "name": "getInteger",
          "package": "snap-app",
          "signature": "ByteString -\u003e Integer -\u003e Controller c s Integer",
          "source": "src/Snap-App-Controller.html#getInteger",
          "type": "function"
        },
        "index": {
          "description": "Get integer parmater",
          "hierarchy": "Snap App Controller",
          "module": "Snap.App.Controller",
          "name": "getInteger",
          "normalized": "ByteString-\u003eInteger-\u003eController a b Integer",
          "package": "snap-app",
          "partial": "Integer",
          "signature": "ByteString-\u003eInteger-\u003eController c s Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Controller.html#v:getInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.App.Controller",
          "name": "getMyURI",
          "package": "snap-app",
          "signature": "Controller c s URI",
          "source": "src/Snap-App-Controller.html#getMyURI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap App Controller",
          "module": "Snap.App.Controller",
          "name": "getMyURI",
          "package": "snap-app",
          "partial": "My URI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Controller.html#v:getMyURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet pagination data.\n\u003c/p\u003e",
          "module": "Snap.App.Controller",
          "name": "getPagination",
          "package": "snap-app",
          "signature": "String -\u003e Controller c s PN",
          "source": "src/Snap-App-Controller.html#getPagination",
          "type": "function"
        },
        "index": {
          "description": "Get pagination data",
          "hierarchy": "Snap App Controller",
          "module": "Snap.App.Controller",
          "name": "getPagination",
          "normalized": "String-\u003eController a b PN",
          "package": "snap-app",
          "partial": "Pagination",
          "signature": "String-\u003eController c s PN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Controller.html#v:getPagination"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet string.\n\u003c/p\u003e",
          "module": "Snap.App.Controller",
          "name": "getString",
          "package": "snap-app",
          "signature": "ByteString -\u003e String -\u003e Controller c s String",
          "source": "src/Snap-App-Controller.html#getString",
          "type": "function"
        },
        "index": {
          "description": "Get string",
          "hierarchy": "Snap App Controller",
          "module": "Snap.App.Controller",
          "name": "getString",
          "normalized": "ByteString-\u003eString-\u003eController a b String",
          "package": "snap-app",
          "partial": "String",
          "signature": "ByteString-\u003eString-\u003eController c s String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Controller.html#v:getString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet string (maybe).\n\u003c/p\u003e",
          "module": "Snap.App.Controller",
          "name": "getStringMaybe",
          "package": "snap-app",
          "signature": "ByteString -\u003e Controller c s (Maybe String)",
          "source": "src/Snap-App-Controller.html#getStringMaybe",
          "type": "function"
        },
        "index": {
          "description": "Get string maybe",
          "hierarchy": "Snap App Controller",
          "module": "Snap.App.Controller",
          "name": "getStringMaybe",
          "normalized": "ByteString-\u003eController a b(Maybe String)",
          "package": "snap-app",
          "partial": "String Maybe",
          "signature": "ByteString-\u003eController c s(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Controller.html#v:getStringMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric redirect to home page.\n\u003c/p\u003e",
          "module": "Snap.App.Controller",
          "name": "goHome",
          "package": "snap-app",
          "signature": "Controller c s ()",
          "source": "src/Snap-App-Controller.html#goHome",
          "type": "function"
        },
        "index": {
          "description": "Generic redirect to home page",
          "hierarchy": "Snap App Controller",
          "module": "Snap.App.Controller",
          "name": "goHome",
          "normalized": "Controller a b()",
          "package": "snap-app",
          "partial": "Home",
          "signature": "Controller c s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Controller.html#v:goHome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract a Just value or go home.\n\u003c/p\u003e",
          "module": "Snap.App.Controller",
          "name": "justOrGoHome",
          "package": "snap-app",
          "signature": "Maybe a -\u003e (a -\u003e Controller c s ()) -\u003e Controller c s ()",
          "source": "src/Snap-App-Controller.html#justOrGoHome",
          "type": "function"
        },
        "index": {
          "description": "Extract Just value or go home",
          "hierarchy": "Snap App Controller",
          "module": "Snap.App.Controller",
          "name": "justOrGoHome",
          "normalized": "Maybe a-\u003e(a-\u003eController b c())-\u003eController b c()",
          "package": "snap-app",
          "partial": "Or Go Home",
          "signature": "Maybe a-\u003e(a-\u003eController c s())-\u003eController c s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Controller.html#v:justOrGoHome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrictly renders HTML to Text before outputting it via Snap.\n   This ensures that any lazy exceptions are caught by the Snap\n   handler.\n\u003c/p\u003e",
          "module": "Snap.App.Controller",
          "name": "output",
          "package": "snap-app",
          "signature": "Markup -\u003e Controller c s ()",
          "source": "src/Snap-App-Controller.html#output",
          "type": "function"
        },
        "index": {
          "description": "Strictly renders HTML to Text before outputting it via Snap This ensures that any lazy exceptions are caught by the Snap handler",
          "hierarchy": "Snap App Controller",
          "module": "Snap.App.Controller",
          "name": "output",
          "normalized": "Markup-\u003eController a b()",
          "package": "snap-app",
          "signature": "Markup-\u003eController c s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Controller.html#v:output"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrictly renders text before outputting it via Snap.\n   This ensures that any lazy exceptions are caught by the Snap\n   handler.\n\u003c/p\u003e",
          "module": "Snap.App.Controller",
          "name": "outputText",
          "package": "snap-app",
          "signature": "Text -\u003e Controller c s ()",
          "source": "src/Snap-App-Controller.html#outputText",
          "type": "function"
        },
        "index": {
          "description": "Strictly renders text before outputting it via Snap This ensures that any lazy exceptions are caught by the Snap handler",
          "hierarchy": "Snap App Controller",
          "module": "Snap.App.Controller",
          "name": "outputText",
          "normalized": "Text-\u003eController a b()",
          "package": "snap-app",
          "partial": "Text",
          "signature": "Text-\u003eController c s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Controller.html#v:outputText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a controller handler.\n\u003c/p\u003e",
          "module": "Snap.App.Controller",
          "name": "runHandler",
          "package": "snap-app",
          "signature": "s -\u003e c -\u003e Pool -\u003e Controller c s () -\u003e Snap ()",
          "source": "src/Snap-App-Controller.html#runHandler",
          "type": "function"
        },
        "index": {
          "description": "Run controller handler",
          "hierarchy": "Snap App Controller",
          "module": "Snap.App.Controller",
          "name": "runHandler",
          "normalized": "a-\u003eb-\u003ePool-\u003eController b a()-\u003eSnap()",
          "package": "snap-app",
          "partial": "Handler",
          "signature": "s-\u003ec-\u003ePool-\u003eController c s()-\u003eSnap()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Controller.html#v:runHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMigration library\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Snap.App.Migrate",
          "name": "Migrate",
          "package": "snap-app",
          "source": "src/Snap-App-Migrate.html",
          "type": "module"
        },
        "index": {
          "description": "Migration library",
          "hierarchy": "Snap App Migrate",
          "module": "Snap.App.Migrate",
          "name": "Migrate",
          "package": "snap-app",
          "partial": "Migrate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Migrate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate the version number.\n\u003c/p\u003e",
          "module": "Snap.App.Migrate",
          "name": "createVersion",
          "package": "snap-app",
          "signature": "Model c s ()",
          "source": "src/Snap-App-Migrate.html#createVersion",
          "type": "function"
        },
        "index": {
          "description": "Create the version number",
          "hierarchy": "Snap App Migrate",
          "module": "Snap.App.Migrate",
          "name": "createVersion",
          "normalized": "Model a b()",
          "package": "snap-app",
          "partial": "Version",
          "signature": "Model c s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Migrate.html#v:createVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJust print to stdout for now.\n\u003c/p\u003e",
          "module": "Snap.App.Migrate",
          "name": "echo",
          "package": "snap-app",
          "signature": "String -\u003e Model c s ()",
          "source": "src/Snap-App-Migrate.html#echo",
          "type": "function"
        },
        "index": {
          "description": "Just print to stdout for now",
          "hierarchy": "Snap App Migrate",
          "module": "Snap.App.Migrate",
          "name": "echo",
          "normalized": "String-\u003eModel a b()",
          "package": "snap-app",
          "signature": "String-\u003eModel c s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Migrate.html#v:echo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnsure the version table exists.\n\u003c/p\u003e",
          "module": "Snap.App.Migrate",
          "name": "ensureExists",
          "package": "snap-app",
          "signature": "Model c s ()",
          "source": "src/Snap-App-Migrate.html#ensureExists",
          "type": "function"
        },
        "index": {
          "description": "Ensure the version table exists",
          "hierarchy": "Snap App Migrate",
          "module": "Snap.App.Migrate",
          "name": "ensureExists",
          "normalized": "Model a b()",
          "package": "snap-app",
          "partial": "Exists",
          "signature": "Model c s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Migrate.html#v:ensureExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMigrate the DB to the latest version.\n\u003c/p\u003e",
          "module": "Snap.App.Migrate",
          "name": "migrate",
          "package": "snap-app",
          "signature": "Bool -\u003e [(Int, Model c s Int64)] -\u003e Model c s ()",
          "source": "src/Snap-App-Migrate.html#migrate",
          "type": "function"
        },
        "index": {
          "description": "Migrate the DB to the latest version",
          "hierarchy": "Snap App Migrate",
          "module": "Snap.App.Migrate",
          "name": "migrate",
          "normalized": "Bool-\u003e[(Int,Model a b Int)]-\u003eModel a b()",
          "package": "snap-app",
          "signature": "Bool-\u003e[(Int,Model c s Int)]-\u003eModel c s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Migrate.html#v:migrate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the current database version.\n\u003c/p\u003e",
          "module": "Snap.App.Migrate",
          "name": "setVersion",
          "package": "snap-app",
          "signature": "Int -\u003e Model c s ()",
          "source": "src/Snap-App-Migrate.html#setVersion",
          "type": "function"
        },
        "index": {
          "description": "Set the current database version",
          "hierarchy": "Snap App Migrate",
          "module": "Snap.App.Migrate",
          "name": "setVersion",
          "normalized": "Int-\u003eModel a b()",
          "package": "snap-app",
          "partial": "Version",
          "signature": "Int-\u003eModel c s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Migrate.html#v:setVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModel running.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Snap.App.Model",
          "name": "Model",
          "package": "snap-app",
          "source": "src/Snap-App-Model.html",
          "type": "module"
        },
        "index": {
          "description": "Model running",
          "hierarchy": "Snap App Model",
          "module": "Snap.App.Model",
          "name": "Model",
          "package": "snap-app",
          "partial": "Model",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Model.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA single-value \"collection\".\n\u003c/p\u003e\u003cp\u003eThis is useful if you need to supply a single parameter to a SQL\n query, or extract a single column from a SQL result.\n\u003c/p\u003e\u003cp\u003eParameter example:\n\u003c/p\u003e\u003cpre\u003equery c \"select x from scores where x \u003e ?\" (\u003ccode\u003e\u003ca\u003eOnly\u003c/a\u003e\u003c/code\u003e (42::Int))\u003c/pre\u003e\u003cp\u003eResult example:\n\u003c/p\u003e\u003cpre\u003exs \u003c- query_ c \"select id from users\"\nforM_ xs $ \\(\u003ccode\u003e\u003ca\u003eOnly\u003c/a\u003e\u003c/code\u003e id) -\u003e {- ... -}\u003c/pre\u003e",
          "module": "Snap.App.Model",
          "name": "Only",
          "package": "snap-app",
          "type": "newtype"
        },
        "index": {
          "description": "single-value collection This is useful if you need to supply single parameter to SQL query or extract single column from SQL result Parameter example query select from scores where Only Int Result example xs query select id from users forM xs Only id",
          "hierarchy": "Snap App Model",
          "module": "Snap.App.Model",
          "name": "Only",
          "package": "snap-app",
          "partial": "Only",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Model.html#t:Only"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.App.Model",
          "name": "Pool",
          "package": "snap-app",
          "source": "src/Snap-App-Model.html#Pool",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap App Model",
          "module": "Snap.App.Model",
          "name": "Pool",
          "package": "snap-app",
          "partial": "Pool",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Model.html#t:Pool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.App.Model",
          "name": "Only",
          "package": "snap-app",
          "signature": "Only",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap App Model",
          "module": "Snap.App.Model",
          "name": "Only",
          "package": "snap-app",
          "partial": "Only",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Model.html#v:Only"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute some SQL returning the rows affected.\n\u003c/p\u003e",
          "module": "Snap.App.Model",
          "name": "exec",
          "package": "snap-app",
          "signature": "[String] -\u003e ps -\u003e Model c s Int64",
          "source": "src/Snap-App-Model.html#exec",
          "type": "function"
        },
        "index": {
          "description": "Execute some SQL returning the rows affected",
          "hierarchy": "Snap App Model",
          "module": "Snap.App.Model",
          "name": "exec",
          "normalized": "[String]-\u003ea-\u003eModel b c Int",
          "package": "snap-app",
          "signature": "[String]-\u003eps-\u003eModel c s Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Model.html#v:exec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.App.Model",
          "name": "fromOnly",
          "package": "snap-app",
          "signature": "a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap App Model",
          "module": "Snap.App.Model",
          "name": "fromOnly",
          "package": "snap-app",
          "partial": "Only",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Model.html#v:fromOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a model action from within a controller.\n\u003c/p\u003e",
          "module": "Snap.App.Model",
          "name": "model",
          "package": "snap-app",
          "signature": "Model c s a -\u003e Controller c s a",
          "source": "src/Snap-App-Model.html#model",
          "type": "function"
        },
        "index": {
          "description": "Run model action from within controller",
          "hierarchy": "Snap App Model",
          "module": "Snap.App.Model",
          "name": "model",
          "normalized": "Model a b c-\u003eController a b c",
          "package": "snap-app",
          "signature": "Model c s a-\u003eController c s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Model.html#v:model"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new connection pool.\n\u003c/p\u003e",
          "module": "Snap.App.Model",
          "name": "newPool",
          "package": "snap-app",
          "signature": "ConnectInfo-\u003e m Pool",
          "type": "function"
        },
        "index": {
          "description": "Create new connection pool",
          "hierarchy": "Snap App Model",
          "module": "Snap.App.Model",
          "name": "newPool",
          "normalized": "ConnectInfo-\u003ea Pool",
          "package": "snap-app",
          "partial": "Pool",
          "signature": "ConnectInfo-\u003em Pool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Model.html#v:newPool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuery with some parameters.\n\u003c/p\u003e",
          "module": "Snap.App.Model",
          "name": "query",
          "package": "snap-app",
          "signature": "[String] -\u003e ps -\u003e Model c s [r]",
          "source": "src/Snap-App-Model.html#query",
          "type": "function"
        },
        "index": {
          "description": "Query with some parameters",
          "hierarchy": "Snap App Model",
          "module": "Snap.App.Model",
          "name": "query",
          "normalized": "[String]-\u003ea-\u003eModel b c[d]",
          "package": "snap-app",
          "signature": "[String]-\u003eps-\u003eModel c s[r]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Model.html#v:query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuery with no parameters.\n\u003c/p\u003e",
          "module": "Snap.App.Model",
          "name": "queryNoParams",
          "package": "snap-app",
          "signature": "[String] -\u003e Model c s [r]",
          "source": "src/Snap-App-Model.html#queryNoParams",
          "type": "function"
        },
        "index": {
          "description": "Query with no parameters",
          "hierarchy": "Snap App Model",
          "module": "Snap.App.Model",
          "name": "queryNoParams",
          "normalized": "[String]-\u003eModel a b[c]",
          "package": "snap-app",
          "partial": "No Params",
          "signature": "[String]-\u003eModel c s[r]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Model.html#v:queryNoParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a model action at the top-level.\n\u003c/p\u003e",
          "module": "Snap.App.Model",
          "name": "runDB",
          "package": "snap-app",
          "signature": "s -\u003e c -\u003e Pool -\u003e Model c s () -\u003e IO ()",
          "source": "src/Snap-App-Model.html#runDB",
          "type": "function"
        },
        "index": {
          "description": "Run model action at the top-level",
          "hierarchy": "Snap App Model",
          "module": "Snap.App.Model",
          "name": "runDB",
          "normalized": "a-\u003eb-\u003ePool-\u003eModel b a()-\u003eIO()",
          "package": "snap-app",
          "partial": "DB",
          "signature": "s-\u003ec-\u003ePool-\u003eModel c s()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Model.html#v:runDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuery a single field from a single result.\n\u003c/p\u003e",
          "module": "Snap.App.Model",
          "name": "single",
          "package": "snap-app",
          "signature": "[String] -\u003e ps -\u003e Model c s (Maybe r)",
          "source": "src/Snap-App-Model.html#single",
          "type": "function"
        },
        "index": {
          "description": "Query single field from single result",
          "hierarchy": "Snap App Model",
          "module": "Snap.App.Model",
          "name": "single",
          "normalized": "[String]-\u003ea-\u003eModel b c(Maybe d)",
          "package": "snap-app",
          "signature": "[String]-\u003eps-\u003eModel c s(Maybe r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Model.html#v:single"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuery a single field from a single result (no params).\n\u003c/p\u003e",
          "module": "Snap.App.Model",
          "name": "singleNoParams",
          "package": "snap-app",
          "signature": "[String] -\u003e Model c s (Maybe r)",
          "source": "src/Snap-App-Model.html#singleNoParams",
          "type": "function"
        },
        "index": {
          "description": "Query single field from single result no params",
          "hierarchy": "Snap App Model",
          "module": "Snap.App.Model",
          "name": "singleNoParams",
          "normalized": "[String]-\u003eModel a b(Maybe c)",
          "package": "snap-app",
          "partial": "No Params",
          "signature": "[String]-\u003eModel c s(Maybe r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Model.html#v:singleNoParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse the connection pool.\n\u003c/p\u003e",
          "module": "Snap.App.Model",
          "name": "withPoolConnection",
          "package": "snap-app",
          "signature": "Pool -\u003e (Connection -\u003e m a) -\u003e m ()",
          "source": "src/Snap-App-Model.html#withPoolConnection",
          "type": "function"
        },
        "index": {
          "description": "Use the connection pool",
          "hierarchy": "Snap App Model",
          "module": "Snap.App.Model",
          "name": "withPoolConnection",
          "normalized": "Pool-\u003e(Connection-\u003ea b)-\u003ea()",
          "package": "snap-app",
          "partial": "Pool Connection",
          "signature": "Pool-\u003e(Connection-\u003em a)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Model.html#v:withPoolConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.App.RSS",
          "name": "RSS",
          "package": "snap-app",
          "source": "src/Snap-App-RSS.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Snap App RSS",
          "module": "Snap.App.RSS",
          "name": "RSS",
          "package": "snap-app",
          "partial": "RSS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-RSS.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a simple RSS feed.\n\u003c/p\u003e",
          "module": "Snap.App.RSS",
          "name": "makeFeed",
          "package": "snap-app",
          "signature": "String -\u003e String -\u003e [(UTCTime, Text, Text, Text)] -\u003e Element",
          "source": "src/Snap-App-RSS.html#makeFeed",
          "type": "function"
        },
        "index": {
          "description": "Make simple RSS feed",
          "hierarchy": "Snap App RSS",
          "module": "Snap.App.RSS",
          "name": "makeFeed",
          "normalized": "String-\u003eString-\u003e[(UTCTime,Text,Text,Text)]-\u003eElement",
          "package": "snap-app",
          "partial": "Feed",
          "signature": "String-\u003eString-\u003e[(UTCTime,Text,Text,Text)]-\u003eElement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-RSS.html#v:makeFeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput the given XML element.\n\u003c/p\u003e",
          "module": "Snap.App.RSS",
          "name": "outputRSS",
          "package": "snap-app",
          "signature": "String -\u003e String -\u003e [(UTCTime, Text, Text, Text)] -\u003e Controller c s ()",
          "source": "src/Snap-App-RSS.html#outputRSS",
          "type": "function"
        },
        "index": {
          "description": "Output the given XML element",
          "hierarchy": "Snap App RSS",
          "module": "Snap.App.RSS",
          "name": "outputRSS",
          "normalized": "String-\u003eString-\u003e[(UTCTime,Text,Text,Text)]-\u003eController a b()",
          "package": "snap-app",
          "partial": "RSS",
          "signature": "String-\u003eString-\u003e[(UTCTime,Text,Text,Text)]-\u003eController c s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-RSS.html#v:outputRSS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModel-view-controller app types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Snap.App.Types",
          "name": "Types",
          "package": "snap-app",
          "source": "src/Snap-App-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Model-view-controller app types",
          "hierarchy": "Snap App Types",
          "module": "Snap.App.Types",
          "name": "Types",
          "package": "snap-app",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.App.Types",
          "name": "AppConfig",
          "package": "snap-app",
          "source": "src/Snap-App-Types.html#AppConfig",
          "type": "class"
        },
        "index": {
          "hierarchy": "Snap App Types",
          "module": "Snap.App.Types",
          "name": "AppConfig",
          "package": "snap-app",
          "partial": "App Config",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Types.html#t:AppConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.App.Types",
          "name": "AppLiftModel",
          "package": "snap-app",
          "source": "src/Snap-App-Types.html#AppLiftModel",
          "type": "class"
        },
        "index": {
          "hierarchy": "Snap App Types",
          "module": "Snap.App.Types",
          "name": "AppLiftModel",
          "package": "snap-app",
          "partial": "App Lift Model",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Types.html#t:AppLiftModel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe controller monad.\n\u003c/p\u003e",
          "module": "Snap.App.Types",
          "name": "Controller",
          "package": "snap-app",
          "source": "src/Snap-App-Types.html#Controller",
          "type": "newtype"
        },
        "index": {
          "description": "The controller monad",
          "hierarchy": "Snap App Types",
          "module": "Snap.App.Types",
          "name": "Controller",
          "package": "snap-app",
          "partial": "Controller",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Types.html#t:Controller"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe state accessible to the controller (DB/session stuff).\n\u003c/p\u003e",
          "module": "Snap.App.Types",
          "name": "ControllerState",
          "package": "snap-app",
          "source": "src/Snap-App-Types.html#ControllerState",
          "type": "data"
        },
        "index": {
          "description": "The state accessible to the controller DB session stuff",
          "hierarchy": "Snap App Types",
          "module": "Snap.App.Types",
          "name": "ControllerState",
          "package": "snap-app",
          "partial": "Controller State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Types.html#t:ControllerState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe model monad (limited access to IO, only DB access).\n\u003c/p\u003e",
          "module": "Snap.App.Types",
          "name": "Model",
          "package": "snap-app",
          "source": "src/Snap-App-Types.html#Model",
          "type": "newtype"
        },
        "index": {
          "description": "The model monad limited access to IO only DB access",
          "hierarchy": "Snap App Types",
          "module": "Snap.App.Types",
          "name": "Model",
          "package": "snap-app",
          "partial": "Model",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Types.html#t:Model"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe state accessible to the model (just DB connection).\n\u003c/p\u003e",
          "module": "Snap.App.Types",
          "name": "ModelState",
          "package": "snap-app",
          "source": "src/Snap-App-Types.html#ModelState",
          "type": "data"
        },
        "index": {
          "description": "The state accessible to the model just DB connection",
          "hierarchy": "Snap App Types",
          "module": "Snap.App.Types",
          "name": "ModelState",
          "package": "snap-app",
          "partial": "Model State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Types.html#t:ModelState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.App.Types",
          "name": "Controller",
          "package": "snap-app",
          "signature": "Controller",
          "source": "src/Snap-App-Types.html#Controller",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap App Types",
          "module": "Snap.App.Types",
          "name": "Controller",
          "package": "snap-app",
          "partial": "Controller",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Types.html#v:Controller"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.App.Types",
          "name": "ControllerState",
          "package": "snap-app",
          "signature": "ControllerState",
          "source": "src/Snap-App-Types.html#ControllerState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap App Types",
          "module": "Snap.App.Types",
          "name": "ControllerState",
          "package": "snap-app",
          "partial": "Controller State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Types.html#v:ControllerState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.App.Types",
          "name": "Model",
          "package": "snap-app",
          "signature": "Model",
          "source": "src/Snap-App-Types.html#Model",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap App Types",
          "module": "Snap.App.Types",
          "name": "Model",
          "package": "snap-app",
          "partial": "Model",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Types.html#v:Model"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.App.Types",
          "name": "ModelState",
          "package": "snap-app",
          "signature": "ModelState",
          "source": "src/Snap-App-Types.html#ModelState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap App Types",
          "module": "Snap.App.Types",
          "name": "ModelState",
          "package": "snap-app",
          "partial": "Model State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Types.html#v:ModelState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.App.Types",
          "name": "controllerState",
          "package": "snap-app",
          "signature": "state",
          "source": "src/Snap-App-Types.html#ControllerState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap App Types",
          "module": "Snap.App.Types",
          "name": "controllerState",
          "package": "snap-app",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Types.html#v:controllerState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.App.Types",
          "name": "controllerStateConfig",
          "package": "snap-app",
          "signature": "config",
          "source": "src/Snap-App-Types.html#ControllerState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap App Types",
          "module": "Snap.App.Types",
          "name": "controllerStateConfig",
          "package": "snap-app",
          "partial": "State Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Types.html#v:controllerStateConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.App.Types",
          "name": "controllerStateConn",
          "package": "snap-app",
          "signature": "Connection",
          "source": "src/Snap-App-Types.html#ControllerState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap App Types",
          "module": "Snap.App.Types",
          "name": "controllerStateConn",
          "package": "snap-app",
          "partial": "State Conn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Types.html#v:controllerStateConn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.App.Types",
          "name": "getConfigDomain",
          "package": "snap-app",
          "signature": "config -\u003e String",
          "source": "src/Snap-App-Types.html#getConfigDomain",
          "type": "method"
        },
        "index": {
          "hierarchy": "Snap App Types",
          "module": "Snap.App.Types",
          "name": "getConfigDomain",
          "normalized": "a-\u003eString",
          "package": "snap-app",
          "partial": "Config Domain",
          "signature": "config-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Types.html#v:getConfigDomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.App.Types",
          "name": "liftModel",
          "package": "snap-app",
          "signature": "Model c s a -\u003e Controller c s a",
          "source": "src/Snap-App-Types.html#liftModel",
          "type": "method"
        },
        "index": {
          "hierarchy": "Snap App Types",
          "module": "Snap.App.Types",
          "name": "liftModel",
          "normalized": "Model a b c-\u003eController a b c",
          "package": "snap-app",
          "partial": "Model",
          "signature": "Model c s a-\u003eController c s a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Types.html#v:liftModel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.App.Types",
          "name": "modelStateAnns",
          "package": "snap-app",
          "signature": "state",
          "source": "src/Snap-App-Types.html#ModelState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap App Types",
          "module": "Snap.App.Types",
          "name": "modelStateAnns",
          "package": "snap-app",
          "partial": "State Anns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Types.html#v:modelStateAnns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.App.Types",
          "name": "modelStateConfig",
          "package": "snap-app",
          "signature": "config",
          "source": "src/Snap-App-Types.html#ModelState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap App Types",
          "module": "Snap.App.Types",
          "name": "modelStateConfig",
          "package": "snap-app",
          "partial": "State Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Types.html#v:modelStateConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.App.Types",
          "name": "modelStateConn",
          "package": "snap-app",
          "signature": "Connection",
          "source": "src/Snap-App-Types.html#ModelState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap App Types",
          "module": "Snap.App.Types",
          "name": "modelStateConn",
          "package": "snap-app",
          "partial": "State Conn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Types.html#v:modelStateConn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.App.Types",
          "name": "runController",
          "package": "snap-app",
          "signature": "ReaderT (ControllerState config state) Snap a",
          "source": "src/Snap-App-Types.html#Controller",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap App Types",
          "module": "Snap.App.Types",
          "name": "runController",
          "package": "snap-app",
          "partial": "Controller",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Types.html#v:runController"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.App.Types",
          "name": "runModel",
          "package": "snap-app",
          "signature": "ReaderT (ModelState config state) IO a",
          "source": "src/Snap-App-Types.html#Model",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap App Types",
          "module": "Snap.App.Types",
          "name": "runModel",
          "package": "snap-app",
          "partial": "Model",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-Types.html#v:runModel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.App.XML",
          "name": "XML",
          "package": "snap-app",
          "source": "src/Snap-App-XML.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Snap App XML",
          "module": "Snap.App.XML",
          "name": "XML",
          "package": "snap-app",
          "partial": "XML",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-XML.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput the given XML element.\n\u003c/p\u003e",
          "module": "Snap.App.XML",
          "name": "outputXML",
          "package": "snap-app",
          "signature": "Element -\u003e Controller c s ()",
          "source": "src/Snap-App-XML.html#outputXML",
          "type": "function"
        },
        "index": {
          "description": "Output the given XML element",
          "hierarchy": "Snap App XML",
          "module": "Snap.App.XML",
          "name": "outputXML",
          "normalized": "Element-\u003eController a b()",
          "package": "snap-app",
          "partial": "XML",
          "signature": "Element-\u003eController c s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App-XML.html#v:outputXML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.App",
          "name": "App",
          "package": "snap-app",
          "source": "src/Snap-App.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Snap App",
          "module": "Snap.App",
          "name": "App",
          "package": "snap-app",
          "partial": "App",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Snap-App.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Blaze.Extra",
          "name": "Extra",
          "package": "snap-app",
          "source": "src/Text-Blaze-Extra.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Blaze Extra",
          "module": "Text.Blaze.Extra",
          "name": "Extra",
          "package": "snap-app",
          "partial": "Extra",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Text-Blaze-Extra.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Blaze.Extra",
          "name": "(!#)",
          "package": "snap-app",
          "signature": "h -\u003e AttributeValue -\u003e h",
          "source": "src/Text-Blaze-Extra.html#%21%23",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Blaze Extra",
          "module": "Text.Blaze.Extra",
          "name": "(!#) !#",
          "normalized": "a-\u003eAttributeValue-\u003ea",
          "package": "snap-app",
          "signature": "h-\u003eAttributeValue-\u003eh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Text-Blaze-Extra.html#v:-33--35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Blaze.Extra",
          "name": "(!.)",
          "package": "snap-app",
          "signature": "h -\u003e AttributeValue -\u003e h",
          "source": "src/Text-Blaze-Extra.html#%21.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Blaze Extra",
          "module": "Text.Blaze.Extra",
          "name": "(!.) !.",
          "normalized": "a-\u003eAttributeValue-\u003ea",
          "package": "snap-app",
          "signature": "h-\u003eAttributeValue-\u003eh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Text-Blaze-Extra.html#v:-33-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Blaze.Extra",
          "name": "hrefAssoc",
          "package": "snap-app",
          "signature": "String -\u003e [(String, String)] -\u003e Attribute",
          "source": "src/Text-Blaze-Extra.html#hrefAssoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Blaze Extra",
          "module": "Text.Blaze.Extra",
          "name": "hrefAssoc",
          "normalized": "String-\u003e[(String,String)]-\u003eAttribute",
          "package": "snap-app",
          "partial": "Assoc",
          "signature": "String-\u003e[(String,String)]-\u003eAttribute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Text-Blaze-Extra.html#v:hrefAssoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Blaze.Extra",
          "name": "hrefSet",
          "package": "snap-app",
          "signature": "URI -\u003e String -\u003e String -\u003e Attribute",
          "source": "src/Text-Blaze-Extra.html#hrefSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Blaze Extra",
          "module": "Text.Blaze.Extra",
          "name": "hrefSet",
          "normalized": "URI-\u003eString-\u003eString-\u003eAttribute",
          "package": "snap-app",
          "partial": "Set",
          "signature": "URI-\u003eString-\u003eString-\u003eAttribute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Text-Blaze-Extra.html#v:hrefSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Blaze.Extra",
          "name": "hrefURI",
          "package": "snap-app",
          "signature": "URI -\u003e Attribute",
          "source": "src/Text-Blaze-Extra.html#hrefURI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Blaze Extra",
          "module": "Text.Blaze.Extra",
          "name": "hrefURI",
          "normalized": "URI-\u003eAttribute",
          "package": "snap-app",
          "partial": "URI",
          "signature": "URI-\u003eAttribute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Text-Blaze-Extra.html#v:hrefURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Blaze.Extra",
          "name": "hrefURIWithHash",
          "package": "snap-app",
          "signature": "URI -\u003e String -\u003e Attribute",
          "source": "src/Text-Blaze-Extra.html#hrefURIWithHash",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Blaze Extra",
          "module": "Text.Blaze.Extra",
          "name": "hrefURIWithHash",
          "normalized": "URI-\u003eString-\u003eAttribute",
          "package": "snap-app",
          "partial": "URIWith Hash",
          "signature": "URI-\u003eString-\u003eAttribute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Text-Blaze-Extra.html#v:hrefURIWithHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Blaze.Extra",
          "name": "htmlCommas",
          "package": "snap-app",
          "signature": "[Html] -\u003e Html",
          "source": "src/Text-Blaze-Extra.html#htmlCommas",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Blaze Extra",
          "module": "Text.Blaze.Extra",
          "name": "htmlCommas",
          "normalized": "[Html]-\u003eHtml",
          "package": "snap-app",
          "partial": "Commas",
          "signature": "[Html]-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Text-Blaze-Extra.html#v:htmlCommas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Blaze.Extra",
          "name": "htmlCommasAnd",
          "package": "snap-app",
          "signature": "[Html] -\u003e Html",
          "source": "src/Text-Blaze-Extra.html#htmlCommasAnd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Blaze Extra",
          "module": "Text.Blaze.Extra",
          "name": "htmlCommasAnd",
          "normalized": "[Html]-\u003eHtml",
          "package": "snap-app",
          "partial": "Commas And",
          "signature": "[Html]-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Text-Blaze-Extra.html#v:htmlCommasAnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Blaze.Extra",
          "name": "htmlIntercalate",
          "package": "snap-app",
          "signature": "Html -\u003e [Html] -\u003e Html",
          "source": "src/Text-Blaze-Extra.html#htmlIntercalate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Blaze Extra",
          "module": "Text.Blaze.Extra",
          "name": "htmlIntercalate",
          "normalized": "Html-\u003e[Html]-\u003eHtml",
          "package": "snap-app",
          "partial": "Intercalate",
          "signature": "Html-\u003e[Html]-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Text-Blaze-Extra.html#v:htmlIntercalate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Blaze.Extra",
          "name": "linesToHtml",
          "package": "snap-app",
          "signature": "String -\u003e Html",
          "source": "src/Text-Blaze-Extra.html#linesToHtml",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Blaze Extra",
          "module": "Text.Blaze.Extra",
          "name": "linesToHtml",
          "normalized": "String-\u003eHtml",
          "package": "snap-app",
          "partial": "To Html",
          "signature": "String-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Text-Blaze-Extra.html#v:linesToHtml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple pagination support for blaze.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Blaze.Pagination",
          "name": "Pagination",
          "package": "snap-app",
          "source": "src/Text-Blaze-Pagination.html",
          "type": "module"
        },
        "index": {
          "description": "Simple pagination support for blaze",
          "hierarchy": "Text Blaze Pagination",
          "module": "Text.Blaze.Pagination",
          "name": "Pagination",
          "package": "snap-app",
          "partial": "Pagination",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Text-Blaze-Pagination.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Blaze.Pagination",
          "name": "PN",
          "package": "snap-app",
          "source": "src/Text-Blaze-Pagination.html#PN",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Blaze Pagination",
          "module": "Text.Blaze.Pagination",
          "name": "PN",
          "package": "snap-app",
          "partial": "PN",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Text-Blaze-Pagination.html#t:PN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Blaze.Pagination",
          "name": "PN",
          "package": "snap-app",
          "signature": "PN",
          "source": "src/Text-Blaze-Pagination.html#PN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Blaze Pagination",
          "module": "Text.Blaze.Pagination",
          "name": "PN",
          "package": "snap-app",
          "partial": "PN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Text-Blaze-Pagination.html#v:PN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender pagination as html.\n\u003c/p\u003e",
          "module": "Text.Blaze.Pagination",
          "name": "pagination",
          "package": "snap-app",
          "signature": "PN -\u003e Html",
          "source": "src/Text-Blaze-Pagination.html#pagination",
          "type": "function"
        },
        "index": {
          "description": "Render pagination as html",
          "hierarchy": "Text Blaze Pagination",
          "module": "Text.Blaze.Pagination",
          "name": "pagination",
          "normalized": "PN-\u003eHtml",
          "package": "snap-app",
          "signature": "PN-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Text-Blaze-Pagination.html#v:pagination"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Blaze.Pagination",
          "name": "pnPn",
          "package": "snap-app",
          "signature": "Pagination",
          "source": "src/Text-Blaze-Pagination.html#PN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Blaze Pagination",
          "module": "Text.Blaze.Pagination",
          "name": "pnPn",
          "package": "snap-app",
          "partial": "Pn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Text-Blaze-Pagination.html#v:pnPn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Blaze.Pagination",
          "name": "pnResultsPerPage",
          "package": "snap-app",
          "signature": "Maybe [Integer]",
          "source": "src/Text-Blaze-Pagination.html#PN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Blaze Pagination",
          "module": "Text.Blaze.Pagination",
          "name": "pnResultsPerPage",
          "normalized": "Maybe[Integer]",
          "package": "snap-app",
          "partial": "Results Per Page",
          "signature": "Maybe[Integer]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Text-Blaze-Pagination.html#v:pnResultsPerPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Blaze.Pagination",
          "name": "pnURI",
          "package": "snap-app",
          "signature": "URI",
          "source": "src/Text-Blaze-Pagination.html#PN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Blaze Pagination",
          "module": "Text.Blaze.Pagination",
          "name": "pnURI",
          "package": "snap-app",
          "partial": "URI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-app/docs/Text-Blaze-Pagination.html#v:pnURI"
      }
    }
  ]
]