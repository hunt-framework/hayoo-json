[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic types for representing XML.\n\u003c/p\u003e\u003cp\u003eThe idea is to have a full set of appropriate types, which various XML\n libraries can share. Instead of having equivalent-but-incompatible types\n for every binding, parser, or client, they all share the same types can\n can thus interoperate easily.\n\u003c/p\u003e\u003cp\u003eThis library contains complete types for most parts of an XML document,\n including the prologue, node tree, and doctype. Some basic combinators\n are included for common tasks, including traversing the node tree and\n filtering children.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "module",
        "fct-source": "src/Data-XML-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "Basic types for representing XML The idea is to have full set of appropriate types which various XML libraries can share Instead of having equivalent-but-incompatible types for every binding parser or client they all share the same types can can thus interoperate easily This library contains complete types for most parts of an XML document including the prologue node tree and doctype Some basic combinators are included for common tasks including traversing the node tree and filtering children",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "Types",
        "normalized": "",
        "package": "xml-types",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#t:Content",
      "description": {
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "data",
        "fct-source": "src/Data-XML-Types.html#Content",
        "fct-type": "data",
        "title": "Content"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "Content",
        "normalized": "",
        "package": "xml-types",
        "partial": "Content",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#t:Doctype",
      "description": {
        "fct-descr": "\u003cp\u003eNote: due to the incredible complexity of DTDs, this type only supports\n external subsets. I've tried adding internal subset types, but they\n quickly gain more code than the rest of this module put together.\n\u003c/p\u003e\u003cp\u003eIt is possible that some future version of this library might support\n internal subsets, but I am no longer actively working on adding them.\n\u003c/p\u003e",
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "data",
        "fct-source": "src/Data-XML-Types.html#Doctype",
        "fct-type": "data",
        "title": "Doctype"
      },
      "index": {
        "description": "Note due to the incredible complexity of DTDs this type only supports external subsets ve tried adding internal subset types but they quickly gain more code than the rest of this module put together It is possible that some future version of this library might support internal subsets but am no longer actively working on adding them",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "Doctype",
        "normalized": "",
        "package": "xml-types",
        "partial": "Doctype",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#t:Document",
      "description": {
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "data",
        "fct-source": "src/Data-XML-Types.html#Document",
        "fct-type": "data",
        "title": "Document"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "Document",
        "normalized": "",
        "package": "xml-types",
        "partial": "Document",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#t:Element",
      "description": {
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "data",
        "fct-source": "src/Data-XML-Types.html#Element",
        "fct-type": "data",
        "title": "Element"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "Element",
        "normalized": "",
        "package": "xml-types",
        "partial": "Element",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#t:Event",
      "description": {
        "fct-descr": "\u003cp\u003eSome XML processing tools are incremental, and work in terms of events\n rather than node trees. The \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e type allows a document to be fully\n specified as a sequence of events.\n\u003c/p\u003e\u003cp\u003eEvent-based XML libraries include:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003ehttp://hackage.haskell.org/package/xml-enumerator\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://hackage.haskell.org/package/libxml-enumerator\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://hackage.haskell.org/package/expat-enumerator\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "data",
        "fct-source": "src/Data-XML-Types.html#Event",
        "fct-type": "data",
        "title": "Event"
      },
      "index": {
        "description": "Some XML processing tools are incremental and work in terms of events rather than node trees The Event type allows document to be fully specified as sequence of events Event-based XML libraries include http hackage.haskell.org package xml-enumerator http hackage.haskell.org package libxml-enumerator http hackage.haskell.org package expat-enumerator",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "Event",
        "normalized": "",
        "package": "xml-types",
        "partial": "Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#t:ExternalID",
      "description": {
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "data",
        "fct-source": "src/Data-XML-Types.html#ExternalID",
        "fct-type": "data",
        "title": "ExternalID"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "ExternalID",
        "normalized": "",
        "package": "xml-types",
        "partial": "External ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#t:Instruction",
      "description": {
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "data",
        "fct-source": "src/Data-XML-Types.html#Instruction",
        "fct-type": "data",
        "title": "Instruction"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "Instruction",
        "normalized": "",
        "package": "xml-types",
        "partial": "Instruction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#t:Miscellaneous",
      "description": {
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "data",
        "fct-source": "src/Data-XML-Types.html#Miscellaneous",
        "fct-type": "data",
        "title": "Miscellaneous"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "Miscellaneous",
        "normalized": "",
        "package": "xml-types",
        "partial": "Miscellaneous",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#t:Name",
      "description": {
        "fct-descr": "\u003cp\u003eA fully qualified name.\n\u003c/p\u003e\u003cp\u003ePrefixes are not semantically important; they are included only to\n simplify pass-through parsing. When comparing names with \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e\n methods, prefixes are ignored.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eIsString\u003c/code\u003e instance supports Clark notation; see\n \u003ca\u003ehttp://www.jclark.com/xml/xmlns.htm\u003c/a\u003e and\n \u003ca\u003ehttp://infohost.nmt.edu/tcc/help/pubs/pylxml/etree-QName.html\u003c/a\u003e. Use\n the \u003ccode\u003eOverloadedStrings\u003c/code\u003e language extension for very simple \u003ccode\u003eName\u003c/code\u003e\n construction:\n\u003c/p\u003e\u003cpre\u003e myname :: Name\n myname = \"{http://example.com/ns/my-namespace}my-name\"\n\u003c/pre\u003e",
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "data",
        "fct-source": "src/Data-XML-Types.html#Name",
        "fct-type": "data",
        "title": "Name"
      },
      "index": {
        "description": "fully qualified name Prefixes are not semantically important they are included only to simplify pass-through parsing When comparing names with Eq or Ord methods prefixes are ignored The IsString instance supports Clark notation see http www.jclark.com xml xmlns.htm and http infohost.nmt.edu tcc help pubs pylxml etree-QName.html Use the OverloadedStrings language extension for very simple Name construction myname Name myname http example.com ns my-namespace my-name",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "Name",
        "normalized": "",
        "package": "xml-types",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#t:Node",
      "description": {
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "data",
        "fct-source": "src/Data-XML-Types.html#Node",
        "fct-type": "data",
        "title": "Node"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "Node",
        "normalized": "",
        "package": "xml-types",
        "partial": "Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#t:Prologue",
      "description": {
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "data",
        "fct-source": "src/Data-XML-Types.html#Prologue",
        "fct-type": "data",
        "title": "Prologue"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "Prologue",
        "normalized": "",
        "package": "xml-types",
        "partial": "Prologue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:ContentEntity",
      "description": {
        "fct-descr": "\u003cp\u003eFor pass-through parsing\n\u003c/p\u003e",
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "ContentEntity Text",
        "fct-source": "src/Data-XML-Types.html#Content",
        "fct-type": "function",
        "title": "ContentEntity"
      },
      "index": {
        "description": "For pass-through parsing",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "ContentEntity",
        "normalized": "",
        "package": "xml-types",
        "partial": "Content Entity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:ContentText",
      "description": {
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "ContentText Text",
        "fct-source": "src/Data-XML-Types.html#Content",
        "fct-type": "function",
        "title": "ContentText"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "ContentText",
        "normalized": "",
        "package": "xml-types",
        "partial": "Content Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:Doctype",
      "description": {
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "Doctype",
        "fct-source": "src/Data-XML-Types.html#Doctype",
        "fct-type": "function",
        "title": "Doctype"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "Doctype",
        "normalized": "",
        "package": "xml-types",
        "partial": "Doctype",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:Document",
      "description": {
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "Document",
        "fct-source": "src/Data-XML-Types.html#Document",
        "fct-type": "function",
        "title": "Document"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "Document",
        "normalized": "",
        "package": "xml-types",
        "partial": "Document",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:Element",
      "description": {
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "Element",
        "fct-source": "src/Data-XML-Types.html#Element",
        "fct-type": "function",
        "title": "Element"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "Element",
        "normalized": "",
        "package": "xml-types",
        "partial": "Element",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:EventBeginDoctype",
      "description": {
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "EventBeginDoctype Text (Maybe ExternalID)",
        "fct-source": "src/Data-XML-Types.html#Event",
        "fct-type": "function",
        "title": "EventBeginDoctype"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "EventBeginDoctype",
        "normalized": "",
        "package": "xml-types",
        "partial": "Event Begin Doctype",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:EventBeginDocument",
      "description": {
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "EventBeginDocument",
        "fct-source": "src/Data-XML-Types.html#Event",
        "fct-type": "function",
        "title": "EventBeginDocument"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "EventBeginDocument",
        "normalized": "",
        "package": "xml-types",
        "partial": "Event Begin Document",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:EventBeginElement",
      "description": {
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "EventBeginElement Name [(Name, [Content])]",
        "fct-source": "src/Data-XML-Types.html#Event",
        "fct-type": "function",
        "title": "EventBeginElement"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "EventBeginElement",
        "normalized": "EventBeginElement Name[(Name,[Content])]",
        "package": "xml-types",
        "partial": "Event Begin Element",
        "signature": "EventBeginElement Name[(Name,[Content])]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:EventCDATA",
      "description": {
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "EventCDATA Text",
        "fct-source": "src/Data-XML-Types.html#Event",
        "fct-type": "function",
        "title": "EventCDATA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "EventCDATA",
        "normalized": "",
        "package": "xml-types",
        "partial": "Event CDATA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:EventComment",
      "description": {
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "EventComment Text",
        "fct-source": "src/Data-XML-Types.html#Event",
        "fct-type": "function",
        "title": "EventComment"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "EventComment",
        "normalized": "",
        "package": "xml-types",
        "partial": "Event Comment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:EventContent",
      "description": {
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "EventContent Content",
        "fct-source": "src/Data-XML-Types.html#Event",
        "fct-type": "function",
        "title": "EventContent"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "EventContent",
        "normalized": "",
        "package": "xml-types",
        "partial": "Event Content",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:EventEndDoctype",
      "description": {
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "EventEndDoctype",
        "fct-source": "src/Data-XML-Types.html#Event",
        "fct-type": "function",
        "title": "EventEndDoctype"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "EventEndDoctype",
        "normalized": "",
        "package": "xml-types",
        "partial": "Event End Doctype",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:EventEndDocument",
      "description": {
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "EventEndDocument",
        "fct-source": "src/Data-XML-Types.html#Event",
        "fct-type": "function",
        "title": "EventEndDocument"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "EventEndDocument",
        "normalized": "",
        "package": "xml-types",
        "partial": "Event End Document",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:EventEndElement",
      "description": {
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "EventEndElement Name",
        "fct-source": "src/Data-XML-Types.html#Event",
        "fct-type": "function",
        "title": "EventEndElement"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "EventEndElement",
        "normalized": "",
        "package": "xml-types",
        "partial": "Event End Element",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:EventInstruction",
      "description": {
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "EventInstruction Instruction",
        "fct-source": "src/Data-XML-Types.html#Event",
        "fct-type": "function",
        "title": "EventInstruction"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "EventInstruction",
        "normalized": "",
        "package": "xml-types",
        "partial": "Event Instruction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:Instruction",
      "description": {
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "Instruction",
        "fct-source": "src/Data-XML-Types.html#Instruction",
        "fct-type": "function",
        "title": "Instruction"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "Instruction",
        "normalized": "",
        "package": "xml-types",
        "partial": "Instruction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:MiscComment",
      "description": {
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "MiscComment Text",
        "fct-source": "src/Data-XML-Types.html#Miscellaneous",
        "fct-type": "function",
        "title": "MiscComment"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "MiscComment",
        "normalized": "",
        "package": "xml-types",
        "partial": "Misc Comment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:MiscInstruction",
      "description": {
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "MiscInstruction Instruction",
        "fct-source": "src/Data-XML-Types.html#Miscellaneous",
        "fct-type": "function",
        "title": "MiscInstruction"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "MiscInstruction",
        "normalized": "",
        "package": "xml-types",
        "partial": "Misc Instruction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:Name",
      "description": {
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "Name",
        "fct-source": "src/Data-XML-Types.html#Name",
        "fct-type": "function",
        "title": "Name"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "Name",
        "normalized": "",
        "package": "xml-types",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:NodeComment",
      "description": {
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "NodeComment Text",
        "fct-source": "src/Data-XML-Types.html#Node",
        "fct-type": "function",
        "title": "NodeComment"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "NodeComment",
        "normalized": "",
        "package": "xml-types",
        "partial": "Node Comment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:NodeContent",
      "description": {
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "NodeContent Content",
        "fct-source": "src/Data-XML-Types.html#Node",
        "fct-type": "function",
        "title": "NodeContent"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "NodeContent",
        "normalized": "",
        "package": "xml-types",
        "partial": "Node Content",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:NodeElement",
      "description": {
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "NodeElement Element",
        "fct-source": "src/Data-XML-Types.html#Node",
        "fct-type": "function",
        "title": "NodeElement"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "NodeElement",
        "normalized": "",
        "package": "xml-types",
        "partial": "Node Element",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:NodeInstruction",
      "description": {
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "NodeInstruction Instruction",
        "fct-source": "src/Data-XML-Types.html#Node",
        "fct-type": "function",
        "title": "NodeInstruction"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "NodeInstruction",
        "normalized": "",
        "package": "xml-types",
        "partial": "Node Instruction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:Prologue",
      "description": {
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "Prologue",
        "fct-source": "src/Data-XML-Types.html#Prologue",
        "fct-type": "function",
        "title": "Prologue"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "Prologue",
        "normalized": "",
        "package": "xml-types",
        "partial": "Prologue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:PublicID",
      "description": {
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "PublicID Text Text",
        "fct-source": "src/Data-XML-Types.html#ExternalID",
        "fct-type": "function",
        "title": "PublicID"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "PublicID",
        "normalized": "",
        "package": "xml-types",
        "partial": "Public ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:SystemID",
      "description": {
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "SystemID Text",
        "fct-source": "src/Data-XML-Types.html#ExternalID",
        "fct-type": "function",
        "title": "SystemID"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "SystemID",
        "normalized": "",
        "package": "xml-types",
        "partial": "System ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:attributeContent",
      "description": {
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "Name -\u003e Element -\u003e Maybe [Content]",
        "fct-source": "src/Data-XML-Types.html#attributeContent",
        "fct-type": "function",
        "title": "attributeContent"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "attributeContent",
        "normalized": "Name-\u003eElement-\u003eMaybe[Content]",
        "package": "xml-types",
        "partial": "Content",
        "signature": "Name-\u003eElement-\u003eMaybe[Content]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:attributeText",
      "description": {
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "Name -\u003e Element -\u003e Maybe Text",
        "fct-source": "src/Data-XML-Types.html#attributeText",
        "fct-type": "function",
        "title": "attributeText"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "attributeText",
        "normalized": "Name-\u003eElement-\u003eMaybe Text",
        "package": "xml-types",
        "partial": "Text",
        "signature": "Name-\u003eElement-\u003eMaybe Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:doctypeID",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "Maybe ExternalID",
        "fct-source": "src/Data-XML-Types.html#Doctype",
        "fct-type": "function",
        "title": "doctypeID"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "doctypeID",
        "normalized": "",
        "package": "xml-types",
        "partial": "ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:doctypeName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "Text",
        "fct-source": "src/Data-XML-Types.html#Doctype",
        "fct-type": "function",
        "title": "doctypeName"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "doctypeName",
        "normalized": "",
        "package": "xml-types",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:documentEpilogue",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "[Miscellaneous]",
        "fct-source": "src/Data-XML-Types.html#Document",
        "fct-type": "function",
        "title": "documentEpilogue"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "documentEpilogue",
        "normalized": "[Miscellaneous]",
        "package": "xml-types",
        "partial": "Epilogue",
        "signature": "[Miscellaneous]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:documentPrologue",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "Prologue",
        "fct-source": "src/Data-XML-Types.html#Document",
        "fct-type": "function",
        "title": "documentPrologue"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "documentPrologue",
        "normalized": "",
        "package": "xml-types",
        "partial": "Prologue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:documentRoot",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "Element",
        "fct-source": "src/Data-XML-Types.html#Document",
        "fct-type": "function",
        "title": "documentRoot"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "documentRoot",
        "normalized": "",
        "package": "xml-types",
        "partial": "Root",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:elementAttributes",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "[(Name, [Content])]",
        "fct-source": "src/Data-XML-Types.html#Element",
        "fct-type": "function",
        "title": "elementAttributes"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "elementAttributes",
        "normalized": "[(Name,[Content])]",
        "package": "xml-types",
        "partial": "Attributes",
        "signature": "[(Name,[Content])]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:elementChildren",
      "description": {
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "Element -\u003e [Element]",
        "fct-source": "src/Data-XML-Types.html#elementChildren",
        "fct-type": "function",
        "title": "elementChildren"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "elementChildren",
        "normalized": "Element-\u003e[Element]",
        "package": "xml-types",
        "partial": "Children",
        "signature": "Element-\u003e[Element]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:elementContent",
      "description": {
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "Element -\u003e [Content]",
        "fct-source": "src/Data-XML-Types.html#elementContent",
        "fct-type": "function",
        "title": "elementContent"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "elementContent",
        "normalized": "Element-\u003e[Content]",
        "package": "xml-types",
        "partial": "Content",
        "signature": "Element-\u003e[Content]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:elementName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "Name",
        "fct-source": "src/Data-XML-Types.html#Element",
        "fct-type": "function",
        "title": "elementName"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "elementName",
        "normalized": "",
        "package": "xml-types",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:elementNodes",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "[Node]",
        "fct-source": "src/Data-XML-Types.html#Element",
        "fct-type": "function",
        "title": "elementNodes"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "elementNodes",
        "normalized": "[Node]",
        "package": "xml-types",
        "partial": "Nodes",
        "signature": "[Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:elementText",
      "description": {
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "Element -\u003e [Text]",
        "fct-source": "src/Data-XML-Types.html#elementText",
        "fct-type": "function",
        "title": "elementText"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "elementText",
        "normalized": "Element-\u003e[Text]",
        "package": "xml-types",
        "partial": "Text",
        "signature": "Element-\u003e[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:hasAttribute",
      "description": {
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "Name -\u003e Element -\u003e [Element]",
        "fct-source": "src/Data-XML-Types.html#hasAttribute",
        "fct-type": "function",
        "title": "hasAttribute"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "hasAttribute",
        "normalized": "Name-\u003eElement-\u003e[Element]",
        "package": "xml-types",
        "partial": "Attribute",
        "signature": "Name-\u003eElement-\u003e[Element]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:hasAttributeText",
      "description": {
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "Name -\u003e (Text -\u003e Bool) -\u003e Element -\u003e [Element]",
        "fct-source": "src/Data-XML-Types.html#hasAttributeText",
        "fct-type": "function",
        "title": "hasAttributeText"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "hasAttributeText",
        "normalized": "Name-\u003e(Text-\u003eBool)-\u003eElement-\u003e[Element]",
        "package": "xml-types",
        "partial": "Attribute Text",
        "signature": "Name-\u003e(Text-\u003eBool)-\u003eElement-\u003e[Element]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:instructionData",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "Text",
        "fct-source": "src/Data-XML-Types.html#Instruction",
        "fct-type": "function",
        "title": "instructionData"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "instructionData",
        "normalized": "",
        "package": "xml-types",
        "partial": "Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:instructionTarget",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "Text",
        "fct-source": "src/Data-XML-Types.html#Instruction",
        "fct-type": "function",
        "title": "instructionTarget"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "instructionTarget",
        "normalized": "",
        "package": "xml-types",
        "partial": "Target",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:isComment",
      "description": {
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "Node -\u003e [Text]",
        "fct-source": "src/Data-XML-Types.html#isComment",
        "fct-type": "function",
        "title": "isComment"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "isComment",
        "normalized": "Node-\u003e[Text]",
        "package": "xml-types",
        "partial": "Comment",
        "signature": "Node-\u003e[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:isContent",
      "description": {
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "Node -\u003e [Content]",
        "fct-source": "src/Data-XML-Types.html#isContent",
        "fct-type": "function",
        "title": "isContent"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "isContent",
        "normalized": "Node-\u003e[Content]",
        "package": "xml-types",
        "partial": "Content",
        "signature": "Node-\u003e[Content]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:isElement",
      "description": {
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "Node -\u003e [Element]",
        "fct-source": "src/Data-XML-Types.html#isElement",
        "fct-type": "function",
        "title": "isElement"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "isElement",
        "normalized": "Node-\u003e[Element]",
        "package": "xml-types",
        "partial": "Element",
        "signature": "Node-\u003e[Element]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:isInstruction",
      "description": {
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "Node -\u003e [Instruction]",
        "fct-source": "src/Data-XML-Types.html#isInstruction",
        "fct-type": "function",
        "title": "isInstruction"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "isInstruction",
        "normalized": "Node-\u003e[Instruction]",
        "package": "xml-types",
        "partial": "Instruction",
        "signature": "Node-\u003e[Instruction]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:isNamed",
      "description": {
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "Name -\u003e Element -\u003e [Element]",
        "fct-source": "src/Data-XML-Types.html#isNamed",
        "fct-type": "function",
        "title": "isNamed"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "isNamed",
        "normalized": "Name-\u003eElement-\u003e[Element]",
        "package": "xml-types",
        "partial": "Named",
        "signature": "Name-\u003eElement-\u003e[Element]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:nameLocalName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "Text",
        "fct-source": "src/Data-XML-Types.html#Name",
        "fct-type": "function",
        "title": "nameLocalName"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "nameLocalName",
        "normalized": "",
        "package": "xml-types",
        "partial": "Local Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:nameNamespace",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "Maybe Text",
        "fct-source": "src/Data-XML-Types.html#Name",
        "fct-type": "function",
        "title": "nameNamespace"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "nameNamespace",
        "normalized": "",
        "package": "xml-types",
        "partial": "Namespace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:namePrefix",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "Maybe Text",
        "fct-source": "src/Data-XML-Types.html#Name",
        "fct-type": "function",
        "title": "namePrefix"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "namePrefix",
        "normalized": "",
        "package": "xml-types",
        "partial": "Prefix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:nodeChildren",
      "description": {
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "Node -\u003e [Node]",
        "fct-source": "src/Data-XML-Types.html#nodeChildren",
        "fct-type": "function",
        "title": "nodeChildren"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "nodeChildren",
        "normalized": "Node-\u003e[Node]",
        "package": "xml-types",
        "partial": "Children",
        "signature": "Node-\u003e[Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:nodeContent",
      "description": {
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "Node -\u003e [Content]",
        "fct-source": "src/Data-XML-Types.html#nodeContent",
        "fct-type": "function",
        "title": "nodeContent"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "nodeContent",
        "normalized": "Node-\u003e[Content]",
        "package": "xml-types",
        "partial": "Content",
        "signature": "Node-\u003e[Content]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:nodeText",
      "description": {
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "Node -\u003e [Text]",
        "fct-source": "src/Data-XML-Types.html#nodeText",
        "fct-type": "function",
        "title": "nodeText"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "nodeText",
        "normalized": "Node-\u003e[Text]",
        "package": "xml-types",
        "partial": "Text",
        "signature": "Node-\u003e[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:prologueAfter",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "[Miscellaneous]",
        "fct-source": "src/Data-XML-Types.html#Prologue",
        "fct-type": "function",
        "title": "prologueAfter"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "prologueAfter",
        "normalized": "[Miscellaneous]",
        "package": "xml-types",
        "partial": "After",
        "signature": "[Miscellaneous]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:prologueBefore",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "[Miscellaneous]",
        "fct-source": "src/Data-XML-Types.html#Prologue",
        "fct-type": "function",
        "title": "prologueBefore"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "prologueBefore",
        "normalized": "[Miscellaneous]",
        "package": "xml-types",
        "partial": "Before",
        "signature": "[Miscellaneous]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:prologueDoctype",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.XML.Types",
        "fct-package": "xml-types",
        "fct-signature": "Maybe Doctype",
        "fct-source": "src/Data-XML-Types.html#Prologue",
        "fct-type": "function",
        "title": "prologueDoctype"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Types",
        "module": "Data.XML.Types",
        "name": "prologueDoctype",
        "normalized": "",
        "package": "xml-types",
        "partial": "Doctype",
        "signature": ""
      }
    }
  }
]