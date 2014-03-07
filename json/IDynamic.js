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
        "word": "IDynamic"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IDynamic",
          "name": "IDynamic",
          "package": "IDynamic",
          "source": "http://hackage.haskell.org/package/IDynamic/docs/src/Data-IDynamic.html#IDynamic",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data IDynamic",
          "module": "Data.IDynamic",
          "name": "IDynamic",
          "package": "IDynamic",
          "partial": "IDynamic",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/IDynamic/docs/Data-IDynamic.html#t:IDynamic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IDynamic",
          "name": "Key",
          "package": "IDynamic",
          "source": "http://hackage.haskell.org/package/IDynamic/docs/src/Data-IDynamic.html#Key",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data IDynamic",
          "module": "Data.IDynamic",
          "name": "Key",
          "package": "IDynamic",
          "partial": "Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/IDynamic/docs/Data-IDynamic.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IDynamic",
          "name": "DynamicInterface",
          "package": "IDynamic",
          "source": "http://hackage.haskell.org/package/IDynamic/docs/src/Data-IDynamic.html#DynamicInterface",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data IDynamic",
          "module": "Data.IDynamic",
          "name": "DynamicInterface",
          "package": "IDynamic",
          "partial": "Dynamic Interface",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/IDynamic/docs/Data-IDynamic.html#v:DynamicInterface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "extract the data from the dynamic object. trows a user error when the cast fails\n",
          "module": "Data.IDynamic",
          "name": "fromIDyn",
          "package": "IDynamic",
          "signature": "IDynamic-\u003e x",
          "source": "http://hackage.haskell.org/package/IDynamic/docs/src/Data-IDynamic.html#fromIDyn",
          "type": "function"
        },
        "index": {
          "description": "extract the data from the dynamic object trows user error when the cast fails",
          "hierarchy": "Data IDynamic",
          "module": "Data.IDynamic",
          "name": "fromIDyn",
          "normalized": "IDynamic-\u003ea",
          "package": "IDynamic",
          "partial": "IDyn",
          "signature": "IDynamic-\u003ex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IDynamic/docs/Data-IDynamic.html#v:fromIDyn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IDynamic",
          "name": "list",
          "package": "IDynamic",
          "signature": "MVar (Map Word (IDynamic -\u003e IO (Maybe IDynamic), String -\u003e IDynamic))",
          "source": "http://hackage.haskell.org/package/IDynamic/docs/src/Data-IDynamic.html#list",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IDynamic",
          "module": "Data.IDynamic",
          "name": "list",
          "normalized": "MVar(Map Word(IDynamic-\u003eIO(Maybe IDynamic),String-\u003eIDynamic))",
          "package": "IDynamic",
          "signature": "MVar(Map Word(IDynamic-\u003eIO(Maybe IDynamic),String-\u003eIDynamic))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IDynamic/docs/Data-IDynamic.html#v:list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "registers the deserialize, readp and readResource methods for this data type\n",
          "module": "Data.IDynamic",
          "name": "registerType",
          "package": "IDynamic",
          "signature": "IO x",
          "source": "http://hackage.haskell.org/package/IDynamic/docs/src/Data-IDynamic.html#registerType",
          "type": "function"
        },
        "index": {
          "description": "registers the deserialize readp and readResource methods for this data type",
          "hierarchy": "Data IDynamic",
          "module": "Data.IDynamic",
          "name": "registerType",
          "package": "IDynamic",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IDynamic/docs/Data-IDynamic.html#v:registerType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "safe extraction with Maybe\n",
          "module": "Data.IDynamic",
          "name": "safeFromIDyn",
          "package": "IDynamic",
          "signature": "IDynamic-\u003e Maybe x",
          "source": "http://hackage.haskell.org/package/IDynamic/docs/src/Data-IDynamic.html#safeFromIDyn",
          "type": "function"
        },
        "index": {
          "description": "safe extraction with Maybe",
          "hierarchy": "Data IDynamic",
          "module": "Data.IDynamic",
          "name": "safeFromIDyn",
          "normalized": "IDynamic-\u003eMaybe a",
          "package": "IDynamic",
          "partial": "From IDyn",
          "signature": "IDynamic-\u003eMaybe x",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IDynamic/docs/Data-IDynamic.html#v:safeFromIDyn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "encapsulates data in a dynamic object\n",
          "module": "Data.IDynamic",
          "name": "toIDyn",
          "package": "IDynamic",
          "signature": "x-\u003e IDynamic",
          "source": "http://hackage.haskell.org/package/IDynamic/docs/src/Data-IDynamic.html#toIDyn",
          "type": "function"
        },
        "index": {
          "description": "encapsulates data in dynamic object",
          "hierarchy": "Data IDynamic",
          "module": "Data.IDynamic",
          "name": "toIDyn",
          "normalized": "a-\u003eIDynamic",
          "package": "IDynamic",
          "partial": "IDyn",
          "signature": "x-\u003eIDynamic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IDynamic/docs/Data-IDynamic.html#v:toIDyn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "unsafe version.\n",
          "module": "Data.IDynamic",
          "name": "unsafeFromIDyn",
          "package": "IDynamic",
          "signature": "IDynamic-\u003e x",
          "source": "http://hackage.haskell.org/package/IDynamic/docs/src/Data-IDynamic.html#unsafeFromIDyn",
          "type": "function"
        },
        "index": {
          "description": "unsafe version",
          "hierarchy": "Data IDynamic",
          "module": "Data.IDynamic",
          "name": "unsafeFromIDyn",
          "normalized": "IDynamic-\u003ea",
          "package": "IDynamic",
          "partial": "From IDyn",
          "signature": "IDynamic-\u003ex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IDynamic/docs/Data-IDynamic.html#v:unsafeFromIDyn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IResource",
          "name": "AccessTime",
          "package": "IDynamic",
          "source": "http://hackage.haskell.org/package/IDynamic/docs/src/Data-IResource.html#AccessTime",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data IResource",
          "module": "Data.IResource",
          "name": "AccessTime",
          "package": "IDynamic",
          "partial": "Access Time",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/IDynamic/docs/Data-IResource.html#t:AccessTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IResource",
          "name": "ModifTime",
          "package": "IDynamic",
          "source": "http://hackage.haskell.org/package/IDynamic/docs/src/Data-IResource.html#ModifTime",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data IResource",
          "module": "Data.IResource",
          "name": "ModifTime",
          "package": "IDynamic",
          "partial": "Modif Time",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/IDynamic/docs/Data-IResource.html#t:ModifTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IResource",
          "name": "Resources",
          "package": "IDynamic",
          "source": "http://hackage.haskell.org/package/IDynamic/docs/src/Data-IResource.html#Resources",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data IResource",
          "module": "Data.IResource",
          "name": "Resources",
          "package": "IDynamic",
          "partial": "Resources",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/IDynamic/docs/Data-IResource.html#t:Resources"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IResource",
          "name": "IResource",
          "package": "IDynamic",
          "source": "http://hackage.haskell.org/package/IDynamic/docs/src/Data-IResource.html#IResource",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data IResource",
          "module": "Data.IResource",
          "name": "IResource",
          "package": "IDynamic",
          "partial": "IResource",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/IDynamic/docs/Data-IResource.html#v:IResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "additional extension for default file paths or key prefixes \n",
          "module": "Data.IResource",
          "name": "defPath",
          "package": "IDynamic",
          "signature": "a-\u003e String",
          "source": "http://hackage.haskell.org/package/IDynamic/docs/src/Data-IResource.html#defPath",
          "type": "function"
        },
        "index": {
          "description": "additional extension for default file paths or key prefixes",
          "hierarchy": "Data IResource",
          "module": "Data.IResource",
          "name": "defPath",
          "normalized": "a-\u003eString",
          "package": "IDynamic",
          "partial": "Path",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IDynamic/docs/Data-IResource.html#v:defPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IResource",
          "name": "delResource",
          "package": "IDynamic",
          "signature": "a -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/IDynamic/docs/src/Data-IResource.html#delResource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IResource",
          "module": "Data.IResource",
          "name": "delResource",
          "normalized": "a-\u003eIO()",
          "package": "IDynamic",
          "partial": "Resource",
          "signature": "a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IDynamic/docs/Data-IResource.html#v:delResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "must be defined by the user\n",
          "module": "Data.IResource",
          "name": "deserialize",
          "package": "IDynamic",
          "signature": "String-\u003e a",
          "source": "http://hackage.haskell.org/package/IDynamic/docs/src/Data-IResource.html#deserialize",
          "type": "function"
        },
        "index": {
          "description": "must be defined by the user",
          "hierarchy": "Data IResource",
          "module": "Data.IResource",
          "name": "deserialize",
          "normalized": "String-\u003ea",
          "package": "IDynamic",
          "signature": "String-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IDynamic/docs/Data-IResource.html#v:deserialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "must be defined\n",
          "module": "Data.IResource",
          "name": "keyResource",
          "package": "IDynamic",
          "signature": "a-\u003e String",
          "source": "http://hackage.haskell.org/package/IDynamic/docs/src/Data-IResource.html#keyResource",
          "type": "function"
        },
        "index": {
          "description": "must be defined",
          "hierarchy": "Data IResource",
          "module": "Data.IResource",
          "name": "keyResource",
          "normalized": "a-\u003eString",
          "package": "IDynamic",
          "partial": "Resource",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IDynamic/docs/Data-IResource.html#v:keyResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IResource",
          "name": "readResource",
          "package": "IDynamic",
          "signature": "a -\u003e IO (Maybe a)",
          "source": "http://hackage.haskell.org/package/IDynamic/docs/src/Data-IResource.html#readResource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IResource",
          "module": "Data.IResource",
          "name": "readResource",
          "normalized": "a-\u003eIO(Maybe a)",
          "package": "IDynamic",
          "partial": "Resource",
          "signature": "a-\u003eIO(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IDynamic/docs/Data-IResource.html#v:readResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003eresources= Resources  [] [] ()\u003c/pre\u003e",
          "module": "Data.IResource",
          "name": "resources",
          "package": "IDynamic",
          "signature": "Resources a ()",
          "source": "http://hackage.haskell.org/package/IDynamic/docs/src/Data-IResource.html#resources",
          "type": "function"
        },
        "index": {
          "description": "resources Resources",
          "hierarchy": "Data IResource",
          "module": "Data.IResource",
          "name": "resources",
          "normalized": "Resources a()",
          "package": "IDynamic",
          "signature": "Resources a()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IDynamic/docs/Data-IResource.html#v:resources"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "must be defined by the user\n",
          "module": "Data.IResource",
          "name": "serialize",
          "package": "IDynamic",
          "signature": "a-\u003e String",
          "source": "http://hackage.haskell.org/package/IDynamic/docs/src/Data-IResource.html#serialize",
          "type": "function"
        },
        "index": {
          "description": "must be defined by the user",
          "hierarchy": "Data IResource",
          "module": "Data.IResource",
          "name": "serialize",
          "normalized": "a-\u003eString",
          "package": "IDynamic",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IDynamic/docs/Data-IResource.html#v:serialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IResource",
          "name": "writeResource",
          "package": "IDynamic",
          "signature": "a -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/IDynamic/docs/src/Data-IResource.html#writeResource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IResource",
          "module": "Data.IResource",
          "name": "writeResource",
          "normalized": "a-\u003eIO()",
          "package": "IDynamic",
          "partial": "Resource",
          "signature": "a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IDynamic/docs/Data-IResource.html#v:writeResource"
      }
    }
  ]
]