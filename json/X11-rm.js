[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/X11-rm/docs/Graphics-X11-XRM.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNote that \u003ccode\u003eXrmInitialize\u003c/code\u003e is already wrapped in the base X11\n library as \u003ccode\u003e\u003ca\u003ermInitialize\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphics.X11.XRM",
        "fct-package": "X11-rm",
        "fct-signature": "module",
        "fct-source": "src/Graphics-X11-XRM.html",
        "fct-type": "module",
        "title": "XRM"
      },
      "index": {
        "description": "Note that XrmInitialize is already wrapped in the base X11 library as rmInitialize",
        "hierarchy": "Graphics X11 XRM",
        "module": "Graphics.X11.XRM",
        "name": "XRM",
        "normalized": "",
        "package": "X11-rm",
        "partial": "XRM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/X11-rm/docs/Graphics-X11-XRM.html#t:RMDatabase",
      "description": {
        "fct-descr": "\u003cp\u003epointer to an X11 \u003ccode\u003eXrmDatabase\u003c/code\u003e structure\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.XRM",
        "fct-package": "X11-rm",
        "fct-signature": "data",
        "fct-source": "src/Graphics-X11-XRM.html#RMDatabase",
        "fct-type": "data",
        "title": "RMDatabase"
      },
      "index": {
        "description": "pointer to an X11 XrmDatabase structure",
        "hierarchy": "Graphics X11 XRM",
        "module": "Graphics.X11.XRM",
        "name": "RMDatabase",
        "normalized": "",
        "package": "X11-rm",
        "partial": "RMDatabase",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/X11-rm/docs/Graphics-X11-XRM.html#t:RMValue",
      "description": {
        "fct-descr": "\u003cp\u003ecounterpart of an X11 \u003ccode\u003eXrmValue\u003c/code\u003e structure\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.XRM",
        "fct-package": "X11-rm",
        "fct-signature": "data",
        "fct-source": "src/Graphics-X11-XRM.html#RMValue",
        "fct-type": "data",
        "title": "RMValue"
      },
      "index": {
        "description": "counterpart of an X11 XrmValue structure",
        "hierarchy": "Graphics X11 XRM",
        "module": "Graphics.X11.XRM",
        "name": "RMValue",
        "normalized": "",
        "package": "X11-rm",
        "partial": "RMValue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/X11-rm/docs/Graphics-X11-XRM.html#v:RMValue",
      "description": {
        "fct-module": "Graphics.X11.XRM",
        "fct-package": "X11-rm",
        "fct-signature": "RMValue",
        "fct-source": "src/Graphics-X11-XRM.html#RMValue",
        "fct-type": "function",
        "title": "RMValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics X11 XRM",
        "module": "Graphics.X11.XRM",
        "name": "RMValue",
        "normalized": "",
        "package": "X11-rm",
        "partial": "RMValue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/X11-rm/docs/Graphics-X11-XRM.html#v:getDefault",
      "description": {
        "fct-descr": "\u003cp\u003einterface to the X11 library function \u003ccode\u003eXGetDefault()\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.XRM",
        "fct-package": "X11-rm",
        "fct-signature": "Display -\u003e String -\u003e String -\u003e IO (Maybe String)",
        "fct-source": "src/Graphics-X11-XRM.html#getDefault",
        "fct-type": "function",
        "title": "getDefault"
      },
      "index": {
        "description": "interface to the X11 library function XGetDefault",
        "hierarchy": "Graphics X11 XRM",
        "module": "Graphics.X11.XRM",
        "name": "getDefault",
        "normalized": "Display-\u003eString-\u003eString-\u003eIO(Maybe String)",
        "package": "X11-rm",
        "partial": "Default",
        "signature": "Display-\u003eString-\u003eString-\u003eIO(Maybe String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/X11-rm/docs/Graphics-X11-XRM.html#v:resourceManagerString",
      "description": {
        "fct-descr": "\u003cp\u003einterface to the X11 library function \u003ccode\u003eXResourceManagerString()\u003c/code\u003e.\n The one in the X11 library (\u003ccode\u003e\u003ca\u003eDisplay\u003c/a\u003e\u003c/code\u003e) is unsafe,\n this one is safe.\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.XRM",
        "fct-package": "X11-rm",
        "fct-signature": "Display -\u003e IO (Maybe String)",
        "fct-source": "src/Graphics-X11-XRM.html#resourceManagerString",
        "fct-type": "function",
        "title": "resourceManagerString"
      },
      "index": {
        "description": "interface to the X11 library function XResourceManagerString The one in the X11 library Display is unsafe this one is safe",
        "hierarchy": "Graphics X11 XRM",
        "module": "Graphics.X11.XRM",
        "name": "resourceManagerString",
        "normalized": "Display-\u003eIO(Maybe String)",
        "package": "X11-rm",
        "partial": "Manager String",
        "signature": "Display-\u003eIO(Maybe String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/X11-rm/docs/Graphics-X11-XRM.html#v:rmCombineDatabase",
      "description": {
        "fct-descr": "\u003cp\u003einterface to the X11 library function \u003ccode\u003eXrmCombineDatabase()\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.XRM",
        "fct-package": "X11-rm",
        "fct-signature": "RMDatabase -\u003e RMDatabase -\u003e Bool -\u003e IO ()",
        "fct-source": "src/Graphics-X11-XRM.html#rmCombineDatabase",
        "fct-type": "function",
        "title": "rmCombineDatabase"
      },
      "index": {
        "description": "interface to the X11 library function XrmCombineDatabase",
        "hierarchy": "Graphics X11 XRM",
        "module": "Graphics.X11.XRM",
        "name": "rmCombineDatabase",
        "normalized": "RMDatabase-\u003eRMDatabase-\u003eBool-\u003eIO()",
        "package": "X11-rm",
        "partial": "Combine Database",
        "signature": "RMDatabase-\u003eRMDatabase-\u003eBool-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/X11-rm/docs/Graphics-X11-XRM.html#v:rmCombineFileDatabase",
      "description": {
        "fct-descr": "\u003cp\u003einterface to the X11 library function \u003ccode\u003eXrmCombineFileDatabase()\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.XRM",
        "fct-package": "X11-rm",
        "fct-signature": "String -\u003e RMDatabase -\u003e Bool -\u003e IO ()",
        "fct-source": "src/Graphics-X11-XRM.html#rmCombineFileDatabase",
        "fct-type": "function",
        "title": "rmCombineFileDatabase"
      },
      "index": {
        "description": "interface to the X11 library function XrmCombineFileDatabase",
        "hierarchy": "Graphics X11 XRM",
        "module": "Graphics.X11.XRM",
        "name": "rmCombineFileDatabase",
        "normalized": "String-\u003eRMDatabase-\u003eBool-\u003eIO()",
        "package": "X11-rm",
        "partial": "Combine File Database",
        "signature": "String-\u003eRMDatabase-\u003eBool-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/X11-rm/docs/Graphics-X11-XRM.html#v:rmDestroyDatabase",
      "description": {
        "fct-descr": "\u003cp\u003einterface to the X11 library function \u003ccode\u003eXrmDestroyDatabase()\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.XRM",
        "fct-package": "X11-rm",
        "fct-signature": "RMDatabase -\u003e IO ()",
        "fct-source": "src/Graphics-X11-XRM.html#rmDestroyDatabase",
        "fct-type": "function",
        "title": "rmDestroyDatabase"
      },
      "index": {
        "description": "interface to the X11 library function XrmDestroyDatabase",
        "hierarchy": "Graphics X11 XRM",
        "module": "Graphics.X11.XRM",
        "name": "rmDestroyDatabase",
        "normalized": "RMDatabase-\u003eIO()",
        "package": "X11-rm",
        "partial": "Destroy Database",
        "signature": "RMDatabase-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/X11-rm/docs/Graphics-X11-XRM.html#v:rmGetDatabase",
      "description": {
        "fct-descr": "\u003cp\u003einterface to the X11 library function \u003ccode\u003eXrmGetDatabase()\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.XRM",
        "fct-package": "X11-rm",
        "fct-signature": "Display -\u003e IO (Maybe RMDatabase)",
        "fct-source": "src/Graphics-X11-XRM.html#rmGetDatabase",
        "fct-type": "function",
        "title": "rmGetDatabase"
      },
      "index": {
        "description": "interface to the X11 library function XrmGetDatabase",
        "hierarchy": "Graphics X11 XRM",
        "module": "Graphics.X11.XRM",
        "name": "rmGetDatabase",
        "normalized": "Display-\u003eIO(Maybe RMDatabase)",
        "package": "X11-rm",
        "partial": "Get Database",
        "signature": "Display-\u003eIO(Maybe RMDatabase)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/X11-rm/docs/Graphics-X11-XRM.html#v:rmGetFileDatabase",
      "description": {
        "fct-descr": "\u003cp\u003einterface to the X11 library function \u003ccode\u003eXrmGetFileDatabase()\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.XRM",
        "fct-package": "X11-rm",
        "fct-signature": "String -\u003e IO (Maybe RMDatabase)",
        "fct-source": "src/Graphics-X11-XRM.html#rmGetFileDatabase",
        "fct-type": "function",
        "title": "rmGetFileDatabase"
      },
      "index": {
        "description": "interface to the X11 library function XrmGetFileDatabase",
        "hierarchy": "Graphics X11 XRM",
        "module": "Graphics.X11.XRM",
        "name": "rmGetFileDatabase",
        "normalized": "String-\u003eIO(Maybe RMDatabase)",
        "package": "X11-rm",
        "partial": "Get File Database",
        "signature": "String-\u003eIO(Maybe RMDatabase)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/X11-rm/docs/Graphics-X11-XRM.html#v:rmGetResource",
      "description": {
        "fct-descr": "\u003cp\u003einterface to the X11 library function \u003ccode\u003eXrmGetResource()\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.XRM",
        "fct-package": "X11-rm",
        "fct-signature": "RMDatabase -\u003e String -\u003e String -\u003e IO (Maybe (String, RMValue))",
        "fct-source": "src/Graphics-X11-XRM.html#rmGetResource",
        "fct-type": "function",
        "title": "rmGetResource"
      },
      "index": {
        "description": "interface to the X11 library function XrmGetResource",
        "hierarchy": "Graphics X11 XRM",
        "module": "Graphics.X11.XRM",
        "name": "rmGetResource",
        "normalized": "RMDatabase-\u003eString-\u003eString-\u003eIO(Maybe(String,RMValue))",
        "package": "X11-rm",
        "partial": "Get Resource",
        "signature": "RMDatabase-\u003eString-\u003eString-\u003eIO(Maybe(String,RMValue))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/X11-rm/docs/Graphics-X11-XRM.html#v:rmGetStringDatabase",
      "description": {
        "fct-descr": "\u003cp\u003einterface to the X11 library function \u003ccode\u003eXrmGetStringDatabase()\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.XRM",
        "fct-package": "X11-rm",
        "fct-signature": "String -\u003e IO (Maybe RMDatabase)",
        "fct-source": "src/Graphics-X11-XRM.html#rmGetStringDatabase",
        "fct-type": "function",
        "title": "rmGetStringDatabase"
      },
      "index": {
        "description": "interface to the X11 library function XrmGetStringDatabase",
        "hierarchy": "Graphics X11 XRM",
        "module": "Graphics.X11.XRM",
        "name": "rmGetStringDatabase",
        "normalized": "String-\u003eIO(Maybe RMDatabase)",
        "package": "X11-rm",
        "partial": "Get String Database",
        "signature": "String-\u003eIO(Maybe RMDatabase)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/X11-rm/docs/Graphics-X11-XRM.html#v:rmLocaleOfDatabase",
      "description": {
        "fct-descr": "\u003cp\u003einterface to the X11 library function \u003ccode\u003eXrmLocaleOfDatabase()\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.XRM",
        "fct-package": "X11-rm",
        "fct-signature": "RMDatabase -\u003e IO String",
        "fct-source": "src/Graphics-X11-XRM.html#rmLocaleOfDatabase",
        "fct-type": "function",
        "title": "rmLocaleOfDatabase"
      },
      "index": {
        "description": "interface to the X11 library function XrmLocaleOfDatabase",
        "hierarchy": "Graphics X11 XRM",
        "module": "Graphics.X11.XRM",
        "name": "rmLocaleOfDatabase",
        "normalized": "RMDatabase-\u003eIO String",
        "package": "X11-rm",
        "partial": "Locale Of Database",
        "signature": "RMDatabase-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/X11-rm/docs/Graphics-X11-XRM.html#v:rmMergeDatabases",
      "description": {
        "fct-descr": "\u003cp\u003einterface to the X11 library function \u003ccode\u003eXrmMergeDatabases()\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.XRM",
        "fct-package": "X11-rm",
        "fct-signature": "RMDatabase -\u003e RMDatabase -\u003e IO ()",
        "fct-source": "src/Graphics-X11-XRM.html#rmMergeDatabases",
        "fct-type": "function",
        "title": "rmMergeDatabases"
      },
      "index": {
        "description": "interface to the X11 library function XrmMergeDatabases",
        "hierarchy": "Graphics X11 XRM",
        "module": "Graphics.X11.XRM",
        "name": "rmMergeDatabases",
        "normalized": "RMDatabase-\u003eRMDatabase-\u003eIO()",
        "package": "X11-rm",
        "partial": "Merge Databases",
        "signature": "RMDatabase-\u003eRMDatabase-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/X11-rm/docs/Graphics-X11-XRM.html#v:rmPutFileDatabase",
      "description": {
        "fct-descr": "\u003cp\u003einterface to the X11 library function \u003ccode\u003eXrmPutFileDatabase()\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.XRM",
        "fct-package": "X11-rm",
        "fct-signature": "RMDatabase -\u003e String -\u003e IO ()",
        "fct-source": "src/Graphics-X11-XRM.html#rmPutFileDatabase",
        "fct-type": "function",
        "title": "rmPutFileDatabase"
      },
      "index": {
        "description": "interface to the X11 library function XrmPutFileDatabase",
        "hierarchy": "Graphics X11 XRM",
        "module": "Graphics.X11.XRM",
        "name": "rmPutFileDatabase",
        "normalized": "RMDatabase-\u003eString-\u003eIO()",
        "package": "X11-rm",
        "partial": "Put File Database",
        "signature": "RMDatabase-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/X11-rm/docs/Graphics-X11-XRM.html#v:rmPutLineResource",
      "description": {
        "fct-descr": "\u003cp\u003einterface to the X11 library function \u003ccode\u003eXrmPutLineResource()\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.XRM",
        "fct-package": "X11-rm",
        "fct-signature": "RMDatabase -\u003e String -\u003e IO ()",
        "fct-source": "src/Graphics-X11-XRM.html#rmPutLineResource",
        "fct-type": "function",
        "title": "rmPutLineResource"
      },
      "index": {
        "description": "interface to the X11 library function XrmPutLineResource",
        "hierarchy": "Graphics X11 XRM",
        "module": "Graphics.X11.XRM",
        "name": "rmPutLineResource",
        "normalized": "RMDatabase-\u003eString-\u003eIO()",
        "package": "X11-rm",
        "partial": "Put Line Resource",
        "signature": "RMDatabase-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/X11-rm/docs/Graphics-X11-XRM.html#v:rmPutResource",
      "description": {
        "fct-descr": "\u003cp\u003einterface to the X11 library function \u003ccode\u003eXrmPutResource()\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.XRM",
        "fct-package": "X11-rm",
        "fct-signature": "RMDatabase -\u003e String -\u003e String -\u003e RMValue -\u003e IO ()",
        "fct-source": "src/Graphics-X11-XRM.html#rmPutResource",
        "fct-type": "function",
        "title": "rmPutResource"
      },
      "index": {
        "description": "interface to the X11 library function XrmPutResource",
        "hierarchy": "Graphics X11 XRM",
        "module": "Graphics.X11.XRM",
        "name": "rmPutResource",
        "normalized": "RMDatabase-\u003eString-\u003eString-\u003eRMValue-\u003eIO()",
        "package": "X11-rm",
        "partial": "Put Resource",
        "signature": "RMDatabase-\u003eString-\u003eString-\u003eRMValue-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/X11-rm/docs/Graphics-X11-XRM.html#v:rmPutStringResource",
      "description": {
        "fct-descr": "\u003cp\u003einterface to the X11 library function \u003ccode\u003eXrmPutStringResource()\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.XRM",
        "fct-package": "X11-rm",
        "fct-signature": "RMDatabase -\u003e String -\u003e String -\u003e IO ()",
        "fct-source": "src/Graphics-X11-XRM.html#rmPutStringResource",
        "fct-type": "function",
        "title": "rmPutStringResource"
      },
      "index": {
        "description": "interface to the X11 library function XrmPutStringResource",
        "hierarchy": "Graphics X11 XRM",
        "module": "Graphics.X11.XRM",
        "name": "rmPutStringResource",
        "normalized": "RMDatabase-\u003eString-\u003eString-\u003eIO()",
        "package": "X11-rm",
        "partial": "Put String Resource",
        "signature": "RMDatabase-\u003eString-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/X11-rm/docs/Graphics-X11-XRM.html#v:rmSetDatabase",
      "description": {
        "fct-descr": "\u003cp\u003einterface to the X11 library function \u003ccode\u003eXrmSetDatabase()\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.XRM",
        "fct-package": "X11-rm",
        "fct-signature": "Display -\u003e RMDatabase -\u003e IO ()",
        "fct-source": "src/Graphics-X11-XRM.html#rmSetDatabase",
        "fct-type": "function",
        "title": "rmSetDatabase"
      },
      "index": {
        "description": "interface to the X11 library function XrmSetDatabase",
        "hierarchy": "Graphics X11 XRM",
        "module": "Graphics.X11.XRM",
        "name": "rmSetDatabase",
        "normalized": "Display-\u003eRMDatabase-\u003eIO()",
        "package": "X11-rm",
        "partial": "Set Database",
        "signature": "Display-\u003eRMDatabase-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/X11-rm/docs/Graphics-X11-XRM.html#v:rmValue",
      "description": {
        "fct-descr": "\u003cp\u003eExtract string from RMValue structure.  Make sure the RMValue\n actually points at a null-terminated string.\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.XRM",
        "fct-package": "X11-rm",
        "fct-signature": "RMValue -\u003e IO String",
        "fct-source": "src/Graphics-X11-XRM.html#rmValue",
        "fct-type": "function",
        "title": "rmValue"
      },
      "index": {
        "description": "Extract string from RMValue structure Make sure the RMValue actually points at null-terminated string",
        "hierarchy": "Graphics X11 XRM",
        "module": "Graphics.X11.XRM",
        "name": "rmValue",
        "normalized": "RMValue-\u003eIO String",
        "package": "X11-rm",
        "partial": "Value",
        "signature": "RMValue-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/X11-rm/docs/Graphics-X11-XRM.html#v:rmvalue_addr",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.X11.XRM",
        "fct-package": "X11-rm",
        "fct-signature": "IntPtr",
        "fct-source": "src/Graphics-X11-XRM.html#RMValue",
        "fct-type": "function",
        "title": "rmvalue_addr"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics X11 XRM",
        "module": "Graphics.X11.XRM",
        "name": "rmvalue_addr",
        "normalized": "",
        "package": "X11-rm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/X11-rm/docs/Graphics-X11-XRM.html#v:rmvalue_size",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.X11.XRM",
        "fct-package": "X11-rm",
        "fct-signature": "CInt",
        "fct-source": "src/Graphics-X11-XRM.html#RMValue",
        "fct-type": "function",
        "title": "rmvalue_size"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics X11 XRM",
        "module": "Graphics.X11.XRM",
        "name": "rmvalue_size",
        "normalized": "",
        "package": "X11-rm",
        "partial": "",
        "signature": ""
      }
    }
  }
]