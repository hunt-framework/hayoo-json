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
        "word": "xcb-types"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHandls parsing the data structures from XML files.\n\u003c/p\u003e\u003cp\u003eIn order to support copying events and errors across module\n boundaries, all modules which may have cross-module event copies and\n error copies must be parsed at once.\n\u003c/p\u003e\u003cp\u003eThere is no provision for preserving the event copy and error copy\n declarations - the copies are handled during parsing.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.XCB.FromXML",
          "name": "FromXML",
          "package": "xcb-types",
          "source": "src/Data-XCB-FromXML.html",
          "type": "module"
        },
        "index": {
          "description": "Handls parsing the data structures from XML files In order to support copying events and errors across module boundaries all modules which may have cross-module event copies and error copies must be parsed at once There is no provision for preserving the event copy and error copy declarations the copies are handled during parsing",
          "hierarchy": "Data XCB FromXML",
          "module": "Data.XCB.FromXML",
          "name": "FromXML",
          "package": "xcb-types",
          "partial": "From XML",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-FromXML.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess the listed XML files.\n Any files which fail to parse are silently dropped.\n Any declaration in an XML file which fail to parse are\n silently dropped.\n\u003c/p\u003e",
          "module": "Data.XCB.FromXML",
          "name": "fromFiles",
          "package": "xcb-types",
          "signature": "[FilePath] -\u003e IO [XHeader]",
          "source": "src/Data-XCB-FromXML.html#fromFiles",
          "type": "function"
        },
        "index": {
          "description": "Process the listed XML files Any files which fail to parse are silently dropped Any declaration in an XML file which fail to parse are silently dropped",
          "hierarchy": "Data XCB FromXML",
          "module": "Data.XCB.FromXML",
          "name": "fromFiles",
          "normalized": "[FilePath]-\u003eIO[XHeader]",
          "package": "xcb-types",
          "partial": "Files",
          "signature": "[FilePath]-\u003eIO[XHeader]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-FromXML.html#v:fromFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess the strings as if they were XML files.\n Any files which fail to parse are silently dropped.\n Any declaration in an XML file which fail to parse are\n silently dropped.\n\u003c/p\u003e",
          "module": "Data.XCB.FromXML",
          "name": "fromStrings",
          "package": "xcb-types",
          "signature": "[String] -\u003e [XHeader]",
          "source": "src/Data-XCB-FromXML.html#fromStrings",
          "type": "function"
        },
        "index": {
          "description": "Process the strings as if they were XML files Any files which fail to parse are silently dropped Any declaration in an XML file which fail to parse are silently dropped",
          "hierarchy": "Data XCB FromXML",
          "module": "Data.XCB.FromXML",
          "name": "fromStrings",
          "normalized": "[String]-\u003e[XHeader]",
          "package": "xcb-types",
          "partial": "Strings",
          "signature": "[String]-\u003e[XHeader]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-FromXML.html#v:fromStrings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePretty-printers for the tyes declared in this package.\n This does NOT ouput XML - it produces human-readable information\n intended to aid in debugging.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.XCB.Pretty",
          "name": "Pretty",
          "package": "xcb-types",
          "source": "src/Data-XCB-Pretty.html",
          "type": "module"
        },
        "index": {
          "description": "Pretty-printers for the tyes declared in this package This does NOT ouput XML it produces human-readable information intended to aid in debugging",
          "hierarchy": "Data XCB Pretty",
          "module": "Data.XCB.Pretty",
          "name": "Pretty",
          "package": "xcb-types",
          "partial": "Pretty",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Pretty.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMinimal complete definition:\n\u003c/p\u003e\u003cp\u003eOne of \u003ccode\u003e\u003ca\u003epretty\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003etoDoc\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.XCB.Pretty",
          "name": "Pretty",
          "package": "xcb-types",
          "source": "src/Data-XCB-Pretty.html#Pretty",
          "type": "class"
        },
        "index": {
          "description": "Minimal complete definition One of pretty or toDoc",
          "hierarchy": "Data XCB Pretty",
          "module": "Data.XCB.Pretty",
          "name": "Pretty",
          "package": "xcb-types",
          "partial": "Pretty",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Pretty.html#t:Pretty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XCB.Pretty",
          "name": "pretty",
          "package": "xcb-types",
          "signature": "a -\u003e String",
          "source": "src/Data-XCB-Pretty.html#pretty",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data XCB Pretty",
          "module": "Data.XCB.Pretty",
          "name": "pretty",
          "normalized": "a-\u003eString",
          "package": "xcb-types",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Pretty.html#v:pretty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XCB.Pretty",
          "name": "toDoc",
          "package": "xcb-types",
          "signature": "a -\u003e Doc",
          "source": "src/Data-XCB-Pretty.html#toDoc",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data XCB Pretty",
          "module": "Data.XCB.Pretty",
          "name": "toDoc",
          "normalized": "a-\u003eDoc",
          "package": "xcb-types",
          "partial": "Doc",
          "signature": "a-\u003eDoc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Pretty.html#v:toDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines types inteneded to be equivalent to the schema used by\n the XCB project in their XML protocol description.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.XCB.Types",
          "name": "Types",
          "package": "xcb-types",
          "source": "src/Data-XCB-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Defines types inteneded to be equivalent to the schema used by the XCB project in their XML protocol description",
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "Types",
          "package": "xcb-types",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSupported Binary operations.\n\u003c/p\u003e",
          "module": "Data.XCB.Types",
          "name": "Binop",
          "package": "xcb-types",
          "source": "src/Data-XCB-Types.html#Binop",
          "type": "data"
        },
        "index": {
          "description": "Supported Binary operations",
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "Binop",
          "package": "xcb-types",
          "partial": "Binop",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#t:Binop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XCB.Types",
          "name": "EnumElem",
          "package": "xcb-types",
          "source": "src/Data-XCB-Types.html#EnumElem",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "EnumElem",
          "package": "xcb-types",
          "partial": "Enum Elem",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#t:EnumElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XCB.Types",
          "name": "EnumVals",
          "package": "xcb-types",
          "source": "src/Data-XCB-Types.html#EnumVals",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "EnumVals",
          "package": "xcb-types",
          "partial": "Enum Vals",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#t:EnumVals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclarations may contain expressions from this small language\n\u003c/p\u003e",
          "module": "Data.XCB.Types",
          "name": "Expression",
          "package": "xcb-types",
          "source": "src/Data-XCB-Types.html#Expression",
          "type": "data"
        },
        "index": {
          "description": "Declarations may contain expressions from this small language",
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "Expression",
          "package": "xcb-types",
          "partial": "Expression",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#t:Expression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XCB.Types",
          "name": "GenStructElem",
          "package": "xcb-types",
          "source": "src/Data-XCB-Types.html#GenStructElem",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "GenStructElem",
          "package": "xcb-types",
          "partial": "Gen Struct Elem",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#t:GenStructElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe different types of declarations which can be made in one of the\n XML files.\n\u003c/p\u003e",
          "module": "Data.XCB.Types",
          "name": "GenXDecl",
          "package": "xcb-types",
          "source": "src/Data-XCB-Types.html#GenXDecl",
          "type": "data"
        },
        "index": {
          "description": "The different types of declarations which can be made in one of the XML files",
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "GenXDecl",
          "package": "xcb-types",
          "partial": "Gen XDecl",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#t:GenXDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is what a single XML file maps to.  It contains some meta-data\n then declarations.\n\u003c/p\u003e",
          "module": "Data.XCB.Types",
          "name": "GenXHeader",
          "package": "xcb-types",
          "source": "src/Data-XCB-Types.html#GenXHeader",
          "type": "data"
        },
        "index": {
          "description": "This is what single XML file maps to It contains some meta-data then declarations",
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "GenXHeader",
          "package": "xcb-types",
          "partial": "Gen XHeader",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#t:GenXHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XCB.Types",
          "name": "GenXReply",
          "package": "xcb-types",
          "source": "src/Data-XCB-Types.html#GenXReply",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "GenXReply",
          "package": "xcb-types",
          "partial": "Gen XReply",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#t:GenXReply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XCB.Types",
          "name": "GenXidUnionElem",
          "package": "xcb-types",
          "source": "src/Data-XCB-Types.html#GenXidUnionElem",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "GenXidUnionElem",
          "package": "xcb-types",
          "partial": "Gen Xid Union Elem",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#t:GenXidUnionElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XCB.Types",
          "name": "ListName",
          "package": "xcb-types",
          "source": "src/Data-XCB-Types.html#ListName",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "ListName",
          "package": "xcb-types",
          "partial": "List Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#t:ListName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XCB.Types",
          "name": "MaskName",
          "package": "xcb-types",
          "source": "src/Data-XCB-Types.html#MaskName",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "MaskName",
          "package": "xcb-types",
          "partial": "Mask Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#t:MaskName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XCB.Types",
          "name": "MaskPadding",
          "package": "xcb-types",
          "source": "src/Data-XCB-Types.html#MaskPadding",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "MaskPadding",
          "package": "xcb-types",
          "partial": "Mask Padding",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#t:MaskPadding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XCB.Types",
          "name": "MaskVals",
          "package": "xcb-types",
          "source": "src/Data-XCB-Types.html#MaskVals",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "MaskVals",
          "package": "xcb-types",
          "partial": "Mask Vals",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#t:MaskVals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XCB.Types",
          "name": "Name",
          "package": "xcb-types",
          "source": "src/Data-XCB-Types.html#Name",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "Name",
          "package": "xcb-types",
          "partial": "Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#t:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XCB.Types",
          "name": "Ref",
          "package": "xcb-types",
          "source": "src/Data-XCB-Types.html#Ref",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "Ref",
          "package": "xcb-types",
          "partial": "Ref",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#t:Ref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XCB.Types",
          "name": "StructElem",
          "package": "xcb-types",
          "source": "src/Data-XCB-Types.html#StructElem",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "StructElem",
          "package": "xcb-types",
          "partial": "Struct Elem",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#t:StructElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypes may include a reference to the containing module.\n\u003c/p\u003e",
          "module": "Data.XCB.Types",
          "name": "Type",
          "package": "xcb-types",
          "source": "src/Data-XCB-Types.html#Type",
          "type": "data"
        },
        "index": {
          "description": "Types may include reference to the containing module",
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "Type",
          "package": "xcb-types",
          "partial": "Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#t:Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XCB.Types",
          "name": "XDecl",
          "package": "xcb-types",
          "source": "src/Data-XCB-Types.html#XDecl",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "XDecl",
          "package": "xcb-types",
          "partial": "XDecl",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#t:XDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XCB.Types",
          "name": "XHeader",
          "package": "xcb-types",
          "source": "src/Data-XCB-Types.html#XHeader",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "XHeader",
          "package": "xcb-types",
          "partial": "XHeader",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#t:XHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XCB.Types",
          "name": "XReply",
          "package": "xcb-types",
          "source": "src/Data-XCB-Types.html#XReply",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "XReply",
          "package": "xcb-types",
          "partial": "XReply",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#t:XReply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XCB.Types",
          "name": "XidUnionElem",
          "package": "xcb-types",
          "source": "src/Data-XCB-Types.html#XidUnionElem",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "XidUnionElem",
          "package": "xcb-types",
          "partial": "Xid Union Elem",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#t:XidUnionElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XCB.Types",
          "name": "Add",
          "package": "xcb-types",
          "signature": "Add",
          "source": "src/Data-XCB-Types.html#Binop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "Add",
          "package": "xcb-types",
          "partial": "Add",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:Add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XCB.Types",
          "name": "And",
          "package": "xcb-types",
          "signature": "And",
          "source": "src/Data-XCB-Types.html#Binop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "And",
          "package": "xcb-types",
          "partial": "And",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:And"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA log-base-2 literal value\n\u003c/p\u003e",
          "module": "Data.XCB.Types",
          "name": "Bit",
          "package": "xcb-types",
          "signature": "Bit Int",
          "source": "src/Data-XCB-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "log-base-2 literal value",
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "Bit",
          "package": "xcb-types",
          "partial": "Bit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:Bit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XCB.Types",
          "name": "Div",
          "package": "xcb-types",
          "signature": "Div",
          "source": "src/Data-XCB-Types.html#Binop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "Div",
          "package": "xcb-types",
          "partial": "Div",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:Div"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XCB.Types",
          "name": "EnumElem",
          "package": "xcb-types",
          "signature": "EnumElem Name (Maybe Expression)",
          "source": "src/Data-XCB-Types.html#EnumElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "EnumElem",
          "package": "xcb-types",
          "partial": "Enum Elem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:EnumElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XCB.Types",
          "name": "ExprField",
          "package": "xcb-types",
          "signature": "ExprField Name typ Expression",
          "source": "src/Data-XCB-Types.html#GenStructElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "ExprField",
          "package": "xcb-types",
          "partial": "Expr Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:ExprField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA reference to a field in the same declaration\n\u003c/p\u003e",
          "module": "Data.XCB.Types",
          "name": "FieldRef",
          "package": "xcb-types",
          "signature": "FieldRef Name",
          "source": "src/Data-XCB-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "reference to field in the same declaration",
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "FieldRef",
          "package": "xcb-types",
          "partial": "Field Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:FieldRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XCB.Types",
          "name": "List",
          "package": "xcb-types",
          "signature": "List Name typ (Maybe Expression) (Maybe (EnumVals typ))",
          "source": "src/Data-XCB-Types.html#GenStructElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "List",
          "package": "xcb-types",
          "partial": "List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:List"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XCB.Types",
          "name": "Mult",
          "package": "xcb-types",
          "signature": "Mult",
          "source": "src/Data-XCB-Types.html#Binop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "Mult",
          "package": "xcb-types",
          "partial": "Mult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:Mult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA binary opeation\n\u003c/p\u003e",
          "module": "Data.XCB.Types",
          "name": "Op",
          "package": "xcb-types",
          "signature": "Op Binop Expression Expression",
          "source": "src/Data-XCB-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "binary opeation",
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "Op",
          "package": "xcb-types",
          "partial": "Op",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:Op"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XCB.Types",
          "name": "Pad",
          "package": "xcb-types",
          "signature": "Pad Int",
          "source": "src/Data-XCB-Types.html#GenStructElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "Pad",
          "package": "xcb-types",
          "partial": "Pad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:Pad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XCB.Types",
          "name": "QualType",
          "package": "xcb-types",
          "signature": "QualType Name Name",
          "source": "src/Data-XCB-Types.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "QualType",
          "package": "xcb-types",
          "partial": "Qual Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:QualType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XCB.Types",
          "name": "RShift",
          "package": "xcb-types",
          "signature": "RShift",
          "source": "src/Data-XCB-Types.html#Binop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "RShift",
          "package": "xcb-types",
          "partial": "RShift",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:RShift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XCB.Types",
          "name": "SField",
          "package": "xcb-types",
          "signature": "SField Name typ (Maybe (EnumVals typ)) (Maybe (MaskVals typ))",
          "source": "src/Data-XCB-Types.html#GenStructElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "SField",
          "package": "xcb-types",
          "partial": "SField",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:SField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XCB.Types",
          "name": "Sub",
          "package": "xcb-types",
          "signature": "Sub",
          "source": "src/Data-XCB-Types.html#Binop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "Sub",
          "package": "xcb-types",
          "partial": "Sub",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:Sub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XCB.Types",
          "name": "UnQualType",
          "package": "xcb-types",
          "signature": "UnQualType Name",
          "source": "src/Data-XCB-Types.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "UnQualType",
          "package": "xcb-types",
          "partial": "Un Qual Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:UnQualType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA literal value\n\u003c/p\u003e",
          "module": "Data.XCB.Types",
          "name": "Value",
          "package": "xcb-types",
          "signature": "Value Int",
          "source": "src/Data-XCB-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "literal value",
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "Value",
          "package": "xcb-types",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:Value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XCB.Types",
          "name": "ValueParam",
          "package": "xcb-types",
          "signature": "ValueParam typ Name (Maybe MaskPadding) ListName",
          "source": "src/Data-XCB-Types.html#GenStructElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "ValueParam",
          "package": "xcb-types",
          "partial": "Value Param",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:ValueParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XCB.Types",
          "name": "XEnum",
          "package": "xcb-types",
          "signature": "XEnum Name [EnumElem]",
          "source": "src/Data-XCB-Types.html#GenXDecl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "XEnum",
          "normalized": "XEnum Name[EnumElem]",
          "package": "xcb-types",
          "partial": "XEnum",
          "signature": "XEnum Name[EnumElem]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:XEnum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XCB.Types",
          "name": "XError",
          "package": "xcb-types",
          "signature": "XError Name Int [GenStructElem typ]",
          "source": "src/Data-XCB-Types.html#GenXDecl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "XError",
          "normalized": "XError Name Int[GenStructElem a]",
          "package": "xcb-types",
          "partial": "XError",
          "signature": "XError Name Int[GenStructElem typ]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:XError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe boolean indicates if the event includes a sequence number.\n\u003c/p\u003e",
          "module": "Data.XCB.Types",
          "name": "XEvent",
          "package": "xcb-types",
          "signature": "XEvent Name Int [GenStructElem typ] (Maybe Bool)",
          "source": "src/Data-XCB-Types.html#GenXDecl",
          "type": "function"
        },
        "index": {
          "description": "The boolean indicates if the event includes sequence number",
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "XEvent",
          "normalized": "XEvent Name Int[GenStructElem a](Maybe Bool)",
          "package": "xcb-types",
          "partial": "XEvent",
          "signature": "XEvent Name Int[GenStructElem typ](Maybe Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:XEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XCB.Types",
          "name": "XHeader",
          "package": "xcb-types",
          "signature": "XHeader",
          "source": "src/Data-XCB-Types.html#GenXHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "XHeader",
          "package": "xcb-types",
          "partial": "XHeader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:XHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XCB.Types",
          "name": "XImport",
          "package": "xcb-types",
          "signature": "XImport Name",
          "source": "src/Data-XCB-Types.html#GenXDecl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "XImport",
          "package": "xcb-types",
          "partial": "XImport",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:XImport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XCB.Types",
          "name": "XRequest",
          "package": "xcb-types",
          "signature": "XRequest Name Int [GenStructElem typ] (Maybe (GenXReply typ))",
          "source": "src/Data-XCB-Types.html#GenXDecl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "XRequest",
          "normalized": "XRequest Name Int[GenStructElem a](Maybe(GenXReply a))",
          "package": "xcb-types",
          "partial": "XRequest",
          "signature": "XRequest Name Int[GenStructElem typ](Maybe(GenXReply typ))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:XRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XCB.Types",
          "name": "XStruct",
          "package": "xcb-types",
          "signature": "XStruct Name [GenStructElem typ]",
          "source": "src/Data-XCB-Types.html#GenXDecl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "XStruct",
          "normalized": "XStruct Name[GenStructElem a]",
          "package": "xcb-types",
          "partial": "XStruct",
          "signature": "XStruct Name[GenStructElem typ]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:XStruct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XCB.Types",
          "name": "XTypeDef",
          "package": "xcb-types",
          "signature": "XTypeDef Name typ",
          "source": "src/Data-XCB-Types.html#GenXDecl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "XTypeDef",
          "package": "xcb-types",
          "partial": "XType Def",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:XTypeDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XCB.Types",
          "name": "XUnion",
          "package": "xcb-types",
          "signature": "XUnion Name [GenStructElem typ]",
          "source": "src/Data-XCB-Types.html#GenXDecl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "XUnion",
          "normalized": "XUnion Name[GenStructElem a]",
          "package": "xcb-types",
          "partial": "XUnion",
          "signature": "XUnion Name[GenStructElem typ]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:XUnion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XCB.Types",
          "name": "XidType",
          "package": "xcb-types",
          "signature": "XidType Name",
          "source": "src/Data-XCB-Types.html#GenXDecl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "XidType",
          "package": "xcb-types",
          "partial": "Xid Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:XidType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XCB.Types",
          "name": "XidUnion",
          "package": "xcb-types",
          "signature": "XidUnion Name [GenXidUnionElem typ]",
          "source": "src/Data-XCB-Types.html#GenXDecl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "XidUnion",
          "normalized": "XidUnion Name[GenXidUnionElem a]",
          "package": "xcb-types",
          "partial": "Xid Union",
          "signature": "XidUnion Name[GenXidUnionElem typ]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:XidUnion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XCB.Types",
          "name": "XidUnionElem",
          "package": "xcb-types",
          "signature": "XidUnionElem typ",
          "source": "src/Data-XCB-Types.html#GenXidUnionElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "XidUnionElem",
          "package": "xcb-types",
          "partial": "Xid Union Elem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:XidUnionElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclarations contained in this module.\n\u003c/p\u003e",
          "module": "Data.XCB.Types",
          "name": "xheader_decls",
          "package": "xcb-types",
          "signature": "[GenXDecl typ]",
          "source": "src/Data-XCB-Types.html#GenXHeader",
          "type": "function"
        },
        "index": {
          "description": "Declarations contained in this module",
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "xheader_decls",
          "normalized": "[GenXDecl a]",
          "package": "xcb-types",
          "signature": "[GenXDecl typ]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:xheader_decls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of module.  Used in the other modules as a reference.\n\u003c/p\u003e",
          "module": "Data.XCB.Types",
          "name": "xheader_header",
          "package": "xcb-types",
          "signature": "Name",
          "source": "src/Data-XCB-Types.html#GenXHeader",
          "type": "function"
        },
        "index": {
          "description": "Name of module Used in the other modules as reference",
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "xheader_header",
          "package": "xcb-types",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:xheader_header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XCB.Types",
          "name": "xheader_major_version",
          "package": "xcb-types",
          "signature": "Maybe Int",
          "source": "src/Data-XCB-Types.html#GenXHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "xheader_major_version",
          "package": "xcb-types",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:xheader_major_version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XCB.Types",
          "name": "xheader_minor_version",
          "package": "xcb-types",
          "signature": "Maybe Int",
          "source": "src/Data-XCB-Types.html#GenXHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "xheader_minor_version",
          "package": "xcb-types",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:xheader_minor_version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XCB.Types",
          "name": "xheader_multiword",
          "package": "xcb-types",
          "signature": "Maybe Bool",
          "source": "src/Data-XCB-Types.html#GenXHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "xheader_multiword",
          "package": "xcb-types",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:xheader_multiword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterCaps name.\n\u003c/p\u003e",
          "module": "Data.XCB.Types",
          "name": "xheader_name",
          "package": "xcb-types",
          "signature": "Maybe Name",
          "source": "src/Data-XCB-Types.html#GenXHeader",
          "type": "function"
        },
        "index": {
          "description": "InterCaps name",
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "xheader_name",
          "package": "xcb-types",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:xheader_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName used to indentify extensions between the X client and server.\n\u003c/p\u003e",
          "module": "Data.XCB.Types",
          "name": "xheader_xname",
          "package": "xcb-types",
          "signature": "Maybe Name",
          "source": "src/Data-XCB-Types.html#GenXHeader",
          "type": "function"
        },
        "index": {
          "description": "Name used to indentify extensions between the client and server",
          "hierarchy": "Data XCB Types",
          "module": "Data.XCB.Types",
          "name": "xheader_xname",
          "package": "xcb-types",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB-Types.html#v:xheader_xname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eXCB\u003c/a\u003e\u003c/code\u003e module can parse the contents of the xcb-proto\n XML files into Haskell data structures.\n\u003c/p\u003e\u003cp\u003ePretty-printers are provided to aid in the debugging - they do\n not pretty-print to XML, but to a custom human-readable format.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.XCB",
          "name": "XCB",
          "package": "xcb-types",
          "source": "src/Data-XCB.html",
          "type": "module"
        },
        "index": {
          "description": "The XCB module can parse the contents of the xcb-proto XML files into Haskell data structures Pretty-printers are provided to aid in the debugging they do not pretty-print to XML but to custom human-readable format",
          "hierarchy": "Data XCB",
          "module": "Data.XCB",
          "name": "XCB",
          "package": "xcb-types",
          "partial": "XCB",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xcb-types/docs/Data-XCB.html#"
      }
    }
  ]
]