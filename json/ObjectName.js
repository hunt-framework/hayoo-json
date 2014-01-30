[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ObjectName/docs/Data-ObjectName.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eObject names are explicitly handled identifiers for API objects, e.g. a\n texture object name in OpenGL or a buffer object name in OpenAL.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.ObjectName",
        "fct-package": "ObjectName",
        "fct-signature": "module",
        "fct-source": "src/Data-ObjectName.html",
        "fct-type": "module",
        "title": "ObjectName"
      },
      "index": {
        "description": "Object names are explicitly handled identifiers for API objects e.g texture object name in OpenGL or buffer object name in OpenAL",
        "hierarchy": "Data ObjectName",
        "module": "Data.ObjectName",
        "name": "ObjectName",
        "normalized": "",
        "package": "ObjectName",
        "partial": "Object Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ObjectName/docs/Data-ObjectName.html#t:ObjectName",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eObjectName\u003c/a\u003e\u003c/code\u003e is an explicitly handled identifier for API objects, e.g. a\n texture object name in OpenGL or a buffer object name in OpenAL.\n\u003c/p\u003e",
        "fct-module": "Data.ObjectName",
        "fct-package": "ObjectName",
        "fct-signature": "class",
        "fct-source": "src/Data-ObjectName.html#ObjectName",
        "fct-type": "class",
        "title": "ObjectName"
      },
      "index": {
        "description": "An ObjectName is an explicitly handled identifier for API objects e.g texture object name in OpenGL or buffer object name in OpenAL",
        "hierarchy": "Data ObjectName",
        "module": "Data.ObjectName",
        "name": "ObjectName",
        "normalized": "",
        "package": "ObjectName",
        "partial": "Object Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ObjectName/docs/Data-ObjectName.html#v:deleteObjectNames",
      "description": {
        "fct-descr": "\u003cp\u003eMake the given object names available again, declaring them as unused.\n\u003c/p\u003e",
        "fct-module": "Data.ObjectName",
        "fct-package": "ObjectName",
        "fct-signature": "[a] -\u003e IO ()",
        "fct-source": "src/Data-ObjectName.html#deleteObjectNames",
        "fct-type": "method",
        "title": "deleteObjectNames"
      },
      "index": {
        "description": "Make the given object names available again declaring them as unused",
        "hierarchy": "Data ObjectName",
        "module": "Data.ObjectName",
        "name": "deleteObjectNames",
        "normalized": "[a]-\u003eIO()",
        "package": "ObjectName",
        "partial": "Object Names",
        "signature": "[a]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ObjectName/docs/Data-ObjectName.html#v:genObjectNames",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a given number of object names, which are guaranteed to be\n unused. By generating the names, they become used.\n\u003c/p\u003e",
        "fct-module": "Data.ObjectName",
        "fct-package": "ObjectName",
        "fct-signature": "Int -\u003e IO [a]",
        "fct-source": "src/Data-ObjectName.html#genObjectNames",
        "fct-type": "method",
        "title": "genObjectNames"
      },
      "index": {
        "description": "Generate given number of object names which are guaranteed to be unused By generating the names they become used",
        "hierarchy": "Data ObjectName",
        "module": "Data.ObjectName",
        "name": "genObjectNames",
        "normalized": "Int-\u003eIO[a]",
        "package": "ObjectName",
        "partial": "Object Names",
        "signature": "Int-\u003eIO[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ObjectName/docs/Data-ObjectName.html#v:isObjectName",
      "description": {
        "fct-descr": "\u003cp\u003eTest if the given object name is currently in use, i.e. test if it has\n been generated, but not been deleted so far.\n\u003c/p\u003e",
        "fct-module": "Data.ObjectName",
        "fct-package": "ObjectName",
        "fct-signature": "a -\u003e IO Bool",
        "fct-source": "src/Data-ObjectName.html#isObjectName",
        "fct-type": "method",
        "title": "isObjectName"
      },
      "index": {
        "description": "Test if the given object name is currently in use i.e test if it has been generated but not been deleted so far",
        "hierarchy": "Data ObjectName",
        "module": "Data.ObjectName",
        "name": "isObjectName",
        "normalized": "a-\u003eIO Bool",
        "package": "ObjectName",
        "partial": "Object Name",
        "signature": "a-\u003eIO Bool"
      }
    }
  }
]