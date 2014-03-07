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
        "word": "regular-xmlpickler"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneric XmlPickler. Use this module if you don't want the instances\n from Generics.Regular.XmlPickler.Instances.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.Regular.XmlPickler.Function",
          "name": "Function",
          "package": "regular-xmlpickler",
          "source": "src/Generics-Regular-XmlPickler-Function.html",
          "type": "module"
        },
        "index": {
          "description": "Generic XmlPickler Use this module if you don want the instances from Generics.Regular.XmlPickler.Instances",
          "hierarchy": "Generics Regular XmlPickler Function",
          "module": "Generics.Regular.XmlPickler.Function",
          "name": "Function",
          "package": "regular-xmlpickler",
          "partial": "Function",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regular-xmlpickler/docs/Generics-Regular-XmlPickler-Function.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe generic XmlPickler class. This gives generic xml picklers for\n the functors from \u003ccode\u003eGenerics.Regular\u003c/code\u003e. These are usually not used\n directly.\n\u003c/p\u003e",
          "module": "Generics.Regular.XmlPickler.Function",
          "name": "GXmlPickler",
          "package": "regular-xmlpickler",
          "source": "src/Generics-Regular-XmlPickler-Function.html#GXmlPickler",
          "type": "class"
        },
        "index": {
          "description": "The generic XmlPickler class This gives generic xml picklers for the functors from Generics.Regular These are usually not used directly",
          "hierarchy": "Generics Regular XmlPickler Function",
          "module": "Generics.Regular.XmlPickler.Function",
          "name": "GXmlPickler",
          "package": "regular-xmlpickler",
          "partial": "GXml Pickler",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/regular-xmlpickler/docs/Generics-Regular-XmlPickler-Function.html#t:GXmlPickler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe generic pickler. Uses a tag for each constructor with the\n lower case constructor name, and a tag for each record field with\n the lower case field name. Most values are pickled using their own\n \u003ccode\u003e\u003ca\u003eXmlPickler\u003c/a\u003e\u003c/code\u003e instance, and \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es are pickled as possibly empty\n text nodes.\n\u003c/p\u003e",
          "module": "[\"Generics.Regular.XmlPickler.Function\",\"Generics.Regular.XmlPickler\"]",
          "name": "gxpickle",
          "package": "regular-xmlpickler",
          "signature": "PU a",
          "source": "src/Generics-Regular-XmlPickler-Function.html#gxpickle",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/regular-xmlpickler/docs/Generics-Regular-XmlPickler-Function.html#v:gxpickle\",\"http://hackage.haskell.org/package/regular-xmlpickler/docs/Generics-Regular-XmlPickler.html#v:gxpickle\"]"
        },
        "index": {
          "description": "The generic pickler Uses tag for each constructor with the lower case constructor name and tag for each record field with the lower case field name Most values are pickled using their own XmlPickler instance and String are pickled as possibly empty text nodes",
          "hierarchy": "Generics Regular XmlPickler Function",
          "module": "Generics.Regular.XmlPickler.Function",
          "name": "gxpickle",
          "package": "regular-xmlpickler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regular-xmlpickler/docs/Generics-Regular-XmlPickler-Function.html#v:gxpickle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.XmlPickler.Function",
          "name": "gxpicklef",
          "package": "regular-xmlpickler",
          "signature": "PU a -\u003e PU (f a)",
          "source": "src/Generics-Regular-XmlPickler-Function.html#gxpicklef",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Regular XmlPickler Function",
          "module": "Generics.Regular.XmlPickler.Function",
          "name": "gxpicklef",
          "normalized": "PU a-\u003ePU(b a)",
          "package": "regular-xmlpickler",
          "signature": "PU a-\u003ePU(f a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/regular-xmlpickler/docs/Generics-Regular-XmlPickler-Function.html#v:gxpicklef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eXmlPickler\u003c/a\u003e\u003c/code\u003e instance for \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e which converts to and from the Strings\n \"true\" and \"false\", and \u003ccode\u003e\u003ca\u003eGXmlPickler\u003c/a\u003e\u003c/code\u003e instance for \u003ccode\u003e\u003ca\u003eK\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, which\n allows whitespace. These instances are automatically used if you\n import \u003ccode\u003eGenerics.Regular.XmlPickler\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.Regular.XmlPickler.Instances",
          "name": "Instances",
          "package": "regular-xmlpickler",
          "source": "src/Generics-Regular-XmlPickler-Instances.html",
          "type": "module"
        },
        "index": {
          "description": "XmlPickler instance for Bool which converts to and from the Strings true and false and GXmlPickler instance for String which allows whitespace These instances are automatically used if you import Generics.Regular.XmlPickler",
          "hierarchy": "Generics Regular XmlPickler Instances",
          "module": "Generics.Regular.XmlPickler.Instances",
          "name": "Instances",
          "package": "regular-xmlpickler",
          "partial": "Instances",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regular-xmlpickler/docs/Generics-Regular-XmlPickler-Instances.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneric \u003ccode\u003eXmlPickler\u003c/code\u003e. This module allows you to generically convert\n your datatype to and from XML. If you don't want the (G)XmlPickler\n instances for \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, use\n \u003ccode\u003eGeneric.Regular.XmlPickler.Function\u003c/code\u003e instead.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.Regular.XmlPickler",
          "name": "XmlPickler",
          "package": "regular-xmlpickler",
          "source": "src/Generics-Regular-XmlPickler.html",
          "type": "module"
        },
        "index": {
          "description": "Generic XmlPickler This module allows you to generically convert your datatype to and from XML If you don want the XmlPickler instances for Bool and String use Generic.Regular.XmlPickler.Function instead",
          "hierarchy": "Generics Regular XmlPickler",
          "module": "Generics.Regular.XmlPickler",
          "name": "XmlPickler",
          "package": "regular-xmlpickler",
          "partial": "Xml Pickler",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regular-xmlpickler/docs/Generics-Regular-XmlPickler.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe generic XmlPickler class. This gives generic xml picklers for\n the functors from \u003ccode\u003eGenerics.Regular\u003c/code\u003e. These are usually not used\n directly.\n\u003c/p\u003e",
          "module": "Generics.Regular.XmlPickler",
          "name": "GXmlPickler",
          "package": "regular-xmlpickler",
          "source": "src/Generics-Regular-XmlPickler-Function.html#GXmlPickler",
          "type": "class"
        },
        "index": {
          "description": "The generic XmlPickler class This gives generic xml picklers for the functors from Generics.Regular These are usually not used directly",
          "hierarchy": "Generics Regular XmlPickler",
          "module": "Generics.Regular.XmlPickler",
          "name": "GXmlPickler",
          "package": "regular-xmlpickler",
          "partial": "GXml Pickler",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/regular-xmlpickler/docs/Generics-Regular-XmlPickler.html#t:GXmlPickler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.XmlPickler",
          "name": "gxpicklef",
          "package": "regular-xmlpickler",
          "signature": "PU a -\u003e PU (f a)",
          "source": "src/Generics-Regular-XmlPickler-Function.html#gxpicklef",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Regular XmlPickler",
          "module": "Generics.Regular.XmlPickler",
          "name": "gxpicklef",
          "normalized": "PU a-\u003ePU(b a)",
          "package": "regular-xmlpickler",
          "signature": "PU a-\u003ePU(f a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/regular-xmlpickler/docs/Generics-Regular-XmlPickler.html#v:gxpicklef"
      }
    }
  ]
]