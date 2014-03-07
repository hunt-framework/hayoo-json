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
        "word": "xml-types"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic types for representing XML.\n\u003c/p\u003e\u003cp\u003eThe idea is to have a full set of appropriate types, which various XML\n libraries can share. Instead of having equivalent-but-incompatible types\n for every binding, parser, or client, they all share the same types can\n can thus interoperate easily.\n\u003c/p\u003e\u003cp\u003eThis library contains complete types for most parts of an XML document,\n including the prologue, node tree, and doctype. Some basic combinators\n are included for common tasks, including traversing the node tree and\n filtering children.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.XML.Types",
          "name": "Types",
          "package": "xml-types",
          "source": "src/Data-XML-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Basic types for representing XML The idea is to have full set of appropriate types which various XML libraries can share Instead of having equivalent-but-incompatible types for every binding parser or client they all share the same types can can thus interoperate easily This library contains complete types for most parts of an XML document including the prologue node tree and doctype Some basic combinators are included for common tasks including traversing the node tree and filtering children",
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "Types",
          "package": "xml-types",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "Content",
          "package": "xml-types",
          "source": "src/Data-XML-Types.html#Content",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "Content",
          "package": "xml-types",
          "partial": "Content",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#t:Content"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNote: due to the incredible complexity of DTDs, this type only supports\n external subsets. I've tried adding internal subset types, but they\n quickly gain more code than the rest of this module put together.\n\u003c/p\u003e\u003cp\u003eIt is possible that some future version of this library might support\n internal subsets, but I am no longer actively working on adding them.\n\u003c/p\u003e",
          "module": "Data.XML.Types",
          "name": "Doctype",
          "package": "xml-types",
          "source": "src/Data-XML-Types.html#Doctype",
          "type": "data"
        },
        "index": {
          "description": "Note due to the incredible complexity of DTDs this type only supports external subsets ve tried adding internal subset types but they quickly gain more code than the rest of this module put together It is possible that some future version of this library might support internal subsets but am no longer actively working on adding them",
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "Doctype",
          "package": "xml-types",
          "partial": "Doctype",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#t:Doctype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "Document",
          "package": "xml-types",
          "source": "src/Data-XML-Types.html#Document",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "Document",
          "package": "xml-types",
          "partial": "Document",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#t:Document"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "Element",
          "package": "xml-types",
          "source": "src/Data-XML-Types.html#Element",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "Element",
          "package": "xml-types",
          "partial": "Element",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#t:Element"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSome XML processing tools are incremental, and work in terms of events\n rather than node trees. The \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e type allows a document to be fully\n specified as a sequence of events.\n\u003c/p\u003e\u003cp\u003eEvent-based XML libraries include:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003ehttp://hackage.haskell.org/package/xml-enumerator\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://hackage.haskell.org/package/libxml-enumerator\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://hackage.haskell.org/package/expat-enumerator\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.XML.Types",
          "name": "Event",
          "package": "xml-types",
          "source": "src/Data-XML-Types.html#Event",
          "type": "data"
        },
        "index": {
          "description": "Some XML processing tools are incremental and work in terms of events rather than node trees The Event type allows document to be fully specified as sequence of events Event-based XML libraries include http hackage.haskell.org package xml-enumerator http hackage.haskell.org package libxml-enumerator http hackage.haskell.org package expat-enumerator",
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "Event",
          "package": "xml-types",
          "partial": "Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "ExternalID",
          "package": "xml-types",
          "source": "src/Data-XML-Types.html#ExternalID",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "ExternalID",
          "package": "xml-types",
          "partial": "External ID",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#t:ExternalID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "Instruction",
          "package": "xml-types",
          "source": "src/Data-XML-Types.html#Instruction",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "Instruction",
          "package": "xml-types",
          "partial": "Instruction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#t:Instruction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "Miscellaneous",
          "package": "xml-types",
          "source": "src/Data-XML-Types.html#Miscellaneous",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "Miscellaneous",
          "package": "xml-types",
          "partial": "Miscellaneous",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#t:Miscellaneous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA fully qualified name.\n\u003c/p\u003e\u003cp\u003ePrefixes are not semantically important; they are included only to\n simplify pass-through parsing. When comparing names with \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e\n methods, prefixes are ignored.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eIsString\u003c/code\u003e instance supports Clark notation; see\n \u003ca\u003ehttp://www.jclark.com/xml/xmlns.htm\u003c/a\u003e and\n \u003ca\u003ehttp://infohost.nmt.edu/tcc/help/pubs/pylxml/etree-QName.html\u003c/a\u003e. Use\n the \u003ccode\u003eOverloadedStrings\u003c/code\u003e language extension for very simple \u003ccode\u003eName\u003c/code\u003e\n construction:\n\u003c/p\u003e\u003cpre\u003e myname :: Name\n myname = \"{http://example.com/ns/my-namespace}my-name\"\n\u003c/pre\u003e",
          "module": "Data.XML.Types",
          "name": "Name",
          "package": "xml-types",
          "source": "src/Data-XML-Types.html#Name",
          "type": "data"
        },
        "index": {
          "description": "fully qualified name Prefixes are not semantically important they are included only to simplify pass-through parsing When comparing names with Eq or Ord methods prefixes are ignored The IsString instance supports Clark notation see http www.jclark.com xml xmlns.htm and http infohost.nmt.edu tcc help pubs pylxml etree-QName.html Use the OverloadedStrings language extension for very simple Name construction myname Name myname http example.com ns my-namespace my-name",
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "Name",
          "package": "xml-types",
          "partial": "Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#t:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "Node",
          "package": "xml-types",
          "source": "src/Data-XML-Types.html#Node",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "Node",
          "package": "xml-types",
          "partial": "Node",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#t:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "Prologue",
          "package": "xml-types",
          "source": "src/Data-XML-Types.html#Prologue",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "Prologue",
          "package": "xml-types",
          "partial": "Prologue",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#t:Prologue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor pass-through parsing\n\u003c/p\u003e",
          "module": "Data.XML.Types",
          "name": "ContentEntity",
          "package": "xml-types",
          "signature": "ContentEntity Text",
          "source": "src/Data-XML-Types.html#Content",
          "type": "function"
        },
        "index": {
          "description": "For pass-through parsing",
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "ContentEntity",
          "package": "xml-types",
          "partial": "Content Entity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:ContentEntity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "ContentText",
          "package": "xml-types",
          "signature": "ContentText Text",
          "source": "src/Data-XML-Types.html#Content",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "ContentText",
          "package": "xml-types",
          "partial": "Content Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:ContentText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "Doctype",
          "package": "xml-types",
          "signature": "Doctype",
          "source": "src/Data-XML-Types.html#Doctype",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "Doctype",
          "package": "xml-types",
          "partial": "Doctype",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:Doctype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "Document",
          "package": "xml-types",
          "signature": "Document",
          "source": "src/Data-XML-Types.html#Document",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "Document",
          "package": "xml-types",
          "partial": "Document",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:Document"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "Element",
          "package": "xml-types",
          "signature": "Element",
          "source": "src/Data-XML-Types.html#Element",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "Element",
          "package": "xml-types",
          "partial": "Element",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:Element"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "EventBeginDoctype",
          "package": "xml-types",
          "signature": "EventBeginDoctype Text (Maybe ExternalID)",
          "source": "src/Data-XML-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "EventBeginDoctype",
          "package": "xml-types",
          "partial": "Event Begin Doctype",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:EventBeginDoctype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "EventBeginDocument",
          "package": "xml-types",
          "signature": "EventBeginDocument",
          "source": "src/Data-XML-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "EventBeginDocument",
          "package": "xml-types",
          "partial": "Event Begin Document",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:EventBeginDocument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "EventBeginElement",
          "package": "xml-types",
          "signature": "EventBeginElement Name [(Name, [Content])]",
          "source": "src/Data-XML-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "EventBeginElement",
          "normalized": "EventBeginElement Name[(Name,[Content])]",
          "package": "xml-types",
          "partial": "Event Begin Element",
          "signature": "EventBeginElement Name[(Name,[Content])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:EventBeginElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "EventCDATA",
          "package": "xml-types",
          "signature": "EventCDATA Text",
          "source": "src/Data-XML-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "EventCDATA",
          "package": "xml-types",
          "partial": "Event CDATA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:EventCDATA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "EventComment",
          "package": "xml-types",
          "signature": "EventComment Text",
          "source": "src/Data-XML-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "EventComment",
          "package": "xml-types",
          "partial": "Event Comment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:EventComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "EventContent",
          "package": "xml-types",
          "signature": "EventContent Content",
          "source": "src/Data-XML-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "EventContent",
          "package": "xml-types",
          "partial": "Event Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:EventContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "EventEndDoctype",
          "package": "xml-types",
          "signature": "EventEndDoctype",
          "source": "src/Data-XML-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "EventEndDoctype",
          "package": "xml-types",
          "partial": "Event End Doctype",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:EventEndDoctype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "EventEndDocument",
          "package": "xml-types",
          "signature": "EventEndDocument",
          "source": "src/Data-XML-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "EventEndDocument",
          "package": "xml-types",
          "partial": "Event End Document",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:EventEndDocument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "EventEndElement",
          "package": "xml-types",
          "signature": "EventEndElement Name",
          "source": "src/Data-XML-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "EventEndElement",
          "package": "xml-types",
          "partial": "Event End Element",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:EventEndElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "EventInstruction",
          "package": "xml-types",
          "signature": "EventInstruction Instruction",
          "source": "src/Data-XML-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "EventInstruction",
          "package": "xml-types",
          "partial": "Event Instruction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:EventInstruction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "Instruction",
          "package": "xml-types",
          "signature": "Instruction",
          "source": "src/Data-XML-Types.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "Instruction",
          "package": "xml-types",
          "partial": "Instruction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:Instruction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "MiscComment",
          "package": "xml-types",
          "signature": "MiscComment Text",
          "source": "src/Data-XML-Types.html#Miscellaneous",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "MiscComment",
          "package": "xml-types",
          "partial": "Misc Comment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:MiscComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "MiscInstruction",
          "package": "xml-types",
          "signature": "MiscInstruction Instruction",
          "source": "src/Data-XML-Types.html#Miscellaneous",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "MiscInstruction",
          "package": "xml-types",
          "partial": "Misc Instruction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:MiscInstruction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "Name",
          "package": "xml-types",
          "signature": "Name",
          "source": "src/Data-XML-Types.html#Name",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "Name",
          "package": "xml-types",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "NodeComment",
          "package": "xml-types",
          "signature": "NodeComment Text",
          "source": "src/Data-XML-Types.html#Node",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "NodeComment",
          "package": "xml-types",
          "partial": "Node Comment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:NodeComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "NodeContent",
          "package": "xml-types",
          "signature": "NodeContent Content",
          "source": "src/Data-XML-Types.html#Node",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "NodeContent",
          "package": "xml-types",
          "partial": "Node Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:NodeContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "NodeElement",
          "package": "xml-types",
          "signature": "NodeElement Element",
          "source": "src/Data-XML-Types.html#Node",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "NodeElement",
          "package": "xml-types",
          "partial": "Node Element",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:NodeElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "NodeInstruction",
          "package": "xml-types",
          "signature": "NodeInstruction Instruction",
          "source": "src/Data-XML-Types.html#Node",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "NodeInstruction",
          "package": "xml-types",
          "partial": "Node Instruction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:NodeInstruction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "Prologue",
          "package": "xml-types",
          "signature": "Prologue",
          "source": "src/Data-XML-Types.html#Prologue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "Prologue",
          "package": "xml-types",
          "partial": "Prologue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:Prologue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "PublicID",
          "package": "xml-types",
          "signature": "PublicID Text Text",
          "source": "src/Data-XML-Types.html#ExternalID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "PublicID",
          "package": "xml-types",
          "partial": "Public ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:PublicID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "SystemID",
          "package": "xml-types",
          "signature": "SystemID Text",
          "source": "src/Data-XML-Types.html#ExternalID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "SystemID",
          "package": "xml-types",
          "partial": "System ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:SystemID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "attributeContent",
          "package": "xml-types",
          "signature": "Name -\u003e Element -\u003e Maybe [Content]",
          "source": "src/Data-XML-Types.html#attributeContent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "attributeContent",
          "normalized": "Name-\u003eElement-\u003eMaybe[Content]",
          "package": "xml-types",
          "partial": "Content",
          "signature": "Name-\u003eElement-\u003eMaybe[Content]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:attributeContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "attributeText",
          "package": "xml-types",
          "signature": "Name -\u003e Element -\u003e Maybe Text",
          "source": "src/Data-XML-Types.html#attributeText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "attributeText",
          "normalized": "Name-\u003eElement-\u003eMaybe Text",
          "package": "xml-types",
          "partial": "Text",
          "signature": "Name-\u003eElement-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:attributeText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "doctypeID",
          "package": "xml-types",
          "signature": "Maybe ExternalID",
          "source": "src/Data-XML-Types.html#Doctype",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "doctypeID",
          "package": "xml-types",
          "partial": "ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:doctypeID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "doctypeName",
          "package": "xml-types",
          "signature": "Text",
          "source": "src/Data-XML-Types.html#Doctype",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "doctypeName",
          "package": "xml-types",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:doctypeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "documentEpilogue",
          "package": "xml-types",
          "signature": "[Miscellaneous]",
          "source": "src/Data-XML-Types.html#Document",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "documentEpilogue",
          "normalized": "[Miscellaneous]",
          "package": "xml-types",
          "partial": "Epilogue",
          "signature": "[Miscellaneous]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:documentEpilogue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "documentPrologue",
          "package": "xml-types",
          "signature": "Prologue",
          "source": "src/Data-XML-Types.html#Document",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "documentPrologue",
          "package": "xml-types",
          "partial": "Prologue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:documentPrologue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "documentRoot",
          "package": "xml-types",
          "signature": "Element",
          "source": "src/Data-XML-Types.html#Document",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "documentRoot",
          "package": "xml-types",
          "partial": "Root",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:documentRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "elementAttributes",
          "package": "xml-types",
          "signature": "[(Name, [Content])]",
          "source": "src/Data-XML-Types.html#Element",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "elementAttributes",
          "normalized": "[(Name,[Content])]",
          "package": "xml-types",
          "partial": "Attributes",
          "signature": "[(Name,[Content])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:elementAttributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "elementChildren",
          "package": "xml-types",
          "signature": "Element -\u003e [Element]",
          "source": "src/Data-XML-Types.html#elementChildren",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "elementChildren",
          "normalized": "Element-\u003e[Element]",
          "package": "xml-types",
          "partial": "Children",
          "signature": "Element-\u003e[Element]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:elementChildren"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "elementContent",
          "package": "xml-types",
          "signature": "Element -\u003e [Content]",
          "source": "src/Data-XML-Types.html#elementContent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "elementContent",
          "normalized": "Element-\u003e[Content]",
          "package": "xml-types",
          "partial": "Content",
          "signature": "Element-\u003e[Content]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:elementContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "elementName",
          "package": "xml-types",
          "signature": "Name",
          "source": "src/Data-XML-Types.html#Element",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "elementName",
          "package": "xml-types",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:elementName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "elementNodes",
          "package": "xml-types",
          "signature": "[Node]",
          "source": "src/Data-XML-Types.html#Element",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "elementNodes",
          "normalized": "[Node]",
          "package": "xml-types",
          "partial": "Nodes",
          "signature": "[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:elementNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "elementText",
          "package": "xml-types",
          "signature": "Element -\u003e [Text]",
          "source": "src/Data-XML-Types.html#elementText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "elementText",
          "normalized": "Element-\u003e[Text]",
          "package": "xml-types",
          "partial": "Text",
          "signature": "Element-\u003e[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:elementText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "hasAttribute",
          "package": "xml-types",
          "signature": "Name -\u003e Element -\u003e [Element]",
          "source": "src/Data-XML-Types.html#hasAttribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "hasAttribute",
          "normalized": "Name-\u003eElement-\u003e[Element]",
          "package": "xml-types",
          "partial": "Attribute",
          "signature": "Name-\u003eElement-\u003e[Element]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:hasAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "hasAttributeText",
          "package": "xml-types",
          "signature": "Name -\u003e (Text -\u003e Bool) -\u003e Element -\u003e [Element]",
          "source": "src/Data-XML-Types.html#hasAttributeText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "hasAttributeText",
          "normalized": "Name-\u003e(Text-\u003eBool)-\u003eElement-\u003e[Element]",
          "package": "xml-types",
          "partial": "Attribute Text",
          "signature": "Name-\u003e(Text-\u003eBool)-\u003eElement-\u003e[Element]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:hasAttributeText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "instructionData",
          "package": "xml-types",
          "signature": "Text",
          "source": "src/Data-XML-Types.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "instructionData",
          "package": "xml-types",
          "partial": "Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:instructionData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "instructionTarget",
          "package": "xml-types",
          "signature": "Text",
          "source": "src/Data-XML-Types.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "instructionTarget",
          "package": "xml-types",
          "partial": "Target",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:instructionTarget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "isComment",
          "package": "xml-types",
          "signature": "Node -\u003e [Text]",
          "source": "src/Data-XML-Types.html#isComment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "isComment",
          "normalized": "Node-\u003e[Text]",
          "package": "xml-types",
          "partial": "Comment",
          "signature": "Node-\u003e[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:isComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "isContent",
          "package": "xml-types",
          "signature": "Node -\u003e [Content]",
          "source": "src/Data-XML-Types.html#isContent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "isContent",
          "normalized": "Node-\u003e[Content]",
          "package": "xml-types",
          "partial": "Content",
          "signature": "Node-\u003e[Content]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:isContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "isElement",
          "package": "xml-types",
          "signature": "Node -\u003e [Element]",
          "source": "src/Data-XML-Types.html#isElement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "isElement",
          "normalized": "Node-\u003e[Element]",
          "package": "xml-types",
          "partial": "Element",
          "signature": "Node-\u003e[Element]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:isElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "isInstruction",
          "package": "xml-types",
          "signature": "Node -\u003e [Instruction]",
          "source": "src/Data-XML-Types.html#isInstruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "isInstruction",
          "normalized": "Node-\u003e[Instruction]",
          "package": "xml-types",
          "partial": "Instruction",
          "signature": "Node-\u003e[Instruction]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:isInstruction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "isNamed",
          "package": "xml-types",
          "signature": "Name -\u003e Element -\u003e [Element]",
          "source": "src/Data-XML-Types.html#isNamed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "isNamed",
          "normalized": "Name-\u003eElement-\u003e[Element]",
          "package": "xml-types",
          "partial": "Named",
          "signature": "Name-\u003eElement-\u003e[Element]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:isNamed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "nameLocalName",
          "package": "xml-types",
          "signature": "Text",
          "source": "src/Data-XML-Types.html#Name",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "nameLocalName",
          "package": "xml-types",
          "partial": "Local Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:nameLocalName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "nameNamespace",
          "package": "xml-types",
          "signature": "Maybe Text",
          "source": "src/Data-XML-Types.html#Name",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "nameNamespace",
          "package": "xml-types",
          "partial": "Namespace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:nameNamespace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "namePrefix",
          "package": "xml-types",
          "signature": "Maybe Text",
          "source": "src/Data-XML-Types.html#Name",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "namePrefix",
          "package": "xml-types",
          "partial": "Prefix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:namePrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "nodeChildren",
          "package": "xml-types",
          "signature": "Node -\u003e [Node]",
          "source": "src/Data-XML-Types.html#nodeChildren",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "nodeChildren",
          "normalized": "Node-\u003e[Node]",
          "package": "xml-types",
          "partial": "Children",
          "signature": "Node-\u003e[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:nodeChildren"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "nodeContent",
          "package": "xml-types",
          "signature": "Node -\u003e [Content]",
          "source": "src/Data-XML-Types.html#nodeContent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "nodeContent",
          "normalized": "Node-\u003e[Content]",
          "package": "xml-types",
          "partial": "Content",
          "signature": "Node-\u003e[Content]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:nodeContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "nodeText",
          "package": "xml-types",
          "signature": "Node -\u003e [Text]",
          "source": "src/Data-XML-Types.html#nodeText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "nodeText",
          "normalized": "Node-\u003e[Text]",
          "package": "xml-types",
          "partial": "Text",
          "signature": "Node-\u003e[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:nodeText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "prologueAfter",
          "package": "xml-types",
          "signature": "[Miscellaneous]",
          "source": "src/Data-XML-Types.html#Prologue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "prologueAfter",
          "normalized": "[Miscellaneous]",
          "package": "xml-types",
          "partial": "After",
          "signature": "[Miscellaneous]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:prologueAfter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "prologueBefore",
          "package": "xml-types",
          "signature": "[Miscellaneous]",
          "source": "src/Data-XML-Types.html#Prologue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "prologueBefore",
          "normalized": "[Miscellaneous]",
          "package": "xml-types",
          "partial": "Before",
          "signature": "[Miscellaneous]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:prologueBefore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Types",
          "name": "prologueDoctype",
          "package": "xml-types",
          "signature": "Maybe Doctype",
          "source": "src/Data-XML-Types.html#Prologue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Types",
          "module": "Data.XML.Types",
          "name": "prologueDoctype",
          "package": "xml-types",
          "partial": "Doctype",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-types/docs/Data-XML-Types.html#v:prologueDoctype"
      }
    }
  ]
]