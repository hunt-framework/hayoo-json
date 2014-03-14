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
        "word": "dtd-types"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides types to represent an XML Document Type\n Declaration (DTD) as defined in W3C specifications\n (\u003ca\u003ehttp://www.w3.org/XML/Core/#Publications\u003c/a\u003e). It is intended to be\n compatible with and extend the set of types in \u003ca\u003eData.XML.Types\u003c/a\u003e\n provided by the xml-types package.\n\u003c/p\u003e\u003cp\u003eFollowing the philosophy of \u003ccode\u003eData.XML.Types\u003c/code\u003e, the types in this\n module are not intended to be a strict and complete representation\n of the model in the W3C specifications; rather, they are intended\n to be convenient and type-safe for the kinds of processing of DTDs\n that are commonly done in practice. As such, this model is\n compatible with both Version 1.0 and Version 1.1 of the XML\n specification.\n\u003c/p\u003e\u003cp\u003eTherefore, these types are not suitable for type-level validation\n of the syntax of a DTD. For example: these types are more\n lenient than the specs about the characters that are allowed in\n various locations in a DTD; entities of various kinds only appear\n as distinct syntactic elements in places where they are commonly\n needed when processing DTDs; etc.\n\u003c/p\u003e\u003cp\u003eConditional sections are not represented in these types. They\n should be handled directly by parsers and renderers, if needed.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.XML.DTD.Types",
          "name": "Types",
          "package": "dtd-types",
          "source": "src/Data-XML-DTD-Types.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides types to represent an XML Document Type Declaration DTD as defined in W3C specifications http www.w3.org XML Core Publications It is intended to be compatible with and extend the set of types in Data.XML.Types provided by the xml-types package Following the philosophy of Data.XML.Types the types in this module are not intended to be strict and complete representation of the model in the W3C specifications rather they are intended to be convenient and type-safe for the kinds of processing of DTDs that are commonly done in practice As such this model is compatible with both Version and Version of the XML specification Therefore these types are not suitable for type-level validation of the syntax of DTD For example these types are more lenient than the specs about the characters that are allowed in various locations in DTD entities of various kinds only appear as distinct syntactic elements in places where they are commonly needed when processing DTDs etc Conditional sections are not represented in these types They should be handled directly by parsers and renderers if needed",
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "Types",
          "package": "dtd-types",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA declaration of an attribute that can occur in an element.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Types",
          "name": "AttDecl",
          "package": "dtd-types",
          "source": "src/Data-XML-DTD-Types.html#AttDecl",
          "type": "data"
        },
        "index": {
          "description": "declaration of an attribute that can occur in an element",
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "AttDecl",
          "package": "dtd-types",
          "partial": "Att Decl",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#t:AttDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA default value specification for an attribute.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Types",
          "name": "AttDefault",
          "package": "dtd-types",
          "source": "src/Data-XML-DTD-Types.html#AttDefault",
          "type": "data"
        },
        "index": {
          "description": "default value specification for an attribute",
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "AttDefault",
          "package": "dtd-types",
          "partial": "Att Default",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#t:AttDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of attribute declarations for an element.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Types",
          "name": "AttList",
          "package": "dtd-types",
          "source": "src/Data-XML-DTD-Types.html#AttList",
          "type": "data"
        },
        "index": {
          "description": "list of attribute declarations for an element",
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "AttList",
          "package": "dtd-types",
          "partial": "Att List",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#t:AttList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of value that an attribute can take.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Types",
          "name": "AttType",
          "package": "dtd-types",
          "source": "src/Data-XML-DTD-Types.html#AttType",
          "type": "data"
        },
        "index": {
          "description": "The type of value that an attribute can take",
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "AttType",
          "package": "dtd-types",
          "partial": "Att Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#t:AttType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe content that can occur in an element.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Types",
          "name": "ContentDecl",
          "package": "dtd-types",
          "source": "src/Data-XML-DTD-Types.html#ContentDecl",
          "type": "data"
        },
        "index": {
          "description": "The content that can occur in an element",
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "ContentDecl",
          "package": "dtd-types",
          "partial": "Content Decl",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#t:ContentDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA model of structured content for an element.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Types",
          "name": "ContentModel",
          "package": "dtd-types",
          "source": "src/Data-XML-DTD-Types.html#ContentModel",
          "type": "data"
        },
        "index": {
          "description": "model of structured content for an element",
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "ContentModel",
          "package": "dtd-types",
          "partial": "Content Model",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#t:ContentModel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eDTD\u003c/a\u003e\u003c/code\u003e is a sequence components in any order.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Types",
          "name": "DTD",
          "package": "dtd-types",
          "source": "src/Data-XML-DTD-Types.html#DTD",
          "type": "data"
        },
        "index": {
          "description": "DTD is sequence components in any order",
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "DTD",
          "package": "dtd-types",
          "partial": "DTD",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#t:DTD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe kinds of components that can appear in a \u003ccode\u003e\u003ca\u003eDTD\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Types",
          "name": "DTDComponent",
          "package": "dtd-types",
          "source": "src/Data-XML-DTD-Types.html#DTDComponent",
          "type": "data"
        },
        "index": {
          "description": "The kinds of components that can appear in DTD",
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "DTDComponent",
          "package": "dtd-types",
          "partial": "DTDComponent",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#t:DTDComponent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e?xml\u003c/code\u003e text declaration at the beginning of a DTD.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Types",
          "name": "DTDTextDecl",
          "package": "dtd-types",
          "source": "src/Data-XML-DTD-Types.html#DTDTextDecl",
          "type": "data"
        },
        "index": {
          "description": "The xml text declaration at the beginning of DTD",
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "DTDTextDecl",
          "package": "dtd-types",
          "partial": "DTDText Decl",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#t:DTDTextDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA declaration of an element.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Types",
          "name": "ElementDecl",
          "package": "dtd-types",
          "source": "src/Data-XML-DTD-Types.html#ElementDecl",
          "type": "data"
        },
        "index": {
          "description": "declaration of an element",
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "ElementDecl",
          "package": "dtd-types",
          "partial": "Element Decl",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#t:ElementDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA declaration of an entity. An entity is a textual substitution\n variable. General entities can be referenced in an XML document\n conforming to the DTD, and parameter entities can be referenced in\n the DTD itself. The value of an unparsed entity is not specified in\n the DTD; it is specified by external syntax declared as a notation\n elsewhere in the DTD.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Types",
          "name": "EntityDecl",
          "package": "dtd-types",
          "source": "src/Data-XML-DTD-Types.html#EntityDecl",
          "type": "data"
        },
        "index": {
          "description": "declaration of an entity An entity is textual substitution variable General entities can be referenced in an XML document conforming to the DTD and parameter entities can be referenced in the DTD itself The value of an unparsed entity is not specified in the DTD it is specified by external syntax declared as notation elsewhere in the DTD",
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "EntityDecl",
          "package": "dtd-types",
          "partial": "Entity Decl",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#t:EntityDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe value of an internal entity may contain references to\n parameter entities; these references need to be resolved to obtain\n the actual replacement value of the entity. So we represent the\n value as a mixture of parameter entity references and free text.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Types",
          "name": "EntityValue",
          "package": "dtd-types",
          "source": "src/Data-XML-DTD-Types.html#EntityValue",
          "type": "data"
        },
        "index": {
          "description": "The value of an internal entity may contain references to parameter entities these references need to be resolved to obtain the actual replacement value of the entity So we represent the value as mixture of parameter entity references and free text",
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "EntityValue",
          "package": "dtd-types",
          "partial": "Entity Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#t:EntityValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA declaration of a notation.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Types",
          "name": "Notation",
          "package": "dtd-types",
          "source": "src/Data-XML-DTD-Types.html#Notation",
          "type": "data"
        },
        "index": {
          "description": "declaration of notation",
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "Notation",
          "package": "dtd-types",
          "partial": "Notation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#t:Notation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA source for a notation. We do not use the usual \u003ccode\u003e\u003ca\u003eExternalID\u003c/a\u003e\u003c/code\u003e\n type here, because for notations it is only optional, not required,\n for a public ID to be accompanied also by a system ID.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Types",
          "name": "NotationSource",
          "package": "dtd-types",
          "source": "src/Data-XML-DTD-Types.html#NotationSource",
          "type": "data"
        },
        "index": {
          "description": "source for notation We do not use the usual ExternalID type here because for notations it is only optional not required for public ID to be accompanied also by system ID",
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "NotationSource",
          "package": "dtd-types",
          "partial": "Notation Source",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#t:NotationSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parameter entity reference. It contains the name of the\n parameter entity that is being referenced.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Types",
          "name": "PERef",
          "package": "dtd-types",
          "source": "src/Data-XML-DTD-Types.html#PERef",
          "type": "type"
        },
        "index": {
          "description": "parameter entity reference It contains the name of the parameter entity that is being referenced",
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "PERef",
          "package": "dtd-types",
          "partial": "PERef",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#t:PERef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of times a production of content model syntax can\n repeat.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Types",
          "name": "Repeat",
          "package": "dtd-types",
          "source": "src/Data-XML-DTD-Types.html#Repeat",
          "type": "data"
        },
        "index": {
          "description": "The number of times production of content model syntax can repeat",
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "Repeat",
          "package": "dtd-types",
          "partial": "Repeat",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#t:Repeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.DTD.Types",
          "name": "AttDecl",
          "package": "dtd-types",
          "signature": "AttDecl",
          "source": "src/Data-XML-DTD-Types.html#AttDecl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "AttDecl",
          "package": "dtd-types",
          "partial": "Att Decl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:AttDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe attribute has the given default value\n when not supplied\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Types",
          "name": "AttDefaultValue",
          "package": "dtd-types",
          "signature": "AttDefaultValue Text",
          "source": "src/Data-XML-DTD-Types.html#AttDefault",
          "type": "function"
        },
        "index": {
          "description": "The attribute has the given default value when not supplied",
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "AttDefaultValue",
          "package": "dtd-types",
          "partial": "Att Default Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:AttDefaultValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOne or more unparsed external entities\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Types",
          "name": "AttEntitiesType",
          "package": "dtd-types",
          "signature": "AttEntitiesType",
          "source": "src/Data-XML-DTD-Types.html#AttType",
          "type": "function"
        },
        "index": {
          "description": "One or more unparsed external entities",
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "AttEntitiesType",
          "package": "dtd-types",
          "partial": "Att Entities Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:AttEntitiesType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn unparsed external entity\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Types",
          "name": "AttEntityType",
          "package": "dtd-types",
          "signature": "AttEntityType",
          "source": "src/Data-XML-DTD-Types.html#AttType",
          "type": "function"
        },
        "index": {
          "description": "An unparsed external entity",
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "AttEntityType",
          "package": "dtd-types",
          "partial": "Att Entity Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:AttEntityType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOne of the given values\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Types",
          "name": "AttEnumType",
          "package": "dtd-types",
          "signature": "AttEnumType [Text]",
          "source": "src/Data-XML-DTD-Types.html#AttType",
          "type": "function"
        },
        "index": {
          "description": "One of the given values",
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "AttEnumType",
          "normalized": "AttEnumType[Text]",
          "package": "dtd-types",
          "partial": "Att Enum Type",
          "signature": "AttEnumType[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:AttEnumType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen supplied, the attribute must have the\n given value\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Types",
          "name": "AttFixed",
          "package": "dtd-types",
          "signature": "AttFixed Text",
          "source": "src/Data-XML-DTD-Types.html#AttDefault",
          "type": "function"
        },
        "index": {
          "description": "When supplied the attribute must have the given value",
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "AttFixed",
          "package": "dtd-types",
          "partial": "Att Fixed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:AttFixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA reference to an ID\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Types",
          "name": "AttIDRefType",
          "package": "dtd-types",
          "signature": "AttIDRefType",
          "source": "src/Data-XML-DTD-Types.html#AttType",
          "type": "function"
        },
        "index": {
          "description": "reference to an ID",
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "AttIDRefType",
          "package": "dtd-types",
          "partial": "Att IDRef Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:AttIDRefType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOne or more references to IDs\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Types",
          "name": "AttIDRefsType",
          "package": "dtd-types",
          "signature": "AttIDRefsType",
          "source": "src/Data-XML-DTD-Types.html#AttType",
          "type": "function"
        },
        "index": {
          "description": "One or more references to IDs",
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "AttIDRefsType",
          "package": "dtd-types",
          "partial": "Att IDRefs Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:AttIDRefsType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA unique ID\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Types",
          "name": "AttIDType",
          "package": "dtd-types",
          "signature": "AttIDType",
          "source": "src/Data-XML-DTD-Types.html#AttType",
          "type": "function"
        },
        "index": {
          "description": "unique ID",
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "AttIDType",
          "package": "dtd-types",
          "partial": "Att IDType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:AttIDType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNo default value; the attribute is optional\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Types",
          "name": "AttImplied",
          "package": "dtd-types",
          "signature": "AttImplied",
          "source": "src/Data-XML-DTD-Types.html#AttDefault",
          "type": "function"
        },
        "index": {
          "description": "No default value the attribute is optional",
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "AttImplied",
          "package": "dtd-types",
          "partial": "Att Implied",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:AttImplied"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.DTD.Types",
          "name": "AttList",
          "package": "dtd-types",
          "signature": "AttList",
          "source": "src/Data-XML-DTD-Types.html#AttList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "AttList",
          "package": "dtd-types",
          "partial": "Att List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:AttList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA name-like token\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Types",
          "name": "AttNmTokenType",
          "package": "dtd-types",
          "signature": "AttNmTokenType",
          "source": "src/Data-XML-DTD-Types.html#AttType",
          "type": "function"
        },
        "index": {
          "description": "name-like token",
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "AttNmTokenType",
          "package": "dtd-types",
          "partial": "Att Nm Token Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:AttNmTokenType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOne or more name-like tokens\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Types",
          "name": "AttNmTokensType",
          "package": "dtd-types",
          "signature": "AttNmTokensType",
          "source": "src/Data-XML-DTD-Types.html#AttType",
          "type": "function"
        },
        "index": {
          "description": "One or more name-like tokens",
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "AttNmTokensType",
          "package": "dtd-types",
          "partial": "Att Nm Tokens Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:AttNmTokensType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecified by external syntax\n declared as a notation\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Types",
          "name": "AttNotationType",
          "package": "dtd-types",
          "signature": "AttNotationType [Text]",
          "source": "src/Data-XML-DTD-Types.html#AttType",
          "type": "function"
        },
        "index": {
          "description": "Specified by external syntax declared as notation",
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "AttNotationType",
          "normalized": "AttNotationType[Text]",
          "package": "dtd-types",
          "partial": "Att Notation Type",
          "signature": "AttNotationType[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:AttNotationType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNo default value; the attribute must always\n be supplied\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Types",
          "name": "AttRequired",
          "package": "dtd-types",
          "signature": "AttRequired",
          "source": "src/Data-XML-DTD-Types.html#AttDefault",
          "type": "function"
        },
        "index": {
          "description": "No default value the attribute must always be supplied",
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "AttRequired",
          "package": "dtd-types",
          "partial": "Att Required",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:AttRequired"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny text\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Types",
          "name": "AttStringType",
          "package": "dtd-types",
          "signature": "AttStringType",
          "source": "src/Data-XML-DTD-Types.html#AttType",
          "type": "function"
        },
        "index": {
          "description": "Any text",
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "AttStringType",
          "package": "dtd-types",
          "partial": "Att String Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:AttStringType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChoice, delimited by \u003ccode\u003e\"|\"\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Types",
          "name": "CMChoice",
          "package": "dtd-types",
          "signature": "CMChoice [ContentModel] Repeat",
          "source": "src/Data-XML-DTD-Types.html#ContentModel",
          "type": "function"
        },
        "index": {
          "description": "Choice delimited by",
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "CMChoice",
          "normalized": "CMChoice[ContentModel]Repeat",
          "package": "dtd-types",
          "partial": "CMChoice",
          "signature": "CMChoice[ContentModel]Repeat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:CMChoice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eElement name\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Types",
          "name": "CMName",
          "package": "dtd-types",
          "signature": "CMName Text Repeat",
          "source": "src/Data-XML-DTD-Types.html#ContentModel",
          "type": "function"
        },
        "index": {
          "description": "Element name",
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "CMName",
          "package": "dtd-types",
          "partial": "CMName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:CMName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequence, delimited by \u003ccode\u003e\",\"\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Types",
          "name": "CMSeq",
          "package": "dtd-types",
          "signature": "CMSeq [ContentModel] Repeat",
          "source": "src/Data-XML-DTD-Types.html#ContentModel",
          "type": "function"
        },
        "index": {
          "description": "Sequence delimited by",
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "CMSeq",
          "normalized": "CMSeq[ContentModel]Repeat",
          "package": "dtd-types",
          "partial": "CMSeq",
          "signature": "CMSeq[ContentModel]Repeat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:CMSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnrestricted content\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Types",
          "name": "ContentAny",
          "package": "dtd-types",
          "signature": "ContentAny",
          "source": "src/Data-XML-DTD-Types.html#ContentDecl",
          "type": "function"
        },
        "index": {
          "description": "Unrestricted content",
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "ContentAny",
          "package": "dtd-types",
          "partial": "Content Any",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:ContentAny"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStructured element content\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Types",
          "name": "ContentElement",
          "package": "dtd-types",
          "signature": "ContentElement ContentModel",
          "source": "src/Data-XML-DTD-Types.html#ContentDecl",
          "type": "function"
        },
        "index": {
          "description": "Structured element content",
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "ContentElement",
          "package": "dtd-types",
          "partial": "Content Element",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:ContentElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNo content\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Types",
          "name": "ContentEmpty",
          "package": "dtd-types",
          "signature": "ContentEmpty",
          "source": "src/Data-XML-DTD-Types.html#ContentDecl",
          "type": "function"
        },
        "index": {
          "description": "No content",
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "ContentEmpty",
          "package": "dtd-types",
          "partial": "Content Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:ContentEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mixture of text and elements\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Types",
          "name": "ContentMixed",
          "package": "dtd-types",
          "signature": "ContentMixed [Text]",
          "source": "src/Data-XML-DTD-Types.html#ContentDecl",
          "type": "function"
        },
        "index": {
          "description": "mixture of text and elements",
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "ContentMixed",
          "normalized": "ContentMixed[Text]",
          "package": "dtd-types",
          "partial": "Content Mixed",
          "signature": "ContentMixed[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:ContentMixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.DTD.Types",
          "name": "DTD",
          "package": "dtd-types",
          "signature": "DTD",
          "source": "src/Data-XML-DTD-Types.html#DTD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "DTD",
          "package": "dtd-types",
          "partial": "DTD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:DTD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of attribute declarions for\n an element\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Types",
          "name": "DTDAttList",
          "package": "dtd-types",
          "signature": "DTDAttList AttList",
          "source": "src/Data-XML-DTD-Types.html#DTDComponent",
          "type": "function"
        },
        "index": {
          "description": "List of attribute declarions for an element",
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "DTDAttList",
          "package": "dtd-types",
          "partial": "DTDAtt List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:DTDAttList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA comment\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Types",
          "name": "DTDComment",
          "package": "dtd-types",
          "signature": "DTDComment Text",
          "source": "src/Data-XML-DTD-Types.html#DTDComponent",
          "type": "function"
        },
        "index": {
          "description": "comment",
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "DTDComment",
          "package": "dtd-types",
          "partial": "DTDComment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:DTDComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eElement declaration\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Types",
          "name": "DTDElementDecl",
          "package": "dtd-types",
          "signature": "DTDElementDecl ElementDecl",
          "source": "src/Data-XML-DTD-Types.html#DTDComponent",
          "type": "function"
        },
        "index": {
          "description": "Element declaration",
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "DTDElementDecl",
          "package": "dtd-types",
          "partial": "DTDElement Decl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:DTDElementDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEntity declaration\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Types",
          "name": "DTDEntityDecl",
          "package": "dtd-types",
          "signature": "DTDEntityDecl EntityDecl",
          "source": "src/Data-XML-DTD-Types.html#DTDComponent",
          "type": "function"
        },
        "index": {
          "description": "Entity declaration",
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "DTDEntityDecl",
          "package": "dtd-types",
          "partial": "DTDEntity Decl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:DTDEntityDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA processing instruction\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Types",
          "name": "DTDInstruction",
          "package": "dtd-types",
          "signature": "DTDInstruction Instruction",
          "source": "src/Data-XML-DTD-Types.html#DTDComponent",
          "type": "function"
        },
        "index": {
          "description": "processing instruction",
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "DTDInstruction",
          "package": "dtd-types",
          "partial": "DTDInstruction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:DTDInstruction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA notation declaration\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Types",
          "name": "DTDNotation",
          "package": "dtd-types",
          "signature": "DTDNotation Notation",
          "source": "src/Data-XML-DTD-Types.html#DTDComponent",
          "type": "function"
        },
        "index": {
          "description": "notation declaration",
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "DTDNotation",
          "package": "dtd-types",
          "partial": "DTDNotation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:DTDNotation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parameter entity reference in\n the top-level flow of the DTD\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Types",
          "name": "DTDPERef",
          "package": "dtd-types",
          "signature": "DTDPERef PERef",
          "source": "src/Data-XML-DTD-Types.html#DTDComponent",
          "type": "function"
        },
        "index": {
          "description": "parameter entity reference in the top-level flow of the DTD",
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "DTDPERef",
          "package": "dtd-types",
          "partial": "DTDPERef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:DTDPERef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.DTD.Types",
          "name": "DTDTextDecl",
          "package": "dtd-types",
          "signature": "DTDTextDecl",
          "source": "src/Data-XML-DTD-Types.html#DTDTextDecl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "DTDTextDecl",
          "package": "dtd-types",
          "partial": "DTDText Decl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:DTDTextDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.DTD.Types",
          "name": "ElementDecl",
          "package": "dtd-types",
          "signature": "ElementDecl",
          "source": "src/Data-XML-DTD-Types.html#ElementDecl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "ElementDecl",
          "package": "dtd-types",
          "partial": "Element Decl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:ElementDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.DTD.Types",
          "name": "EntityPERef",
          "package": "dtd-types",
          "signature": "EntityPERef PERef",
          "source": "src/Data-XML-DTD-Types.html#EntityValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "EntityPERef",
          "package": "dtd-types",
          "partial": "Entity PERef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:EntityPERef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.DTD.Types",
          "name": "EntityText",
          "package": "dtd-types",
          "signature": "EntityText Text",
          "source": "src/Data-XML-DTD-Types.html#EntityValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "EntityText",
          "package": "dtd-types",
          "partial": "Entity Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:EntityText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn external general\n entity is unparsed if a\n notation is specified.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Types",
          "name": "ExternalGeneralEntityDecl",
          "package": "dtd-types",
          "signature": "ExternalGeneralEntityDecl",
          "source": "src/Data-XML-DTD-Types.html#EntityDecl",
          "type": "function"
        },
        "index": {
          "description": "An external general entity is unparsed if notation is specified",
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "ExternalGeneralEntityDecl",
          "package": "dtd-types",
          "partial": "External General Entity Decl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:ExternalGeneralEntityDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.DTD.Types",
          "name": "ExternalParameterEntityDecl",
          "package": "dtd-types",
          "signature": "ExternalParameterEntityDecl",
          "source": "src/Data-XML-DTD-Types.html#EntityDecl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "ExternalParameterEntityDecl",
          "package": "dtd-types",
          "partial": "External Parameter Entity Decl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:ExternalParameterEntityDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.DTD.Types",
          "name": "InternalGeneralEntityDecl",
          "package": "dtd-types",
          "signature": "InternalGeneralEntityDecl",
          "source": "src/Data-XML-DTD-Types.html#EntityDecl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "InternalGeneralEntityDecl",
          "package": "dtd-types",
          "partial": "Internal General Entity Decl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:InternalGeneralEntityDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.DTD.Types",
          "name": "InternalParameterEntityDecl",
          "package": "dtd-types",
          "signature": "InternalParameterEntityDecl",
          "source": "src/Data-XML-DTD-Types.html#EntityDecl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "InternalParameterEntityDecl",
          "package": "dtd-types",
          "partial": "Internal Parameter Entity Decl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:InternalParameterEntityDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.DTD.Types",
          "name": "Notation",
          "package": "dtd-types",
          "signature": "Notation",
          "source": "src/Data-XML-DTD-Types.html#Notation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "Notation",
          "package": "dtd-types",
          "partial": "Notation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:Notation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA public ID\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Types",
          "name": "NotationPubID",
          "package": "dtd-types",
          "signature": "NotationPubID Text",
          "source": "src/Data-XML-DTD-Types.html#NotationSource",
          "type": "function"
        },
        "index": {
          "description": "public ID",
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "NotationPubID",
          "package": "dtd-types",
          "partial": "Notation Pub ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:NotationPubID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA public ID with a system ID\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Types",
          "name": "NotationPubSysID",
          "package": "dtd-types",
          "signature": "NotationPubSysID Text Text",
          "source": "src/Data-XML-DTD-Types.html#NotationSource",
          "type": "function"
        },
        "index": {
          "description": "public ID with system ID",
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "NotationPubSysID",
          "package": "dtd-types",
          "partial": "Notation Pub Sys ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:NotationPubSysID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA system ID\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Types",
          "name": "NotationSysID",
          "package": "dtd-types",
          "signature": "NotationSysID Text",
          "source": "src/Data-XML-DTD-Types.html#NotationSource",
          "type": "function"
        },
        "index": {
          "description": "system ID",
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "NotationSysID",
          "package": "dtd-types",
          "partial": "Notation Sys ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:NotationSysID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.DTD.Types",
          "name": "One",
          "package": "dtd-types",
          "signature": "One",
          "source": "src/Data-XML-DTD-Types.html#Repeat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "One",
          "package": "dtd-types",
          "partial": "One",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:One"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.DTD.Types",
          "name": "OneOrMore",
          "package": "dtd-types",
          "signature": "OneOrMore",
          "source": "src/Data-XML-DTD-Types.html#Repeat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "OneOrMore",
          "package": "dtd-types",
          "partial": "One Or More",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:OneOrMore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.DTD.Types",
          "name": "ZeroOrMore",
          "package": "dtd-types",
          "signature": "ZeroOrMore",
          "source": "src/Data-XML-DTD-Types.html#Repeat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "ZeroOrMore",
          "package": "dtd-types",
          "partial": "Zero Or More",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:ZeroOrMore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.DTD.Types",
          "name": "ZeroOrOne",
          "package": "dtd-types",
          "signature": "ZeroOrOne",
          "source": "src/Data-XML-DTD-Types.html#Repeat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "ZeroOrOne",
          "package": "dtd-types",
          "partial": "Zero Or One",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:ZeroOrOne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default value specification\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Types",
          "name": "attDeclDefault",
          "package": "dtd-types",
          "signature": "AttDefault",
          "source": "src/Data-XML-DTD-Types.html#AttDecl",
          "type": "function"
        },
        "index": {
          "description": "The default value specification",
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "attDeclDefault",
          "package": "dtd-types",
          "partial": "Decl Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:attDeclDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of the attribute\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Types",
          "name": "attDeclName",
          "package": "dtd-types",
          "signature": "Text",
          "source": "src/Data-XML-DTD-Types.html#AttDecl",
          "type": "function"
        },
        "index": {
          "description": "The name of the attribute",
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "attDeclName",
          "package": "dtd-types",
          "partial": "Decl Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:attDeclName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of the attribute\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Types",
          "name": "attDeclType",
          "package": "dtd-types",
          "signature": "AttType",
          "source": "src/Data-XML-DTD-Types.html#AttDecl",
          "type": "function"
        },
        "index": {
          "description": "The type of the attribute",
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "attDeclType",
          "package": "dtd-types",
          "partial": "Decl Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:attDeclType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.DTD.Types",
          "name": "attListDecls",
          "package": "dtd-types",
          "signature": "[AttDecl]",
          "source": "src/Data-XML-DTD-Types.html#AttList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "attListDecls",
          "normalized": "[AttDecl]",
          "package": "dtd-types",
          "partial": "List Decls",
          "signature": "[AttDecl]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:attListDecls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of the element to\n which the attribute\n declarations apply\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Types",
          "name": "attListElementName",
          "package": "dtd-types",
          "signature": "Text",
          "source": "src/Data-XML-DTD-Types.html#AttList",
          "type": "function"
        },
        "index": {
          "description": "The name of the element to which the attribute declarations apply",
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "attListElementName",
          "package": "dtd-types",
          "partial": "List Element Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:attListElementName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.DTD.Types",
          "name": "dtdComponents",
          "package": "dtd-types",
          "signature": "[DTDComponent]",
          "source": "src/Data-XML-DTD-Types.html#DTD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "dtdComponents",
          "normalized": "[DTDComponent]",
          "package": "dtd-types",
          "partial": "Components",
          "signature": "[DTDComponent]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:dtdComponents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.DTD.Types",
          "name": "dtdEncoding",
          "package": "dtd-types",
          "signature": "Text",
          "source": "src/Data-XML-DTD-Types.html#DTDTextDecl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "dtdEncoding",
          "package": "dtd-types",
          "partial": "Encoding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:dtdEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.DTD.Types",
          "name": "dtdTextDecl",
          "package": "dtd-types",
          "signature": "Maybe DTDTextDecl",
          "source": "src/Data-XML-DTD-Types.html#DTD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "dtdTextDecl",
          "package": "dtd-types",
          "partial": "Text Decl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:dtdTextDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.DTD.Types",
          "name": "dtdXMLVersion",
          "package": "dtd-types",
          "signature": "Maybe Text",
          "source": "src/Data-XML-DTD-Types.html#DTDTextDecl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "dtdXMLVersion",
          "package": "dtd-types",
          "partial": "XMLVersion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:dtdXMLVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.DTD.Types",
          "name": "eltDeclContent",
          "package": "dtd-types",
          "signature": "ContentDecl",
          "source": "src/Data-XML-DTD-Types.html#ElementDecl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "eltDeclContent",
          "package": "dtd-types",
          "partial": "Decl Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:eltDeclContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.DTD.Types",
          "name": "eltDeclName",
          "package": "dtd-types",
          "signature": "Text",
          "source": "src/Data-XML-DTD-Types.html#ElementDecl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "eltDeclName",
          "package": "dtd-types",
          "partial": "Decl Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:eltDeclName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.DTD.Types",
          "name": "entityDeclID",
          "package": "dtd-types",
          "signature": "ExternalID",
          "source": "src/Data-XML-DTD-Types.html#EntityDecl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "entityDeclID",
          "package": "dtd-types",
          "partial": "Decl ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:entityDeclID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.DTD.Types",
          "name": "entityDeclName",
          "package": "dtd-types",
          "signature": "Text",
          "source": "src/Data-XML-DTD-Types.html#EntityDecl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "entityDeclName",
          "package": "dtd-types",
          "partial": "Decl Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:entityDeclName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.DTD.Types",
          "name": "entityDeclNotation",
          "package": "dtd-types",
          "signature": "Maybe Text",
          "source": "src/Data-XML-DTD-Types.html#EntityDecl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "entityDeclNotation",
          "package": "dtd-types",
          "partial": "Decl Notation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:entityDeclNotation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.DTD.Types",
          "name": "entityDeclValue",
          "package": "dtd-types",
          "signature": "[EntityValue]",
          "source": "src/Data-XML-DTD-Types.html#EntityDecl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "entityDeclValue",
          "normalized": "[EntityValue]",
          "package": "dtd-types",
          "partial": "Decl Value",
          "signature": "[EntityValue]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:entityDeclValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.DTD.Types",
          "name": "notationName",
          "package": "dtd-types",
          "signature": "Text",
          "source": "src/Data-XML-DTD-Types.html#Notation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "notationName",
          "package": "dtd-types",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:notationName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.DTD.Types",
          "name": "notationSource",
          "package": "dtd-types",
          "signature": "NotationSource",
          "source": "src/Data-XML-DTD-Types.html#Notation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML DTD Types",
          "module": "Data.XML.DTD.Types",
          "name": "notationSource",
          "package": "dtd-types",
          "partial": "Source",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-types/docs/Data-XML-DTD-Types.html#v:notationSource"
      }
    }
  ]
]