[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides types to represent an XML Document Type\n Declaration (DTD) as defined in W3C specifications\n (\u003ca\u003ehttp://www.w3.org/XML/Core/#Publications\u003c/a\u003e). It is intended to be\n compatible with and extend the set of types in \u003ca\u003eData.XML.Types\u003c/a\u003e\n provided by the xml-types package.\n\u003c/p\u003e\u003cp\u003eFollowing the philosophy of \u003ccode\u003eData.XML.Types\u003c/code\u003e, the types in this\n module are not intended to be a strict and complete representation\n of the model in the W3C specifications; rather, they are intended\n to be convenient and type-safe for the kinds of processing of DTDs\n that are commonly done in practice. As such, this model is\n compatible with both Version 1.0 and Version 1.1 of the XML\n specification.\n\u003c/p\u003e\u003cp\u003eTherefore, these types are not suitable for type-level validation\n of the syntax of a DTD. For example: these types are more\n lenient than the specs about the characters that are allowed in\n various locations in a DTD; entities of various kinds only appear\n as distinct syntactic elements in places where they are commonly\n needed when processing DTDs; etc.\n\u003c/p\u003e\u003cp\u003eConditional sections are not represented in these types. They\n should be handled directly by parsers and renderers, if needed.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "module",
        "fct-source": "src/Data-XML-DTD-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "This module provides types to represent an XML Document Type Declaration DTD as defined in W3C specifications http www.w3.org XML Core Publications It is intended to be compatible with and extend the set of types in Data.XML.Types provided by the xml-types package Following the philosophy of Data.XML.Types the types in this module are not intended to be strict and complete representation of the model in the W3C specifications rather they are intended to be convenient and type-safe for the kinds of processing of DTDs that are commonly done in practice As such this model is compatible with both Version and Version of the XML specification Therefore these types are not suitable for type-level validation of the syntax of DTD For example these types are more lenient than the specs about the characters that are allowed in various locations in DTD entities of various kinds only appear as distinct syntactic elements in places where they are commonly needed when processing DTDs etc Conditional sections are not represented in these types They should be handled directly by parsers and renderers if needed",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "Types",
        "normalized": "",
        "package": "dtd-types",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#t:AttDecl",
      "description": {
        "fct-descr": "\u003cp\u003eA declaration of an attribute that can occur in an element.\n\u003c/p\u003e",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "data",
        "fct-source": "src/Data-XML-DTD-Types.html#AttDecl",
        "fct-type": "data",
        "title": "AttDecl"
      },
      "index": {
        "description": "declaration of an attribute that can occur in an element",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "AttDecl",
        "normalized": "",
        "package": "dtd-types",
        "partial": "Att Decl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#t:AttDefault",
      "description": {
        "fct-descr": "\u003cp\u003eA default value specification for an attribute.\n\u003c/p\u003e",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "data",
        "fct-source": "src/Data-XML-DTD-Types.html#AttDefault",
        "fct-type": "data",
        "title": "AttDefault"
      },
      "index": {
        "description": "default value specification for an attribute",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "AttDefault",
        "normalized": "",
        "package": "dtd-types",
        "partial": "Att Default",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#t:AttList",
      "description": {
        "fct-descr": "\u003cp\u003eA list of attribute declarations for an element.\n\u003c/p\u003e",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "data",
        "fct-source": "src/Data-XML-DTD-Types.html#AttList",
        "fct-type": "data",
        "title": "AttList"
      },
      "index": {
        "description": "list of attribute declarations for an element",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "AttList",
        "normalized": "",
        "package": "dtd-types",
        "partial": "Att List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#t:AttType",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of value that an attribute can take.\n\u003c/p\u003e",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "data",
        "fct-source": "src/Data-XML-DTD-Types.html#AttType",
        "fct-type": "data",
        "title": "AttType"
      },
      "index": {
        "description": "The type of value that an attribute can take",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "AttType",
        "normalized": "",
        "package": "dtd-types",
        "partial": "Att Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#t:ContentDecl",
      "description": {
        "fct-descr": "\u003cp\u003eThe content that can occur in an element.\n\u003c/p\u003e",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "data",
        "fct-source": "src/Data-XML-DTD-Types.html#ContentDecl",
        "fct-type": "data",
        "title": "ContentDecl"
      },
      "index": {
        "description": "The content that can occur in an element",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "ContentDecl",
        "normalized": "",
        "package": "dtd-types",
        "partial": "Content Decl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#t:ContentModel",
      "description": {
        "fct-descr": "\u003cp\u003eA model of structured content for an element.\n\u003c/p\u003e",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "data",
        "fct-source": "src/Data-XML-DTD-Types.html#ContentModel",
        "fct-type": "data",
        "title": "ContentModel"
      },
      "index": {
        "description": "model of structured content for an element",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "ContentModel",
        "normalized": "",
        "package": "dtd-types",
        "partial": "Content Model",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#t:DTD",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eDTD\u003c/a\u003e\u003c/code\u003e is a sequence components in any order.\n\u003c/p\u003e",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "data",
        "fct-source": "src/Data-XML-DTD-Types.html#DTD",
        "fct-type": "data",
        "title": "DTD"
      },
      "index": {
        "description": "DTD is sequence components in any order",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "DTD",
        "normalized": "",
        "package": "dtd-types",
        "partial": "DTD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#t:DTDComponent",
      "description": {
        "fct-descr": "\u003cp\u003eThe kinds of components that can appear in a \u003ccode\u003e\u003ca\u003eDTD\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "data",
        "fct-source": "src/Data-XML-DTD-Types.html#DTDComponent",
        "fct-type": "data",
        "title": "DTDComponent"
      },
      "index": {
        "description": "The kinds of components that can appear in DTD",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "DTDComponent",
        "normalized": "",
        "package": "dtd-types",
        "partial": "DTDComponent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#t:DTDTextDecl",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e?xml\u003c/code\u003e text declaration at the beginning of a DTD.\n\u003c/p\u003e",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "data",
        "fct-source": "src/Data-XML-DTD-Types.html#DTDTextDecl",
        "fct-type": "data",
        "title": "DTDTextDecl"
      },
      "index": {
        "description": "The xml text declaration at the beginning of DTD",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "DTDTextDecl",
        "normalized": "",
        "package": "dtd-types",
        "partial": "DTDText Decl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#t:ElementDecl",
      "description": {
        "fct-descr": "\u003cp\u003eA declaration of an element.\n\u003c/p\u003e",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "data",
        "fct-source": "src/Data-XML-DTD-Types.html#ElementDecl",
        "fct-type": "data",
        "title": "ElementDecl"
      },
      "index": {
        "description": "declaration of an element",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "ElementDecl",
        "normalized": "",
        "package": "dtd-types",
        "partial": "Element Decl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#t:EntityDecl",
      "description": {
        "fct-descr": "\u003cp\u003eA declaration of an entity. An entity is a textual substitution\n variable. General entities can be referenced in an XML document\n conforming to the DTD, and parameter entities can be referenced in\n the DTD itself. The value of an unparsed entity is not specified in\n the DTD; it is specified by external syntax declared as a notation\n elsewhere in the DTD.\n\u003c/p\u003e",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "data",
        "fct-source": "src/Data-XML-DTD-Types.html#EntityDecl",
        "fct-type": "data",
        "title": "EntityDecl"
      },
      "index": {
        "description": "declaration of an entity An entity is textual substitution variable General entities can be referenced in an XML document conforming to the DTD and parameter entities can be referenced in the DTD itself The value of an unparsed entity is not specified in the DTD it is specified by external syntax declared as notation elsewhere in the DTD",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "EntityDecl",
        "normalized": "",
        "package": "dtd-types",
        "partial": "Entity Decl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#t:EntityValue",
      "description": {
        "fct-descr": "\u003cp\u003eThe value of an internal entity may contain references to\n parameter entities; these references need to be resolved to obtain\n the actual replacement value of the entity. So we represent the\n value as a mixture of parameter entity references and free text.\n\u003c/p\u003e",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "data",
        "fct-source": "src/Data-XML-DTD-Types.html#EntityValue",
        "fct-type": "data",
        "title": "EntityValue"
      },
      "index": {
        "description": "The value of an internal entity may contain references to parameter entities these references need to be resolved to obtain the actual replacement value of the entity So we represent the value as mixture of parameter entity references and free text",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "EntityValue",
        "normalized": "",
        "package": "dtd-types",
        "partial": "Entity Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#t:Notation",
      "description": {
        "fct-descr": "\u003cp\u003eA declaration of a notation.\n\u003c/p\u003e",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "data",
        "fct-source": "src/Data-XML-DTD-Types.html#Notation",
        "fct-type": "data",
        "title": "Notation"
      },
      "index": {
        "description": "declaration of notation",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "Notation",
        "normalized": "",
        "package": "dtd-types",
        "partial": "Notation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#t:NotationSource",
      "description": {
        "fct-descr": "\u003cp\u003eA source for a notation. We do not use the usual \u003ccode\u003e\u003ca\u003eExternalID\u003c/a\u003e\u003c/code\u003e\n type here, because for notations it is only optional, not required,\n for a public ID to be accompanied also by a system ID.\n\u003c/p\u003e",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "data",
        "fct-source": "src/Data-XML-DTD-Types.html#NotationSource",
        "fct-type": "data",
        "title": "NotationSource"
      },
      "index": {
        "description": "source for notation We do not use the usual ExternalID type here because for notations it is only optional not required for public ID to be accompanied also by system ID",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "NotationSource",
        "normalized": "",
        "package": "dtd-types",
        "partial": "Notation Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#t:PERef",
      "description": {
        "fct-descr": "\u003cp\u003eA parameter entity reference. It contains the name of the\n parameter entity that is being referenced.\n\u003c/p\u003e",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "type",
        "fct-source": "src/Data-XML-DTD-Types.html#PERef",
        "fct-type": "type",
        "title": "PERef"
      },
      "index": {
        "description": "parameter entity reference It contains the name of the parameter entity that is being referenced",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "PERef",
        "normalized": "",
        "package": "dtd-types",
        "partial": "PERef",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#t:Repeat",
      "description": {
        "fct-descr": "\u003cp\u003eThe number of times a production of content model syntax can\n repeat.\n\u003c/p\u003e",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "data",
        "fct-source": "src/Data-XML-DTD-Types.html#Repeat",
        "fct-type": "data",
        "title": "Repeat"
      },
      "index": {
        "description": "The number of times production of content model syntax can repeat",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "Repeat",
        "normalized": "",
        "package": "dtd-types",
        "partial": "Repeat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:AttDecl",
      "description": {
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "AttDecl",
        "fct-source": "src/Data-XML-DTD-Types.html#AttDecl",
        "fct-type": "function",
        "title": "AttDecl"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "AttDecl",
        "normalized": "",
        "package": "dtd-types",
        "partial": "Att Decl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:AttDefaultValue",
      "description": {
        "fct-descr": "\u003cp\u003eThe attribute has the given default value\n when not supplied\n\u003c/p\u003e",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "AttDefaultValue Text",
        "fct-source": "src/Data-XML-DTD-Types.html#AttDefault",
        "fct-type": "function",
        "title": "AttDefaultValue"
      },
      "index": {
        "description": "The attribute has the given default value when not supplied",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "AttDefaultValue",
        "normalized": "",
        "package": "dtd-types",
        "partial": "Att Default Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:AttEntitiesType",
      "description": {
        "fct-descr": "\u003cp\u003eOne or more unparsed external entities\n\u003c/p\u003e",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "AttEntitiesType",
        "fct-source": "src/Data-XML-DTD-Types.html#AttType",
        "fct-type": "function",
        "title": "AttEntitiesType"
      },
      "index": {
        "description": "One or more unparsed external entities",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "AttEntitiesType",
        "normalized": "",
        "package": "dtd-types",
        "partial": "Att Entities Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:AttEntityType",
      "description": {
        "fct-descr": "\u003cp\u003eAn unparsed external entity\n\u003c/p\u003e",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "AttEntityType",
        "fct-source": "src/Data-XML-DTD-Types.html#AttType",
        "fct-type": "function",
        "title": "AttEntityType"
      },
      "index": {
        "description": "An unparsed external entity",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "AttEntityType",
        "normalized": "",
        "package": "dtd-types",
        "partial": "Att Entity Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:AttEnumType",
      "description": {
        "fct-descr": "\u003cp\u003eOne of the given values\n\u003c/p\u003e",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "AttEnumType [Text]",
        "fct-source": "src/Data-XML-DTD-Types.html#AttType",
        "fct-type": "function",
        "title": "AttEnumType"
      },
      "index": {
        "description": "One of the given values",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "AttEnumType",
        "normalized": "AttEnumType[Text]",
        "package": "dtd-types",
        "partial": "Att Enum Type",
        "signature": "AttEnumType[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:AttFixed",
      "description": {
        "fct-descr": "\u003cp\u003eWhen supplied, the attribute must have the\n given value\n\u003c/p\u003e",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "AttFixed Text",
        "fct-source": "src/Data-XML-DTD-Types.html#AttDefault",
        "fct-type": "function",
        "title": "AttFixed"
      },
      "index": {
        "description": "When supplied the attribute must have the given value",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "AttFixed",
        "normalized": "",
        "package": "dtd-types",
        "partial": "Att Fixed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:AttIDRefType",
      "description": {
        "fct-descr": "\u003cp\u003eA reference to an ID\n\u003c/p\u003e",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "AttIDRefType",
        "fct-source": "src/Data-XML-DTD-Types.html#AttType",
        "fct-type": "function",
        "title": "AttIDRefType"
      },
      "index": {
        "description": "reference to an ID",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "AttIDRefType",
        "normalized": "",
        "package": "dtd-types",
        "partial": "Att IDRef Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:AttIDRefsType",
      "description": {
        "fct-descr": "\u003cp\u003eOne or more references to IDs\n\u003c/p\u003e",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "AttIDRefsType",
        "fct-source": "src/Data-XML-DTD-Types.html#AttType",
        "fct-type": "function",
        "title": "AttIDRefsType"
      },
      "index": {
        "description": "One or more references to IDs",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "AttIDRefsType",
        "normalized": "",
        "package": "dtd-types",
        "partial": "Att IDRefs Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:AttIDType",
      "description": {
        "fct-descr": "\u003cp\u003eA unique ID\n\u003c/p\u003e",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "AttIDType",
        "fct-source": "src/Data-XML-DTD-Types.html#AttType",
        "fct-type": "function",
        "title": "AttIDType"
      },
      "index": {
        "description": "unique ID",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "AttIDType",
        "normalized": "",
        "package": "dtd-types",
        "partial": "Att IDType",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:AttImplied",
      "description": {
        "fct-descr": "\u003cp\u003eNo default value; the attribute is optional\n\u003c/p\u003e",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "AttImplied",
        "fct-source": "src/Data-XML-DTD-Types.html#AttDefault",
        "fct-type": "function",
        "title": "AttImplied"
      },
      "index": {
        "description": "No default value the attribute is optional",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "AttImplied",
        "normalized": "",
        "package": "dtd-types",
        "partial": "Att Implied",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:AttList",
      "description": {
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "AttList",
        "fct-source": "src/Data-XML-DTD-Types.html#AttList",
        "fct-type": "function",
        "title": "AttList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "AttList",
        "normalized": "",
        "package": "dtd-types",
        "partial": "Att List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:AttNmTokenType",
      "description": {
        "fct-descr": "\u003cp\u003eA name-like token\n\u003c/p\u003e",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "AttNmTokenType",
        "fct-source": "src/Data-XML-DTD-Types.html#AttType",
        "fct-type": "function",
        "title": "AttNmTokenType"
      },
      "index": {
        "description": "name-like token",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "AttNmTokenType",
        "normalized": "",
        "package": "dtd-types",
        "partial": "Att Nm Token Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:AttNmTokensType",
      "description": {
        "fct-descr": "\u003cp\u003eOne or more name-like tokens\n\u003c/p\u003e",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "AttNmTokensType",
        "fct-source": "src/Data-XML-DTD-Types.html#AttType",
        "fct-type": "function",
        "title": "AttNmTokensType"
      },
      "index": {
        "description": "One or more name-like tokens",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "AttNmTokensType",
        "normalized": "",
        "package": "dtd-types",
        "partial": "Att Nm Tokens Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:AttNotationType",
      "description": {
        "fct-descr": "\u003cp\u003eSpecified by external syntax\n declared as a notation\n\u003c/p\u003e",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "AttNotationType [Text]",
        "fct-source": "src/Data-XML-DTD-Types.html#AttType",
        "fct-type": "function",
        "title": "AttNotationType"
      },
      "index": {
        "description": "Specified by external syntax declared as notation",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "AttNotationType",
        "normalized": "AttNotationType[Text]",
        "package": "dtd-types",
        "partial": "Att Notation Type",
        "signature": "AttNotationType[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:AttRequired",
      "description": {
        "fct-descr": "\u003cp\u003eNo default value; the attribute must always\n be supplied\n\u003c/p\u003e",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "AttRequired",
        "fct-source": "src/Data-XML-DTD-Types.html#AttDefault",
        "fct-type": "function",
        "title": "AttRequired"
      },
      "index": {
        "description": "No default value the attribute must always be supplied",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "AttRequired",
        "normalized": "",
        "package": "dtd-types",
        "partial": "Att Required",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:AttStringType",
      "description": {
        "fct-descr": "\u003cp\u003eAny text\n\u003c/p\u003e",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "AttStringType",
        "fct-source": "src/Data-XML-DTD-Types.html#AttType",
        "fct-type": "function",
        "title": "AttStringType"
      },
      "index": {
        "description": "Any text",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "AttStringType",
        "normalized": "",
        "package": "dtd-types",
        "partial": "Att String Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:CMChoice",
      "description": {
        "fct-descr": "\u003cp\u003eChoice, delimited by \u003ccode\u003e\"|\"\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "CMChoice [ContentModel] Repeat",
        "fct-source": "src/Data-XML-DTD-Types.html#ContentModel",
        "fct-type": "function",
        "title": "CMChoice"
      },
      "index": {
        "description": "Choice delimited by",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "CMChoice",
        "normalized": "CMChoice[ContentModel]Repeat",
        "package": "dtd-types",
        "partial": "CMChoice",
        "signature": "CMChoice[ContentModel]Repeat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:CMName",
      "description": {
        "fct-descr": "\u003cp\u003eElement name\n\u003c/p\u003e",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "CMName Text Repeat",
        "fct-source": "src/Data-XML-DTD-Types.html#ContentModel",
        "fct-type": "function",
        "title": "CMName"
      },
      "index": {
        "description": "Element name",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "CMName",
        "normalized": "",
        "package": "dtd-types",
        "partial": "CMName",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:CMSeq",
      "description": {
        "fct-descr": "\u003cp\u003eSequence, delimited by \u003ccode\u003e\",\"\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "CMSeq [ContentModel] Repeat",
        "fct-source": "src/Data-XML-DTD-Types.html#ContentModel",
        "fct-type": "function",
        "title": "CMSeq"
      },
      "index": {
        "description": "Sequence delimited by",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "CMSeq",
        "normalized": "CMSeq[ContentModel]Repeat",
        "package": "dtd-types",
        "partial": "CMSeq",
        "signature": "CMSeq[ContentModel]Repeat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:ContentAny",
      "description": {
        "fct-descr": "\u003cp\u003eUnrestricted content\n\u003c/p\u003e",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "ContentAny",
        "fct-source": "src/Data-XML-DTD-Types.html#ContentDecl",
        "fct-type": "function",
        "title": "ContentAny"
      },
      "index": {
        "description": "Unrestricted content",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "ContentAny",
        "normalized": "",
        "package": "dtd-types",
        "partial": "Content Any",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:ContentElement",
      "description": {
        "fct-descr": "\u003cp\u003eStructured element content\n\u003c/p\u003e",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "ContentElement ContentModel",
        "fct-source": "src/Data-XML-DTD-Types.html#ContentDecl",
        "fct-type": "function",
        "title": "ContentElement"
      },
      "index": {
        "description": "Structured element content",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "ContentElement",
        "normalized": "",
        "package": "dtd-types",
        "partial": "Content Element",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:ContentEmpty",
      "description": {
        "fct-descr": "\u003cp\u003eNo content\n\u003c/p\u003e",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "ContentEmpty",
        "fct-source": "src/Data-XML-DTD-Types.html#ContentDecl",
        "fct-type": "function",
        "title": "ContentEmpty"
      },
      "index": {
        "description": "No content",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "ContentEmpty",
        "normalized": "",
        "package": "dtd-types",
        "partial": "Content Empty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:ContentMixed",
      "description": {
        "fct-descr": "\u003cp\u003eA mixture of text and elements\n\u003c/p\u003e",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "ContentMixed [Text]",
        "fct-source": "src/Data-XML-DTD-Types.html#ContentDecl",
        "fct-type": "function",
        "title": "ContentMixed"
      },
      "index": {
        "description": "mixture of text and elements",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "ContentMixed",
        "normalized": "ContentMixed[Text]",
        "package": "dtd-types",
        "partial": "Content Mixed",
        "signature": "ContentMixed[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:DTD",
      "description": {
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "DTD",
        "fct-source": "src/Data-XML-DTD-Types.html#DTD",
        "fct-type": "function",
        "title": "DTD"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "DTD",
        "normalized": "",
        "package": "dtd-types",
        "partial": "DTD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:DTDAttList",
      "description": {
        "fct-descr": "\u003cp\u003eList of attribute declarions for\n an element\n\u003c/p\u003e",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "DTDAttList AttList",
        "fct-source": "src/Data-XML-DTD-Types.html#DTDComponent",
        "fct-type": "function",
        "title": "DTDAttList"
      },
      "index": {
        "description": "List of attribute declarions for an element",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "DTDAttList",
        "normalized": "",
        "package": "dtd-types",
        "partial": "DTDAtt List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:DTDComment",
      "description": {
        "fct-descr": "\u003cp\u003eA comment\n\u003c/p\u003e",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "DTDComment Text",
        "fct-source": "src/Data-XML-DTD-Types.html#DTDComponent",
        "fct-type": "function",
        "title": "DTDComment"
      },
      "index": {
        "description": "comment",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "DTDComment",
        "normalized": "",
        "package": "dtd-types",
        "partial": "DTDComment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:DTDElementDecl",
      "description": {
        "fct-descr": "\u003cp\u003eElement declaration\n\u003c/p\u003e",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "DTDElementDecl ElementDecl",
        "fct-source": "src/Data-XML-DTD-Types.html#DTDComponent",
        "fct-type": "function",
        "title": "DTDElementDecl"
      },
      "index": {
        "description": "Element declaration",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "DTDElementDecl",
        "normalized": "",
        "package": "dtd-types",
        "partial": "DTDElement Decl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:DTDEntityDecl",
      "description": {
        "fct-descr": "\u003cp\u003eEntity declaration\n\u003c/p\u003e",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "DTDEntityDecl EntityDecl",
        "fct-source": "src/Data-XML-DTD-Types.html#DTDComponent",
        "fct-type": "function",
        "title": "DTDEntityDecl"
      },
      "index": {
        "description": "Entity declaration",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "DTDEntityDecl",
        "normalized": "",
        "package": "dtd-types",
        "partial": "DTDEntity Decl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:DTDInstruction",
      "description": {
        "fct-descr": "\u003cp\u003eA processing instruction\n\u003c/p\u003e",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "DTDInstruction Instruction",
        "fct-source": "src/Data-XML-DTD-Types.html#DTDComponent",
        "fct-type": "function",
        "title": "DTDInstruction"
      },
      "index": {
        "description": "processing instruction",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "DTDInstruction",
        "normalized": "",
        "package": "dtd-types",
        "partial": "DTDInstruction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:DTDNotation",
      "description": {
        "fct-descr": "\u003cp\u003eA notation declaration\n\u003c/p\u003e",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "DTDNotation Notation",
        "fct-source": "src/Data-XML-DTD-Types.html#DTDComponent",
        "fct-type": "function",
        "title": "DTDNotation"
      },
      "index": {
        "description": "notation declaration",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "DTDNotation",
        "normalized": "",
        "package": "dtd-types",
        "partial": "DTDNotation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:DTDPERef",
      "description": {
        "fct-descr": "\u003cp\u003eA parameter entity reference in\n the top-level flow of the DTD\n\u003c/p\u003e",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "DTDPERef PERef",
        "fct-source": "src/Data-XML-DTD-Types.html#DTDComponent",
        "fct-type": "function",
        "title": "DTDPERef"
      },
      "index": {
        "description": "parameter entity reference in the top-level flow of the DTD",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "DTDPERef",
        "normalized": "",
        "package": "dtd-types",
        "partial": "DTDPERef",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:DTDTextDecl",
      "description": {
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "DTDTextDecl",
        "fct-source": "src/Data-XML-DTD-Types.html#DTDTextDecl",
        "fct-type": "function",
        "title": "DTDTextDecl"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "DTDTextDecl",
        "normalized": "",
        "package": "dtd-types",
        "partial": "DTDText Decl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:ElementDecl",
      "description": {
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "ElementDecl",
        "fct-source": "src/Data-XML-DTD-Types.html#ElementDecl",
        "fct-type": "function",
        "title": "ElementDecl"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "ElementDecl",
        "normalized": "",
        "package": "dtd-types",
        "partial": "Element Decl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:EntityPERef",
      "description": {
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "EntityPERef PERef",
        "fct-source": "src/Data-XML-DTD-Types.html#EntityValue",
        "fct-type": "function",
        "title": "EntityPERef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "EntityPERef",
        "normalized": "",
        "package": "dtd-types",
        "partial": "Entity PERef",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:EntityText",
      "description": {
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "EntityText Text",
        "fct-source": "src/Data-XML-DTD-Types.html#EntityValue",
        "fct-type": "function",
        "title": "EntityText"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "EntityText",
        "normalized": "",
        "package": "dtd-types",
        "partial": "Entity Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:ExternalGeneralEntityDecl",
      "description": {
        "fct-descr": "\u003cp\u003eAn external general\n entity is unparsed if a\n notation is specified.\n\u003c/p\u003e",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "ExternalGeneralEntityDecl",
        "fct-source": "src/Data-XML-DTD-Types.html#EntityDecl",
        "fct-type": "function",
        "title": "ExternalGeneralEntityDecl"
      },
      "index": {
        "description": "An external general entity is unparsed if notation is specified",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "ExternalGeneralEntityDecl",
        "normalized": "",
        "package": "dtd-types",
        "partial": "External General Entity Decl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:ExternalParameterEntityDecl",
      "description": {
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "ExternalParameterEntityDecl",
        "fct-source": "src/Data-XML-DTD-Types.html#EntityDecl",
        "fct-type": "function",
        "title": "ExternalParameterEntityDecl"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "ExternalParameterEntityDecl",
        "normalized": "",
        "package": "dtd-types",
        "partial": "External Parameter Entity Decl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:InternalGeneralEntityDecl",
      "description": {
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "InternalGeneralEntityDecl",
        "fct-source": "src/Data-XML-DTD-Types.html#EntityDecl",
        "fct-type": "function",
        "title": "InternalGeneralEntityDecl"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "InternalGeneralEntityDecl",
        "normalized": "",
        "package": "dtd-types",
        "partial": "Internal General Entity Decl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:InternalParameterEntityDecl",
      "description": {
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "InternalParameterEntityDecl",
        "fct-source": "src/Data-XML-DTD-Types.html#EntityDecl",
        "fct-type": "function",
        "title": "InternalParameterEntityDecl"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "InternalParameterEntityDecl",
        "normalized": "",
        "package": "dtd-types",
        "partial": "Internal Parameter Entity Decl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:Notation",
      "description": {
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "Notation",
        "fct-source": "src/Data-XML-DTD-Types.html#Notation",
        "fct-type": "function",
        "title": "Notation"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "Notation",
        "normalized": "",
        "package": "dtd-types",
        "partial": "Notation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:NotationPubID",
      "description": {
        "fct-descr": "\u003cp\u003eA public ID\n\u003c/p\u003e",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "NotationPubID Text",
        "fct-source": "src/Data-XML-DTD-Types.html#NotationSource",
        "fct-type": "function",
        "title": "NotationPubID"
      },
      "index": {
        "description": "public ID",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "NotationPubID",
        "normalized": "",
        "package": "dtd-types",
        "partial": "Notation Pub ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:NotationPubSysID",
      "description": {
        "fct-descr": "\u003cp\u003eA public ID with a system ID\n\u003c/p\u003e",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "NotationPubSysID Text Text",
        "fct-source": "src/Data-XML-DTD-Types.html#NotationSource",
        "fct-type": "function",
        "title": "NotationPubSysID"
      },
      "index": {
        "description": "public ID with system ID",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "NotationPubSysID",
        "normalized": "",
        "package": "dtd-types",
        "partial": "Notation Pub Sys ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:NotationSysID",
      "description": {
        "fct-descr": "\u003cp\u003eA system ID\n\u003c/p\u003e",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "NotationSysID Text",
        "fct-source": "src/Data-XML-DTD-Types.html#NotationSource",
        "fct-type": "function",
        "title": "NotationSysID"
      },
      "index": {
        "description": "system ID",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "NotationSysID",
        "normalized": "",
        "package": "dtd-types",
        "partial": "Notation Sys ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:One",
      "description": {
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "One",
        "fct-source": "src/Data-XML-DTD-Types.html#Repeat",
        "fct-type": "function",
        "title": "One"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "One",
        "normalized": "",
        "package": "dtd-types",
        "partial": "One",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:OneOrMore",
      "description": {
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "OneOrMore",
        "fct-source": "src/Data-XML-DTD-Types.html#Repeat",
        "fct-type": "function",
        "title": "OneOrMore"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "OneOrMore",
        "normalized": "",
        "package": "dtd-types",
        "partial": "One Or More",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:ZeroOrMore",
      "description": {
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "ZeroOrMore",
        "fct-source": "src/Data-XML-DTD-Types.html#Repeat",
        "fct-type": "function",
        "title": "ZeroOrMore"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "ZeroOrMore",
        "normalized": "",
        "package": "dtd-types",
        "partial": "Zero Or More",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:ZeroOrOne",
      "description": {
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "ZeroOrOne",
        "fct-source": "src/Data-XML-DTD-Types.html#Repeat",
        "fct-type": "function",
        "title": "ZeroOrOne"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "ZeroOrOne",
        "normalized": "",
        "package": "dtd-types",
        "partial": "Zero Or One",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:attDeclDefault",
      "description": {
        "fct-descr": "\u003cp\u003eThe default value specification\n\u003c/p\u003e",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "AttDefault",
        "fct-source": "src/Data-XML-DTD-Types.html#AttDecl",
        "fct-type": "function",
        "title": "attDeclDefault"
      },
      "index": {
        "description": "The default value specification",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "attDeclDefault",
        "normalized": "",
        "package": "dtd-types",
        "partial": "Decl Default",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:attDeclName",
      "description": {
        "fct-descr": "\u003cp\u003eThe name of the attribute\n\u003c/p\u003e",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "Text",
        "fct-source": "src/Data-XML-DTD-Types.html#AttDecl",
        "fct-type": "function",
        "title": "attDeclName"
      },
      "index": {
        "description": "The name of the attribute",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "attDeclName",
        "normalized": "",
        "package": "dtd-types",
        "partial": "Decl Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:attDeclType",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of the attribute\n\u003c/p\u003e",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "AttType",
        "fct-source": "src/Data-XML-DTD-Types.html#AttDecl",
        "fct-type": "function",
        "title": "attDeclType"
      },
      "index": {
        "description": "The type of the attribute",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "attDeclType",
        "normalized": "",
        "package": "dtd-types",
        "partial": "Decl Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:attListDecls",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "[AttDecl]",
        "fct-source": "src/Data-XML-DTD-Types.html#AttList",
        "fct-type": "function",
        "title": "attListDecls"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "attListDecls",
        "normalized": "[AttDecl]",
        "package": "dtd-types",
        "partial": "List Decls",
        "signature": "[AttDecl]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:attListElementName",
      "description": {
        "fct-descr": "\u003cp\u003eThe name of the element to\n which the attribute\n declarations apply\n\u003c/p\u003e",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "Text",
        "fct-source": "src/Data-XML-DTD-Types.html#AttList",
        "fct-type": "function",
        "title": "attListElementName"
      },
      "index": {
        "description": "The name of the element to which the attribute declarations apply",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "attListElementName",
        "normalized": "",
        "package": "dtd-types",
        "partial": "List Element Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:dtdComponents",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "[DTDComponent]",
        "fct-source": "src/Data-XML-DTD-Types.html#DTD",
        "fct-type": "function",
        "title": "dtdComponents"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "dtdComponents",
        "normalized": "[DTDComponent]",
        "package": "dtd-types",
        "partial": "Components",
        "signature": "[DTDComponent]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:dtdEncoding",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "Text",
        "fct-source": "src/Data-XML-DTD-Types.html#DTDTextDecl",
        "fct-type": "function",
        "title": "dtdEncoding"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "dtdEncoding",
        "normalized": "",
        "package": "dtd-types",
        "partial": "Encoding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:dtdTextDecl",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "Maybe DTDTextDecl",
        "fct-source": "src/Data-XML-DTD-Types.html#DTD",
        "fct-type": "function",
        "title": "dtdTextDecl"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "dtdTextDecl",
        "normalized": "",
        "package": "dtd-types",
        "partial": "Text Decl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:dtdXMLVersion",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "Maybe Text",
        "fct-source": "src/Data-XML-DTD-Types.html#DTDTextDecl",
        "fct-type": "function",
        "title": "dtdXMLVersion"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "dtdXMLVersion",
        "normalized": "",
        "package": "dtd-types",
        "partial": "XMLVersion",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:eltDeclContent",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "ContentDecl",
        "fct-source": "src/Data-XML-DTD-Types.html#ElementDecl",
        "fct-type": "function",
        "title": "eltDeclContent"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "eltDeclContent",
        "normalized": "",
        "package": "dtd-types",
        "partial": "Decl Content",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:eltDeclName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "Text",
        "fct-source": "src/Data-XML-DTD-Types.html#ElementDecl",
        "fct-type": "function",
        "title": "eltDeclName"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "eltDeclName",
        "normalized": "",
        "package": "dtd-types",
        "partial": "Decl Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:entityDeclID",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "ExternalID",
        "fct-source": "src/Data-XML-DTD-Types.html#EntityDecl",
        "fct-type": "function",
        "title": "entityDeclID"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "entityDeclID",
        "normalized": "",
        "package": "dtd-types",
        "partial": "Decl ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:entityDeclName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "Text",
        "fct-source": "src/Data-XML-DTD-Types.html#EntityDecl",
        "fct-type": "function",
        "title": "entityDeclName"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "entityDeclName",
        "normalized": "",
        "package": "dtd-types",
        "partial": "Decl Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:entityDeclNotation",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "Maybe Text",
        "fct-source": "src/Data-XML-DTD-Types.html#EntityDecl",
        "fct-type": "function",
        "title": "entityDeclNotation"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "entityDeclNotation",
        "normalized": "",
        "package": "dtd-types",
        "partial": "Decl Notation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:entityDeclValue",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "[EntityValue]",
        "fct-source": "src/Data-XML-DTD-Types.html#EntityDecl",
        "fct-type": "function",
        "title": "entityDeclValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "entityDeclValue",
        "normalized": "[EntityValue]",
        "package": "dtd-types",
        "partial": "Decl Value",
        "signature": "[EntityValue]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:notationName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "Text",
        "fct-source": "src/Data-XML-DTD-Types.html#Notation",
        "fct-type": "function",
        "title": "notationName"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "notationName",
        "normalized": "",
        "package": "dtd-types",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:notationSource",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.XML.DTD.Types",
        "fct-package": "dtd-types",
        "fct-signature": "NotationSource",
        "fct-source": "src/Data-XML-DTD-Types.html#Notation",
        "fct-type": "function",
        "title": "notationSource"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML DTD Types",
        "module": "Data.XML.DTD.Types",
        "name": "notationSource",
        "normalized": "",
        "package": "dtd-types",
        "partial": "Source",
        "signature": ""
      }
    }
  }
]