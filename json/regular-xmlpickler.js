[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/regular-xmlpickler/docs/Generics-Regular-XmlPickler-Function.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneric XmlPickler. Use this module if you don't want the instances\n from Generics.Regular.XmlPickler.Instances.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Generics.Regular.XmlPickler.Function",
        "fct-package": "regular-xmlpickler",
        "fct-signature": "module",
        "fct-source": "src/Generics-Regular-XmlPickler-Function.html",
        "fct-type": "module",
        "title": "Function"
      },
      "index": {
        "description": "Generic XmlPickler Use this module if you don want the instances from Generics.Regular.XmlPickler.Instances",
        "hierarchy": "Generics Regular XmlPickler Function",
        "module": "Generics.Regular.XmlPickler.Function",
        "name": "Function",
        "normalized": "",
        "package": "regular-xmlpickler",
        "partial": "Function",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/regular-xmlpickler/docs/Generics-Regular-XmlPickler-Function.html#t:GXmlPickler",
      "description": {
        "fct-descr": "\u003cp\u003eThe generic XmlPickler class. This gives generic xml picklers for\n the functors from \u003ccode\u003eGenerics.Regular\u003c/code\u003e. These are usually not used\n directly.\n\u003c/p\u003e",
        "fct-module": "Generics.Regular.XmlPickler.Function",
        "fct-package": "regular-xmlpickler",
        "fct-signature": "class",
        "fct-source": "src/Generics-Regular-XmlPickler-Function.html#GXmlPickler",
        "fct-type": "class",
        "title": "GXmlPickler"
      },
      "index": {
        "description": "The generic XmlPickler class This gives generic xml picklers for the functors from Generics.Regular These are usually not used directly",
        "hierarchy": "Generics Regular XmlPickler Function",
        "module": "Generics.Regular.XmlPickler.Function",
        "name": "GXmlPickler",
        "normalized": "",
        "package": "regular-xmlpickler",
        "partial": "GXml Pickler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/regular-xmlpickler/docs/Generics-Regular-XmlPickler-Function.html#v:gxpickle",
      "description": {
        "fct-descr": "\u003cp\u003eThe generic pickler. Uses a tag for each constructor with the\n lower case constructor name, and a tag for each record field with\n the lower case field name. Most values are pickled using their own\n \u003ccode\u003e\u003ca\u003eXmlPickler\u003c/a\u003e\u003c/code\u003e instance, and \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es are pickled as possibly empty\n text nodes.\n\u003c/p\u003e",
        "fct-module": "Generics.Regular.XmlPickler.Function",
        "fct-package": "regular-xmlpickler",
        "fct-signature": "PU a",
        "fct-source": "src/Generics-Regular-XmlPickler-Function.html#gxpickle",
        "fct-type": "function",
        "title": "gxpickle"
      },
      "index": {
        "description": "The generic pickler Uses tag for each constructor with the lower case constructor name and tag for each record field with the lower case field name Most values are pickled using their own XmlPickler instance and String are pickled as possibly empty text nodes",
        "hierarchy": "Generics Regular XmlPickler Function",
        "module": "Generics.Regular.XmlPickler.Function",
        "name": "gxpickle",
        "normalized": "",
        "package": "regular-xmlpickler",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/regular-xmlpickler/docs/Generics-Regular-XmlPickler-Function.html#v:gxpicklef",
      "description": {
        "fct-module": "Generics.Regular.XmlPickler.Function",
        "fct-package": "regular-xmlpickler",
        "fct-signature": "PU a -\u003e PU (f a)",
        "fct-source": "src/Generics-Regular-XmlPickler-Function.html#gxpicklef",
        "fct-type": "method",
        "title": "gxpicklef"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics Regular XmlPickler Function",
        "module": "Generics.Regular.XmlPickler.Function",
        "name": "gxpicklef",
        "normalized": "PU a-\u003ePU(b a)",
        "package": "regular-xmlpickler",
        "partial": "",
        "signature": "PU a-\u003ePU(f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/regular-xmlpickler/docs/Generics-Regular-XmlPickler-Instances.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eXmlPickler\u003c/a\u003e\u003c/code\u003e instance for \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e which converts to and from the Strings\n \"true\" and \"false\", and \u003ccode\u003e\u003ca\u003eGXmlPickler\u003c/a\u003e\u003c/code\u003e instance for \u003ccode\u003e\u003ca\u003eK\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, which\n allows whitespace. These instances are automatically used if you\n import \u003ccode\u003eGenerics.Regular.XmlPickler\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Generics.Regular.XmlPickler.Instances",
        "fct-package": "regular-xmlpickler",
        "fct-signature": "module",
        "fct-source": "src/Generics-Regular-XmlPickler-Instances.html",
        "fct-type": "module",
        "title": "Instances"
      },
      "index": {
        "description": "XmlPickler instance for Bool which converts to and from the Strings true and false and GXmlPickler instance for String which allows whitespace These instances are automatically used if you import Generics.Regular.XmlPickler",
        "hierarchy": "Generics Regular XmlPickler Instances",
        "module": "Generics.Regular.XmlPickler.Instances",
        "name": "Instances",
        "normalized": "",
        "package": "regular-xmlpickler",
        "partial": "Instances",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/regular-xmlpickler/docs/Generics-Regular-XmlPickler.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneric \u003ccode\u003eXmlPickler\u003c/code\u003e. This module allows you to generically convert\n your datatype to and from XML. If you don't want the (G)XmlPickler\n instances for \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, use\n \u003ccode\u003eGeneric.Regular.XmlPickler.Function\u003c/code\u003e instead.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Generics.Regular.XmlPickler",
        "fct-package": "regular-xmlpickler",
        "fct-signature": "module",
        "fct-source": "src/Generics-Regular-XmlPickler.html",
        "fct-type": "module",
        "title": "XmlPickler"
      },
      "index": {
        "description": "Generic XmlPickler This module allows you to generically convert your datatype to and from XML If you don want the XmlPickler instances for Bool and String use Generic.Regular.XmlPickler.Function instead",
        "hierarchy": "Generics Regular XmlPickler",
        "module": "Generics.Regular.XmlPickler",
        "name": "XmlPickler",
        "normalized": "",
        "package": "regular-xmlpickler",
        "partial": "Xml Pickler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/regular-xmlpickler/docs/Generics-Regular-XmlPickler.html#t:GXmlPickler",
      "description": {
        "fct-descr": "\u003cp\u003eThe generic XmlPickler class. This gives generic xml picklers for\n the functors from \u003ccode\u003eGenerics.Regular\u003c/code\u003e. These are usually not used\n directly.\n\u003c/p\u003e",
        "fct-module": "Generics.Regular.XmlPickler",
        "fct-package": "regular-xmlpickler",
        "fct-signature": "class",
        "fct-source": "src/Generics-Regular-XmlPickler-Function.html#GXmlPickler",
        "fct-type": "class",
        "title": "GXmlPickler"
      },
      "index": {
        "description": "The generic XmlPickler class This gives generic xml picklers for the functors from Generics.Regular These are usually not used directly",
        "hierarchy": "Generics Regular XmlPickler",
        "module": "Generics.Regular.XmlPickler",
        "name": "GXmlPickler",
        "normalized": "",
        "package": "regular-xmlpickler",
        "partial": "GXml Pickler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/regular-xmlpickler/docs/Generics-Regular-XmlPickler.html#v:gxpickle",
      "description": {
        "fct-descr": "\u003cp\u003eThe generic pickler. Uses a tag for each constructor with the\n lower case constructor name, and a tag for each record field with\n the lower case field name. Most values are pickled using their own\n \u003ccode\u003e\u003ca\u003eXmlPickler\u003c/a\u003e\u003c/code\u003e instance, and \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es are pickled as possibly empty\n text nodes.\n\u003c/p\u003e",
        "fct-module": "Generics.Regular.XmlPickler",
        "fct-package": "regular-xmlpickler",
        "fct-signature": "PU a",
        "fct-source": "src/Generics-Regular-XmlPickler-Function.html#gxpickle",
        "fct-type": "function",
        "title": "gxpickle"
      },
      "index": {
        "description": "The generic pickler Uses tag for each constructor with the lower case constructor name and tag for each record field with the lower case field name Most values are pickled using their own XmlPickler instance and String are pickled as possibly empty text nodes",
        "hierarchy": "Generics Regular XmlPickler",
        "module": "Generics.Regular.XmlPickler",
        "name": "gxpickle",
        "normalized": "",
        "package": "regular-xmlpickler",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/regular-xmlpickler/docs/Generics-Regular-XmlPickler.html#v:gxpicklef",
      "description": {
        "fct-module": "Generics.Regular.XmlPickler",
        "fct-package": "regular-xmlpickler",
        "fct-signature": "PU a -\u003e PU (f a)",
        "fct-source": "src/Generics-Regular-XmlPickler-Function.html#gxpicklef",
        "fct-type": "method",
        "title": "gxpicklef"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics Regular XmlPickler",
        "module": "Generics.Regular.XmlPickler",
        "name": "gxpicklef",
        "normalized": "PU a-\u003ePU(b a)",
        "package": "regular-xmlpickler",
        "partial": "",
        "signature": "PU a-\u003ePU(f a)"
      }
    }
  }
]