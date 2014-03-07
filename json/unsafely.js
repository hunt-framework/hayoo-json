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
        "word": "unsafely"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eReally unsafe module to provide internal interface.\n This module should be imported if you wish to allow the unsafe computation globally.\n\u003c/p\u003e\u003cp\u003eBut be careful: the unsafety contaminates entire the program once you write\n the instance for \u003ccode\u003eReallyUnsafe\u003c/code\u003e somewhere.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Constraint.Unsafely.Really",
          "name": "Really",
          "package": "unsafely",
          "source": "src/Data-Constraint-Unsafely-Really.html",
          "type": "module"
        },
        "index": {
          "description": "Really unsafe module to provide internal interface This module should be imported if you wish to allow the unsafe computation globally But be careful the unsafety contaminates entire the program once you write the instance for ReallyUnsafe somewhere",
          "hierarchy": "Data Constraint Unsafely Really",
          "module": "Data.Constraint.Unsafely.Really",
          "name": "Really",
          "package": "unsafely",
          "partial": "Really",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unsafely/docs/Data-Constraint-Unsafely-Really.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe trick type-class to prevent providing global instances for \u003ccode\u003eUnsafely\u003c/code\u003e.\n This class is not exported in \u003ca\u003eData.Constraint.Unsafely\u003c/a\u003e, so if you want to\n permit unsafe operations globally, you should import this module directly.\n\u003c/p\u003e",
          "module": "Data.Constraint.Unsafely.Really",
          "name": "ReallyUnsafely",
          "package": "unsafely",
          "source": "src/Data-Constraint-Unsafely-Really.html#ReallyUnsafely",
          "type": "class"
        },
        "index": {
          "description": "The trick type-class to prevent providing global instances for Unsafely This class is not exported in Data.Constraint.Unsafely so if you want to permit unsafe operations globally you should import this module directly",
          "hierarchy": "Data Constraint Unsafely Really",
          "module": "Data.Constraint.Unsafely.Really",
          "name": "ReallyUnsafely",
          "package": "unsafely",
          "partial": "Really Unsafely",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/unsafely/docs/Data-Constraint-Unsafely-Really.html#t:ReallyUnsafely"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe constraint for the instances which might be \u003cem\u003eunsafe\u003c/em\u003e in some sence.\n \u003ccode\u003et\u003c/code\u003e in \u003ccode\u003eUnsafely t\u003c/code\u003e is the dummy tag for some series of \u003cem\u003eunsafe\u003c/em\u003e operations.\n\u003c/p\u003e",
          "module": "Data.Constraint.Unsafely.Really",
          "name": "Unsafely",
          "package": "unsafely",
          "source": "src/Data-Constraint-Unsafely-Really.html#Unsafely",
          "type": "class"
        },
        "index": {
          "description": "The constraint for the instances which might be unsafe in some sence in Unsafely is the dummy tag for some series of unsafe operations",
          "hierarchy": "Data Constraint Unsafely Really",
          "module": "Data.Constraint.Unsafely.Really",
          "name": "Unsafely",
          "package": "unsafely",
          "partial": "Unsafely",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/unsafely/docs/Data-Constraint-Unsafely-Really.html#t:Unsafely"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate the value which might be unsafe.\n\u003c/p\u003e",
          "module": "[\"Data.Constraint.Unsafely.Really\",\"Data.Constraint.Unsafely\"]",
          "name": "unsafely",
          "package": "unsafely",
          "signature": "a) -\u003e a",
          "source": "src/Data-Constraint-Unsafely-Really.html#unsafely",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unsafely/docs/Data-Constraint-Unsafely-Really.html#v:unsafely\",\"http://hackage.haskell.org/package/unsafely/docs/Data-Constraint-Unsafely.html#v:unsafely\"]"
        },
        "index": {
          "description": "Evaluate the value which might be unsafe",
          "hierarchy": "Data Constraint Unsafely Really",
          "module": "Data.Constraint.Unsafely.Really",
          "name": "unsafely",
          "normalized": "a)-\u003ea",
          "package": "unsafely",
          "signature": "a)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unsafely/docs/Data-Constraint-Unsafely-Really.html#v:unsafely"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Constraint.Unsafely",
          "name": "Unsafely",
          "package": "unsafely",
          "source": "src/Data-Constraint-Unsafely.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Constraint Unsafely",
          "module": "Data.Constraint.Unsafely",
          "name": "Unsafely",
          "package": "unsafely",
          "partial": "Unsafely",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unsafely/docs/Data-Constraint-Unsafely.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe constraint for the instances which might be \u003cem\u003eunsafe\u003c/em\u003e in some sence.\n \u003ccode\u003et\u003c/code\u003e in \u003ccode\u003eUnsafely t\u003c/code\u003e is the dummy tag for some series of \u003cem\u003eunsafe\u003c/em\u003e operations.\n\u003c/p\u003e",
          "module": "Data.Constraint.Unsafely",
          "name": "Unsafely",
          "package": "unsafely",
          "source": "src/Data-Constraint-Unsafely-Really.html#Unsafely",
          "type": "class"
        },
        "index": {
          "description": "The constraint for the instances which might be unsafe in some sence in Unsafely is the dummy tag for some series of unsafe operations",
          "hierarchy": "Data Constraint Unsafely",
          "module": "Data.Constraint.Unsafely",
          "name": "Unsafely",
          "package": "unsafely",
          "partial": "Unsafely",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/unsafely/docs/Data-Constraint-Unsafely.html#t:Unsafely"
      }
    }
  ]
]