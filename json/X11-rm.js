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
        "word": "X11-rm"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNote that \u003ccode\u003eXrmInitialize\u003c/code\u003e is already wrapped in the base X11\n library as \u003ccode\u003e\u003ca\u003ermInitialize\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.X11.XRM",
          "name": "XRM",
          "package": "X11-rm",
          "source": "src/Graphics-X11-XRM.html",
          "type": "module"
        },
        "index": {
          "description": "Note that XrmInitialize is already wrapped in the base X11 library as rmInitialize",
          "hierarchy": "Graphics X11 XRM",
          "module": "Graphics.X11.XRM",
          "name": "XRM",
          "package": "X11-rm",
          "partial": "XRM",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/X11-rm/docs/Graphics-X11-XRM.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epointer to an X11 \u003ccode\u003eXrmDatabase\u003c/code\u003e structure\n\u003c/p\u003e",
          "module": "Graphics.X11.XRM",
          "name": "RMDatabase",
          "package": "X11-rm",
          "source": "src/Graphics-X11-XRM.html#RMDatabase",
          "type": "data"
        },
        "index": {
          "description": "pointer to an X11 XrmDatabase structure",
          "hierarchy": "Graphics X11 XRM",
          "module": "Graphics.X11.XRM",
          "name": "RMDatabase",
          "package": "X11-rm",
          "partial": "RMDatabase",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/X11-rm/docs/Graphics-X11-XRM.html#t:RMDatabase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecounterpart of an X11 \u003ccode\u003eXrmValue\u003c/code\u003e structure\n\u003c/p\u003e",
          "module": "Graphics.X11.XRM",
          "name": "RMValue",
          "package": "X11-rm",
          "source": "src/Graphics-X11-XRM.html#RMValue",
          "type": "data"
        },
        "index": {
          "description": "counterpart of an X11 XrmValue structure",
          "hierarchy": "Graphics X11 XRM",
          "module": "Graphics.X11.XRM",
          "name": "RMValue",
          "package": "X11-rm",
          "partial": "RMValue",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/X11-rm/docs/Graphics-X11-XRM.html#t:RMValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.XRM",
          "name": "RMValue",
          "package": "X11-rm",
          "signature": "RMValue",
          "source": "src/Graphics-X11-XRM.html#RMValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 XRM",
          "module": "Graphics.X11.XRM",
          "name": "RMValue",
          "package": "X11-rm",
          "partial": "RMValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-rm/docs/Graphics-X11-XRM.html#v:RMValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einterface to the X11 library function \u003ccode\u003eXGetDefault()\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.X11.XRM",
          "name": "getDefault",
          "package": "X11-rm",
          "signature": "Display -\u003e String -\u003e String -\u003e IO (Maybe String)",
          "source": "src/Graphics-X11-XRM.html#getDefault",
          "type": "function"
        },
        "index": {
          "description": "interface to the X11 library function XGetDefault",
          "hierarchy": "Graphics X11 XRM",
          "module": "Graphics.X11.XRM",
          "name": "getDefault",
          "normalized": "Display-\u003eString-\u003eString-\u003eIO(Maybe String)",
          "package": "X11-rm",
          "partial": "Default",
          "signature": "Display-\u003eString-\u003eString-\u003eIO(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-rm/docs/Graphics-X11-XRM.html#v:getDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einterface to the X11 library function \u003ccode\u003eXResourceManagerString()\u003c/code\u003e.\n The one in the X11 library (\u003ccode\u003e\u003ca\u003eDisplay\u003c/a\u003e\u003c/code\u003e) is unsafe,\n this one is safe.\n\u003c/p\u003e",
          "module": "Graphics.X11.XRM",
          "name": "resourceManagerString",
          "package": "X11-rm",
          "signature": "Display -\u003e IO (Maybe String)",
          "source": "src/Graphics-X11-XRM.html#resourceManagerString",
          "type": "function"
        },
        "index": {
          "description": "interface to the X11 library function XResourceManagerString The one in the X11 library Display is unsafe this one is safe",
          "hierarchy": "Graphics X11 XRM",
          "module": "Graphics.X11.XRM",
          "name": "resourceManagerString",
          "normalized": "Display-\u003eIO(Maybe String)",
          "package": "X11-rm",
          "partial": "Manager String",
          "signature": "Display-\u003eIO(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-rm/docs/Graphics-X11-XRM.html#v:resourceManagerString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einterface to the X11 library function \u003ccode\u003eXrmCombineDatabase()\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.X11.XRM",
          "name": "rmCombineDatabase",
          "package": "X11-rm",
          "signature": "RMDatabase -\u003e RMDatabase -\u003e Bool -\u003e IO ()",
          "source": "src/Graphics-X11-XRM.html#rmCombineDatabase",
          "type": "function"
        },
        "index": {
          "description": "interface to the X11 library function XrmCombineDatabase",
          "hierarchy": "Graphics X11 XRM",
          "module": "Graphics.X11.XRM",
          "name": "rmCombineDatabase",
          "normalized": "RMDatabase-\u003eRMDatabase-\u003eBool-\u003eIO()",
          "package": "X11-rm",
          "partial": "Combine Database",
          "signature": "RMDatabase-\u003eRMDatabase-\u003eBool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-rm/docs/Graphics-X11-XRM.html#v:rmCombineDatabase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einterface to the X11 library function \u003ccode\u003eXrmCombineFileDatabase()\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.X11.XRM",
          "name": "rmCombineFileDatabase",
          "package": "X11-rm",
          "signature": "String -\u003e RMDatabase -\u003e Bool -\u003e IO ()",
          "source": "src/Graphics-X11-XRM.html#rmCombineFileDatabase",
          "type": "function"
        },
        "index": {
          "description": "interface to the X11 library function XrmCombineFileDatabase",
          "hierarchy": "Graphics X11 XRM",
          "module": "Graphics.X11.XRM",
          "name": "rmCombineFileDatabase",
          "normalized": "String-\u003eRMDatabase-\u003eBool-\u003eIO()",
          "package": "X11-rm",
          "partial": "Combine File Database",
          "signature": "String-\u003eRMDatabase-\u003eBool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-rm/docs/Graphics-X11-XRM.html#v:rmCombineFileDatabase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einterface to the X11 library function \u003ccode\u003eXrmDestroyDatabase()\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.X11.XRM",
          "name": "rmDestroyDatabase",
          "package": "X11-rm",
          "signature": "RMDatabase -\u003e IO ()",
          "source": "src/Graphics-X11-XRM.html#rmDestroyDatabase",
          "type": "function"
        },
        "index": {
          "description": "interface to the X11 library function XrmDestroyDatabase",
          "hierarchy": "Graphics X11 XRM",
          "module": "Graphics.X11.XRM",
          "name": "rmDestroyDatabase",
          "normalized": "RMDatabase-\u003eIO()",
          "package": "X11-rm",
          "partial": "Destroy Database",
          "signature": "RMDatabase-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-rm/docs/Graphics-X11-XRM.html#v:rmDestroyDatabase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einterface to the X11 library function \u003ccode\u003eXrmGetDatabase()\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.X11.XRM",
          "name": "rmGetDatabase",
          "package": "X11-rm",
          "signature": "Display -\u003e IO (Maybe RMDatabase)",
          "source": "src/Graphics-X11-XRM.html#rmGetDatabase",
          "type": "function"
        },
        "index": {
          "description": "interface to the X11 library function XrmGetDatabase",
          "hierarchy": "Graphics X11 XRM",
          "module": "Graphics.X11.XRM",
          "name": "rmGetDatabase",
          "normalized": "Display-\u003eIO(Maybe RMDatabase)",
          "package": "X11-rm",
          "partial": "Get Database",
          "signature": "Display-\u003eIO(Maybe RMDatabase)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-rm/docs/Graphics-X11-XRM.html#v:rmGetDatabase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einterface to the X11 library function \u003ccode\u003eXrmGetFileDatabase()\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.X11.XRM",
          "name": "rmGetFileDatabase",
          "package": "X11-rm",
          "signature": "String -\u003e IO (Maybe RMDatabase)",
          "source": "src/Graphics-X11-XRM.html#rmGetFileDatabase",
          "type": "function"
        },
        "index": {
          "description": "interface to the X11 library function XrmGetFileDatabase",
          "hierarchy": "Graphics X11 XRM",
          "module": "Graphics.X11.XRM",
          "name": "rmGetFileDatabase",
          "normalized": "String-\u003eIO(Maybe RMDatabase)",
          "package": "X11-rm",
          "partial": "Get File Database",
          "signature": "String-\u003eIO(Maybe RMDatabase)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-rm/docs/Graphics-X11-XRM.html#v:rmGetFileDatabase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einterface to the X11 library function \u003ccode\u003eXrmGetResource()\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.X11.XRM",
          "name": "rmGetResource",
          "package": "X11-rm",
          "signature": "RMDatabase -\u003e String -\u003e String -\u003e IO (Maybe (String, RMValue))",
          "source": "src/Graphics-X11-XRM.html#rmGetResource",
          "type": "function"
        },
        "index": {
          "description": "interface to the X11 library function XrmGetResource",
          "hierarchy": "Graphics X11 XRM",
          "module": "Graphics.X11.XRM",
          "name": "rmGetResource",
          "normalized": "RMDatabase-\u003eString-\u003eString-\u003eIO(Maybe(String,RMValue))",
          "package": "X11-rm",
          "partial": "Get Resource",
          "signature": "RMDatabase-\u003eString-\u003eString-\u003eIO(Maybe(String,RMValue))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-rm/docs/Graphics-X11-XRM.html#v:rmGetResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einterface to the X11 library function \u003ccode\u003eXrmGetStringDatabase()\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.X11.XRM",
          "name": "rmGetStringDatabase",
          "package": "X11-rm",
          "signature": "String -\u003e IO (Maybe RMDatabase)",
          "source": "src/Graphics-X11-XRM.html#rmGetStringDatabase",
          "type": "function"
        },
        "index": {
          "description": "interface to the X11 library function XrmGetStringDatabase",
          "hierarchy": "Graphics X11 XRM",
          "module": "Graphics.X11.XRM",
          "name": "rmGetStringDatabase",
          "normalized": "String-\u003eIO(Maybe RMDatabase)",
          "package": "X11-rm",
          "partial": "Get String Database",
          "signature": "String-\u003eIO(Maybe RMDatabase)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-rm/docs/Graphics-X11-XRM.html#v:rmGetStringDatabase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einterface to the X11 library function \u003ccode\u003eXrmLocaleOfDatabase()\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.X11.XRM",
          "name": "rmLocaleOfDatabase",
          "package": "X11-rm",
          "signature": "RMDatabase -\u003e IO String",
          "source": "src/Graphics-X11-XRM.html#rmLocaleOfDatabase",
          "type": "function"
        },
        "index": {
          "description": "interface to the X11 library function XrmLocaleOfDatabase",
          "hierarchy": "Graphics X11 XRM",
          "module": "Graphics.X11.XRM",
          "name": "rmLocaleOfDatabase",
          "normalized": "RMDatabase-\u003eIO String",
          "package": "X11-rm",
          "partial": "Locale Of Database",
          "signature": "RMDatabase-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-rm/docs/Graphics-X11-XRM.html#v:rmLocaleOfDatabase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einterface to the X11 library function \u003ccode\u003eXrmMergeDatabases()\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.X11.XRM",
          "name": "rmMergeDatabases",
          "package": "X11-rm",
          "signature": "RMDatabase -\u003e RMDatabase -\u003e IO ()",
          "source": "src/Graphics-X11-XRM.html#rmMergeDatabases",
          "type": "function"
        },
        "index": {
          "description": "interface to the X11 library function XrmMergeDatabases",
          "hierarchy": "Graphics X11 XRM",
          "module": "Graphics.X11.XRM",
          "name": "rmMergeDatabases",
          "normalized": "RMDatabase-\u003eRMDatabase-\u003eIO()",
          "package": "X11-rm",
          "partial": "Merge Databases",
          "signature": "RMDatabase-\u003eRMDatabase-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-rm/docs/Graphics-X11-XRM.html#v:rmMergeDatabases"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einterface to the X11 library function \u003ccode\u003eXrmPutFileDatabase()\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.X11.XRM",
          "name": "rmPutFileDatabase",
          "package": "X11-rm",
          "signature": "RMDatabase -\u003e String -\u003e IO ()",
          "source": "src/Graphics-X11-XRM.html#rmPutFileDatabase",
          "type": "function"
        },
        "index": {
          "description": "interface to the X11 library function XrmPutFileDatabase",
          "hierarchy": "Graphics X11 XRM",
          "module": "Graphics.X11.XRM",
          "name": "rmPutFileDatabase",
          "normalized": "RMDatabase-\u003eString-\u003eIO()",
          "package": "X11-rm",
          "partial": "Put File Database",
          "signature": "RMDatabase-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-rm/docs/Graphics-X11-XRM.html#v:rmPutFileDatabase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einterface to the X11 library function \u003ccode\u003eXrmPutLineResource()\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.X11.XRM",
          "name": "rmPutLineResource",
          "package": "X11-rm",
          "signature": "RMDatabase -\u003e String -\u003e IO ()",
          "source": "src/Graphics-X11-XRM.html#rmPutLineResource",
          "type": "function"
        },
        "index": {
          "description": "interface to the X11 library function XrmPutLineResource",
          "hierarchy": "Graphics X11 XRM",
          "module": "Graphics.X11.XRM",
          "name": "rmPutLineResource",
          "normalized": "RMDatabase-\u003eString-\u003eIO()",
          "package": "X11-rm",
          "partial": "Put Line Resource",
          "signature": "RMDatabase-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-rm/docs/Graphics-X11-XRM.html#v:rmPutLineResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einterface to the X11 library function \u003ccode\u003eXrmPutResource()\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.X11.XRM",
          "name": "rmPutResource",
          "package": "X11-rm",
          "signature": "RMDatabase -\u003e String -\u003e String -\u003e RMValue -\u003e IO ()",
          "source": "src/Graphics-X11-XRM.html#rmPutResource",
          "type": "function"
        },
        "index": {
          "description": "interface to the X11 library function XrmPutResource",
          "hierarchy": "Graphics X11 XRM",
          "module": "Graphics.X11.XRM",
          "name": "rmPutResource",
          "normalized": "RMDatabase-\u003eString-\u003eString-\u003eRMValue-\u003eIO()",
          "package": "X11-rm",
          "partial": "Put Resource",
          "signature": "RMDatabase-\u003eString-\u003eString-\u003eRMValue-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-rm/docs/Graphics-X11-XRM.html#v:rmPutResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einterface to the X11 library function \u003ccode\u003eXrmPutStringResource()\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.X11.XRM",
          "name": "rmPutStringResource",
          "package": "X11-rm",
          "signature": "RMDatabase -\u003e String -\u003e String -\u003e IO ()",
          "source": "src/Graphics-X11-XRM.html#rmPutStringResource",
          "type": "function"
        },
        "index": {
          "description": "interface to the X11 library function XrmPutStringResource",
          "hierarchy": "Graphics X11 XRM",
          "module": "Graphics.X11.XRM",
          "name": "rmPutStringResource",
          "normalized": "RMDatabase-\u003eString-\u003eString-\u003eIO()",
          "package": "X11-rm",
          "partial": "Put String Resource",
          "signature": "RMDatabase-\u003eString-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-rm/docs/Graphics-X11-XRM.html#v:rmPutStringResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einterface to the X11 library function \u003ccode\u003eXrmSetDatabase()\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.X11.XRM",
          "name": "rmSetDatabase",
          "package": "X11-rm",
          "signature": "Display -\u003e RMDatabase -\u003e IO ()",
          "source": "src/Graphics-X11-XRM.html#rmSetDatabase",
          "type": "function"
        },
        "index": {
          "description": "interface to the X11 library function XrmSetDatabase",
          "hierarchy": "Graphics X11 XRM",
          "module": "Graphics.X11.XRM",
          "name": "rmSetDatabase",
          "normalized": "Display-\u003eRMDatabase-\u003eIO()",
          "package": "X11-rm",
          "partial": "Set Database",
          "signature": "Display-\u003eRMDatabase-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-rm/docs/Graphics-X11-XRM.html#v:rmSetDatabase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract string from RMValue structure.  Make sure the RMValue\n actually points at a null-terminated string.\n\u003c/p\u003e",
          "module": "Graphics.X11.XRM",
          "name": "rmValue",
          "package": "X11-rm",
          "signature": "RMValue -\u003e IO String",
          "source": "src/Graphics-X11-XRM.html#rmValue",
          "type": "function"
        },
        "index": {
          "description": "Extract string from RMValue structure Make sure the RMValue actually points at null-terminated string",
          "hierarchy": "Graphics X11 XRM",
          "module": "Graphics.X11.XRM",
          "name": "rmValue",
          "normalized": "RMValue-\u003eIO String",
          "package": "X11-rm",
          "partial": "Value",
          "signature": "RMValue-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-rm/docs/Graphics-X11-XRM.html#v:rmValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.XRM",
          "name": "rmvalue_addr",
          "package": "X11-rm",
          "signature": "IntPtr",
          "source": "src/Graphics-X11-XRM.html#RMValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 XRM",
          "module": "Graphics.X11.XRM",
          "name": "rmvalue_addr",
          "package": "X11-rm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-rm/docs/Graphics-X11-XRM.html#v:rmvalue_addr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.XRM",
          "name": "rmvalue_size",
          "package": "X11-rm",
          "signature": "CInt",
          "source": "src/Graphics-X11-XRM.html#RMValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 XRM",
          "module": "Graphics.X11.XRM",
          "name": "rmvalue_size",
          "package": "X11-rm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-rm/docs/Graphics-X11-XRM.html#v:rmvalue_size"
      }
    }
  ]
]