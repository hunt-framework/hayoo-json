[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-FromXML.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHandls parsing the data structures from XML files.\n\u003c/p\u003e\u003cp\u003eIn order to support copying events and errors across module\n boundaries, all modules which may have cross-module event copies and\n error copies must be parsed at once.\n\u003c/p\u003e\u003cp\u003eThere is no provision for preserving the event copy and error copy\n declarations - the copies are handled during parsing.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.XCB.FromXML",
        "fct-package": "xcb-types",
        "fct-signature": "module",
        "fct-source": "src/Data-XCB-FromXML.html",
        "fct-type": "module",
        "title": "FromXML"
      },
      "index": {
        "description": "Handls parsing the data structures from XML files In order to support copying events and errors across module boundaries all modules which may have cross-module event copies and error copies must be parsed at once There is no provision for preserving the event copy and error copy declarations the copies are handled during parsing",
        "hierarchy": "Data XCB FromXML",
        "module": "Data.XCB.FromXML",
        "name": "FromXML",
        "normalized": "",
        "package": "xcb-types",
        "partial": "From XML",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-FromXML.html#v:fromFiles",
      "description": {
        "fct-descr": "\u003cp\u003eProcess the listed XML files.\n Any files which fail to parse are silently dropped.\n Any declaration in an XML file which fail to parse are\n silently dropped.\n\u003c/p\u003e",
        "fct-module": "Data.XCB.FromXML",
        "fct-package": "xcb-types",
        "fct-signature": "[FilePath] -\u003e IO [XHeader]",
        "fct-source": "src/Data-XCB-FromXML.html#fromFiles",
        "fct-type": "function",
        "title": "fromFiles"
      },
      "index": {
        "description": "Process the listed XML files Any files which fail to parse are silently dropped Any declaration in an XML file which fail to parse are silently dropped",
        "hierarchy": "Data XCB FromXML",
        "module": "Data.XCB.FromXML",
        "name": "fromFiles",
        "normalized": "[FilePath]-\u003eIO[XHeader]",
        "package": "xcb-types",
        "partial": "Files",
        "signature": "[FilePath]-\u003eIO[XHeader]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-FromXML.html#v:fromStrings",
      "description": {
        "fct-descr": "\u003cp\u003eProcess the strings as if they were XML files.\n Any files which fail to parse are silently dropped.\n Any declaration in an XML file which fail to parse are\n silently dropped.\n\u003c/p\u003e",
        "fct-module": "Data.XCB.FromXML",
        "fct-package": "xcb-types",
        "fct-signature": "[String] -\u003e [XHeader]",
        "fct-source": "src/Data-XCB-FromXML.html#fromStrings",
        "fct-type": "function",
        "title": "fromStrings"
      },
      "index": {
        "description": "Process the strings as if they were XML files Any files which fail to parse are silently dropped Any declaration in an XML file which fail to parse are silently dropped",
        "hierarchy": "Data XCB FromXML",
        "module": "Data.XCB.FromXML",
        "name": "fromStrings",
        "normalized": "[String]-\u003e[XHeader]",
        "package": "xcb-types",
        "partial": "Strings",
        "signature": "[String]-\u003e[XHeader]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Pretty.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePretty-printers for the tyes declared in this package.\n This does NOT ouput XML - it produces human-readable information\n intended to aid in debugging.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.XCB.Pretty",
        "fct-package": "xcb-types",
        "fct-signature": "module",
        "fct-source": "src/Data-XCB-Pretty.html",
        "fct-type": "module",
        "title": "Pretty"
      },
      "index": {
        "description": "Pretty-printers for the tyes declared in this package This does NOT ouput XML it produces human-readable information intended to aid in debugging",
        "hierarchy": "Data XCB Pretty",
        "module": "Data.XCB.Pretty",
        "name": "Pretty",
        "normalized": "",
        "package": "xcb-types",
        "partial": "Pretty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Pretty.html#t:Pretty",
      "description": {
        "fct-descr": "\u003cp\u003eMinimal complete definition:\n\u003c/p\u003e\u003cp\u003eOne of \u003ccode\u003e\u003ca\u003epretty\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003etoDoc\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.XCB.Pretty",
        "fct-package": "xcb-types",
        "fct-signature": "class",
        "fct-source": "src/Data-XCB-Pretty.html#Pretty",
        "fct-type": "class",
        "title": "Pretty"
      },
      "index": {
        "description": "Minimal complete definition One of pretty or toDoc",
        "hierarchy": "Data XCB Pretty",
        "module": "Data.XCB.Pretty",
        "name": "Pretty",
        "normalized": "",
        "package": "xcb-types",
        "partial": "Pretty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Pretty.html#v:pretty",
      "description": {
        "fct-module": "Data.XCB.Pretty",
        "fct-package": "xcb-types",
        "fct-signature": "a -\u003e String",
        "fct-source": "src/Data-XCB-Pretty.html#pretty",
        "fct-type": "method",
        "title": "pretty"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XCB Pretty",
        "module": "Data.XCB.Pretty",
        "name": "pretty",
        "normalized": "a-\u003eString",
        "package": "xcb-types",
        "partial": "",
        "signature": "a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Pretty.html#v:toDoc",
      "description": {
        "fct-module": "Data.XCB.Pretty",
        "fct-package": "xcb-types",
        "fct-signature": "a -\u003e Doc",
        "fct-source": "src/Data-XCB-Pretty.html#toDoc",
        "fct-type": "method",
        "title": "toDoc"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XCB Pretty",
        "module": "Data.XCB.Pretty",
        "name": "toDoc",
        "normalized": "a-\u003eDoc",
        "package": "xcb-types",
        "partial": "Doc",
        "signature": "a-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines types inteneded to be equivalent to the schema used by\n the XCB project in their XML protocol description.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "module",
        "fct-source": "src/Data-XCB-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "Defines types inteneded to be equivalent to the schema used by the XCB project in their XML protocol description",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "Types",
        "normalized": "",
        "package": "xcb-types",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#t:Binop",
      "description": {
        "fct-descr": "\u003cp\u003eSupported Binary operations.\n\u003c/p\u003e",
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "data",
        "fct-source": "src/Data-XCB-Types.html#Binop",
        "fct-type": "data",
        "title": "Binop"
      },
      "index": {
        "description": "Supported Binary operations",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "Binop",
        "normalized": "",
        "package": "xcb-types",
        "partial": "Binop",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#t:EnumElem",
      "description": {
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "data",
        "fct-source": "src/Data-XCB-Types.html#EnumElem",
        "fct-type": "data",
        "title": "EnumElem"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "EnumElem",
        "normalized": "",
        "package": "xcb-types",
        "partial": "Enum Elem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#t:EnumVals",
      "description": {
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "type",
        "fct-source": "src/Data-XCB-Types.html#EnumVals",
        "fct-type": "type",
        "title": "EnumVals"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "EnumVals",
        "normalized": "",
        "package": "xcb-types",
        "partial": "Enum Vals",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#t:Expression",
      "description": {
        "fct-descr": "\u003cp\u003eDeclarations may contain expressions from this small language\n\u003c/p\u003e",
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "data",
        "fct-source": "src/Data-XCB-Types.html#Expression",
        "fct-type": "data",
        "title": "Expression"
      },
      "index": {
        "description": "Declarations may contain expressions from this small language",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "Expression",
        "normalized": "",
        "package": "xcb-types",
        "partial": "Expression",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#t:GenStructElem",
      "description": {
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "data",
        "fct-source": "src/Data-XCB-Types.html#GenStructElem",
        "fct-type": "data",
        "title": "GenStructElem"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "GenStructElem",
        "normalized": "",
        "package": "xcb-types",
        "partial": "Gen Struct Elem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#t:GenXDecl",
      "description": {
        "fct-descr": "\u003cp\u003eThe different types of declarations which can be made in one of the\n XML files.\n\u003c/p\u003e",
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "data",
        "fct-source": "src/Data-XCB-Types.html#GenXDecl",
        "fct-type": "data",
        "title": "GenXDecl"
      },
      "index": {
        "description": "The different types of declarations which can be made in one of the XML files",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "GenXDecl",
        "normalized": "",
        "package": "xcb-types",
        "partial": "Gen XDecl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#t:GenXHeader",
      "description": {
        "fct-descr": "\u003cp\u003eThis is what a single XML file maps to.  It contains some meta-data\n then declarations.\n\u003c/p\u003e",
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "data",
        "fct-source": "src/Data-XCB-Types.html#GenXHeader",
        "fct-type": "data",
        "title": "GenXHeader"
      },
      "index": {
        "description": "This is what single XML file maps to It contains some meta-data then declarations",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "GenXHeader",
        "normalized": "",
        "package": "xcb-types",
        "partial": "Gen XHeader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#t:GenXReply",
      "description": {
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "type",
        "fct-source": "src/Data-XCB-Types.html#GenXReply",
        "fct-type": "type",
        "title": "GenXReply"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "GenXReply",
        "normalized": "",
        "package": "xcb-types",
        "partial": "Gen XReply",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#t:GenXidUnionElem",
      "description": {
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "data",
        "fct-source": "src/Data-XCB-Types.html#GenXidUnionElem",
        "fct-type": "data",
        "title": "GenXidUnionElem"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "GenXidUnionElem",
        "normalized": "",
        "package": "xcb-types",
        "partial": "Gen Xid Union Elem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#t:ListName",
      "description": {
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "type",
        "fct-source": "src/Data-XCB-Types.html#ListName",
        "fct-type": "type",
        "title": "ListName"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "ListName",
        "normalized": "",
        "package": "xcb-types",
        "partial": "List Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#t:MaskName",
      "description": {
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "type",
        "fct-source": "src/Data-XCB-Types.html#MaskName",
        "fct-type": "type",
        "title": "MaskName"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "MaskName",
        "normalized": "",
        "package": "xcb-types",
        "partial": "Mask Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#t:MaskPadding",
      "description": {
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "type",
        "fct-source": "src/Data-XCB-Types.html#MaskPadding",
        "fct-type": "type",
        "title": "MaskPadding"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "MaskPadding",
        "normalized": "",
        "package": "xcb-types",
        "partial": "Mask Padding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#t:MaskVals",
      "description": {
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "type",
        "fct-source": "src/Data-XCB-Types.html#MaskVals",
        "fct-type": "type",
        "title": "MaskVals"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "MaskVals",
        "normalized": "",
        "package": "xcb-types",
        "partial": "Mask Vals",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#t:Name",
      "description": {
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "type",
        "fct-source": "src/Data-XCB-Types.html#Name",
        "fct-type": "type",
        "title": "Name"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "Name",
        "normalized": "",
        "package": "xcb-types",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#t:Ref",
      "description": {
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "type",
        "fct-source": "src/Data-XCB-Types.html#Ref",
        "fct-type": "type",
        "title": "Ref"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "Ref",
        "normalized": "",
        "package": "xcb-types",
        "partial": "Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#t:StructElem",
      "description": {
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "type",
        "fct-source": "src/Data-XCB-Types.html#StructElem",
        "fct-type": "type",
        "title": "StructElem"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "StructElem",
        "normalized": "",
        "package": "xcb-types",
        "partial": "Struct Elem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#t:Type",
      "description": {
        "fct-descr": "\u003cp\u003eTypes may include a reference to the containing module.\n\u003c/p\u003e",
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "data",
        "fct-source": "src/Data-XCB-Types.html#Type",
        "fct-type": "data",
        "title": "Type"
      },
      "index": {
        "description": "Types may include reference to the containing module",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "Type",
        "normalized": "",
        "package": "xcb-types",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#t:XDecl",
      "description": {
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "type",
        "fct-source": "src/Data-XCB-Types.html#XDecl",
        "fct-type": "type",
        "title": "XDecl"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "XDecl",
        "normalized": "",
        "package": "xcb-types",
        "partial": "XDecl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#t:XHeader",
      "description": {
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "type",
        "fct-source": "src/Data-XCB-Types.html#XHeader",
        "fct-type": "type",
        "title": "XHeader"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "XHeader",
        "normalized": "",
        "package": "xcb-types",
        "partial": "XHeader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#t:XReply",
      "description": {
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "type",
        "fct-source": "src/Data-XCB-Types.html#XReply",
        "fct-type": "type",
        "title": "XReply"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "XReply",
        "normalized": "",
        "package": "xcb-types",
        "partial": "XReply",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#t:XidUnionElem",
      "description": {
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "type",
        "fct-source": "src/Data-XCB-Types.html#XidUnionElem",
        "fct-type": "type",
        "title": "XidUnionElem"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "XidUnionElem",
        "normalized": "",
        "package": "xcb-types",
        "partial": "Xid Union Elem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:Add",
      "description": {
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "Add",
        "fct-source": "src/Data-XCB-Types.html#Binop",
        "fct-type": "function",
        "title": "Add"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "Add",
        "normalized": "",
        "package": "xcb-types",
        "partial": "Add",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:And",
      "description": {
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "And",
        "fct-source": "src/Data-XCB-Types.html#Binop",
        "fct-type": "function",
        "title": "And"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "And",
        "normalized": "",
        "package": "xcb-types",
        "partial": "And",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:Bit",
      "description": {
        "fct-descr": "\u003cp\u003eA log-base-2 literal value\n\u003c/p\u003e",
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "Bit Int",
        "fct-source": "src/Data-XCB-Types.html#Expression",
        "fct-type": "function",
        "title": "Bit"
      },
      "index": {
        "description": "log-base-2 literal value",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "Bit",
        "normalized": "",
        "package": "xcb-types",
        "partial": "Bit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:Div",
      "description": {
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "Div",
        "fct-source": "src/Data-XCB-Types.html#Binop",
        "fct-type": "function",
        "title": "Div"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "Div",
        "normalized": "",
        "package": "xcb-types",
        "partial": "Div",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:EnumElem",
      "description": {
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "EnumElem Name (Maybe Expression)",
        "fct-source": "src/Data-XCB-Types.html#EnumElem",
        "fct-type": "function",
        "title": "EnumElem"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "EnumElem",
        "normalized": "",
        "package": "xcb-types",
        "partial": "Enum Elem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:ExprField",
      "description": {
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "ExprField Name typ Expression",
        "fct-source": "src/Data-XCB-Types.html#GenStructElem",
        "fct-type": "function",
        "title": "ExprField"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "ExprField",
        "normalized": "",
        "package": "xcb-types",
        "partial": "Expr Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:FieldRef",
      "description": {
        "fct-descr": "\u003cp\u003eA reference to a field in the same declaration\n\u003c/p\u003e",
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "FieldRef Name",
        "fct-source": "src/Data-XCB-Types.html#Expression",
        "fct-type": "function",
        "title": "FieldRef"
      },
      "index": {
        "description": "reference to field in the same declaration",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "FieldRef",
        "normalized": "",
        "package": "xcb-types",
        "partial": "Field Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:List",
      "description": {
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "List Name typ (Maybe Expression) (Maybe (EnumVals typ))",
        "fct-source": "src/Data-XCB-Types.html#GenStructElem",
        "fct-type": "function",
        "title": "List"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "List",
        "normalized": "",
        "package": "xcb-types",
        "partial": "List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:Mult",
      "description": {
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "Mult",
        "fct-source": "src/Data-XCB-Types.html#Binop",
        "fct-type": "function",
        "title": "Mult"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "Mult",
        "normalized": "",
        "package": "xcb-types",
        "partial": "Mult",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:Op",
      "description": {
        "fct-descr": "\u003cp\u003eA binary opeation\n\u003c/p\u003e",
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "Op Binop Expression Expression",
        "fct-source": "src/Data-XCB-Types.html#Expression",
        "fct-type": "function",
        "title": "Op"
      },
      "index": {
        "description": "binary opeation",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "Op",
        "normalized": "",
        "package": "xcb-types",
        "partial": "Op",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:Pad",
      "description": {
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "Pad Int",
        "fct-source": "src/Data-XCB-Types.html#GenStructElem",
        "fct-type": "function",
        "title": "Pad"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "Pad",
        "normalized": "",
        "package": "xcb-types",
        "partial": "Pad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:QualType",
      "description": {
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "QualType Name Name",
        "fct-source": "src/Data-XCB-Types.html#Type",
        "fct-type": "function",
        "title": "QualType"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "QualType",
        "normalized": "",
        "package": "xcb-types",
        "partial": "Qual Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:RShift",
      "description": {
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "RShift",
        "fct-source": "src/Data-XCB-Types.html#Binop",
        "fct-type": "function",
        "title": "RShift"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "RShift",
        "normalized": "",
        "package": "xcb-types",
        "partial": "RShift",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:SField",
      "description": {
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "SField Name typ (Maybe (EnumVals typ)) (Maybe (MaskVals typ))",
        "fct-source": "src/Data-XCB-Types.html#GenStructElem",
        "fct-type": "function",
        "title": "SField"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "SField",
        "normalized": "",
        "package": "xcb-types",
        "partial": "SField",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:Sub",
      "description": {
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "Sub",
        "fct-source": "src/Data-XCB-Types.html#Binop",
        "fct-type": "function",
        "title": "Sub"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "Sub",
        "normalized": "",
        "package": "xcb-types",
        "partial": "Sub",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:UnQualType",
      "description": {
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "UnQualType Name",
        "fct-source": "src/Data-XCB-Types.html#Type",
        "fct-type": "function",
        "title": "UnQualType"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "UnQualType",
        "normalized": "",
        "package": "xcb-types",
        "partial": "Un Qual Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:Value",
      "description": {
        "fct-descr": "\u003cp\u003eA literal value\n\u003c/p\u003e",
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "Value Int",
        "fct-source": "src/Data-XCB-Types.html#Expression",
        "fct-type": "function",
        "title": "Value"
      },
      "index": {
        "description": "literal value",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "Value",
        "normalized": "",
        "package": "xcb-types",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:ValueParam",
      "description": {
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "ValueParam typ Name (Maybe MaskPadding) ListName",
        "fct-source": "src/Data-XCB-Types.html#GenStructElem",
        "fct-type": "function",
        "title": "ValueParam"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "ValueParam",
        "normalized": "",
        "package": "xcb-types",
        "partial": "Value Param",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:XEnum",
      "description": {
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "XEnum Name [EnumElem]",
        "fct-source": "src/Data-XCB-Types.html#GenXDecl",
        "fct-type": "function",
        "title": "XEnum"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "XEnum",
        "normalized": "XEnum Name[EnumElem]",
        "package": "xcb-types",
        "partial": "XEnum",
        "signature": "XEnum Name[EnumElem]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:XError",
      "description": {
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "XError Name Int [GenStructElem typ]",
        "fct-source": "src/Data-XCB-Types.html#GenXDecl",
        "fct-type": "function",
        "title": "XError"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "XError",
        "normalized": "XError Name Int[GenStructElem a]",
        "package": "xcb-types",
        "partial": "XError",
        "signature": "XError Name Int[GenStructElem typ]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:XEvent",
      "description": {
        "fct-descr": "\u003cp\u003eThe boolean indicates if the event includes a sequence number.\n\u003c/p\u003e",
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "XEvent Name Int [GenStructElem typ] (Maybe Bool)",
        "fct-source": "src/Data-XCB-Types.html#GenXDecl",
        "fct-type": "function",
        "title": "XEvent"
      },
      "index": {
        "description": "The boolean indicates if the event includes sequence number",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "XEvent",
        "normalized": "XEvent Name Int[GenStructElem a](Maybe Bool)",
        "package": "xcb-types",
        "partial": "XEvent",
        "signature": "XEvent Name Int[GenStructElem typ](Maybe Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:XHeader",
      "description": {
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "XHeader",
        "fct-source": "src/Data-XCB-Types.html#GenXHeader",
        "fct-type": "function",
        "title": "XHeader"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "XHeader",
        "normalized": "",
        "package": "xcb-types",
        "partial": "XHeader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:XImport",
      "description": {
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "XImport Name",
        "fct-source": "src/Data-XCB-Types.html#GenXDecl",
        "fct-type": "function",
        "title": "XImport"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "XImport",
        "normalized": "",
        "package": "xcb-types",
        "partial": "XImport",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:XRequest",
      "description": {
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "XRequest Name Int [GenStructElem typ] (Maybe (GenXReply typ))",
        "fct-source": "src/Data-XCB-Types.html#GenXDecl",
        "fct-type": "function",
        "title": "XRequest"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "XRequest",
        "normalized": "XRequest Name Int[GenStructElem a](Maybe(GenXReply a))",
        "package": "xcb-types",
        "partial": "XRequest",
        "signature": "XRequest Name Int[GenStructElem typ](Maybe(GenXReply typ))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:XStruct",
      "description": {
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "XStruct Name [GenStructElem typ]",
        "fct-source": "src/Data-XCB-Types.html#GenXDecl",
        "fct-type": "function",
        "title": "XStruct"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "XStruct",
        "normalized": "XStruct Name[GenStructElem a]",
        "package": "xcb-types",
        "partial": "XStruct",
        "signature": "XStruct Name[GenStructElem typ]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:XTypeDef",
      "description": {
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "XTypeDef Name typ",
        "fct-source": "src/Data-XCB-Types.html#GenXDecl",
        "fct-type": "function",
        "title": "XTypeDef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "XTypeDef",
        "normalized": "",
        "package": "xcb-types",
        "partial": "XType Def",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:XUnion",
      "description": {
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "XUnion Name [GenStructElem typ]",
        "fct-source": "src/Data-XCB-Types.html#GenXDecl",
        "fct-type": "function",
        "title": "XUnion"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "XUnion",
        "normalized": "XUnion Name[GenStructElem a]",
        "package": "xcb-types",
        "partial": "XUnion",
        "signature": "XUnion Name[GenStructElem typ]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:XidType",
      "description": {
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "XidType Name",
        "fct-source": "src/Data-XCB-Types.html#GenXDecl",
        "fct-type": "function",
        "title": "XidType"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "XidType",
        "normalized": "",
        "package": "xcb-types",
        "partial": "Xid Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:XidUnion",
      "description": {
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "XidUnion Name [GenXidUnionElem typ]",
        "fct-source": "src/Data-XCB-Types.html#GenXDecl",
        "fct-type": "function",
        "title": "XidUnion"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "XidUnion",
        "normalized": "XidUnion Name[GenXidUnionElem a]",
        "package": "xcb-types",
        "partial": "Xid Union",
        "signature": "XidUnion Name[GenXidUnionElem typ]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:XidUnionElem",
      "description": {
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "XidUnionElem typ",
        "fct-source": "src/Data-XCB-Types.html#GenXidUnionElem",
        "fct-type": "function",
        "title": "XidUnionElem"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "XidUnionElem",
        "normalized": "",
        "package": "xcb-types",
        "partial": "Xid Union Elem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:xheader_decls",
      "description": {
        "fct-descr": "\u003cp\u003eDeclarations contained in this module.\n\u003c/p\u003e",
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "[GenXDecl typ]",
        "fct-source": "src/Data-XCB-Types.html#GenXHeader",
        "fct-type": "function",
        "title": "xheader_decls"
      },
      "index": {
        "description": "Declarations contained in this module",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "xheader_decls",
        "normalized": "[GenXDecl a]",
        "package": "xcb-types",
        "partial": "",
        "signature": "[GenXDecl typ]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:xheader_header",
      "description": {
        "fct-descr": "\u003cp\u003eName of module.  Used in the other modules as a reference.\n\u003c/p\u003e",
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "Name",
        "fct-source": "src/Data-XCB-Types.html#GenXHeader",
        "fct-type": "function",
        "title": "xheader_header"
      },
      "index": {
        "description": "Name of module Used in the other modules as reference",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "xheader_header",
        "normalized": "",
        "package": "xcb-types",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:xheader_major_version",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "Maybe Int",
        "fct-source": "src/Data-XCB-Types.html#GenXHeader",
        "fct-type": "function",
        "title": "xheader_major_version"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "xheader_major_version",
        "normalized": "",
        "package": "xcb-types",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:xheader_minor_version",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "Maybe Int",
        "fct-source": "src/Data-XCB-Types.html#GenXHeader",
        "fct-type": "function",
        "title": "xheader_minor_version"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "xheader_minor_version",
        "normalized": "",
        "package": "xcb-types",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:xheader_multiword",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "Maybe Bool",
        "fct-source": "src/Data-XCB-Types.html#GenXHeader",
        "fct-type": "function",
        "title": "xheader_multiword"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "xheader_multiword",
        "normalized": "",
        "package": "xcb-types",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:xheader_name",
      "description": {
        "fct-descr": "\u003cp\u003eInterCaps name.\n\u003c/p\u003e",
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "Maybe Name",
        "fct-source": "src/Data-XCB-Types.html#GenXHeader",
        "fct-type": "function",
        "title": "xheader_name"
      },
      "index": {
        "description": "InterCaps name",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "xheader_name",
        "normalized": "",
        "package": "xcb-types",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:xheader_xname",
      "description": {
        "fct-descr": "\u003cp\u003eName used to indentify extensions between the X client and server.\n\u003c/p\u003e",
        "fct-module": "Data.XCB.Types",
        "fct-package": "xcb-types",
        "fct-signature": "Maybe Name",
        "fct-source": "src/Data-XCB-Types.html#GenXHeader",
        "fct-type": "function",
        "title": "xheader_xname"
      },
      "index": {
        "description": "Name used to indentify extensions between the client and server",
        "hierarchy": "Data XCB Types",
        "module": "Data.XCB.Types",
        "name": "xheader_xname",
        "normalized": "",
        "package": "xcb-types",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eXCB\u003c/a\u003e\u003c/code\u003e module can parse the contents of the xcb-proto\n XML files into Haskell data structures.\n\u003c/p\u003e\u003cp\u003ePretty-printers are provided to aid in the debugging - they do\n not pretty-print to XML, but to a custom human-readable format.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.XCB",
        "fct-package": "xcb-types",
        "fct-signature": "module",
        "fct-source": "src/Data-XCB.html",
        "fct-type": "module",
        "title": "XCB"
      },
      "index": {
        "description": "The XCB module can parse the contents of the xcb-proto XML files into Haskell data structures Pretty-printers are provided to aid in the debugging they do not pretty-print to XML but to custom human-readable format",
        "hierarchy": "Data XCB",
        "module": "Data.XCB",
        "name": "XCB",
        "normalized": "",
        "package": "xcb-types",
        "partial": "XCB",
        "signature": ""
      }
    }
  }
]