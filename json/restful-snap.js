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
        "word": "restful-snap"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Restful.TH",
          "name": "TH",
          "package": "restful-snap",
          "source": "src/Snap-Restful-TH.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Snap Restful TH",
          "module": "Snap.Restful.TH",
          "name": "TH",
          "package": "restful-snap",
          "partial": "TH",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/restful-snap/docs/Snap-Restful-TH.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates compiled splices for a data type.  All of the data type's\n fields must be instances of the PrimSplice type class.\n\u003c/p\u003e\u003cp\u003eUsage:\n\u003c/p\u003e\u003cpre\u003e fooSplices = $(cSplices ''Foo)\n\u003c/pre\u003e",
          "module": "Snap.Restful.TH",
          "name": "cSplices",
          "package": "restful-snap",
          "signature": "Name -\u003e Q Exp",
          "source": "src/Snap-Restful-TH.html#cSplices",
          "type": "function"
        },
        "index": {
          "description": "Generates compiled splices for data type All of the data type fields must be instances of the PrimSplice type class Usage fooSplices cSplices Foo",
          "hierarchy": "Snap Restful TH",
          "module": "Snap.Restful.TH",
          "name": "cSplices",
          "normalized": "Name-\u003eQ Exp",
          "package": "restful-snap",
          "partial": "Splices",
          "signature": "Name-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restful-snap/docs/Snap-Restful-TH.html#v:cSplices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerives a HasFormlet instance for a data type.\n\u003c/p\u003e",
          "module": "Snap.Restful.TH",
          "name": "deriveHasFormlet",
          "package": "restful-snap",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/Snap-Restful-TH.html#deriveHasFormlet",
          "type": "function"
        },
        "index": {
          "description": "Derives HasFormlet instance for data type",
          "hierarchy": "Snap Restful TH",
          "module": "Snap.Restful.TH",
          "name": "deriveHasFormlet",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "restful-snap",
          "partial": "Has Formlet",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restful-snap/docs/Snap-Restful-TH.html#v:deriveHasFormlet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates interpreted splices for a data type.  All of the data type's\n fields must be instances of the PrimSplice type class.\n\u003c/p\u003e\u003cp\u003eUsage:\n\u003c/p\u003e\u003cpre\u003e fooSplices :: Monad m =\u003e Foo -\u003e [(Text, I.Splice m)]\n fooSplices = $(iSplices ''Foo)\n\u003c/pre\u003e",
          "module": "Snap.Restful.TH",
          "name": "iSplices",
          "package": "restful-snap",
          "signature": "Name -\u003e Q Exp",
          "source": "src/Snap-Restful-TH.html#iSplices",
          "type": "function"
        },
        "index": {
          "description": "Generates interpreted splices for data type All of the data type fields must be instances of the PrimSplice type class Usage fooSplices Monad Foo Text I.Splice fooSplices iSplices Foo",
          "hierarchy": "Snap Restful TH",
          "module": "Snap.Restful.TH",
          "name": "iSplices",
          "normalized": "Name-\u003eQ Exp",
          "package": "restful-snap",
          "partial": "Splices",
          "signature": "Name-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restful-snap/docs/Snap-Restful-TH.html#v:iSplices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Restful",
          "name": "Restful",
          "package": "restful-snap",
          "source": "src/Snap-Restful.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Snap Restful",
          "module": "Snap.Restful",
          "name": "Restful",
          "package": "restful-snap",
          "partial": "Restful",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/restful-snap/docs/Snap-Restful.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumeration of all the different types of CRUD routes.\n\u003c/p\u003e",
          "module": "Snap.Restful",
          "name": "CRUD",
          "package": "restful-snap",
          "source": "src/Snap-Restful.html#CRUD",
          "type": "data"
        },
        "index": {
          "description": "Enumeration of all the different types of CRUD routes",
          "hierarchy": "Snap Restful",
          "module": "Snap.Restful",
          "name": "CRUD",
          "package": "restful-snap",
          "partial": "CRUD",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/restful-snap/docs/Snap-Restful.html#t:CRUD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Restful",
          "name": "DBId",
          "package": "restful-snap",
          "source": "src/Snap-Restful.html#DBId",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Snap Restful",
          "module": "Snap.Restful",
          "name": "DBId",
          "package": "restful-snap",
          "partial": "DBId",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/restful-snap/docs/Snap-Restful.html#t:DBId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class for automatic formlet generation.\n\u003c/p\u003e",
          "module": "Snap.Restful",
          "name": "HasFormlet",
          "package": "restful-snap",
          "source": "src/Snap-Restful.html#HasFormlet",
          "type": "class"
        },
        "index": {
          "description": "Type class for automatic formlet generation",
          "hierarchy": "Snap Restful",
          "module": "Snap.Restful",
          "name": "HasFormlet",
          "package": "restful-snap",
          "partial": "Has Formlet",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/restful-snap/docs/Snap-Restful.html#t:HasFormlet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class for automatic splice generation.\n\u003c/p\u003e",
          "module": "Snap.Restful",
          "name": "PrimSplice",
          "package": "restful-snap",
          "source": "src/Snap-Restful.html#PrimSplice",
          "type": "class"
        },
        "index": {
          "description": "Type class for automatic splice generation",
          "hierarchy": "Snap Restful",
          "module": "Snap.Restful",
          "name": "PrimSplice",
          "package": "restful-snap",
          "partial": "Prim Splice",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/restful-snap/docs/Snap-Restful.html#t:PrimSplice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncapsulates the data necessary to define a resource.\n\u003c/p\u003e",
          "module": "Snap.Restful",
          "name": "Resource",
          "package": "restful-snap",
          "source": "src/Snap-Restful.html#Resource",
          "type": "data"
        },
        "index": {
          "description": "Encapsulates the data necessary to define resource",
          "hierarchy": "Snap Restful",
          "module": "Snap.Restful",
          "name": "Resource",
          "package": "restful-snap",
          "partial": "Resource",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/restful-snap/docs/Snap-Restful.html#t:Resource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Restful",
          "name": "DBId",
          "package": "restful-snap",
          "signature": "DBId",
          "source": "src/Snap-Restful.html#DBId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Restful",
          "module": "Snap.Restful",
          "name": "DBId",
          "package": "restful-snap",
          "partial": "DBId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restful-snap/docs/Snap-Restful.html#v:DBId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new item\n\u003c/p\u003e",
          "module": "Snap.Restful",
          "name": "RCreate",
          "package": "restful-snap",
          "signature": "RCreate",
          "source": "src/Snap-Restful.html#CRUD",
          "type": "function"
        },
        "index": {
          "description": "Create new item",
          "hierarchy": "Snap Restful",
          "module": "Snap.Restful",
          "name": "RCreate",
          "package": "restful-snap",
          "partial": "RCreate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restful-snap/docs/Snap-Restful.html#v:RCreate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete an item\n\u003c/p\u003e",
          "module": "Snap.Restful",
          "name": "RDestroy",
          "package": "restful-snap",
          "signature": "RDestroy",
          "source": "src/Snap-Restful.html#CRUD",
          "type": "function"
        },
        "index": {
          "description": "Delete an item",
          "hierarchy": "Snap Restful",
          "module": "Snap.Restful",
          "name": "RDestroy",
          "package": "restful-snap",
          "partial": "RDestroy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restful-snap/docs/Snap-Restful.html#v:RDestroy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe form for editing an item\n\u003c/p\u003e",
          "module": "Snap.Restful",
          "name": "REdit",
          "package": "restful-snap",
          "signature": "REdit",
          "source": "src/Snap-Restful.html#CRUD",
          "type": "function"
        },
        "index": {
          "description": "The form for editing an item",
          "hierarchy": "Snap Restful",
          "module": "Snap.Restful",
          "name": "REdit",
          "package": "restful-snap",
          "partial": "REdit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restful-snap/docs/Snap-Restful.html#v:REdit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn item index\n\u003c/p\u003e",
          "module": "Snap.Restful",
          "name": "RIndex",
          "package": "restful-snap",
          "signature": "RIndex",
          "source": "src/Snap-Restful.html#CRUD",
          "type": "function"
        },
        "index": {
          "description": "An item index",
          "hierarchy": "Snap Restful",
          "module": "Snap.Restful",
          "name": "RIndex",
          "package": "restful-snap",
          "partial": "RIndex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restful-snap/docs/Snap-Restful.html#v:RIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe form for creating a new item\n\u003c/p\u003e",
          "module": "Snap.Restful",
          "name": "RNew",
          "package": "restful-snap",
          "signature": "RNew",
          "source": "src/Snap-Restful.html#CRUD",
          "type": "function"
        },
        "index": {
          "description": "The form for creating new item",
          "hierarchy": "Snap Restful",
          "module": "Snap.Restful",
          "name": "RNew",
          "package": "restful-snap",
          "partial": "RNew",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restful-snap/docs/Snap-Restful.html#v:RNew"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA single item\n\u003c/p\u003e",
          "module": "Snap.Restful",
          "name": "RShow",
          "package": "restful-snap",
          "signature": "RShow",
          "source": "src/Snap-Restful.html#CRUD",
          "type": "function"
        },
        "index": {
          "description": "single item",
          "hierarchy": "Snap Restful",
          "module": "Snap.Restful",
          "name": "RShow",
          "package": "restful-snap",
          "partial": "RShow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restful-snap/docs/Snap-Restful.html#v:RShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate an item\n\u003c/p\u003e",
          "module": "Snap.Restful",
          "name": "RUpdate",
          "package": "restful-snap",
          "signature": "RUpdate",
          "source": "src/Snap-Restful.html#CRUD",
          "type": "function"
        },
        "index": {
          "description": "Update an item",
          "hierarchy": "Snap Restful",
          "module": "Snap.Restful",
          "name": "RUpdate",
          "package": "restful-snap",
          "partial": "RUpdate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restful-snap/docs/Snap-Restful.html#v:RUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Restful",
          "name": "Resource",
          "package": "restful-snap",
          "signature": "Resource",
          "source": "src/Snap-Restful.html#Resource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Restful",
          "module": "Snap.Restful",
          "name": "Resource",
          "package": "restful-snap",
          "partial": "Resource",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restful-snap/docs/Snap-Restful.html#v:Resource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOne-stop convenience function to enable RESTful resources in your\n application.  Call this function from your initializer passing it all of\n your resources and it will add the routes and splices for you.\n\u003c/p\u003e",
          "module": "Snap.Restful",
          "name": "addResource",
          "package": "restful-snap",
          "signature": "Resource-\u003e [(CRUD, Handler b v ())]-\u003e [(Text, Handler b v ())]-\u003e [(Text, Handler b v ())]-\u003e Snaplet (Heist b)-\u003e Initializer b v ()",
          "type": "function"
        },
        "index": {
          "description": "One-stop convenience function to enable RESTful resources in your application Call this function from your initializer passing it all of your resources and it will add the routes and splices for you",
          "hierarchy": "Snap Restful",
          "module": "Snap.Restful",
          "name": "addResource",
          "normalized": "Resource-\u003e[(CRUD,Handler a b())]-\u003e[(Text,Handler a b())]-\u003e[(Text,Handler a b())]-\u003eSnaplet(Heist a)-\u003eInitializer a b()",
          "package": "restful-snap",
          "partial": "Resource",
          "signature": "Resource-\u003e[(CRUD,Handler b v())]-\u003e[(Text,Handler b v())]-\u003e[(Text,Handler b v())]-\u003eSnaplet(Heist b)-\u003eInitializer b v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restful-snap/docs/Snap-Restful.html#v:addResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJust like \u003ccode\u003e\u003ca\u003eaddResource\u003c/a\u003e\u003c/code\u003e, but makes the handlers relative to the current\n snaplet's root.  Use this function if you're writing a snaplet.\n\u003c/p\u003e",
          "module": "Snap.Restful",
          "name": "addResourceRelative",
          "package": "restful-snap",
          "signature": "Resource-\u003e [(CRUD, Handler b v ())]-\u003e [(Text, Handler b v ())]-\u003e [(Text, Handler b v ())]-\u003e Snaplet (Heist b)-\u003e Initializer b v ()",
          "type": "function"
        },
        "index": {
          "description": "Just like addResource but makes the handlers relative to the current snaplet root Use this function if you re writing snaplet",
          "hierarchy": "Snap Restful",
          "module": "Snap.Restful",
          "name": "addResourceRelative",
          "normalized": "Resource-\u003e[(CRUD,Handler a b())]-\u003e[(Text,Handler a b())]-\u003e[(Text,Handler a b())]-\u003eSnaplet(Heist a)-\u003eInitializer a b()",
          "package": "restful-snap",
          "partial": "Resource Relative",
          "signature": "Resource-\u003e[(CRUD,Handler b v())]-\u003e[(Text,Handler b v())]-\u003e[(Text,Handler b v())]-\u003eSnaplet(Heist b)-\u003eInitializer b v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restful-snap/docs/Snap-Restful.html#v:addResourceRelative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Restful",
          "name": "cPrimShow",
          "package": "restful-snap",
          "signature": "a -\u003e Builder",
          "source": "src/Snap-Restful.html#cPrimShow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Restful",
          "module": "Snap.Restful",
          "name": "cPrimShow",
          "normalized": "a-\u003eBuilder",
          "package": "restful-snap",
          "partial": "Prim Show",
          "signature": "a-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restful-snap/docs/Snap-Restful.html#v:cPrimShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Restful",
          "name": "cPrimSplice",
          "package": "restful-snap",
          "signature": "a -\u003e Builder",
          "source": "src/Snap-Restful.html#cPrimSplice",
          "type": "method"
        },
        "index": {
          "hierarchy": "Snap Restful",
          "module": "Snap.Restful",
          "name": "cPrimSplice",
          "normalized": "a-\u003eBuilder",
          "package": "restful-snap",
          "partial": "Prim Splice",
          "signature": "a-\u003eBuilder",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/restful-snap/docs/Snap-Restful.html#v:cPrimSplice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates the path for creating a resource.\n\u003c/p\u003e",
          "module": "Snap.Restful",
          "name": "createPath",
          "package": "restful-snap",
          "signature": "Resource -\u003e Text",
          "source": "src/Snap-Restful.html#createPath",
          "type": "function"
        },
        "index": {
          "description": "Generates the path for creating resource",
          "hierarchy": "Snap Restful",
          "module": "Snap.Restful",
          "name": "createPath",
          "normalized": "Resource-\u003eText",
          "package": "restful-snap",
          "partial": "Path",
          "signature": "Resource-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restful-snap/docs/Snap-Restful.html#v:createPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates the path for deleting a resource item.\n\u003c/p\u003e",
          "module": "Snap.Restful",
          "name": "destroyPath",
          "package": "restful-snap",
          "signature": "Resource -\u003e DBId -\u003e Text",
          "source": "src/Snap-Restful.html#destroyPath",
          "type": "function"
        },
        "index": {
          "description": "Generates the path for deleting resource item",
          "hierarchy": "Snap Restful",
          "module": "Snap.Restful",
          "name": "destroyPath",
          "normalized": "Resource-\u003eDBId-\u003eText",
          "package": "restful-snap",
          "partial": "Path",
          "signature": "Resource-\u003eDBId-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restful-snap/docs/Snap-Restful.html#v:destroyPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates the path for a form to a new resource.\n\u003c/p\u003e",
          "module": "Snap.Restful",
          "name": "editPath",
          "package": "restful-snap",
          "signature": "Resource -\u003e DBId -\u003e Text",
          "source": "src/Snap-Restful.html#editPath",
          "type": "function"
        },
        "index": {
          "description": "Generates the path for form to new resource",
          "hierarchy": "Snap Restful",
          "module": "Snap.Restful",
          "name": "editPath",
          "normalized": "Resource-\u003eDBId-\u003eText",
          "package": "restful-snap",
          "partial": "Path",
          "signature": "Resource-\u003eDBId-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restful-snap/docs/Snap-Restful.html#v:editPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Restful",
          "name": "formlet",
          "package": "restful-snap",
          "signature": "Formlet Text m a",
          "source": "src/Snap-Restful.html#formlet",
          "type": "method"
        },
        "index": {
          "hierarchy": "Snap Restful",
          "module": "Snap.Restful",
          "name": "formlet",
          "package": "restful-snap",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/restful-snap/docs/Snap-Restful.html#v:formlet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the \u003ccode\u003eRESTFormAction\u003c/code\u003e param. \n\u003c/p\u003e",
          "module": "Snap.Restful",
          "name": "getFormAction",
          "package": "restful-snap",
          "signature": "HeistT n m [Node]",
          "source": "src/Snap-Restful.html#getFormAction",
          "type": "function"
        },
        "index": {
          "description": "Gets the RESTFormAction param",
          "hierarchy": "Snap Restful",
          "module": "Snap.Restful",
          "name": "getFormAction",
          "normalized": "HeistT a b[Node]",
          "package": "restful-snap",
          "partial": "Form Action",
          "signature": "HeistT n m[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restful-snap/docs/Snap-Restful.html#v:getFormAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Restful",
          "name": "iPrimShow",
          "package": "restful-snap",
          "signature": "a -\u003e m [Node]",
          "source": "src/Snap-Restful.html#iPrimShow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Restful",
          "module": "Snap.Restful",
          "name": "iPrimShow",
          "normalized": "a-\u003eb[Node]",
          "package": "restful-snap",
          "partial": "Prim Show",
          "signature": "a-\u003em[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restful-snap/docs/Snap-Restful.html#v:iPrimShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Restful",
          "name": "iPrimSplice",
          "package": "restful-snap",
          "signature": "a -\u003e m [Node]",
          "source": "src/Snap-Restful.html#iPrimSplice",
          "type": "method"
        },
        "index": {
          "hierarchy": "Snap Restful",
          "module": "Snap.Restful",
          "name": "iPrimSplice",
          "normalized": "a-\u003eb[Node]",
          "package": "restful-snap",
          "partial": "Prim Splice",
          "signature": "a-\u003em[Node]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/restful-snap/docs/Snap-Restful.html#v:iPrimSplice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Restful",
          "name": "iPrimText",
          "package": "restful-snap",
          "signature": "Text -\u003e m [Node]",
          "source": "src/Snap-Restful.html#iPrimText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Restful",
          "module": "Snap.Restful",
          "name": "iPrimText",
          "normalized": "Text-\u003ea[Node]",
          "package": "restful-snap",
          "partial": "Prim Text",
          "signature": "Text-\u003em[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restful-snap/docs/Snap-Restful.html#v:iPrimText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates the path for the resource index.\n\u003c/p\u003e",
          "module": "Snap.Restful",
          "name": "indexPath",
          "package": "restful-snap",
          "signature": "Resource -\u003e Text",
          "source": "src/Snap-Restful.html#indexPath",
          "type": "function"
        },
        "index": {
          "description": "Generates the path for the resource index",
          "hierarchy": "Snap Restful",
          "module": "Snap.Restful",
          "name": "indexPath",
          "normalized": "Resource-\u003eText",
          "package": "restful-snap",
          "partial": "Path",
          "signature": "Resource-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restful-snap/docs/Snap-Restful.html#v:indexPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn initializer for encapsulating RESTful resources as a standalone\n snaplet.\n\u003c/p\u003e",
          "module": "Snap.Restful",
          "name": "initRest",
          "package": "restful-snap",
          "signature": "Resource -\u003e [(CRUD, Handler b () ())] -\u003e [(Text, Handler b () ())] -\u003e [(Text, Handler b () ())] -\u003e Snaplet (Heist b) -\u003e SnapletInit b ()",
          "source": "src/Snap-Restful.html#initRest",
          "type": "function"
        },
        "index": {
          "description": "An initializer for encapsulating RESTful resources as standalone snaplet",
          "hierarchy": "Snap Restful",
          "module": "Snap.Restful",
          "name": "initRest",
          "normalized": "Resource-\u003e[(CRUD,Handler a()())]-\u003e[(Text,Handler a()())]-\u003e[(Text,Handler a()())]-\u003eSnaplet(Heist a)-\u003eSnapletInit a()",
          "package": "restful-snap",
          "partial": "Rest",
          "signature": "Resource-\u003e[(CRUD,Handler b()())]-\u003e[(Text,Handler b()())]-\u003e[(Text,Handler b()())]-\u003eSnaplet(Heist b)-\u003eSnapletInit b()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restful-snap/docs/Snap-Restful.html#v:initRest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a path for an item action.\n\u003c/p\u003e",
          "module": "Snap.Restful",
          "name": "itemActionPath",
          "package": "restful-snap",
          "signature": "Resource -\u003e Text -\u003e DBId -\u003e Text",
          "source": "src/Snap-Restful.html#itemActionPath",
          "type": "function"
        },
        "index": {
          "description": "Generates path for an item action",
          "hierarchy": "Snap Restful",
          "module": "Snap.Restful",
          "name": "itemActionPath",
          "normalized": "Resource-\u003eText-\u003eDBId-\u003eText",
          "package": "restful-snap",
          "partial": "Action Path",
          "signature": "Resource-\u003eText-\u003eDBId-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restful-snap/docs/Snap-Restful.html#v:itemActionPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates compiled path splices for a resource item.  These splices let\n you put resource links in your templates in DRY manner.\n\u003c/p\u003e",
          "module": "Snap.Restful",
          "name": "itemCSplices",
          "package": "restful-snap",
          "signature": "Resource -\u003e [(Text, DBId -\u003e Text)]",
          "source": "src/Snap-Restful.html#itemCSplices",
          "type": "function"
        },
        "index": {
          "description": "Generates compiled path splices for resource item These splices let you put resource links in your templates in DRY manner",
          "hierarchy": "Snap Restful",
          "module": "Snap.Restful",
          "name": "itemCSplices",
          "normalized": "Resource-\u003e[(Text,DBId-\u003eText)]",
          "package": "restful-snap",
          "partial": "CSplices",
          "signature": "Resource-\u003e[(Text,DBId-\u003eText)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restful-snap/docs/Snap-Restful.html#v:itemCSplices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates path splices for a resource item.  These splices let you put\n resource links in your templates in DRY manner.\n\u003c/p\u003e",
          "module": "Snap.Restful",
          "name": "itemSplices",
          "package": "restful-snap",
          "signature": "Resource -\u003e DBId -\u003e [(Text, Splice m)]",
          "source": "src/Snap-Restful.html#itemSplices",
          "type": "function"
        },
        "index": {
          "description": "Generates path splices for resource item These splices let you put resource links in your templates in DRY manner",
          "hierarchy": "Snap Restful",
          "module": "Snap.Restful",
          "name": "itemSplices",
          "normalized": "Resource-\u003eDBId-\u003e[(Text,Splice a)]",
          "package": "restful-snap",
          "partial": "Splices",
          "signature": "Resource-\u003eDBId-\u003e[(Text,Splice m)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restful-snap/docs/Snap-Restful.html#v:itemSplices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates the path for a form to a new resource.\n\u003c/p\u003e",
          "module": "Snap.Restful",
          "name": "newPath",
          "package": "restful-snap",
          "signature": "Resource -\u003e Text",
          "source": "src/Snap-Restful.html#newPath",
          "type": "function"
        },
        "index": {
          "description": "Generates the path for form to new resource",
          "hierarchy": "Snap Restful",
          "module": "Snap.Restful",
          "name": "newPath",
          "normalized": "Resource-\u003eText",
          "package": "restful-snap",
          "partial": "Path",
          "signature": "Resource-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restful-snap/docs/Snap-Restful.html#v:newPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a prefix to the tag names for a list of splices.  If the existing\n tag name is empty, then the new tag name is just the prefix.  Otherwise the\n new tag name is the prefix followed by an underscore followed by the\n existing name.\n\u003c/p\u003e",
          "module": "Snap.Restful",
          "name": "prefixSplices",
          "package": "restful-snap",
          "signature": "Text -\u003e [(Text, a)] -\u003e [(Text, a)]",
          "source": "src/Snap-Restful.html#prefixSplices",
          "type": "function"
        },
        "index": {
          "description": "Adds prefix to the tag names for list of splices If the existing tag name is empty then the new tag name is just the prefix Otherwise the new tag name is the prefix followed by an underscore followed by the existing name",
          "hierarchy": "Snap Restful",
          "module": "Snap.Restful",
          "name": "prefixSplices",
          "normalized": "Text-\u003e[(Text,a)]-\u003e[(Text,a)]",
          "package": "restful-snap",
          "partial": "Splices",
          "signature": "Text-\u003e[(Text,a)]-\u003e[(Text,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restful-snap/docs/Snap-Restful.html#v:prefixSplices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eItem/instance level routing end points\n\u003c/p\u003e",
          "module": "Snap.Restful",
          "name": "rItemEndpoints",
          "package": "restful-snap",
          "signature": "[Text]",
          "source": "src/Snap-Restful.html#Resource",
          "type": "function"
        },
        "index": {
          "description": "Item instance level routing end points",
          "hierarchy": "Snap Restful",
          "module": "Snap.Restful",
          "name": "rItemEndpoints",
          "normalized": "[Text]",
          "package": "restful-snap",
          "partial": "Item Endpoints",
          "signature": "[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restful-snap/docs/Snap-Restful.html#v:rItemEndpoints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA name for this resource\n\u003c/p\u003e",
          "module": "Snap.Restful",
          "name": "rName",
          "package": "restful-snap",
          "signature": "Text",
          "source": "src/Snap-Restful.html#Resource",
          "type": "function"
        },
        "index": {
          "description": "name for this resource",
          "hierarchy": "Snap Restful",
          "module": "Snap.Restful",
          "name": "rName",
          "package": "restful-snap",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restful-snap/docs/Snap-Restful.html#v:rName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResource level routing end points\n\u003c/p\u003e",
          "module": "Snap.Restful",
          "name": "rResourceEndpoints",
          "package": "restful-snap",
          "signature": "[Text]",
          "source": "src/Snap-Restful.html#Resource",
          "type": "function"
        },
        "index": {
          "description": "Resource level routing end points",
          "hierarchy": "Snap Restful",
          "module": "Snap.Restful",
          "name": "rResourceEndpoints",
          "normalized": "[Text]",
          "package": "restful-snap",
          "partial": "Resource Endpoints",
          "signature": "[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restful-snap/docs/Snap-Restful.html#v:rResourceEndpoints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eURL root for this resource\n\u003c/p\u003e",
          "module": "Snap.Restful",
          "name": "rRoot",
          "package": "restful-snap",
          "signature": "Text",
          "source": "src/Snap-Restful.html#Resource",
          "type": "function"
        },
        "index": {
          "description": "URL root for this resource",
          "hierarchy": "Snap Restful",
          "module": "Snap.Restful",
          "name": "rRoot",
          "package": "restful-snap",
          "partial": "Root",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restful-snap/docs/Snap-Restful.html#v:rRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRedirect to given item's default show page\n\u003c/p\u003e",
          "module": "Snap.Restful",
          "name": "redirToItem",
          "package": "restful-snap",
          "signature": "Resource -\u003e DBId -\u003e m a",
          "source": "src/Snap-Restful.html#redirToItem",
          "type": "function"
        },
        "index": {
          "description": "Redirect to given item default show page",
          "hierarchy": "Snap Restful",
          "module": "Snap.Restful",
          "name": "redirToItem",
          "normalized": "Resource-\u003eDBId-\u003ea b",
          "package": "restful-snap",
          "partial": "To Item",
          "signature": "Resource-\u003eDBId-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restful-snap/docs/Snap-Restful.html#v:redirToItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Restful",
          "name": "relativeRedirect",
          "package": "restful-snap",
          "signature": "ByteString -\u003e m b",
          "source": "src/Snap-Restful.html#relativeRedirect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Restful",
          "module": "Snap.Restful",
          "name": "relativeRedirect",
          "normalized": "ByteString-\u003ea b",
          "package": "restful-snap",
          "partial": "Redirect",
          "signature": "ByteString-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restful-snap/docs/Snap-Restful.html#v:relativeRedirect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns compiled splices for a resource.\n\u003c/p\u003e",
          "module": "Snap.Restful",
          "name": "resourceCSplices",
          "package": "restful-snap",
          "signature": "Resource -\u003e [(Text, Splice m)]",
          "source": "src/Snap-Restful.html#resourceCSplices",
          "type": "function"
        },
        "index": {
          "description": "Returns compiled splices for resource",
          "hierarchy": "Snap Restful",
          "module": "Snap.Restful",
          "name": "resourceCSplices",
          "normalized": "Resource-\u003e[(Text,Splice a)]",
          "package": "restful-snap",
          "partial": "CSplices",
          "signature": "Resource-\u003e[(Text,Splice m)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restful-snap/docs/Snap-Restful.html#v:resourceCSplices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a route handler for the routes returned by resourceRoutes.  This\n function does add the rRoot prefix.\n\u003c/p\u003e",
          "module": "Snap.Restful",
          "name": "resourceRouter",
          "package": "restful-snap",
          "signature": "Resource -\u003e [(CRUD, m a)] -\u003e [(Text, m a)] -\u003e [(Text, m a)] -\u003e m a",
          "source": "src/Snap-Restful.html#resourceRouter",
          "type": "function"
        },
        "index": {
          "description": "Generate route handler for the routes returned by resourceRoutes This function does add the rRoot prefix",
          "hierarchy": "Snap Restful",
          "module": "Snap.Restful",
          "name": "resourceRouter",
          "normalized": "Resource-\u003e[(CRUD,a b)]-\u003e[(Text,a b)]-\u003e[(Text,a b)]-\u003ea b",
          "package": "restful-snap",
          "partial": "Router",
          "signature": "Resource-\u003e[(CRUD,m a)]-\u003e[(Text,m a)]-\u003e[(Text,m a)]-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restful-snap/docs/Snap-Restful.html#v:resourceRouter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eaddResource\u003c/a\u003e\u003c/code\u003e for an explanation of the arguments to this\n function. The routes returned ARE prefixed with rRoot from\n Resource.\n\u003c/p\u003e",
          "module": "Snap.Restful",
          "name": "resourceRoutes",
          "package": "restful-snap",
          "signature": "Resource -\u003e [(CRUD, m a)] -\u003e [(Text, m a)] -\u003e [(Text, m a)] -\u003e [(ByteString, m a)]",
          "source": "src/Snap-Restful.html#resourceRoutes",
          "type": "function"
        },
        "index": {
          "description": "See addResource for an explanation of the arguments to this function The routes returned ARE prefixed with rRoot from Resource",
          "hierarchy": "Snap Restful",
          "module": "Snap.Restful",
          "name": "resourceRoutes",
          "normalized": "Resource-\u003e[(CRUD,a b)]-\u003e[(Text,a b)]-\u003e[(Text,a b)]-\u003e[(ByteString,a b)]",
          "package": "restful-snap",
          "partial": "Routes",
          "signature": "Resource-\u003e[(CRUD,m a)]-\u003e[(Text,m a)]-\u003e[(Text,m a)]-\u003e[(ByteString,m a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restful-snap/docs/Snap-Restful.html#v:resourceRoutes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePaths at the resource/collection level\n\u003c/p\u003e",
          "module": "Snap.Restful",
          "name": "resourceSplices",
          "package": "restful-snap",
          "signature": "Resource -\u003e [(Text, HeistT n m Template)]",
          "source": "src/Snap-Restful.html#resourceSplices",
          "type": "function"
        },
        "index": {
          "description": "Paths at the resource collection level",
          "hierarchy": "Snap Restful",
          "module": "Snap.Restful",
          "name": "resourceSplices",
          "normalized": "Resource-\u003e[(Text,HeistT a b Template)]",
          "package": "restful-snap",
          "partial": "Splices",
          "signature": "Resource-\u003e[(Text,HeistT n m Template)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restful-snap/docs/Snap-Restful.html#v:resourceSplices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eindexPath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Snap.Restful",
          "name": "rootPath",
          "package": "restful-snap",
          "signature": "Resource -\u003e Text",
          "source": "src/Snap-Restful.html#rootPath",
          "type": "function"
        },
        "index": {
          "description": "Same as indexPath",
          "hierarchy": "Snap Restful",
          "module": "Snap.Restful",
          "name": "rootPath",
          "normalized": "Resource-\u003eText",
          "package": "restful-snap",
          "partial": "Path",
          "signature": "Resource-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restful-snap/docs/Snap-Restful.html#v:rootPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the \u003ccode\u003eRESTFormAction\u003c/code\u003e param. \n\u003c/p\u003e",
          "module": "Snap.Restful",
          "name": "setFormAction",
          "package": "restful-snap",
          "signature": "Text -\u003e m a -\u003e m a",
          "source": "src/Snap-Restful.html#setFormAction",
          "type": "function"
        },
        "index": {
          "description": "Sets the RESTFormAction param",
          "hierarchy": "Snap Restful",
          "module": "Snap.Restful",
          "name": "setFormAction",
          "normalized": "Text-\u003ea b-\u003ea b",
          "package": "restful-snap",
          "partial": "Form Action",
          "signature": "Text-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restful-snap/docs/Snap-Restful.html#v:setFormAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates the path for showing a single resource item.\n\u003c/p\u003e",
          "module": "Snap.Restful",
          "name": "showPath",
          "package": "restful-snap",
          "signature": "Resource -\u003e DBId -\u003e Text",
          "source": "src/Snap-Restful.html#showPath",
          "type": "function"
        },
        "index": {
          "description": "Generates the path for showing single resource item",
          "hierarchy": "Snap Restful",
          "module": "Snap.Restful",
          "name": "showPath",
          "normalized": "Resource-\u003eDBId-\u003eText",
          "package": "restful-snap",
          "partial": "Path",
          "signature": "Resource-\u003eDBId-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restful-snap/docs/Snap-Restful.html#v:showPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple formlet for dates that\n\u003c/p\u003e",
          "module": "Snap.Restful",
          "name": "simpleDateFormlet",
          "package": "restful-snap",
          "signature": "Maybe Day -\u003e Form Text m Day",
          "source": "src/Snap-Restful.html#simpleDateFormlet",
          "type": "function"
        },
        "index": {
          "description": "simple formlet for dates that",
          "hierarchy": "Snap Restful",
          "module": "Snap.Restful",
          "name": "simpleDateFormlet",
          "normalized": "Maybe Day-\u003eForm Text a Day",
          "package": "restful-snap",
          "partial": "Date Formlet",
          "signature": "Maybe Day-\u003eForm Text m Day",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restful-snap/docs/Snap-Restful.html#v:simpleDateFormlet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn heist template location for given crud action\n\u003c/p\u003e",
          "module": "Snap.Restful",
          "name": "templatePath",
          "package": "restful-snap",
          "signature": "Resource -\u003e CRUD -\u003e ByteString",
          "source": "src/Snap-Restful.html#templatePath",
          "type": "function"
        },
        "index": {
          "description": "Return heist template location for given crud action",
          "hierarchy": "Snap Restful",
          "module": "Snap.Restful",
          "name": "templatePath",
          "normalized": "Resource-\u003eCRUD-\u003eByteString",
          "package": "restful-snap",
          "partial": "Path",
          "signature": "Resource-\u003eCRUD-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restful-snap/docs/Snap-Restful.html#v:templatePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Restful",
          "name": "unDBId",
          "package": "restful-snap",
          "signature": "Word64",
          "source": "src/Snap-Restful.html#DBId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Restful",
          "module": "Snap.Restful",
          "name": "unDBId",
          "package": "restful-snap",
          "partial": "DBId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restful-snap/docs/Snap-Restful.html#v:unDBId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSince \u003ccode\u003e\u003ca\u003einitRest\u003c/a\u003e\u003c/code\u003e returns unit, we provide a generic unit lens here for\n use with nestSnaplet in case you don't want to add a unit field to your\n application state type.\n\u003c/p\u003e",
          "module": "Snap.Restful",
          "name": "unitLens",
          "package": "restful-snap",
          "signature": "Lens' b ()",
          "source": "src/Snap-Restful.html#unitLens",
          "type": "function"
        },
        "index": {
          "description": "Since initRest returns unit we provide generic unit lens here for use with nestSnaplet in case you don want to add unit field to your application state type",
          "hierarchy": "Snap Restful",
          "module": "Snap.Restful",
          "name": "unitLens",
          "normalized": "Lens' a()",
          "package": "restful-snap",
          "partial": "Lens",
          "signature": "Lens' b()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restful-snap/docs/Snap-Restful.html#v:unitLens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates the path for updating a single resource item.\n\u003c/p\u003e",
          "module": "Snap.Restful",
          "name": "updatePath",
          "package": "restful-snap",
          "signature": "Resource -\u003e DBId -\u003e Text",
          "source": "src/Snap-Restful.html#updatePath",
          "type": "function"
        },
        "index": {
          "description": "Generates the path for updating single resource item",
          "hierarchy": "Snap Restful",
          "module": "Snap.Restful",
          "name": "updatePath",
          "normalized": "Resource-\u003eDBId-\u003eText",
          "package": "restful-snap",
          "partial": "Path",
          "signature": "Resource-\u003eDBId-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restful-snap/docs/Snap-Restful.html#v:updatePath"
      }
    }
  ]
]