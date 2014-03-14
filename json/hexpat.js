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
        "word": "hexpat"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA variant of \u003cem\u003eNode\u003c/em\u003e in which Element nodes have an annotation of any type,\n and some concrete functions that annotate with the XML parse location.\n\u003c/p\u003e\u003cp\u003eThe names conflict with those in \u003cem\u003eTree\u003c/em\u003e so you must use qualified import\n if you want to use both modules.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.Expat.Annotated",
          "name": "Annotated",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Annotated.html",
          "type": "module"
        },
        "index": {
          "description": "variant of Node in which Element nodes have an annotation of any type and some concrete functions that annotate with the XML parse location The names conflict with those in Tree so you must use qualified import if you want to use both modules",
          "hierarchy": "Text XML Expat Annotated",
          "module": "Text.XML.Expat.Annotated",
          "name": "Annotated",
          "package": "hexpat",
          "partial": "Annotated",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Annotated",
          "name": "Encoding",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Internal-IO.html#Encoding",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text XML Expat Annotated",
          "module": "Text.XML.Expat.Annotated",
          "name": "Encoding",
          "package": "hexpat",
          "partial": "Encoding",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#t:Encoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn abstraction for any string type you want to use as xml text (that is,\n attribute values or element text content). If you want to use a\n new string type with \u003cem\u003ehexpat\u003c/em\u003e, you must make it an instance of\n \u003ccode\u003e\u003ca\u003eGenericXMLString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Annotated",
          "name": "GenericXMLString",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-SAX.html#GenericXMLString",
          "type": "class"
        },
        "index": {
          "description": "An abstraction for any string type you want to use as xml text that is attribute values or element text content If you want to use new string type with hexpat you must make it an instance of GenericXMLString",
          "hierarchy": "Text XML Expat Annotated",
          "module": "Text.XML.Expat.Annotated",
          "name": "GenericXMLString",
          "package": "hexpat",
          "partial": "Generic XMLString",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#t:GenericXMLString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType alias for an annotated node, annotated with parse location\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Annotated",
          "name": "LNode",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Annotated.html#LNode",
          "type": "type"
        },
        "index": {
          "description": "Type alias for an annotated node annotated with parse location",
          "hierarchy": "Text XML Expat Annotated",
          "module": "Text.XML.Expat.Annotated",
          "name": "LNode",
          "package": "hexpat",
          "partial": "LNode",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#t:LNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType alias for an annotated node where namespaced names are used for tags, annotated with parse location\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Annotated",
          "name": "NLNode",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Annotated.html#NLNode",
          "type": "type"
        },
        "index": {
          "description": "Type alias for an annotated node where namespaced names are used for tags annotated with parse location",
          "hierarchy": "Text XML Expat Annotated",
          "module": "Text.XML.Expat.Annotated",
          "name": "NLNode",
          "package": "hexpat",
          "partial": "NLNode",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#t:NLNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType alias for an annotated node where namespaced names are used for tags\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Annotated",
          "name": "NNode",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Annotated.html#NNode",
          "type": "type"
        },
        "index": {
          "description": "Type alias for an annotated node where namespaced names are used for tags",
          "hierarchy": "Text XML Expat Annotated",
          "module": "Text.XML.Expat.Annotated",
          "name": "NNode",
          "package": "hexpat",
          "partial": "NNode",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#t:NNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pure tree representation that uses a list as its container type,\n annotated variant.\n\u003c/p\u003e\u003cp\u003eIn the \u003ccode\u003ehexpat\u003c/code\u003e package, a list of nodes has the type \u003ccode\u003e[Node tag text]\u003c/code\u003e, but note\n that you can also use the more general type function \u003ccode\u003e\u003ca\u003eListOf\u003c/a\u003e\u003c/code\u003e to give a list of\n any node type, using that node's associated list type, e.g.\n \u003ccode\u003eListOf (UNode Text)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Annotated",
          "name": "Node",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Annotated.html#Node",
          "type": "type"
        },
        "index": {
          "description": "pure tree representation that uses list as its container type annotated variant In the hexpat package list of nodes has the type Node tag text but note that you can also use the more general type function ListOf to give list of any node type using that node associated list type e.g ListOf UNode Text",
          "hierarchy": "Text XML Expat Annotated",
          "module": "Text.XML.Expat.Annotated",
          "name": "Node",
          "package": "hexpat",
          "partial": "Node",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#t:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnnotated variant of the tree representation of the XML document, meaning\n that it has an extra piece of information of your choice attached to each\n Element.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ec\u003c/code\u003e is the container type for the element's children, which would normally be [],\n but could potentially be a monadic list type to allow for chunked I/O.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003etag\u003c/code\u003e is the tag type, which can either be one of several string types,\n or a special type from the \u003ccode\u003eText.XML.Expat.Namespaced\u003c/code\u003e or\n \u003ccode\u003eText.XML.Expat.Qualified\u003c/code\u003e modules.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003etext\u003c/code\u003e is the string type for text content.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ea\u003c/code\u003e is the type of the annotation.  One of the things this can be used for\n is to store the XML parse location, which is useful for error handling.\n\u003c/p\u003e\u003cp\u003eNote that some functions in the \u003ccode\u003eText.XML.Expat.Cursor\u003c/code\u003e module need to create\n new nodes through the \u003ccode\u003e\u003ca\u003eMkElementClass\u003c/a\u003e\u003c/code\u003e type class. Normally this can only be done\n if \u003ccode\u003ea\u003c/code\u003e is a Maybe type or () (so it can provide the Nothing value for the annotation\n on newly created nodes).  Or, you can write your own \u003ccode\u003e\u003ca\u003eMkElementClass\u003c/a\u003e\u003c/code\u003e instance.\n Apart from that, there is no requirement for \u003ccode\u003ea\u003c/code\u003e to be a Maybe type.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Annotated",
          "name": "NodeG",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Annotated.html#NodeG",
          "type": "data"
        },
        "index": {
          "description": "Annotated variant of the tree representation of the XML document meaning that it has an extra piece of information of your choice attached to each Element is the container type for the element children which would normally be but could potentially be monadic list type to allow for chunked tag is the tag type which can either be one of several string types or special type from the Text.XML.Expat.Namespaced or Text.XML.Expat.Qualified modules text is the string type for text content is the type of the annotation One of the things this can be used for is to store the XML parse location which is useful for error handling Note that some functions in the Text.XML.Expat.Cursor module need to create new nodes through the MkElementClass type class Normally this can only be done if is Maybe type or so it can provide the Nothing value for the annotation on newly created nodes Or you can write your own MkElementClass instance Apart from that there is no requirement for to be Maybe type",
          "hierarchy": "Text XML Expat Annotated",
          "module": "Text.XML.Expat.Annotated",
          "name": "NodeG",
          "package": "hexpat",
          "partial": "Node",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#t:NodeG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Annotated",
          "name": "ParseOptions",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-SAX.html#ParseOptions",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text XML Expat Annotated",
          "module": "Text.XML.Expat.Annotated",
          "name": "ParseOptions",
          "package": "hexpat",
          "partial": "Parse Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#t:ParseOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType alias for an annotated node where qualified names are used for tags, annotated with parse location\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Annotated",
          "name": "QLNode",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Annotated.html#QLNode",
          "type": "type"
        },
        "index": {
          "description": "Type alias for an annotated node where qualified names are used for tags annotated with parse location",
          "hierarchy": "Text XML Expat Annotated",
          "module": "Text.XML.Expat.Annotated",
          "name": "QLNode",
          "package": "hexpat",
          "partial": "QLNode",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#t:QLNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType alias for an annotated node where qualified names are used for tags\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Annotated",
          "name": "QNode",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Annotated.html#QNode",
          "type": "type"
        },
        "index": {
          "description": "Type alias for an annotated node where qualified names are used for tags",
          "hierarchy": "Text XML Expat Annotated",
          "module": "Text.XML.Expat.Annotated",
          "name": "QNode",
          "package": "hexpat",
          "partial": "QNode",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#t:QNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType alias for an annotated node with unqualified tag names where\n tag and text are the same string type, annotated with parse location\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Annotated",
          "name": "ULNode",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Annotated.html#ULNode",
          "type": "type"
        },
        "index": {
          "description": "Type alias for an annotated node with unqualified tag names where tag and text are the same string type annotated with parse location",
          "hierarchy": "Text XML Expat Annotated",
          "module": "Text.XML.Expat.Annotated",
          "name": "ULNode",
          "package": "hexpat",
          "partial": "ULNode",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#t:ULNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType alias for an annotated node with unqualified tag names where\n tag and text are the same string type\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Annotated",
          "name": "UNode",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Annotated.html#UNode",
          "type": "type"
        },
        "index": {
          "description": "Type alias for an annotated node with unqualified tag names where tag and text are the same string type",
          "hierarchy": "Text XML Expat Annotated",
          "module": "Text.XML.Expat.Annotated",
          "name": "UNode",
          "package": "hexpat",
          "partial": "UNode",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#t:UNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse error, consisting of message text and error location\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Annotated",
          "name": "XMLParseError",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Internal-IO.html#XMLParseError",
          "type": "data"
        },
        "index": {
          "description": "Parse error consisting of message text and error location",
          "hierarchy": "Text XML Expat Annotated",
          "module": "Text.XML.Expat.Annotated",
          "name": "XMLParseError",
          "package": "hexpat",
          "partial": "XMLParse Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#t:XMLParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn exception indicating an XML parse error, used by the \u003cem\u003e..Throwing\u003c/em\u003e variants.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Annotated",
          "name": "XMLParseException",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-SAX.html#XMLParseException",
          "type": "data"
        },
        "index": {
          "description": "An exception indicating an XML parse error used by the Throwing variants",
          "hierarchy": "Text XML Expat Annotated",
          "module": "Text.XML.Expat.Annotated",
          "name": "XMLParseException",
          "package": "hexpat",
          "partial": "XMLParse Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#t:XMLParseException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies a location of an event within the input text\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Annotated",
          "name": "XMLParseLocation",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Internal-IO.html#XMLParseLocation",
          "type": "data"
        },
        "index": {
          "description": "Specifies location of an event within the input text",
          "hierarchy": "Text XML Expat Annotated",
          "module": "Text.XML.Expat.Annotated",
          "name": "XMLParseLocation",
          "package": "hexpat",
          "partial": "XMLParse Location",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#t:XMLParseLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.XML.Expat.Annotated\",\"Text.XML.Expat.Extended\",\"Text.XML.Expat.Internal.IO\",\"Text.XML.Expat.SAX\",\"Text.XML.Expat.Tree\"]",
          "name": "ASCII",
          "package": "hexpat",
          "signature": "ASCII",
          "source": "src/Text-XML-Expat-Internal-IO.html#Encoding",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#v:ASCII\",\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#v:ASCII\",\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-IO.html#v:ASCII\",\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-SAX.html#v:ASCII\",\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Tree.html#v:ASCII\"]"
        },
        "index": {
          "hierarchy": "Text XML Expat Annotated",
          "module": "Text.XML.Expat.Annotated",
          "name": "ASCII",
          "package": "hexpat",
          "partial": "ASCII",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#v:ASCII"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Annotated",
          "name": "Element",
          "package": "hexpat",
          "signature": "Element",
          "source": "src/Text-XML-Expat-Annotated.html#NodeG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Annotated",
          "module": "Text.XML.Expat.Annotated",
          "name": "Element",
          "package": "hexpat",
          "partial": "Element",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#v:Element"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.XML.Expat.Annotated\",\"Text.XML.Expat.Extended\",\"Text.XML.Expat.Internal.IO\",\"Text.XML.Expat.SAX\",\"Text.XML.Expat.Tree\"]",
          "name": "ISO88591",
          "package": "hexpat",
          "signature": "ISO88591",
          "source": "src/Text-XML-Expat-Internal-IO.html#Encoding",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#v:ISO88591\",\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#v:ISO88591\",\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-IO.html#v:ISO88591\",\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-SAX.html#v:ISO88591\",\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Tree.html#v:ISO88591\"]"
        },
        "index": {
          "hierarchy": "Text XML Expat Annotated",
          "module": "Text.XML.Expat.Annotated",
          "name": "ISO88591",
          "package": "hexpat",
          "partial": "ISO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#v:ISO88591"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.XML.Expat.Annotated\",\"Text.XML.Expat.Extended\",\"Text.XML.Expat.SAX\",\"Text.XML.Expat.Tree\"]",
          "name": "ParseOptions",
          "package": "hexpat",
          "signature": "ParseOptions",
          "source": "src/Text-XML-Expat-SAX.html#ParseOptions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#v:ParseOptions\",\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#v:ParseOptions\",\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-SAX.html#v:ParseOptions\",\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Tree.html#v:ParseOptions\"]"
        },
        "index": {
          "hierarchy": "Text XML Expat Annotated",
          "module": "Text.XML.Expat.Annotated",
          "name": "ParseOptions",
          "package": "hexpat",
          "partial": "Parse Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#v:ParseOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Annotated",
          "name": "Text",
          "package": "hexpat",
          "signature": "Text !text",
          "source": "src/Text-XML-Expat-Annotated.html#NodeG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Annotated",
          "module": "Text.XML.Expat.Annotated",
          "name": "Text",
          "package": "hexpat",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#v:Text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.XML.Expat.Annotated\",\"Text.XML.Expat.Extended\",\"Text.XML.Expat.Internal.IO\",\"Text.XML.Expat.SAX\",\"Text.XML.Expat.Tree\"]",
          "name": "UTF16",
          "package": "hexpat",
          "signature": "UTF16",
          "source": "src/Text-XML-Expat-Internal-IO.html#Encoding",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#v:UTF16\",\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#v:UTF16\",\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-IO.html#v:UTF16\",\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-SAX.html#v:UTF16\",\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Tree.html#v:UTF16\"]"
        },
        "index": {
          "hierarchy": "Text XML Expat Annotated",
          "module": "Text.XML.Expat.Annotated",
          "name": "UTF16",
          "package": "hexpat",
          "partial": "UTF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#v:UTF16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.XML.Expat.Annotated\",\"Text.XML.Expat.Extended\",\"Text.XML.Expat.Internal.IO\",\"Text.XML.Expat.SAX\",\"Text.XML.Expat.Tree\"]",
          "name": "UTF8",
          "package": "hexpat",
          "signature": "UTF8",
          "source": "src/Text-XML-Expat-Internal-IO.html#Encoding",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#v:UTF8\",\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#v:UTF8\",\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-IO.html#v:UTF8\",\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-SAX.html#v:UTF8\",\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Tree.html#v:UTF8\"]"
        },
        "index": {
          "hierarchy": "Text XML Expat Annotated",
          "module": "Text.XML.Expat.Annotated",
          "name": "UTF8",
          "package": "hexpat",
          "partial": "UTF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#v:UTF8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.XML.Expat.Annotated\",\"Text.XML.Expat.Extended\",\"Text.XML.Expat.Internal.IO\",\"Text.XML.Expat.SAX\",\"Text.XML.Expat.Tree\"]",
          "name": "XMLParseError",
          "package": "hexpat",
          "signature": "XMLParseError String XMLParseLocation",
          "source": "src/Text-XML-Expat-Internal-IO.html#XMLParseError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#v:XMLParseError\",\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#v:XMLParseError\",\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-IO.html#v:XMLParseError\",\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-SAX.html#v:XMLParseError\",\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Tree.html#v:XMLParseError\"]"
        },
        "index": {
          "hierarchy": "Text XML Expat Annotated",
          "module": "Text.XML.Expat.Annotated",
          "name": "XMLParseError",
          "package": "hexpat",
          "partial": "XMLParse Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#v:XMLParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.XML.Expat.Annotated\",\"Text.XML.Expat.Extended\",\"Text.XML.Expat.SAX\",\"Text.XML.Expat.Tree\"]",
          "name": "XMLParseException",
          "package": "hexpat",
          "signature": "XMLParseException XMLParseError",
          "source": "src/Text-XML-Expat-SAX.html#XMLParseException",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#v:XMLParseException\",\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#v:XMLParseException\",\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-SAX.html#v:XMLParseException\",\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Tree.html#v:XMLParseException\"]"
        },
        "index": {
          "hierarchy": "Text XML Expat Annotated",
          "module": "Text.XML.Expat.Annotated",
          "name": "XMLParseException",
          "package": "hexpat",
          "partial": "XMLParse Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#v:XMLParseException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.XML.Expat.Annotated\",\"Text.XML.Expat.Extended\",\"Text.XML.Expat.Internal.IO\",\"Text.XML.Expat.SAX\",\"Text.XML.Expat.Tree\"]",
          "name": "XMLParseLocation",
          "package": "hexpat",
          "signature": "XMLParseLocation",
          "source": "src/Text-XML-Expat-Internal-IO.html#XMLParseLocation",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#v:XMLParseLocation\",\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#v:XMLParseLocation\",\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-IO.html#v:XMLParseLocation\",\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-SAX.html#v:XMLParseLocation\",\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Tree.html#v:XMLParseLocation\"]"
        },
        "index": {
          "hierarchy": "Text XML Expat Annotated",
          "module": "Text.XML.Expat.Annotated",
          "name": "XMLParseLocation",
          "package": "hexpat",
          "partial": "XMLParse Location",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#v:XMLParseLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.XML.Expat.Annotated\",\"Text.XML.Expat.Extended\",\"Text.XML.Expat.SAX\",\"Text.XML.Expat.Tree\"]",
          "name": "defaultParseOptions",
          "package": "hexpat",
          "signature": "ParseOptions tag text",
          "source": "src/Text-XML-Expat-SAX.html#defaultParseOptions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#v:defaultParseOptions\",\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#v:defaultParseOptions\",\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-SAX.html#v:defaultParseOptions\",\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Tree.html#v:defaultParseOptions\"]"
        },
        "index": {
          "hierarchy": "Text XML Expat Annotated",
          "module": "Text.XML.Expat.Annotated",
          "name": "defaultParseOptions",
          "package": "hexpat",
          "partial": "Parse Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#v:defaultParseOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Annotated",
          "name": "eAnn",
          "package": "hexpat",
          "signature": "a",
          "source": "src/Text-XML-Expat-Annotated.html#NodeG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Annotated",
          "module": "Text.XML.Expat.Annotated",
          "name": "eAnn",
          "package": "hexpat",
          "partial": "Ann",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#v:eAnn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Annotated",
          "name": "eAttributes",
          "package": "hexpat",
          "signature": "[(tag, text)]",
          "source": "src/Text-XML-Expat-Annotated.html#NodeG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Annotated",
          "module": "Text.XML.Expat.Annotated",
          "name": "eAttributes",
          "normalized": "[(a,b)]",
          "package": "hexpat",
          "partial": "Attributes",
          "signature": "[(tag,text)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#v:eAttributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Annotated",
          "name": "eChildren",
          "package": "hexpat",
          "signature": "c (NodeG a c tag text)",
          "source": "src/Text-XML-Expat-Annotated.html#NodeG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Annotated",
          "module": "Text.XML.Expat.Annotated",
          "name": "eChildren",
          "package": "hexpat",
          "partial": "Children",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#v:eChildren"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Annotated",
          "name": "eName",
          "package": "hexpat",
          "signature": "tag",
          "source": "src/Text-XML-Expat-Annotated.html#NodeG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Annotated",
          "module": "Text.XML.Expat.Annotated",
          "name": "eName",
          "package": "hexpat",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#v:eName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf provided, entity references (i.e. \u003ccode\u003e&nbsp;\u003c/code\u003e and friends) will\n be decoded into text using the supplied lookup function\n\u003c/p\u003e",
          "module": "[\"Text.XML.Expat.Annotated\",\"Text.XML.Expat.Extended\",\"Text.XML.Expat.SAX\",\"Text.XML.Expat.Tree\"]",
          "name": "entityDecoder",
          "package": "hexpat",
          "signature": "Maybe (tag -\u003e Maybe text)",
          "source": "src/Text-XML-Expat-SAX.html#ParseOptions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#v:entityDecoder\",\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#v:entityDecoder\",\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-SAX.html#v:entityDecoder\",\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Tree.html#v:entityDecoder\"]"
        },
        "index": {
          "description": "If provided entity references i.e nbsp and friends will be decoded into text using the supplied lookup function",
          "hierarchy": "Text XML Expat Annotated",
          "module": "Text.XML.Expat.Annotated",
          "name": "entityDecoder",
          "normalized": "Maybe(a-\u003eMaybe b)",
          "package": "hexpat",
          "partial": "Decoder",
          "signature": "Maybe(tag-\u003eMaybe text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#v:entityDecoder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Annotated",
          "name": "gxBreakOn",
          "package": "hexpat",
          "signature": "Char -\u003e s -\u003e (s, s)",
          "source": "src/Text-XML-Expat-SAX.html#gxBreakOn",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XML Expat Annotated",
          "module": "Text.XML.Expat.Annotated",
          "name": "gxBreakOn",
          "normalized": "Char-\u003ea-\u003e(a,a)",
          "package": "hexpat",
          "partial": "Break On",
          "signature": "Char-\u003es-\u003e(s,s)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#v:gxBreakOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Annotated",
          "name": "gxFromByteString",
          "package": "hexpat",
          "signature": "ByteString -\u003e s",
          "source": "src/Text-XML-Expat-SAX.html#gxFromByteString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XML Expat Annotated",
          "module": "Text.XML.Expat.Annotated",
          "name": "gxFromByteString",
          "normalized": "ByteString-\u003ea",
          "package": "hexpat",
          "partial": "From Byte String",
          "signature": "ByteString-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#v:gxFromByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Annotated",
          "name": "gxFromChar",
          "package": "hexpat",
          "signature": "Char -\u003e s",
          "source": "src/Text-XML-Expat-SAX.html#gxFromChar",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XML Expat Annotated",
          "module": "Text.XML.Expat.Annotated",
          "name": "gxFromChar",
          "normalized": "Char-\u003ea",
          "package": "hexpat",
          "partial": "From Char",
          "signature": "Char-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#v:gxFromChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Annotated",
          "name": "gxFromString",
          "package": "hexpat",
          "signature": "String -\u003e s",
          "source": "src/Text-XML-Expat-SAX.html#gxFromString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XML Expat Annotated",
          "module": "Text.XML.Expat.Annotated",
          "name": "gxFromString",
          "normalized": "String-\u003ea",
          "package": "hexpat",
          "partial": "From String",
          "signature": "String-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#v:gxFromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Annotated",
          "name": "gxHead",
          "package": "hexpat",
          "signature": "s -\u003e Char",
          "source": "src/Text-XML-Expat-SAX.html#gxHead",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XML Expat Annotated",
          "module": "Text.XML.Expat.Annotated",
          "name": "gxHead",
          "normalized": "a-\u003eChar",
          "package": "hexpat",
          "partial": "Head",
          "signature": "s-\u003eChar",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#v:gxHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Annotated",
          "name": "gxNullString",
          "package": "hexpat",
          "signature": "s -\u003e Bool",
          "source": "src/Text-XML-Expat-SAX.html#gxNullString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XML Expat Annotated",
          "module": "Text.XML.Expat.Annotated",
          "name": "gxNullString",
          "normalized": "a-\u003eBool",
          "package": "hexpat",
          "partial": "Null String",
          "signature": "s-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#v:gxNullString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Annotated",
          "name": "gxTail",
          "package": "hexpat",
          "signature": "s -\u003e s",
          "source": "src/Text-XML-Expat-SAX.html#gxTail",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XML Expat Annotated",
          "module": "Text.XML.Expat.Annotated",
          "name": "gxTail",
          "normalized": "a-\u003ea",
          "package": "hexpat",
          "partial": "Tail",
          "signature": "s-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#v:gxTail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Annotated",
          "name": "gxToByteString",
          "package": "hexpat",
          "signature": "s -\u003e ByteString",
          "source": "src/Text-XML-Expat-SAX.html#gxToByteString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XML Expat Annotated",
          "module": "Text.XML.Expat.Annotated",
          "name": "gxToByteString",
          "normalized": "a-\u003eByteString",
          "package": "hexpat",
          "partial": "To Byte String",
          "signature": "s-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#v:gxToByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Annotated",
          "name": "gxToString",
          "package": "hexpat",
          "signature": "s -\u003e String",
          "source": "src/Text-XML-Expat-SAX.html#gxToString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XML Expat Annotated",
          "module": "Text.XML.Expat.Annotated",
          "name": "gxToString",
          "normalized": "a-\u003eString",
          "package": "hexpat",
          "partial": "To String",
          "signature": "s-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#v:gxToString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify this node's annotation and all its children recursively if it's an element, otherwise no-op.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Annotated",
          "name": "mapAnnotation",
          "package": "hexpat",
          "signature": "(a -\u003e b) -\u003e Node a tag text -\u003e Node b tag text",
          "source": "src/Text-XML-Expat-Annotated.html#mapAnnotation",
          "type": "function"
        },
        "index": {
          "description": "Modify this node annotation and all its children recursively if it an element otherwise no-op",
          "hierarchy": "Text XML Expat Annotated",
          "module": "Text.XML.Expat.Annotated",
          "name": "mapAnnotation",
          "normalized": "(a-\u003eb)-\u003eNode a c d-\u003eNode b c d",
          "package": "hexpat",
          "partial": "Annotation",
          "signature": "(a-\u003eb)-\u003eNode a tag text-\u003eNode b tag text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#v:mapAnnotation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify this node's annotation (non-recursively) if it's an element, otherwise no-op.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Annotated",
          "name": "modifyAnnotation",
          "package": "hexpat",
          "signature": "(a -\u003e a) -\u003e Node a tag text -\u003e Node a tag text",
          "source": "src/Text-XML-Expat-Annotated.html#modifyAnnotation",
          "type": "function"
        },
        "index": {
          "description": "Modify this node annotation non-recursively if it an element otherwise no-op",
          "hierarchy": "Text XML Expat Annotated",
          "module": "Text.XML.Expat.Annotated",
          "name": "modifyAnnotation",
          "normalized": "(a-\u003ea)-\u003eNode a b c-\u003eNode a b c",
          "package": "hexpat",
          "partial": "Annotation",
          "signature": "(a-\u003ea)-\u003eNode a tag text-\u003eNode a tag text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#v:modifyAnnotation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe encoding parameter, if provided, overrides the document's\n encoding declaration.\n\u003c/p\u003e",
          "module": "[\"Text.XML.Expat.Annotated\",\"Text.XML.Expat.Extended\",\"Text.XML.Expat.SAX\",\"Text.XML.Expat.Tree\"]",
          "name": "overrideEncoding",
          "package": "hexpat",
          "signature": "Maybe Encoding",
          "source": "src/Text-XML-Expat-SAX.html#ParseOptions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#v:overrideEncoding\",\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#v:overrideEncoding\",\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-SAX.html#v:overrideEncoding\",\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Tree.html#v:overrideEncoding\"]"
        },
        "index": {
          "description": "The encoding parameter if provided overrides the document encoding declaration",
          "hierarchy": "Text XML Expat Annotated",
          "module": "Text.XML.Expat.Annotated",
          "name": "overrideEncoding",
          "package": "hexpat",
          "partial": "Encoding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#v:overrideEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLazily parse XML to tree. Note that forcing the XMLParseError return value\n will force the entire parse.  Therefore, to ensure lazy operation, don't\n check the error status until you have processed the tree.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Annotated",
          "name": "parse",
          "package": "hexpat",
          "signature": "ParseOptions tag text-\u003e ByteString-\u003e (LNode tag text, Maybe XMLParseError)",
          "type": "function"
        },
        "index": {
          "description": "Lazily parse XML to tree Note that forcing the XMLParseError return value will force the entire parse Therefore to ensure lazy operation don check the error status until you have processed the tree",
          "hierarchy": "Text XML Expat Annotated",
          "module": "Text.XML.Expat.Annotated",
          "name": "parse",
          "normalized": "ParseOptions a b-\u003eByteString-\u003e(LNode a b,Maybe XMLParseError)",
          "package": "hexpat",
          "signature": "ParseOptions tag text-\u003eByteString-\u003e(LNode tag text,Maybe XMLParseError)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrictly parse XML to tree. Returns error message or valid parsed tree.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Annotated",
          "name": "parse'",
          "package": "hexpat",
          "signature": "ParseOptions tag text-\u003e ByteString-\u003e Either XMLParseError (LNode tag text)",
          "type": "function"
        },
        "index": {
          "description": "Strictly parse XML to tree Returns error message or valid parsed tree",
          "hierarchy": "Text XML Expat Annotated",
          "module": "Text.XML.Expat.Annotated",
          "name": "parse'",
          "normalized": "ParseOptions a b-\u003eByteString-\u003eEither XMLParseError(LNode a b)",
          "package": "hexpat",
          "signature": "ParseOptions tag text-\u003eByteString-\u003eEither XMLParseError(LNode tag text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#v:parse-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a generalized list to a tree, ignoring parse errors.\n This function allows for a parse from an enumerator/iteratee to a \u003ca\u003elazy\u003c/a\u003e\n tree structure using the \u003ccode\u003eList-enumerator\u003c/code\u003e package.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Annotated",
          "name": "parseG",
          "package": "hexpat",
          "signature": "ParseOptions tag text-\u003e l ByteString-\u003e ItemM l (NodeG XMLParseLocation l tag text)",
          "type": "function"
        },
        "index": {
          "description": "Parse generalized list to tree ignoring parse errors This function allows for parse from an enumerator iteratee to lazy tree structure using the List-enumerator package",
          "hierarchy": "Text XML Expat Annotated",
          "module": "Text.XML.Expat.Annotated",
          "name": "parseG",
          "normalized": "ParseOptions a b-\u003ec ByteString-\u003eItemM c(NodeG XMLParseLocation c a b)",
          "package": "hexpat",
          "signature": "ParseOptions tag text-\u003el ByteString-\u003eItemM l(NodeG XMLParseLocation l tag text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#v:parseG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLazily parse XML to tree. In the event of an error, throw \u003ccode\u003e\u003ca\u003eXMLParseException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eparseThrowing\u003c/code\u003e can throw an exception from pure code, which is generally a bad\n way to handle errors, because Haskell's lazy evaluation means it's hard to\n predict where it will be thrown from.  However, it may be acceptable in\n situations where it's not expected during normal operation, depending on the\n design of your program.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Annotated",
          "name": "parseThrowing",
          "package": "hexpat",
          "signature": "ParseOptions tag text-\u003e ByteString-\u003e LNode tag text",
          "type": "function"
        },
        "index": {
          "description": "Lazily parse XML to tree In the event of an error throw XMLParseException parseThrowing can throw an exception from pure code which is generally bad way to handle errors because Haskell lazy evaluation means it hard to predict where it will be thrown from However it may be acceptable in situations where it not expected during normal operation depending on the design of your program",
          "hierarchy": "Text XML Expat Annotated",
          "module": "Text.XML.Expat.Annotated",
          "name": "parseThrowing",
          "normalized": "ParseOptions a b-\u003eByteString-\u003eLNode a b",
          "package": "hexpat",
          "partial": "Throwing",
          "signature": "ParseOptions tag text-\u003eByteString-\u003eLNode tag text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#v:parseThrowing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA lower level function that lazily converts a SAX stream into a tree structure.\n Variant that takes annotations for start tags.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Annotated",
          "name": "saxToTree",
          "package": "hexpat",
          "signature": "[(SAXEvent tag text, a)] -\u003e (Node a tag text, Maybe XMLParseError)",
          "source": "src/Text-XML-Expat-Annotated.html#saxToTree",
          "type": "function"
        },
        "index": {
          "description": "lower level function that lazily converts SAX stream into tree structure Variant that takes annotations for start tags",
          "hierarchy": "Text XML Expat Annotated",
          "module": "Text.XML.Expat.Annotated",
          "name": "saxToTree",
          "normalized": "[(SAXEvent a b,c)]-\u003e(Node c a b,Maybe XMLParseError)",
          "package": "hexpat",
          "partial": "To Tree",
          "signature": "[(SAXEvent tag text,a)]-\u003e(Node a tag text,Maybe XMLParseError)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#v:saxToTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA lower level function that converts a generalized SAX stream into a tree structure.\n Ignores parse errors.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Annotated",
          "name": "saxToTreeG",
          "package": "hexpat",
          "signature": "l (SAXEvent tag text, a) -\u003e ItemM l (NodeG a l tag text)",
          "source": "src/Text-XML-Expat-Annotated.html#saxToTreeG",
          "type": "function"
        },
        "index": {
          "description": "lower level function that converts generalized SAX stream into tree structure Ignores parse errors",
          "hierarchy": "Text XML Expat Annotated",
          "module": "Text.XML.Expat.Annotated",
          "name": "saxToTreeG",
          "normalized": "a(SAXEvent b c,d)-\u003eItemM a(NodeG d a b c)",
          "package": "hexpat",
          "partial": "To Tree",
          "signature": "l(SAXEvent tag text,a)-\u003eItemM l(NodeG a l tag text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#v:saxToTreeG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of bytes in the event\n\u003c/p\u003e",
          "module": "[\"Text.XML.Expat.Annotated\",\"Text.XML.Expat.Extended\",\"Text.XML.Expat.Internal.IO\",\"Text.XML.Expat.SAX\",\"Text.XML.Expat.Tree\"]",
          "name": "xmlByteCount",
          "package": "hexpat",
          "signature": "Int64",
          "source": "src/Text-XML-Expat-Internal-IO.html#XMLParseLocation",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#v:xmlByteCount\",\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#v:xmlByteCount\",\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-IO.html#v:xmlByteCount\",\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-SAX.html#v:xmlByteCount\",\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Tree.html#v:xmlByteCount\"]"
        },
        "index": {
          "description": "The number of bytes in the event",
          "hierarchy": "Text XML Expat Annotated",
          "module": "Text.XML.Expat.Annotated",
          "name": "xmlByteCount",
          "package": "hexpat",
          "partial": "Byte Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#v:xmlByteCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eByte index of event from start of document\n\u003c/p\u003e",
          "module": "[\"Text.XML.Expat.Annotated\",\"Text.XML.Expat.Extended\",\"Text.XML.Expat.Internal.IO\",\"Text.XML.Expat.SAX\",\"Text.XML.Expat.Tree\"]",
          "name": "xmlByteIndex",
          "package": "hexpat",
          "signature": "Int64",
          "source": "src/Text-XML-Expat-Internal-IO.html#XMLParseLocation",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#v:xmlByteIndex\",\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#v:xmlByteIndex\",\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-IO.html#v:xmlByteIndex\",\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-SAX.html#v:xmlByteIndex\",\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Tree.html#v:xmlByteIndex\"]"
        },
        "index": {
          "description": "Byte index of event from start of document",
          "hierarchy": "Text XML Expat Annotated",
          "module": "Text.XML.Expat.Annotated",
          "name": "xmlByteIndex",
          "package": "hexpat",
          "partial": "Byte Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#v:xmlByteIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eColumn number of the event\n\u003c/p\u003e",
          "module": "[\"Text.XML.Expat.Annotated\",\"Text.XML.Expat.Extended\",\"Text.XML.Expat.Internal.IO\",\"Text.XML.Expat.SAX\",\"Text.XML.Expat.Tree\"]",
          "name": "xmlColumnNumber",
          "package": "hexpat",
          "signature": "Int64",
          "source": "src/Text-XML-Expat-Internal-IO.html#XMLParseLocation",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#v:xmlColumnNumber\",\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#v:xmlColumnNumber\",\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-IO.html#v:xmlColumnNumber\",\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-SAX.html#v:xmlColumnNumber\",\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Tree.html#v:xmlColumnNumber\"]"
        },
        "index": {
          "description": "Column number of the event",
          "hierarchy": "Text XML Expat Annotated",
          "module": "Text.XML.Expat.Annotated",
          "name": "xmlColumnNumber",
          "package": "hexpat",
          "partial": "Column Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#v:xmlColumnNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLine number of the event\n\u003c/p\u003e",
          "module": "[\"Text.XML.Expat.Annotated\",\"Text.XML.Expat.Extended\",\"Text.XML.Expat.Internal.IO\",\"Text.XML.Expat.SAX\",\"Text.XML.Expat.Tree\"]",
          "name": "xmlLineNumber",
          "package": "hexpat",
          "signature": "Int64",
          "source": "src/Text-XML-Expat-Internal-IO.html#XMLParseLocation",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#v:xmlLineNumber\",\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#v:xmlLineNumber\",\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-IO.html#v:xmlLineNumber\",\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-SAX.html#v:xmlLineNumber\",\"http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Tree.html#v:xmlLineNumber\"]"
        },
        "index": {
          "description": "Line number of the event",
          "hierarchy": "Text XML Expat Annotated",
          "module": "Text.XML.Expat.Annotated",
          "name": "xmlLineNumber",
          "package": "hexpat",
          "partial": "Line Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Annotated.html#v:xmlLineNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module ported from Text.XML.Light.Cursor\n\u003c/p\u003e\u003cp\u003eXML cursors for working XML content withing the context of\n an XML document.  This implementation is based on the general\n tree zipper written by Krasimir Angelov and Iavor S. Diatchki.\n\u003c/p\u003e\u003cp\u003eWith the exception of \u003ccode\u003e\u003ca\u003emodifyContentM\u003c/a\u003e\u003c/code\u003e, then M-suffixed functions are\n for use with monadic node types, as used when dealing with chunked I/O\n with the \u003cem\u003ehexpat-iteratee\u003c/em\u003e package.  In the more common pure case, you\n wouldn't need these *M functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "Cursor",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Cursor.html",
          "type": "module"
        },
        "index": {
          "description": "This module ported from Text.XML.Light.Cursor XML cursors for working XML content withing the context of an XML document This implementation is based on the general tree zipper written by Krasimir Angelov and Iavor Diatchki With the exception of modifyContentM then M-suffixed functions are for use with monadic node types as used when dealing with chunked with the hexpat-iteratee package In the more common pure case you wouldn need these functions",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "Cursor",
          "package": "hexpat",
          "partial": "Cursor",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA cursor specific to \u003ccode\u003eText.XML.Expat.Tree.Node\u003c/code\u003e trees.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "Cursor",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Cursor.html#Cursor",
          "type": "type"
        },
        "index": {
          "description": "cursor specific to Text.XML.Expat.Tree.Node trees",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "Cursor",
          "package": "hexpat",
          "partial": "Cursor",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#t:Cursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized cursor: The position of a piece of content in an XML document.\n \u003ccode\u003en\u003c/code\u003e is the Node type and \u003ccode\u003ec\u003c/code\u003e is the list type, which would usually be [],\n except when you're using chunked I/O.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "CursorG",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Cursor.html#CursorG",
          "type": "data"
        },
        "index": {
          "description": "Generalized cursor The position of piece of content in an XML document is the Node type and is the list type which would usually be except when you re using chunked",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "CursorG",
          "package": "hexpat",
          "partial": "Cursor",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#t:CursorG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA path specific to \u003ccode\u003eText.XML.Expat.Tree.Node\u003c/code\u003e trees.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "Path",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Cursor.html#Path",
          "type": "type"
        },
        "index": {
          "description": "path specific to Text.XML.Expat.Tree.Node trees",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "Path",
          "package": "hexpat",
          "partial": "Path",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#t:Path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized path within an XML document.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "PathG",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Cursor.html#PathG",
          "type": "type"
        },
        "index": {
          "description": "Generalized path within an XML document",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "PathG",
          "package": "hexpat",
          "partial": "Path",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#t:PathG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Cursor",
          "name": "Tag",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Cursor.html#Tag",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "Tag",
          "package": "hexpat",
          "partial": "Tag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#t:Tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Cursor",
          "name": "Cur",
          "package": "hexpat",
          "signature": "Cur",
          "source": "src/Text-XML-Expat-Cursor.html#CursorG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "Cur",
          "package": "hexpat",
          "partial": "Cur",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:Cur"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Cursor",
          "name": "Tag",
          "package": "hexpat",
          "signature": "Tag",
          "source": "src/Text-XML-Expat-Cursor.html#Tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "Tag",
          "package": "hexpat",
          "partial": "Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:Tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe currently selected content.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "current",
          "package": "hexpat",
          "signature": "n c tag text",
          "source": "src/Text-XML-Expat-Cursor.html#CursorG",
          "type": "function"
        },
        "index": {
          "description": "The currently selected content",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "current",
          "package": "hexpat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:current"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe first child that satisfies a predicate - pure version.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "findChild",
          "package": "hexpat",
          "signature": "(CursorG n [] tag text -\u003e Bool) -\u003e CursorG n [] tag text -\u003e Maybe (CursorG n [] tag text)",
          "source": "src/Text-XML-Expat-Cursor.html#findChild",
          "type": "function"
        },
        "index": {
          "description": "The first child that satisfies predicate pure version",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "findChild",
          "normalized": "(CursorG a[]b c-\u003eBool)-\u003eCursorG a[]b c-\u003eMaybe(CursorG a[]b c)",
          "package": "hexpat",
          "partial": "Child",
          "signature": "(CursorG n[]tag text-\u003eBool)-\u003eCursorG n[]tag text-\u003eMaybe(CursorG n[]tag text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:findChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the next left sibling that satisfies a predicate.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "findLeft",
          "package": "hexpat",
          "signature": "(CursorG n [] tag text -\u003e Bool) -\u003e CursorG n [] tag text -\u003e Maybe (CursorG n [] tag text)",
          "source": "src/Text-XML-Expat-Cursor.html#findLeft",
          "type": "function"
        },
        "index": {
          "description": "Find the next left sibling that satisfies predicate",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "findLeft",
          "normalized": "(CursorG a[]b c-\u003eBool)-\u003eCursorG a[]b c-\u003eMaybe(CursorG a[]b c)",
          "package": "hexpat",
          "partial": "Left",
          "signature": "(CursorG n[]tag text-\u003eBool)-\u003eCursorG n[]tag text-\u003eMaybe(CursorG n[]tag text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:findLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a depth first search for a descendant that satisfies the\n given predicate. Pure version.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "findRec",
          "package": "hexpat",
          "signature": "(CursorG n [] tag text -\u003e Bool) -\u003e CursorG n [] tag text -\u003e Maybe (CursorG n [] tag text)",
          "source": "src/Text-XML-Expat-Cursor.html#findRec",
          "type": "function"
        },
        "index": {
          "description": "Perform depth first search for descendant that satisfies the given predicate Pure version",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "findRec",
          "normalized": "(CursorG a[]b c-\u003eBool)-\u003eCursorG a[]b c-\u003eMaybe(CursorG a[]b c)",
          "package": "hexpat",
          "partial": "Rec",
          "signature": "(CursorG n[]tag text-\u003eBool)-\u003eCursorG n[]tag text-\u003eMaybe(CursorG n[]tag text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:findRec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a depth first search for a descendant that satisfies the\n given predicate. Used for monadic node types.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "findRecM",
          "package": "hexpat",
          "signature": "(CursorG n c tag text -\u003e ItemM c Bool) -\u003e CursorG n c tag text -\u003e ItemM c (Maybe (CursorG n c tag text))",
          "source": "src/Text-XML-Expat-Cursor.html#findRecM",
          "type": "function"
        },
        "index": {
          "description": "Perform depth first search for descendant that satisfies the given predicate Used for monadic node types",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "findRecM",
          "normalized": "(CursorG a b c d-\u003eItemM b Bool)-\u003eCursorG a b c d-\u003eItemM b(Maybe(CursorG a b c d))",
          "package": "hexpat",
          "partial": "Rec",
          "signature": "(CursorG n c tag text-\u003eItemM c Bool)-\u003eCursorG n c tag text-\u003eItemM c(Maybe(CursorG n c tag text))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:findRecM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the next right sibling that satisfies a predicate - pure version.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "findRight",
          "package": "hexpat",
          "signature": "(CursorG n [] tag text -\u003e Bool) -\u003e CursorG n [] tag text -\u003e Maybe (CursorG n [] tag text)",
          "source": "src/Text-XML-Expat-Cursor.html#findRight",
          "type": "function"
        },
        "index": {
          "description": "Find the next right sibling that satisfies predicate pure version",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "findRight",
          "normalized": "(CursorG a[]b c-\u003eBool)-\u003eCursorG a[]b c-\u003eMaybe(CursorG a[]b c)",
          "package": "hexpat",
          "partial": "Right",
          "signature": "(CursorG n[]tag text-\u003eBool)-\u003eCursorG n[]tag text-\u003eMaybe(CursorG n[]tag text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:findRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe first child of the given location - pure version.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "firstChild",
          "package": "hexpat",
          "signature": "CursorG n [] tag text -\u003e Maybe (CursorG n [] tag text)",
          "source": "src/Text-XML-Expat-Cursor.html#firstChild",
          "type": "function"
        },
        "index": {
          "description": "The first child of the given location pure version",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "firstChild",
          "normalized": "CursorG a[]b c-\u003eMaybe(CursorG a[]b c)",
          "package": "hexpat",
          "partial": "Child",
          "signature": "CursorG n[]tag text-\u003eMaybe(CursorG n[]tag text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:firstChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe first child of the given location - used for monadic node types.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "firstChildM",
          "package": "hexpat",
          "signature": "CursorG n c tag text -\u003e ItemM c (Maybe (CursorG n c tag text))",
          "source": "src/Text-XML-Expat-Cursor.html#firstChildM",
          "type": "function"
        },
        "index": {
          "description": "The first child of the given location used for monadic node types",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "firstChildM",
          "normalized": "CursorG a b c d-\u003eItemM b(Maybe(CursorG a b c d))",
          "package": "hexpat",
          "partial": "Child",
          "signature": "CursorG n c tag text-\u003eItemM c(Maybe(CursorG n c tag text))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:firstChildM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe location of the first tree in a forest - pure version.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "fromForest",
          "package": "hexpat",
          "signature": "[n [] tag text] -\u003e Maybe (CursorG n [] tag text)",
          "source": "src/Text-XML-Expat-Cursor.html#fromForest",
          "type": "function"
        },
        "index": {
          "description": "The location of the first tree in forest pure version",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "fromForest",
          "normalized": "[a[]b c]-\u003eMaybe(CursorG a[]b c)",
          "package": "hexpat",
          "partial": "Forest",
          "signature": "[n[]tag text]-\u003eMaybe(CursorG n[]tag text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:fromForest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Cursor",
          "name": "fromTag",
          "package": "hexpat",
          "signature": "Tag tag text -\u003e c (n c tag text) -\u003e n c tag text",
          "source": "src/Text-XML-Expat-Cursor.html#fromTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "fromTag",
          "normalized": "Tag a b-\u003ec(d c a b)-\u003ed c a b",
          "package": "hexpat",
          "partial": "Tag",
          "signature": "Tag tag text-\u003ec(n c tag text)-\u003en c tag text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:fromTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA cursor for the given content.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "fromTree",
          "package": "hexpat",
          "signature": "n c tag text -\u003e CursorG n c tag text",
          "source": "src/Text-XML-Expat-Cursor.html#fromTree",
          "type": "function"
        },
        "index": {
          "description": "cursor for the given content",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "fromTree",
          "normalized": "a b c d-\u003eCursorG a b c d",
          "package": "hexpat",
          "partial": "Tree",
          "signature": "n c tag text-\u003eCursorG n c tag text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:fromTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe child with the given index (starting from 0). - pure version.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "getChild",
          "package": "hexpat",
          "signature": "Int -\u003e CursorG n [] tag text -\u003e Maybe (CursorG n [] tag text)",
          "source": "src/Text-XML-Expat-Cursor.html#getChild",
          "type": "function"
        },
        "index": {
          "description": "The child with the given index starting from pure version",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "getChild",
          "normalized": "Int-\u003eCursorG a[]b c-\u003eMaybe(CursorG a[]b c)",
          "package": "hexpat",
          "partial": "Child",
          "signature": "Int-\u003eCursorG n[]tag text-\u003eMaybe(CursorG n[]tag text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:getChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe child with the given index (starting from 0) - used for monadic node types.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "getChildM",
          "package": "hexpat",
          "signature": "Int -\u003e CursorG n c tag text -\u003e ItemM c (Maybe (CursorG n c tag text))",
          "source": "src/Text-XML-Expat-Cursor.html#getChildM",
          "type": "function"
        },
        "index": {
          "description": "The child with the given index starting from used for monadic node types",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "getChildM",
          "normalized": "Int-\u003eCursorG a b c d-\u003eItemM b(Maybe(CursorG a b c d))",
          "package": "hexpat",
          "partial": "Child",
          "signature": "Int-\u003eCursorG n c tag text-\u003eItemM c(Maybe(CursorG n c tag text))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:getChildM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the node index inside the sequence of children - pure version.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "getNodeIndex",
          "package": "hexpat",
          "signature": "CursorG n [] tag text -\u003e Int",
          "source": "src/Text-XML-Expat-Cursor.html#getNodeIndex",
          "type": "function"
        },
        "index": {
          "description": "Get the node index inside the sequence of children pure version",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "getNodeIndex",
          "normalized": "CursorG a[]b c-\u003eInt",
          "package": "hexpat",
          "partial": "Node Index",
          "signature": "CursorG n[]tag text-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:getNodeIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Cursor",
          "name": "getTag",
          "package": "hexpat",
          "signature": "Node tag text -\u003e Tag tag text",
          "source": "src/Text-XML-Expat-Cursor.html#getTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "getTag",
          "normalized": "Node a b-\u003eTag a b",
          "package": "hexpat",
          "partial": "Tag",
          "signature": "Node tag text-\u003eTag tag text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:getTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo we have children?\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "hasChildren",
          "package": "hexpat",
          "signature": "CursorG n c tag text -\u003e Bool",
          "source": "src/Text-XML-Expat-Cursor.html#hasChildren",
          "type": "function"
        },
        "index": {
          "description": "Do we have children",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "hasChildren",
          "normalized": "CursorG a b c d-\u003eBool",
          "package": "hexpat",
          "partial": "Children",
          "signature": "CursorG n c tag text-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:hasChildren"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert content as the first child of the current position.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "insertFirstChild",
          "package": "hexpat",
          "signature": "n c tag text -\u003e CursorG n c tag text -\u003e Maybe (CursorG n c tag text)",
          "source": "src/Text-XML-Expat-Cursor.html#insertFirstChild",
          "type": "function"
        },
        "index": {
          "description": "Insert content as the first child of the current position",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "insertFirstChild",
          "normalized": "a b c d-\u003eCursorG a b c d-\u003eMaybe(CursorG a b c d)",
          "package": "hexpat",
          "partial": "First Child",
          "signature": "n c tag text-\u003eCursorG n c tag text-\u003eMaybe(CursorG n c tag text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:insertFirstChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert content to the left of the current position.\n The new content becomes the current position.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "insertGoLeft",
          "package": "hexpat",
          "signature": "n c tag text -\u003e CursorG n c tag text -\u003e CursorG n c tag text",
          "source": "src/Text-XML-Expat-Cursor.html#insertGoLeft",
          "type": "function"
        },
        "index": {
          "description": "Insert content to the left of the current position The new content becomes the current position",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "insertGoLeft",
          "normalized": "a b c d-\u003eCursorG a b c d-\u003eCursorG a b c d",
          "package": "hexpat",
          "partial": "Go Left",
          "signature": "n c tag text-\u003eCursorG n c tag text-\u003eCursorG n c tag text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:insertGoLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert content to the right of the current position.\n The new content becomes the current position.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "insertGoRight",
          "package": "hexpat",
          "signature": "n c tag text -\u003e CursorG n c tag text -\u003e CursorG n c tag text",
          "source": "src/Text-XML-Expat-Cursor.html#insertGoRight",
          "type": "function"
        },
        "index": {
          "description": "Insert content to the right of the current position The new content becomes the current position",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "insertGoRight",
          "normalized": "a b c d-\u003eCursorG a b c d-\u003eCursorG a b c d",
          "package": "hexpat",
          "partial": "Go Right",
          "signature": "n c tag text-\u003eCursorG n c tag text-\u003eCursorG n c tag text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:insertGoRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert content as the first child of the current position.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "insertLastChild",
          "package": "hexpat",
          "signature": "n c tag text -\u003e CursorG n c tag text -\u003e Maybe (CursorG n c tag text)",
          "source": "src/Text-XML-Expat-Cursor.html#insertLastChild",
          "type": "function"
        },
        "index": {
          "description": "Insert content as the first child of the current position",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "insertLastChild",
          "normalized": "a b c d-\u003eCursorG a b c d-\u003eMaybe(CursorG a b c d)",
          "package": "hexpat",
          "partial": "Last Child",
          "signature": "n c tag text-\u003eCursorG n c tag text-\u003eMaybe(CursorG n c tag text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:insertLastChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert content to the left of the current position.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "insertLeft",
          "package": "hexpat",
          "signature": "n c tag text -\u003e CursorG n c tag text -\u003e CursorG n c tag text",
          "source": "src/Text-XML-Expat-Cursor.html#insertLeft",
          "type": "function"
        },
        "index": {
          "description": "Insert content to the left of the current position",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "insertLeft",
          "normalized": "a b c d-\u003eCursorG a b c d-\u003eCursorG a b c d",
          "package": "hexpat",
          "partial": "Left",
          "signature": "n c tag text-\u003eCursorG n c tag text-\u003eCursorG n c tag text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:insertLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert content as the first child of the current position.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "insertManyFirstChild",
          "package": "hexpat",
          "signature": "c (n c tag text) -\u003e CursorG n c tag text -\u003e Maybe (CursorG n c tag text)",
          "source": "src/Text-XML-Expat-Cursor.html#insertManyFirstChild",
          "type": "function"
        },
        "index": {
          "description": "Insert content as the first child of the current position",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "insertManyFirstChild",
          "normalized": "a(b a c d)-\u003eCursorG b a c d-\u003eMaybe(CursorG b a c d)",
          "package": "hexpat",
          "partial": "Many First Child",
          "signature": "c(n c tag text)-\u003eCursorG n c tag text-\u003eMaybe(CursorG n c tag text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:insertManyFirstChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert content as the first child of the current position.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "insertManyLastChild",
          "package": "hexpat",
          "signature": "c (n c tag text) -\u003e CursorG n c tag text -\u003e Maybe (CursorG n c tag text)",
          "source": "src/Text-XML-Expat-Cursor.html#insertManyLastChild",
          "type": "function"
        },
        "index": {
          "description": "Insert content as the first child of the current position",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "insertManyLastChild",
          "normalized": "a(b a c d)-\u003eCursorG b a c d-\u003eMaybe(CursorG b a c d)",
          "package": "hexpat",
          "partial": "Many Last Child",
          "signature": "c(n c tag text)-\u003eCursorG n c tag text-\u003eMaybe(CursorG n c tag text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:insertManyLastChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert content to the left of the current position.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "insertManyLeft",
          "package": "hexpat",
          "signature": "c (n c tag text) -\u003e CursorG n c tag text -\u003e CursorG n c tag text",
          "source": "src/Text-XML-Expat-Cursor.html#insertManyLeft",
          "type": "function"
        },
        "index": {
          "description": "Insert content to the left of the current position",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "insertManyLeft",
          "normalized": "a(b a c d)-\u003eCursorG b a c d-\u003eCursorG b a c d",
          "package": "hexpat",
          "partial": "Many Left",
          "signature": "c(n c tag text)-\u003eCursorG n c tag text-\u003eCursorG n c tag text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:insertManyLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert content to the right of the current position.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "insertManyRight",
          "package": "hexpat",
          "signature": "c (n c tag text) -\u003e CursorG n c tag text -\u003e CursorG n c tag text",
          "source": "src/Text-XML-Expat-Cursor.html#insertManyRight",
          "type": "function"
        },
        "index": {
          "description": "Insert content to the right of the current position",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "insertManyRight",
          "normalized": "a(b a c d)-\u003eCursorG b a c d-\u003eCursorG b a c d",
          "package": "hexpat",
          "partial": "Many Right",
          "signature": "c(n c tag text)-\u003eCursorG n c tag text-\u003eCursorG n c tag text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:insertManyRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert content to the right of the current position.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "insertRight",
          "package": "hexpat",
          "signature": "n c tag text -\u003e CursorG n c tag text -\u003e CursorG n c tag text",
          "source": "src/Text-XML-Expat-Cursor.html#insertRight",
          "type": "function"
        },
        "index": {
          "description": "Insert content to the right of the current position",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "insertRight",
          "normalized": "a b c d-\u003eCursorG a b c d-\u003eCursorG a b c d",
          "package": "hexpat",
          "partial": "Right",
          "signature": "n c tag text-\u003eCursorG n c tag text-\u003eCursorG n c tag text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:insertRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo we have a parent?\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "isChild",
          "package": "hexpat",
          "signature": "CursorG n c tag text -\u003e Bool",
          "source": "src/Text-XML-Expat-Cursor.html#isChild",
          "type": "function"
        },
        "index": {
          "description": "Do we have parent",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "isChild",
          "normalized": "CursorG a b c d-\u003eBool",
          "package": "hexpat",
          "partial": "Child",
          "signature": "CursorG n c tag text-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:isChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAre we at the left end of the the document? (Pure version.)\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "isFirst",
          "package": "hexpat",
          "signature": "CursorG n [] tag text -\u003e Bool",
          "source": "src/Text-XML-Expat-Cursor.html#isFirst",
          "type": "function"
        },
        "index": {
          "description": "Are we at the left end of the the document Pure version",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "isFirst",
          "normalized": "CursorG a[]b c-\u003eBool",
          "package": "hexpat",
          "partial": "First",
          "signature": "CursorG n[]tag text-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:isFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAre we at the left end of the the document? (Used for monadic node types.)\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "isFirstM",
          "package": "hexpat",
          "signature": "CursorG n c tag text -\u003e ItemM c Bool",
          "source": "src/Text-XML-Expat-Cursor.html#isFirstM",
          "type": "function"
        },
        "index": {
          "description": "Are we at the left end of the the document Used for monadic node types",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "isFirstM",
          "normalized": "CursorG a b c d-\u003eItemM b Bool",
          "package": "hexpat",
          "partial": "First",
          "signature": "CursorG n c tag text-\u003eItemM c Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:isFirstM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAre we at the right end of the document? (Pure version.)\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "isLast",
          "package": "hexpat",
          "signature": "CursorG n [] tag text -\u003e Bool",
          "source": "src/Text-XML-Expat-Cursor.html#isLast",
          "type": "function"
        },
        "index": {
          "description": "Are we at the right end of the document Pure version",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "isLast",
          "normalized": "CursorG a[]b c-\u003eBool",
          "package": "hexpat",
          "partial": "Last",
          "signature": "CursorG n[]tag text-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:isLast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAre we at the right end of the document? (Used for monadic node types.)\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "isLastM",
          "package": "hexpat",
          "signature": "CursorG n c tag text -\u003e ItemM c Bool",
          "source": "src/Text-XML-Expat-Cursor.html#isLastM",
          "type": "function"
        },
        "index": {
          "description": "Are we at the right end of the document Used for monadic node types",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "isLastM",
          "normalized": "CursorG a b c d-\u003eItemM b Bool",
          "package": "hexpat",
          "partial": "Last",
          "signature": "CursorG n c tag text-\u003eItemM c Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:isLastM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAre we at the bottom of the document?\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "isLeaf",
          "package": "hexpat",
          "signature": "CursorG n c tag text -\u003e Bool",
          "source": "src/Text-XML-Expat-Cursor.html#isLeaf",
          "type": "function"
        },
        "index": {
          "description": "Are we at the bottom of the document",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "isLeaf",
          "normalized": "CursorG a b c d-\u003eBool",
          "package": "hexpat",
          "partial": "Leaf",
          "signature": "CursorG n c tag text-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:isLeaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAre we at the top of the document?\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "isRoot",
          "package": "hexpat",
          "signature": "CursorG n c tag text -\u003e Bool",
          "source": "src/Text-XML-Expat-Cursor.html#isRoot",
          "type": "function"
        },
        "index": {
          "description": "Are we at the top of the document",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "isRoot",
          "normalized": "CursorG a b c d-\u003eBool",
          "package": "hexpat",
          "partial": "Root",
          "signature": "CursorG n c tag text-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:isRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe last child of the given location - pure version.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "lastChild",
          "package": "hexpat",
          "signature": "CursorG n [] tag text -\u003e Maybe (CursorG n [] tag text)",
          "source": "src/Text-XML-Expat-Cursor.html#lastChild",
          "type": "function"
        },
        "index": {
          "description": "The last child of the given location pure version",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "lastChild",
          "normalized": "CursorG a[]b c-\u003eMaybe(CursorG a[]b c)",
          "package": "hexpat",
          "partial": "Child",
          "signature": "CursorG n[]tag text-\u003eMaybe(CursorG n[]tag text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:lastChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe last child of the given location - used for monadic node types.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "lastChildM",
          "package": "hexpat",
          "signature": "CursorG n c tag text -\u003e ItemM c (Maybe (CursorG n c tag text))",
          "source": "src/Text-XML-Expat-Cursor.html#lastChildM",
          "type": "function"
        },
        "index": {
          "description": "The last child of the given location used for monadic node types",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "lastChildM",
          "normalized": "CursorG a b c d-\u003eItemM b(Maybe(CursorG a b c d))",
          "package": "hexpat",
          "partial": "Child",
          "signature": "CursorG n c tag text-\u003eItemM c(Maybe(CursorG n c tag text))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:lastChildM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe left sibling of the given location - pure version.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "left",
          "package": "hexpat",
          "signature": "CursorG n [] tag text -\u003e Maybe (CursorG n [] tag text)",
          "source": "src/Text-XML-Expat-Cursor.html#left",
          "type": "function"
        },
        "index": {
          "description": "The left sibling of the given location pure version",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "left",
          "normalized": "CursorG a[]b c-\u003eMaybe(CursorG a[]b c)",
          "package": "hexpat",
          "signature": "CursorG n[]tag text-\u003eMaybe(CursorG n[]tag text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe left sibling of the given location - used for monadic node types.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "leftM",
          "package": "hexpat",
          "signature": "CursorG n c tag text -\u003e ItemM c (Maybe (CursorG n c tag text))",
          "source": "src/Text-XML-Expat-Cursor.html#leftM",
          "type": "function"
        },
        "index": {
          "description": "The left sibling of the given location used for monadic node types",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "leftM",
          "normalized": "CursorG a b c d-\u003eItemM b(Maybe(CursorG a b c d))",
          "package": "hexpat",
          "signature": "CursorG n c tag text-\u003eItemM c(Maybe(CursorG n c tag text))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:leftM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSiblings on the left, closest first.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "lefts",
          "package": "hexpat",
          "signature": "c (n c tag text)",
          "source": "src/Text-XML-Expat-Cursor.html#CursorG",
          "type": "function"
        },
        "index": {
          "description": "Siblings on the left closest first",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "lefts",
          "package": "hexpat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:lefts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify the current content.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "modifyContent",
          "package": "hexpat",
          "signature": "(n c tag text -\u003e n c tag text) -\u003e CursorG n c tag text -\u003e CursorG n c tag text",
          "source": "src/Text-XML-Expat-Cursor.html#modifyContent",
          "type": "function"
        },
        "index": {
          "description": "Modify the current content",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "modifyContent",
          "normalized": "(a b c d-\u003ea b c d)-\u003eCursorG a b c d-\u003eCursorG a b c d",
          "package": "hexpat",
          "partial": "Content",
          "signature": "(n c tag text-\u003en c tag text)-\u003eCursorG n c tag text-\u003eCursorG n c tag text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:modifyContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify the current content - pure version.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "modifyContentList",
          "package": "hexpat",
          "signature": "(n [] tag text -\u003e [n [] tag text]) -\u003e CursorG n [] tag text -\u003e Maybe (CursorG n [] tag text)",
          "source": "src/Text-XML-Expat-Cursor.html#modifyContentList",
          "type": "function"
        },
        "index": {
          "description": "Modify the current content pure version",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "modifyContentList",
          "normalized": "(a[]b c-\u003e[a[]b c])-\u003eCursorG a[]b c-\u003eMaybe(CursorG a[]b c)",
          "package": "hexpat",
          "partial": "Content List",
          "signature": "(n[]tag text-\u003e[n[]tag text])-\u003eCursorG n[]tag text-\u003eMaybe(CursorG n[]tag text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:modifyContentList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify the current content - used for monadic node types.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "modifyContentListM",
          "package": "hexpat",
          "signature": "(n c tag text -\u003e c (n c tag text)) -\u003e CursorG n c tag text -\u003e ItemM c (Maybe (CursorG n c tag text))",
          "source": "src/Text-XML-Expat-Cursor.html#modifyContentListM",
          "type": "function"
        },
        "index": {
          "description": "Modify the current content used for monadic node types",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "modifyContentListM",
          "normalized": "(a b c d-\u003eb(a b c d))-\u003eCursorG a b c d-\u003eItemM b(Maybe(CursorG a b c d))",
          "package": "hexpat",
          "partial": "Content List",
          "signature": "(n c tag text-\u003ec(n c tag text))-\u003eCursorG n c tag text-\u003eItemM c(Maybe(CursorG n c tag text))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:modifyContentListM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify the current content, allowing for an effect.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "modifyContentM",
          "package": "hexpat",
          "signature": "(n [] tag text -\u003e m (n [] tag text)) -\u003e CursorG n [] tag text -\u003e m (CursorG n [] tag text)",
          "source": "src/Text-XML-Expat-Cursor.html#modifyContentM",
          "type": "function"
        },
        "index": {
          "description": "Modify the current content allowing for an effect",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "modifyContentM",
          "normalized": "(a[]b c-\u003ed(a[]b c))-\u003eCursorG a[]b c-\u003ed(CursorG a[]b c)",
          "package": "hexpat",
          "partial": "Content",
          "signature": "(n[]tag text-\u003em(n[]tag text))-\u003eCursorG n[]tag text-\u003em(CursorG n[]tag text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:modifyContentM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe next position in a left-to-right depth-first traversal of a document:\n either the first child, right sibling, or the right sibling of a parent that\n has one. Pure version.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "nextDF",
          "package": "hexpat",
          "signature": "CursorG n [] tag text -\u003e Maybe (CursorG n [] tag text)",
          "source": "src/Text-XML-Expat-Cursor.html#nextDF",
          "type": "function"
        },
        "index": {
          "description": "The next position in left-to-right depth-first traversal of document either the first child right sibling or the right sibling of parent that has one Pure version",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "nextDF",
          "normalized": "CursorG a[]b c-\u003eMaybe(CursorG a[]b c)",
          "package": "hexpat",
          "partial": "DF",
          "signature": "CursorG n[]tag text-\u003eMaybe(CursorG n[]tag text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:nextDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe next position in a left-to-right depth-first traversal of a document:\n either the first child, right sibling, or the right sibling of a parent that\n has one. Used for monadic node types.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "nextDFM",
          "package": "hexpat",
          "signature": "CursorG n c tag text -\u003e ItemM c (Maybe (CursorG n c tag text))",
          "source": "src/Text-XML-Expat-Cursor.html#nextDFM",
          "type": "function"
        },
        "index": {
          "description": "The next position in left-to-right depth-first traversal of document either the first child right sibling or the right sibling of parent that has one Used for monadic node types",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "nextDFM",
          "normalized": "CursorG a b c d-\u003eItemM b(Maybe(CursorG a b c d))",
          "package": "hexpat",
          "partial": "DFM",
          "signature": "CursorG n c tag text-\u003eItemM c(Maybe(CursorG n c tag text))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:nextDFM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parent of the given location.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "parent",
          "package": "hexpat",
          "signature": "CursorG n c tag text -\u003e Maybe (CursorG n c tag text)",
          "source": "src/Text-XML-Expat-Cursor.html#parent",
          "type": "function"
        },
        "index": {
          "description": "The parent of the given location",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "parent",
          "normalized": "CursorG a b c d-\u003eMaybe(CursorG a b c d)",
          "package": "hexpat",
          "signature": "CursorG n c tag text-\u003eMaybe(CursorG n c tag text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:parent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe contexts of the parent elements of this location.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "parents",
          "package": "hexpat",
          "signature": "PathG n c tag text",
          "source": "src/Text-XML-Expat-Cursor.html#CursorG",
          "type": "function"
        },
        "index": {
          "description": "The contexts of the parent elements of this location",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "parents",
          "package": "hexpat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:parents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove the current element.\n The new position is the one on the left. Pure version.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "removeGoLeft",
          "package": "hexpat",
          "signature": "CursorG n [] tag text -\u003e Maybe (CursorG n [] tag text)",
          "source": "src/Text-XML-Expat-Cursor.html#removeGoLeft",
          "type": "function"
        },
        "index": {
          "description": "Remove the current element The new position is the one on the left Pure version",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "removeGoLeft",
          "normalized": "CursorG a[]b c-\u003eMaybe(CursorG a[]b c)",
          "package": "hexpat",
          "partial": "Go Left",
          "signature": "CursorG n[]tag text-\u003eMaybe(CursorG n[]tag text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:removeGoLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove the current element.\n The new position is the one on the left. Pure version.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "removeGoLeftM",
          "package": "hexpat",
          "signature": "CursorG n c tag text -\u003e ItemM c (Maybe (CursorG n c tag text))",
          "source": "src/Text-XML-Expat-Cursor.html#removeGoLeftM",
          "type": "function"
        },
        "index": {
          "description": "Remove the current element The new position is the one on the left Pure version",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "removeGoLeftM",
          "normalized": "CursorG a b c d-\u003eItemM b(Maybe(CursorG a b c d))",
          "package": "hexpat",
          "partial": "Go Left",
          "signature": "CursorG n c tag text-\u003eItemM c(Maybe(CursorG n c tag text))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:removeGoLeftM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove the current element.\n The new position is the one on the right. Pure version.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "removeGoRight",
          "package": "hexpat",
          "signature": "CursorG n [] tag text -\u003e Maybe (CursorG n [] tag text)",
          "source": "src/Text-XML-Expat-Cursor.html#removeGoRight",
          "type": "function"
        },
        "index": {
          "description": "Remove the current element The new position is the one on the right Pure version",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "removeGoRight",
          "normalized": "CursorG a[]b c-\u003eMaybe(CursorG a[]b c)",
          "package": "hexpat",
          "partial": "Go Right",
          "signature": "CursorG n[]tag text-\u003eMaybe(CursorG n[]tag text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:removeGoRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove the current element.\n The new position is the one on the right. Used for monadic node types.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "removeGoRightM",
          "package": "hexpat",
          "signature": "CursorG n c tag text -\u003e ItemM c (Maybe (CursorG n c tag text))",
          "source": "src/Text-XML-Expat-Cursor.html#removeGoRightM",
          "type": "function"
        },
        "index": {
          "description": "Remove the current element The new position is the one on the right Used for monadic node types",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "removeGoRightM",
          "normalized": "CursorG a b c d-\u003eItemM b(Maybe(CursorG a b c d))",
          "package": "hexpat",
          "partial": "Go Right",
          "signature": "CursorG n c tag text-\u003eItemM c(Maybe(CursorG n c tag text))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:removeGoRightM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove the current element.\n The new position is the parent of the old position.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "removeGoUp",
          "package": "hexpat",
          "signature": "CursorG n c tag text -\u003e Maybe (CursorG n c tag text)",
          "source": "src/Text-XML-Expat-Cursor.html#removeGoUp",
          "type": "function"
        },
        "index": {
          "description": "Remove the current element The new position is the parent of the old position",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "removeGoUp",
          "normalized": "CursorG a b c d-\u003eMaybe(CursorG a b c d)",
          "package": "hexpat",
          "partial": "Go Up",
          "signature": "CursorG n c tag text-\u003eMaybe(CursorG n c tag text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:removeGoUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove the content on the left of the current position, if any - pure version.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "removeLeft",
          "package": "hexpat",
          "signature": "CursorG n [] tag text -\u003e Maybe (n [] tag text, CursorG n [] tag text)",
          "source": "src/Text-XML-Expat-Cursor.html#removeLeft",
          "type": "function"
        },
        "index": {
          "description": "Remove the content on the left of the current position if any pure version",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "removeLeft",
          "normalized": "CursorG a[]b c-\u003eMaybe(a[]b c,CursorG a[]b c)",
          "package": "hexpat",
          "partial": "Left",
          "signature": "CursorG n[]tag text-\u003eMaybe(n[]tag text,CursorG n[]tag text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:removeLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove the content on the left of the current position, if any - used for monadic node types.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "removeLeftM",
          "package": "hexpat",
          "signature": "CursorG n c tag text -\u003e ItemM c (Maybe (n c tag text, CursorG n c tag text))",
          "source": "src/Text-XML-Expat-Cursor.html#removeLeftM",
          "type": "function"
        },
        "index": {
          "description": "Remove the content on the left of the current position if any used for monadic node types",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "removeLeftM",
          "normalized": "CursorG a b c d-\u003eItemM b(Maybe(a b c d,CursorG a b c d))",
          "package": "hexpat",
          "partial": "Left",
          "signature": "CursorG n c tag text-\u003eItemM c(Maybe(n c tag text,CursorG n c tag text))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:removeLeftM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove the content on the right of the current position, if any - pure version.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "removeRight",
          "package": "hexpat",
          "signature": "CursorG n [] tag text -\u003e Maybe (n [] tag text, CursorG n [] tag text)",
          "source": "src/Text-XML-Expat-Cursor.html#removeRight",
          "type": "function"
        },
        "index": {
          "description": "Remove the content on the right of the current position if any pure version",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "removeRight",
          "normalized": "CursorG a[]b c-\u003eMaybe(a[]b c,CursorG a[]b c)",
          "package": "hexpat",
          "partial": "Right",
          "signature": "CursorG n[]tag text-\u003eMaybe(n[]tag text,CursorG n[]tag text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:removeRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove the content on the left of the current position, if any - used for monadic node types.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "removeRightM",
          "package": "hexpat",
          "signature": "CursorG n c tag text -\u003e ItemM c (Maybe (n c tag text, CursorG n c tag text))",
          "source": "src/Text-XML-Expat-Cursor.html#removeRightM",
          "type": "function"
        },
        "index": {
          "description": "Remove the content on the left of the current position if any used for monadic node types",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "removeRightM",
          "normalized": "CursorG a b c d-\u003eItemM b(Maybe(a b c d,CursorG a b c d))",
          "package": "hexpat",
          "partial": "Right",
          "signature": "CursorG n c tag text-\u003eItemM c(Maybe(n c tag text,CursorG n c tag text))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:removeRightM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe right sibling of the given location - pure version.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "right",
          "package": "hexpat",
          "signature": "CursorG n [] tag text -\u003e Maybe (CursorG n [] tag text)",
          "source": "src/Text-XML-Expat-Cursor.html#right",
          "type": "function"
        },
        "index": {
          "description": "The right sibling of the given location pure version",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "right",
          "normalized": "CursorG a[]b c-\u003eMaybe(CursorG a[]b c)",
          "package": "hexpat",
          "signature": "CursorG n[]tag text-\u003eMaybe(CursorG n[]tag text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:right"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe right sibling of the given location - used for monadic node types.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "rightM",
          "package": "hexpat",
          "signature": "CursorG n c tag text -\u003e ItemM c (Maybe (CursorG n c tag text))",
          "source": "src/Text-XML-Expat-Cursor.html#rightM",
          "type": "function"
        },
        "index": {
          "description": "The right sibling of the given location used for monadic node types",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "rightM",
          "normalized": "CursorG a b c d-\u003eItemM b(Maybe(CursorG a b c d))",
          "package": "hexpat",
          "signature": "CursorG n c tag text-\u003eItemM c(Maybe(CursorG n c tag text))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:rightM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSiblings on the right, closest first.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "rights",
          "package": "hexpat",
          "signature": "c (n c tag text)",
          "source": "src/Text-XML-Expat-Cursor.html#CursorG",
          "type": "function"
        },
        "index": {
          "description": "Siblings on the right closest first",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "rights",
          "package": "hexpat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:rights"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe top-most parent of the given location.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "root",
          "package": "hexpat",
          "signature": "CursorG n c tag text -\u003e CursorG n c tag text",
          "source": "src/Text-XML-Expat-Cursor.html#root",
          "type": "function"
        },
        "index": {
          "description": "The top-most parent of the given location",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "root",
          "normalized": "CursorG a b c d-\u003eCursorG a b c d",
          "package": "hexpat",
          "signature": "CursorG n c tag text-\u003eCursorG n c tag text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:root"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the current content.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "setContent",
          "package": "hexpat",
          "signature": "n c tag text -\u003e CursorG n c tag text -\u003e CursorG n c tag text",
          "source": "src/Text-XML-Expat-Cursor.html#setContent",
          "type": "function"
        },
        "index": {
          "description": "Change the current content",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "setContent",
          "normalized": "a b c d-\u003eCursorG a b c d-\u003eCursorG a b c d",
          "package": "hexpat",
          "partial": "Content",
          "signature": "n c tag text-\u003eCursorG n c tag text-\u003eCursorG n c tag text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:setContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Cursor",
          "name": "tagAttribs",
          "package": "hexpat",
          "signature": "Attributes tag text",
          "source": "src/Text-XML-Expat-Cursor.html#Tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "tagAttribs",
          "package": "hexpat",
          "partial": "Attribs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:tagAttribs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Cursor",
          "name": "tagName",
          "package": "hexpat",
          "signature": "tag",
          "source": "src/Text-XML-Expat-Cursor.html#Tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "tagName",
          "package": "hexpat",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:tagName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the forest containing this location.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "toForest",
          "package": "hexpat",
          "signature": "CursorG n c tag text -\u003e c (n c tag text)",
          "source": "src/Text-XML-Expat-Cursor.html#toForest",
          "type": "function"
        },
        "index": {
          "description": "Computes the forest containing this location",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "toForest",
          "normalized": "CursorG a b c d-\u003eb(a b c d)",
          "package": "hexpat",
          "partial": "Forest",
          "signature": "CursorG n c tag text-\u003ec(n c tag text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:toForest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the tree containing this location.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Cursor",
          "name": "toTree",
          "package": "hexpat",
          "signature": "CursorG n c tag text -\u003e n c tag text",
          "source": "src/Text-XML-Expat-Cursor.html#toTree",
          "type": "function"
        },
        "index": {
          "description": "Computes the tree containing this location",
          "hierarchy": "Text XML Expat Cursor",
          "module": "Text.XML.Expat.Cursor",
          "name": "toTree",
          "normalized": "CursorG a b c d-\u003ea b c d",
          "package": "hexpat",
          "partial": "Tree",
          "signature": "CursorG n c tag text-\u003en c tag text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Cursor.html#v:toTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn extended variant of \u003cem\u003eNode\u003c/em\u003e intended to implement the entire XML\n specification.  DTDs are not yet supported, however.\n\u003c/p\u003e\u003cp\u003eThe names conflict with those in \u003cem\u003eTree\u003c/em\u003e so you must use qualified import\n if you want to use both modules.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.Expat.Extended",
          "name": "Extended",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Extended.html",
          "type": "module"
        },
        "index": {
          "description": "An extended variant of Node intended to implement the entire XML specification DTDs are not yet supported however The names conflict with those in Tree so you must use qualified import if you want to use both modules",
          "hierarchy": "Text XML Expat Extended",
          "module": "Text.XML.Expat.Extended",
          "name": "Extended",
          "package": "hexpat",
          "partial": "Extended",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pure representation of an XML document that uses a list as its container type.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Extended",
          "name": "Document",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Extended.html#Document",
          "type": "type"
        },
        "index": {
          "description": "pure representation of an XML document that uses list as its container type",
          "hierarchy": "Text XML Expat Extended",
          "module": "Text.XML.Expat.Extended",
          "name": "Document",
          "package": "hexpat",
          "partial": "Document",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#t:Document"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDocument representation of the XML document, intended to support the entire\n XML specification.  DTDs are not yet supported, however.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Extended",
          "name": "DocumentG",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Extended.html#DocumentG",
          "type": "data"
        },
        "index": {
          "description": "Document representation of the XML document intended to support the entire XML specification DTDs are not yet supported however",
          "hierarchy": "Text XML Expat Extended",
          "module": "Text.XML.Expat.Extended",
          "name": "DocumentG",
          "package": "hexpat",
          "partial": "Document",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#t:DocumentG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Extended",
          "name": "Encoding",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Internal-IO.html#Encoding",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text XML Expat Extended",
          "module": "Text.XML.Expat.Extended",
          "name": "Encoding",
          "package": "hexpat",
          "partial": "Encoding",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#t:Encoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn abstraction for any string type you want to use as xml text (that is,\n attribute values or element text content). If you want to use a\n new string type with \u003cem\u003ehexpat\u003c/em\u003e, you must make it an instance of\n \u003ccode\u003e\u003ca\u003eGenericXMLString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Extended",
          "name": "GenericXMLString",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-SAX.html#GenericXMLString",
          "type": "class"
        },
        "index": {
          "description": "An abstraction for any string type you want to use as xml text that is attribute values or element text content If you want to use new string type with hexpat you must make it an instance of GenericXMLString",
          "hierarchy": "Text XML Expat Extended",
          "module": "Text.XML.Expat.Extended",
          "name": "GenericXMLString",
          "package": "hexpat",
          "partial": "Generic XMLString",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#t:GenericXMLString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType alias for an extended document, annotated with parse location\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Extended",
          "name": "LDocument",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Extended.html#LDocument",
          "type": "type"
        },
        "index": {
          "description": "Type alias for an extended document annotated with parse location",
          "hierarchy": "Text XML Expat Extended",
          "module": "Text.XML.Expat.Extended",
          "name": "LDocument",
          "package": "hexpat",
          "partial": "LDocument",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#t:LDocument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType alias for an extended node, annotated with parse location\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Extended",
          "name": "LNode",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Extended.html#LNode",
          "type": "type"
        },
        "index": {
          "description": "Type alias for an extended node annotated with parse location",
          "hierarchy": "Text XML Expat Extended",
          "module": "Text.XML.Expat.Extended",
          "name": "LNode",
          "package": "hexpat",
          "partial": "LNode",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#t:LNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType alias for an extended document where namespaced names are used for tags\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Extended",
          "name": "NDocument",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Extended.html#NDocument",
          "type": "type"
        },
        "index": {
          "description": "Type alias for an extended document where namespaced names are used for tags",
          "hierarchy": "Text XML Expat Extended",
          "module": "Text.XML.Expat.Extended",
          "name": "NDocument",
          "package": "hexpat",
          "partial": "NDocument",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#t:NDocument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType alias for an extended document where namespaced names are used for tags, annotated with parse location\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Extended",
          "name": "NLDocument",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Extended.html#NLDocument",
          "type": "type"
        },
        "index": {
          "description": "Type alias for an extended document where namespaced names are used for tags annotated with parse location",
          "hierarchy": "Text XML Expat Extended",
          "module": "Text.XML.Expat.Extended",
          "name": "NLDocument",
          "package": "hexpat",
          "partial": "NLDocument",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#t:NLDocument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType alias for an extended node where namespaced names are used for tags, annotated with parse location\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Extended",
          "name": "NLNode",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Extended.html#NLNode",
          "type": "type"
        },
        "index": {
          "description": "Type alias for an extended node where namespaced names are used for tags annotated with parse location",
          "hierarchy": "Text XML Expat Extended",
          "module": "Text.XML.Expat.Extended",
          "name": "NLNode",
          "package": "hexpat",
          "partial": "NLNode",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#t:NLNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType alias for an extended node where namespaced names are used for tags\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Extended",
          "name": "NNode",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Extended.html#NNode",
          "type": "type"
        },
        "index": {
          "description": "Type alias for an extended node where namespaced names are used for tags",
          "hierarchy": "Text XML Expat Extended",
          "module": "Text.XML.Expat.Extended",
          "name": "NNode",
          "package": "hexpat",
          "partial": "NNode",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#t:NNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pure tree representation that uses a list as its container type,\n extended variant.\n\u003c/p\u003e\u003cp\u003eIn the \u003ccode\u003ehexpat\u003c/code\u003e package, a list of nodes has the type \u003ccode\u003e[Node tag text]\u003c/code\u003e, but note\n that you can also use the more general type function \u003ccode\u003e\u003ca\u003eListOf\u003c/a\u003e\u003c/code\u003e to give a list of\n any node type, using that node's associated list type, e.g.\n \u003ccode\u003eListOf (UNode Text)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Extended",
          "name": "Node",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Extended.html#Node",
          "type": "type"
        },
        "index": {
          "description": "pure tree representation that uses list as its container type extended variant In the hexpat package list of nodes has the type Node tag text but note that you can also use the more general type function ListOf to give list of any node type using that node associated list type e.g ListOf UNode Text",
          "hierarchy": "Text XML Expat Extended",
          "module": "Text.XML.Expat.Extended",
          "name": "Node",
          "package": "hexpat",
          "partial": "Node",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#t:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtended variant of the tree representation of the XML document, intended\n to support the entire XML specification.  DTDs are not yet supported, however.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ec\u003c/code\u003e is the container type for the element's children, which is [] in the\n \u003ccode\u003ehexpat\u003c/code\u003e package, and a monadic list type for \u003ccode\u003ehexpat-iteratee\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003etag\u003c/code\u003e is the tag type, which can either be one of several string types,\n or a special type from the \u003ccode\u003eText.XML.Expat.Namespaced\u003c/code\u003e or\n \u003ccode\u003eText.XML.Expat.Qualified\u003c/code\u003e modules.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003etext\u003c/code\u003e is the string type for text content.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ea\u003c/code\u003e is the type of the annotation.  One of the things this can be used for\n is to store the XML parse location, which is useful for error handling.\n\u003c/p\u003e\u003cp\u003eNote that some functions in the \u003ccode\u003eText.XML.Expat.Cursor\u003c/code\u003e module need to create\n new nodes through the \u003ccode\u003e\u003ca\u003eMkElementClass\u003c/a\u003e\u003c/code\u003e type class. Normally this can only be done\n if \u003ccode\u003ea\u003c/code\u003e is a Maybe type or () (so it can provide the Nothing value for the annotation\n on newly created nodes).  Or, you can write your own \u003ccode\u003e\u003ca\u003eMkElementClass\u003c/a\u003e\u003c/code\u003e instance.\n Apart from that, there is no requirement for \u003ccode\u003ea\u003c/code\u003e to be a Maybe type.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Extended",
          "name": "NodeG",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Extended.html#NodeG",
          "type": "data"
        },
        "index": {
          "description": "Extended variant of the tree representation of the XML document intended to support the entire XML specification DTDs are not yet supported however is the container type for the element children which is in the hexpat package and monadic list type for hexpat-iteratee tag is the tag type which can either be one of several string types or special type from the Text.XML.Expat.Namespaced or Text.XML.Expat.Qualified modules text is the string type for text content is the type of the annotation One of the things this can be used for is to store the XML parse location which is useful for error handling Note that some functions in the Text.XML.Expat.Cursor module need to create new nodes through the MkElementClass type class Normally this can only be done if is Maybe type or so it can provide the Nothing value for the annotation on newly created nodes Or you can write your own MkElementClass instance Apart from that there is no requirement for to be Maybe type",
          "hierarchy": "Text XML Expat Extended",
          "module": "Text.XML.Expat.Extended",
          "name": "NodeG",
          "package": "hexpat",
          "partial": "Node",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#t:NodeG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Extended",
          "name": "ParseOptions",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-SAX.html#ParseOptions",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text XML Expat Extended",
          "module": "Text.XML.Expat.Extended",
          "name": "ParseOptions",
          "package": "hexpat",
          "partial": "Parse Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#t:ParseOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType alias for an extended document where qualified names are used for tags\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Extended",
          "name": "QDocument",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Extended.html#QDocument",
          "type": "type"
        },
        "index": {
          "description": "Type alias for an extended document where qualified names are used for tags",
          "hierarchy": "Text XML Expat Extended",
          "module": "Text.XML.Expat.Extended",
          "name": "QDocument",
          "package": "hexpat",
          "partial": "QDocument",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#t:QDocument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType alias for an extended document where qualified names are used for tags, annotated with parse location\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Extended",
          "name": "QLDocument",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Extended.html#QLDocument",
          "type": "type"
        },
        "index": {
          "description": "Type alias for an extended document where qualified names are used for tags annotated with parse location",
          "hierarchy": "Text XML Expat Extended",
          "module": "Text.XML.Expat.Extended",
          "name": "QLDocument",
          "package": "hexpat",
          "partial": "QLDocument",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#t:QLDocument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType alias for an extended node where qualified names are used for tags, annotated with parse location\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Extended",
          "name": "QLNode",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Extended.html#QLNode",
          "type": "type"
        },
        "index": {
          "description": "Type alias for an extended node where qualified names are used for tags annotated with parse location",
          "hierarchy": "Text XML Expat Extended",
          "module": "Text.XML.Expat.Extended",
          "name": "QLNode",
          "package": "hexpat",
          "partial": "QLNode",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#t:QLNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType alias for an extended node where qualified names are used for tags\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Extended",
          "name": "QNode",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Extended.html#QNode",
          "type": "type"
        },
        "index": {
          "description": "Type alias for an extended node where qualified names are used for tags",
          "hierarchy": "Text XML Expat Extended",
          "module": "Text.XML.Expat.Extended",
          "name": "QNode",
          "package": "hexpat",
          "partial": "QNode",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#t:QNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType alias for an extended document with unqualified tag names where\n tag and text are the same string type\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Extended",
          "name": "UDocument",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Extended.html#UDocument",
          "type": "type"
        },
        "index": {
          "description": "Type alias for an extended document with unqualified tag names where tag and text are the same string type",
          "hierarchy": "Text XML Expat Extended",
          "module": "Text.XML.Expat.Extended",
          "name": "UDocument",
          "package": "hexpat",
          "partial": "UDocument",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#t:UDocument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType alias for an extended document with unqualified tag names where\n tag and text are the same string type, annotated with parse location\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Extended",
          "name": "ULDocument",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Extended.html#ULDocument",
          "type": "type"
        },
        "index": {
          "description": "Type alias for an extended document with unqualified tag names where tag and text are the same string type annotated with parse location",
          "hierarchy": "Text XML Expat Extended",
          "module": "Text.XML.Expat.Extended",
          "name": "ULDocument",
          "package": "hexpat",
          "partial": "ULDocument",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#t:ULDocument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType alias for an extended node with unqualified tag names where\n tag and text are the same string type, annotated with parse location\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Extended",
          "name": "ULNode",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Extended.html#ULNode",
          "type": "type"
        },
        "index": {
          "description": "Type alias for an extended node with unqualified tag names where tag and text are the same string type annotated with parse location",
          "hierarchy": "Text XML Expat Extended",
          "module": "Text.XML.Expat.Extended",
          "name": "ULNode",
          "package": "hexpat",
          "partial": "ULNode",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#t:ULNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType alias for an extended node with unqualified tag names where\n tag and text are the same string type\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Extended",
          "name": "UNode",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Extended.html#UNode",
          "type": "type"
        },
        "index": {
          "description": "Type alias for an extended node with unqualified tag names where tag and text are the same string type",
          "hierarchy": "Text XML Expat Extended",
          "module": "Text.XML.Expat.Extended",
          "name": "UNode",
          "package": "hexpat",
          "partial": "UNode",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#t:UNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse error, consisting of message text and error location\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Extended",
          "name": "XMLParseError",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Internal-IO.html#XMLParseError",
          "type": "data"
        },
        "index": {
          "description": "Parse error consisting of message text and error location",
          "hierarchy": "Text XML Expat Extended",
          "module": "Text.XML.Expat.Extended",
          "name": "XMLParseError",
          "package": "hexpat",
          "partial": "XMLParse Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#t:XMLParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn exception indicating an XML parse error, used by the \u003cem\u003e..Throwing\u003c/em\u003e variants.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Extended",
          "name": "XMLParseException",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-SAX.html#XMLParseException",
          "type": "data"
        },
        "index": {
          "description": "An exception indicating an XML parse error used by the Throwing variants",
          "hierarchy": "Text XML Expat Extended",
          "module": "Text.XML.Expat.Extended",
          "name": "XMLParseException",
          "package": "hexpat",
          "partial": "XMLParse Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#t:XMLParseException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies a location of an event within the input text\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Extended",
          "name": "XMLParseLocation",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Internal-IO.html#XMLParseLocation",
          "type": "data"
        },
        "index": {
          "description": "Specifies location of an event within the input text",
          "hierarchy": "Text XML Expat Extended",
          "module": "Text.XML.Expat.Extended",
          "name": "XMLParseLocation",
          "package": "hexpat",
          "partial": "XMLParse Location",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#t:XMLParseLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Extended",
          "name": "CData",
          "package": "hexpat",
          "signature": "CData !text",
          "source": "src/Text-XML-Expat-Extended.html#NodeG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Extended",
          "module": "Text.XML.Expat.Extended",
          "name": "CData",
          "package": "hexpat",
          "partial": "CData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#v:CData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Extended",
          "name": "Document",
          "package": "hexpat",
          "signature": "Document",
          "source": "src/Text-XML-Expat-Extended.html#DocumentG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Extended",
          "module": "Text.XML.Expat.Extended",
          "name": "Document",
          "package": "hexpat",
          "partial": "Document",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#v:Document"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Extended",
          "name": "Element",
          "package": "hexpat",
          "signature": "Element",
          "source": "src/Text-XML-Expat-Extended.html#NodeG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Extended",
          "module": "Text.XML.Expat.Extended",
          "name": "Element",
          "package": "hexpat",
          "partial": "Element",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#v:Element"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Extended",
          "name": "Misc",
          "package": "hexpat",
          "signature": "Misc (Misc text)",
          "source": "src/Text-XML-Expat-Extended.html#NodeG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Extended",
          "module": "Text.XML.Expat.Extended",
          "name": "Misc",
          "package": "hexpat",
          "partial": "Misc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#v:Misc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Extended",
          "name": "Text",
          "package": "hexpat",
          "signature": "Text !text",
          "source": "src/Text-XML-Expat-Extended.html#NodeG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Extended",
          "module": "Text.XML.Expat.Extended",
          "name": "Text",
          "package": "hexpat",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#v:Text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Extended",
          "name": "dDocumentTypeDeclaration",
          "package": "hexpat",
          "signature": "Maybe (DocumentTypeDeclaration c tag text)",
          "source": "src/Text-XML-Expat-Extended.html#DocumentG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Extended",
          "module": "Text.XML.Expat.Extended",
          "name": "dDocumentTypeDeclaration",
          "package": "hexpat",
          "partial": "Document Type Declaration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#v:dDocumentTypeDeclaration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Extended",
          "name": "dRoot",
          "package": "hexpat",
          "signature": "NodeG a c tag text",
          "source": "src/Text-XML-Expat-Extended.html#DocumentG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Extended",
          "module": "Text.XML.Expat.Extended",
          "name": "dRoot",
          "package": "hexpat",
          "partial": "Root",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#v:dRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Extended",
          "name": "dTopLevelMiscs",
          "package": "hexpat",
          "signature": "c (Misc text)",
          "source": "src/Text-XML-Expat-Extended.html#DocumentG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Extended",
          "module": "Text.XML.Expat.Extended",
          "name": "dTopLevelMiscs",
          "package": "hexpat",
          "partial": "Top Level Miscs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#v:dTopLevelMiscs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Extended",
          "name": "dXMLDeclaration",
          "package": "hexpat",
          "signature": "Maybe (XMLDeclaration text)",
          "source": "src/Text-XML-Expat-Extended.html#DocumentG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Extended",
          "module": "Text.XML.Expat.Extended",
          "name": "dXMLDeclaration",
          "package": "hexpat",
          "partial": "XMLDeclaration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#v:dXMLDeclaration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Extended",
          "name": "eAnn",
          "package": "hexpat",
          "signature": "a",
          "source": "src/Text-XML-Expat-Extended.html#NodeG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Extended",
          "module": "Text.XML.Expat.Extended",
          "name": "eAnn",
          "package": "hexpat",
          "partial": "Ann",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#v:eAnn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Extended",
          "name": "eAttributes",
          "package": "hexpat",
          "signature": "[(tag, text)]",
          "source": "src/Text-XML-Expat-Extended.html#NodeG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Extended",
          "module": "Text.XML.Expat.Extended",
          "name": "eAttributes",
          "normalized": "[(a,b)]",
          "package": "hexpat",
          "partial": "Attributes",
          "signature": "[(tag,text)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#v:eAttributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Extended",
          "name": "eChildren",
          "package": "hexpat",
          "signature": "c (NodeG a c tag text)",
          "source": "src/Text-XML-Expat-Extended.html#NodeG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Extended",
          "module": "Text.XML.Expat.Extended",
          "name": "eChildren",
          "package": "hexpat",
          "partial": "Children",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#v:eChildren"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Extended",
          "name": "eName",
          "package": "hexpat",
          "signature": "tag",
          "source": "src/Text-XML-Expat-Extended.html#NodeG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Extended",
          "module": "Text.XML.Expat.Extended",
          "name": "eName",
          "package": "hexpat",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#v:eName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Extended",
          "name": "gxBreakOn",
          "package": "hexpat",
          "signature": "Char -\u003e s -\u003e (s, s)",
          "source": "src/Text-XML-Expat-SAX.html#gxBreakOn",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XML Expat Extended",
          "module": "Text.XML.Expat.Extended",
          "name": "gxBreakOn",
          "normalized": "Char-\u003ea-\u003e(a,a)",
          "package": "hexpat",
          "partial": "Break On",
          "signature": "Char-\u003es-\u003e(s,s)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#v:gxBreakOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Extended",
          "name": "gxFromByteString",
          "package": "hexpat",
          "signature": "ByteString -\u003e s",
          "source": "src/Text-XML-Expat-SAX.html#gxFromByteString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XML Expat Extended",
          "module": "Text.XML.Expat.Extended",
          "name": "gxFromByteString",
          "normalized": "ByteString-\u003ea",
          "package": "hexpat",
          "partial": "From Byte String",
          "signature": "ByteString-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#v:gxFromByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Extended",
          "name": "gxFromChar",
          "package": "hexpat",
          "signature": "Char -\u003e s",
          "source": "src/Text-XML-Expat-SAX.html#gxFromChar",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XML Expat Extended",
          "module": "Text.XML.Expat.Extended",
          "name": "gxFromChar",
          "normalized": "Char-\u003ea",
          "package": "hexpat",
          "partial": "From Char",
          "signature": "Char-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#v:gxFromChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Extended",
          "name": "gxFromString",
          "package": "hexpat",
          "signature": "String -\u003e s",
          "source": "src/Text-XML-Expat-SAX.html#gxFromString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XML Expat Extended",
          "module": "Text.XML.Expat.Extended",
          "name": "gxFromString",
          "normalized": "String-\u003ea",
          "package": "hexpat",
          "partial": "From String",
          "signature": "String-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#v:gxFromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Extended",
          "name": "gxHead",
          "package": "hexpat",
          "signature": "s -\u003e Char",
          "source": "src/Text-XML-Expat-SAX.html#gxHead",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XML Expat Extended",
          "module": "Text.XML.Expat.Extended",
          "name": "gxHead",
          "normalized": "a-\u003eChar",
          "package": "hexpat",
          "partial": "Head",
          "signature": "s-\u003eChar",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#v:gxHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Extended",
          "name": "gxNullString",
          "package": "hexpat",
          "signature": "s -\u003e Bool",
          "source": "src/Text-XML-Expat-SAX.html#gxNullString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XML Expat Extended",
          "module": "Text.XML.Expat.Extended",
          "name": "gxNullString",
          "normalized": "a-\u003eBool",
          "package": "hexpat",
          "partial": "Null String",
          "signature": "s-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#v:gxNullString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Extended",
          "name": "gxTail",
          "package": "hexpat",
          "signature": "s -\u003e s",
          "source": "src/Text-XML-Expat-SAX.html#gxTail",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XML Expat Extended",
          "module": "Text.XML.Expat.Extended",
          "name": "gxTail",
          "normalized": "a-\u003ea",
          "package": "hexpat",
          "partial": "Tail",
          "signature": "s-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#v:gxTail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Extended",
          "name": "gxToByteString",
          "package": "hexpat",
          "signature": "s -\u003e ByteString",
          "source": "src/Text-XML-Expat-SAX.html#gxToByteString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XML Expat Extended",
          "module": "Text.XML.Expat.Extended",
          "name": "gxToByteString",
          "normalized": "a-\u003eByteString",
          "package": "hexpat",
          "partial": "To Byte String",
          "signature": "s-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#v:gxToByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Extended",
          "name": "gxToString",
          "package": "hexpat",
          "signature": "s -\u003e String",
          "source": "src/Text-XML-Expat-SAX.html#gxToString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XML Expat Extended",
          "module": "Text.XML.Expat.Extended",
          "name": "gxToString",
          "normalized": "a-\u003eString",
          "package": "hexpat",
          "partial": "To String",
          "signature": "s-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#v:gxToString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify this node's annotation and all its children recursively if it's an element, otherwise no-op.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Extended",
          "name": "mapAnnotation",
          "package": "hexpat",
          "signature": "(a -\u003e b) -\u003e Node a tag text -\u003e Node b tag text",
          "source": "src/Text-XML-Expat-Extended.html#mapAnnotation",
          "type": "function"
        },
        "index": {
          "description": "Modify this node annotation and all its children recursively if it an element otherwise no-op",
          "hierarchy": "Text XML Expat Extended",
          "module": "Text.XML.Expat.Extended",
          "name": "mapAnnotation",
          "normalized": "(a-\u003eb)-\u003eNode a c d-\u003eNode b c d",
          "package": "hexpat",
          "partial": "Annotation",
          "signature": "(a-\u003eb)-\u003eNode a tag text-\u003eNode b tag text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#v:mapAnnotation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify the annotation of every node in the document recursively.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Extended",
          "name": "mapDocumentAnnotation",
          "package": "hexpat",
          "signature": "(a -\u003e b) -\u003e Document a tag text -\u003e Document b tag text",
          "source": "src/Text-XML-Expat-Extended.html#mapDocumentAnnotation",
          "type": "function"
        },
        "index": {
          "description": "Modify the annotation of every node in the document recursively",
          "hierarchy": "Text XML Expat Extended",
          "module": "Text.XML.Expat.Extended",
          "name": "mapDocumentAnnotation",
          "normalized": "(a-\u003eb)-\u003eDocument a c d-\u003eDocument b c d",
          "package": "hexpat",
          "partial": "Document Annotation",
          "signature": "(a-\u003eb)-\u003eDocument a tag text-\u003eDocument b tag text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#v:mapDocumentAnnotation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify this node's annotation (non-recursively) if it's an element, otherwise no-op.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Extended",
          "name": "modifyAnnotation",
          "package": "hexpat",
          "signature": "(a -\u003e a) -\u003e Node a tag text -\u003e Node a tag text",
          "source": "src/Text-XML-Expat-Extended.html#modifyAnnotation",
          "type": "function"
        },
        "index": {
          "description": "Modify this node annotation non-recursively if it an element otherwise no-op",
          "hierarchy": "Text XML Expat Extended",
          "module": "Text.XML.Expat.Extended",
          "name": "modifyAnnotation",
          "normalized": "(a-\u003ea)-\u003eNode a b c-\u003eNode a b c",
          "package": "hexpat",
          "partial": "Annotation",
          "signature": "(a-\u003ea)-\u003eNode a tag text-\u003eNode a tag text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#v:modifyAnnotation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLazily parse XML to tree. Note that forcing the XMLParseError return value\n will force the entire parse.  Therefore, to ensure lazy operation, don't\n check the error status until you have processed the tree.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Extended",
          "name": "parse",
          "package": "hexpat",
          "signature": "ParseOptions tag text-\u003e ByteString-\u003e (LDocument tag text, Maybe XMLParseError)",
          "type": "function"
        },
        "index": {
          "description": "Lazily parse XML to tree Note that forcing the XMLParseError return value will force the entire parse Therefore to ensure lazy operation don check the error status until you have processed the tree",
          "hierarchy": "Text XML Expat Extended",
          "module": "Text.XML.Expat.Extended",
          "name": "parse",
          "normalized": "ParseOptions a b-\u003eByteString-\u003e(LDocument a b,Maybe XMLParseError)",
          "package": "hexpat",
          "signature": "ParseOptions tag text-\u003eByteString-\u003e(LDocument tag text,Maybe XMLParseError)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrictly parse XML to tree. Returns error message or valid parsed tree.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Extended",
          "name": "parse'",
          "package": "hexpat",
          "signature": "ParseOptions tag text-\u003e ByteString-\u003e Either XMLParseError (LDocument tag text)",
          "type": "function"
        },
        "index": {
          "description": "Strictly parse XML to tree Returns error message or valid parsed tree",
          "hierarchy": "Text XML Expat Extended",
          "module": "Text.XML.Expat.Extended",
          "name": "parse'",
          "normalized": "ParseOptions a b-\u003eByteString-\u003eEither XMLParseError(LDocument a b)",
          "package": "hexpat",
          "signature": "ParseOptions tag text-\u003eByteString-\u003eEither XMLParseError(LDocument tag text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#v:parse-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLazily parse XML to tree. In the event of an error, throw \u003ccode\u003e\u003ca\u003eXMLParseException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eparseThrowing\u003c/code\u003e can throw an exception from pure code, which is generally a bad\n way to handle errors, because Haskell's lazy evaluation means it's hard to\n predict where it will be thrown from.  However, it may be acceptable in\n situations where it's not expected during normal operation, depending on the\n design of your program.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Extended",
          "name": "parseThrowing",
          "package": "hexpat",
          "signature": "ParseOptions tag text-\u003e ByteString-\u003e LDocument tag text",
          "type": "function"
        },
        "index": {
          "description": "Lazily parse XML to tree In the event of an error throw XMLParseException parseThrowing can throw an exception from pure code which is generally bad way to handle errors because Haskell lazy evaluation means it hard to predict where it will be thrown from However it may be acceptable in situations where it not expected during normal operation depending on the design of your program",
          "hierarchy": "Text XML Expat Extended",
          "module": "Text.XML.Expat.Extended",
          "name": "parseThrowing",
          "normalized": "ParseOptions a b-\u003eByteString-\u003eLDocument a b",
          "package": "hexpat",
          "partial": "Throwing",
          "signature": "ParseOptions tag text-\u003eByteString-\u003eLDocument tag text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#v:parseThrowing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA lower level function that lazily converts a SAX stream into a tree structure.\n Variant that takes annotations for start tags.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Extended",
          "name": "saxToTree",
          "package": "hexpat",
          "signature": "[(SAXEvent tag text, a)] -\u003e (Document a tag text, Maybe XMLParseError)",
          "source": "src/Text-XML-Expat-Extended.html#saxToTree",
          "type": "function"
        },
        "index": {
          "description": "lower level function that lazily converts SAX stream into tree structure Variant that takes annotations for start tags",
          "hierarchy": "Text XML Expat Extended",
          "module": "Text.XML.Expat.Extended",
          "name": "saxToTree",
          "normalized": "[(SAXEvent a b,c)]-\u003e(Document c a b,Maybe XMLParseError)",
          "package": "hexpat",
          "partial": "To Tree",
          "signature": "[(SAXEvent tag text,a)]-\u003e(Document a tag text,Maybe XMLParseError)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Extended.html#v:saxToTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides functions to format a tree\n structure or SAX stream as UTF-8 encoded XML.\n\u003c/p\u003e\u003cp\u003eThe formatting functions always outputs only UTF-8, regardless\n of what encoding is specified in the document's \u003ccode\u003e\u003ca\u003eXMLDeclaration\u003c/a\u003e\u003c/code\u003e.\n If you want to output a document in another encoding, then make sure the\n \u003ccode\u003e\u003ca\u003eXMLDeclaration\u003c/a\u003e\u003c/code\u003e agrees with the final output encoding, then format the\n document, and convert from UTF-8 to your desired encoding using some text\n conversion library.\n\u003c/p\u003e\u003cp\u003eThe lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e representation of the output in generated with very\n small chunks, so in some applications you may want to combine them into\n larger chunks to get better efficiency.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.Expat.Format",
          "name": "Format",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Format.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides functions to format tree structure or SAX stream as UTF-8 encoded XML The formatting functions always outputs only UTF-8 regardless of what encoding is specified in the document XMLDeclaration If you want to output document in another encoding then make sure the XMLDeclaration agrees with the final output encoding then format the document and convert from UTF-8 to your desired encoding using some text conversion library The lazy ByteString representation of the output in generated with very small chunks so in some applications you may want to combine them into larger chunks to get better efficiency",
          "hierarchy": "Text XML Expat Format",
          "module": "Text.XML.Expat.Format",
          "name": "Format",
          "package": "hexpat",
          "partial": "Format",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Format.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Format",
          "name": "documentToSAX",
          "package": "hexpat",
          "signature": "d c tag text -\u003e c (SAXEvent tag text)",
          "source": "src/Text-XML-Expat-Format.html#documentToSAX",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Format",
          "module": "Text.XML.Expat.Format",
          "name": "documentToSAX",
          "normalized": "a b c d-\u003eb(SAXEvent c d)",
          "package": "hexpat",
          "partial": "To SAX",
          "signature": "d c tag text-\u003ec(SAXEvent tag text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Format.html#v:documentToSAX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat document with \u003c?xml.. header - lazy variant that returns lazy ByteString.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Format",
          "name": "format",
          "package": "hexpat",
          "signature": "n [] tag text -\u003e ByteString",
          "source": "src/Text-XML-Expat-Format.html#format",
          "type": "function"
        },
        "index": {
          "description": "Format document with xml header lazy variant that returns lazy ByteString",
          "hierarchy": "Text XML Expat Format",
          "module": "Text.XML.Expat.Format",
          "name": "format",
          "normalized": "a[]b c-\u003eByteString",
          "package": "hexpat",
          "signature": "n[]tag text-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Format.html#v:format"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat document with \u003c?xml.. header - strict variant that returns strict ByteString.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Format",
          "name": "format'",
          "package": "hexpat",
          "signature": "n [] tag text -\u003e ByteString",
          "source": "src/Text-XML-Expat-Format.html#format%27",
          "type": "function"
        },
        "index": {
          "description": "Format document with xml header strict variant that returns strict ByteString",
          "hierarchy": "Text XML Expat Format",
          "module": "Text.XML.Expat.Format",
          "name": "format'",
          "normalized": "a[]b c-\u003eByteString",
          "package": "hexpat",
          "signature": "n[]tag text-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Format.html#v:format-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat an XML document - lazy variant that returns lazy ByteString.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Format",
          "name": "formatDocument",
          "package": "hexpat",
          "signature": "d [] tag text -\u003e ByteString",
          "source": "src/Text-XML-Expat-Format.html#formatDocument",
          "type": "function"
        },
        "index": {
          "description": "Format an XML document lazy variant that returns lazy ByteString",
          "hierarchy": "Text XML Expat Format",
          "module": "Text.XML.Expat.Format",
          "name": "formatDocument",
          "normalized": "a[]b c-\u003eByteString",
          "package": "hexpat",
          "partial": "Document",
          "signature": "d[]tag text-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Format.html#v:formatDocument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat an XML document - strict variant that returns strict ByteString.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Format",
          "name": "formatDocument'",
          "package": "hexpat",
          "signature": "d [] tag text -\u003e ByteString",
          "source": "src/Text-XML-Expat-Format.html#formatDocument%27",
          "type": "function"
        },
        "index": {
          "description": "Format an XML document strict variant that returns strict ByteString",
          "hierarchy": "Text XML Expat Format",
          "module": "Text.XML.Expat.Format",
          "name": "formatDocument'",
          "normalized": "a[]b c-\u003eByteString",
          "package": "hexpat",
          "partial": "Document'",
          "signature": "d[]tag text-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Format.html#v:formatDocument-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat an XML document - generalized variant that returns a generic\n list of strict ByteStrings.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Format",
          "name": "formatDocumentG",
          "package": "hexpat",
          "signature": "d c tag text -\u003e c ByteString",
          "source": "src/Text-XML-Expat-Format.html#formatDocumentG",
          "type": "function"
        },
        "index": {
          "description": "Format an XML document generalized variant that returns generic list of strict ByteStrings",
          "hierarchy": "Text XML Expat Format",
          "module": "Text.XML.Expat.Format",
          "name": "formatDocumentG",
          "normalized": "a b c d-\u003eb ByteString",
          "package": "hexpat",
          "partial": "Document",
          "signature": "d c tag text-\u003ec ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Format.html#v:formatDocumentG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat document with \u003c?xml.. header - generalized variant that returns a generic\n list of strict ByteStrings.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Format",
          "name": "formatG",
          "package": "hexpat",
          "signature": "n c tag text -\u003e c ByteString",
          "source": "src/Text-XML-Expat-Format.html#formatG",
          "type": "function"
        },
        "index": {
          "description": "Format document with xml header generalized variant that returns generic list of strict ByteStrings",
          "hierarchy": "Text XML Expat Format",
          "module": "Text.XML.Expat.Format",
          "name": "formatG",
          "normalized": "a b c d-\u003eb ByteString",
          "package": "hexpat",
          "signature": "n c tag text-\u003ec ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Format.html#v:formatG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat XML node with no header - lazy variant that returns lazy ByteString.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Format",
          "name": "formatNode",
          "package": "hexpat",
          "signature": "n [] tag text -\u003e ByteString",
          "source": "src/Text-XML-Expat-Format.html#formatNode",
          "type": "function"
        },
        "index": {
          "description": "Format XML node with no header lazy variant that returns lazy ByteString",
          "hierarchy": "Text XML Expat Format",
          "module": "Text.XML.Expat.Format",
          "name": "formatNode",
          "normalized": "a[]b c-\u003eByteString",
          "package": "hexpat",
          "partial": "Node",
          "signature": "n[]tag text-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Format.html#v:formatNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat XML node with no header - strict variant that returns strict ByteString.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Format",
          "name": "formatNode'",
          "package": "hexpat",
          "signature": "n [] tag text -\u003e ByteString",
          "source": "src/Text-XML-Expat-Format.html#formatNode%27",
          "type": "function"
        },
        "index": {
          "description": "Format XML node with no header strict variant that returns strict ByteString",
          "hierarchy": "Text XML Expat Format",
          "module": "Text.XML.Expat.Format",
          "name": "formatNode'",
          "normalized": "a[]b c-\u003eByteString",
          "package": "hexpat",
          "partial": "Node'",
          "signature": "n[]tag text-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Format.html#v:formatNode-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat XML node with no header - generalized variant that returns a generic\n list of strict ByteStrings.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Format",
          "name": "formatNodeG",
          "package": "hexpat",
          "signature": "n c tag text -\u003e c ByteString",
          "source": "src/Text-XML-Expat-Format.html#formatNodeG",
          "type": "function"
        },
        "index": {
          "description": "Format XML node with no header generalized variant that returns generic list of strict ByteStrings",
          "hierarchy": "Text XML Expat Format",
          "module": "Text.XML.Expat.Format",
          "name": "formatNodeG",
          "normalized": "a b c d-\u003eb ByteString",
          "package": "hexpat",
          "partial": "Node",
          "signature": "n c tag text-\u003ec ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Format.html#v:formatNodeG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat SAX events with no header - lazy variant that returns lazy ByteString.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Format",
          "name": "formatSAX",
          "package": "hexpat",
          "signature": "[SAXEvent tag text] -\u003e ByteString",
          "source": "src/Text-XML-Expat-Format.html#formatSAX",
          "type": "function"
        },
        "index": {
          "description": "Format SAX events with no header lazy variant that returns lazy ByteString",
          "hierarchy": "Text XML Expat Format",
          "module": "Text.XML.Expat.Format",
          "name": "formatSAX",
          "normalized": "[SAXEvent a b]-\u003eByteString",
          "package": "hexpat",
          "partial": "SAX",
          "signature": "[SAXEvent tag text]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Format.html#v:formatSAX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat SAX events with no header - strict variant that returns strict ByteString.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Format",
          "name": "formatSAX'",
          "package": "hexpat",
          "signature": "[SAXEvent tag text] -\u003e ByteString",
          "source": "src/Text-XML-Expat-Format.html#formatSAX%27",
          "type": "function"
        },
        "index": {
          "description": "Format SAX events with no header strict variant that returns strict ByteString",
          "hierarchy": "Text XML Expat Format",
          "module": "Text.XML.Expat.Format",
          "name": "formatSAX'",
          "normalized": "[SAXEvent a b]-\u003eByteString",
          "package": "hexpat",
          "partial": "SAX'",
          "signature": "[SAXEvent tag text]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Format.html#v:formatSAX-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat SAX events with no header - generalized variant that uses generic\n list.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Format",
          "name": "formatSAXG",
          "package": "hexpat",
          "signature": "c (SAXEvent tag text)-\u003e c ByteString",
          "type": "function"
        },
        "index": {
          "description": "Format SAX events with no header generalized variant that uses generic list",
          "hierarchy": "Text XML Expat Format",
          "module": "Text.XML.Expat.Format",
          "name": "formatSAXG",
          "normalized": "a(SAXEvent b c)-\u003ea ByteString",
          "package": "hexpat",
          "partial": "SAXG",
          "signature": "c(SAXEvent tag text)-\u003ec ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Format.html#v:formatSAXG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake the output prettier by adding indentation.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Format",
          "name": "indent",
          "package": "hexpat",
          "signature": "Int-\u003e n c tag text-\u003e n c tag text",
          "type": "function"
        },
        "index": {
          "description": "Make the output prettier by adding indentation",
          "hierarchy": "Text XML Expat Format",
          "module": "Text.XML.Expat.Format",
          "name": "indent",
          "normalized": "Int-\u003ea b c d-\u003ea b c d",
          "package": "hexpat",
          "signature": "Int-\u003en c tag text-\u003en c tag text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Format.html#v:indent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake the output prettier by adding indentation, specifying initial indent.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Format",
          "name": "indent_",
          "package": "hexpat",
          "signature": "Int-\u003e Int-\u003e n c tag text-\u003e n c tag text",
          "type": "function"
        },
        "index": {
          "description": "Make the output prettier by adding indentation specifying initial indent",
          "hierarchy": "Text XML Expat Format",
          "module": "Text.XML.Expat.Format",
          "name": "indent_",
          "normalized": "Int-\u003eInt-\u003ea b c d-\u003ea b c d",
          "package": "hexpat",
          "signature": "Int-\u003eInt-\u003en c tag text-\u003en c tag text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Format.html#v:indent_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlatten a tree structure into SAX events, monadic version.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Format",
          "name": "treeToSAX",
          "package": "hexpat",
          "signature": "n c tag text -\u003e c (SAXEvent tag text)",
          "source": "src/Text-XML-Expat-Format.html#treeToSAX",
          "type": "function"
        },
        "index": {
          "description": "Flatten tree structure into SAX events monadic version",
          "hierarchy": "Text XML Expat Format",
          "module": "Text.XML.Expat.Format",
          "name": "treeToSAX",
          "normalized": "a b c d-\u003eb(SAXEvent c d)",
          "package": "hexpat",
          "partial": "To SAX",
          "signature": "n c tag text-\u003ec(SAXEvent tag text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Format.html#v:treeToSAX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe standard XML header with UTF-8 encoding.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Format",
          "name": "xmlHeader",
          "package": "hexpat",
          "signature": "ByteString",
          "source": "src/Text-XML-Expat-Format.html#xmlHeader",
          "type": "function"
        },
        "index": {
          "description": "The standard XML header with UTF-8 encoding",
          "hierarchy": "Text XML Expat Format",
          "module": "Text.XML.Expat.Format",
          "name": "xmlHeader",
          "package": "hexpat",
          "partial": "Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Format.html#v:xmlHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eType classes to allow for XML handling functions to be generalized to\n work with different document types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.Expat.Internal.DocumentClass",
          "name": "DocumentClass",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Internal-DocumentClass.html",
          "type": "module"
        },
        "index": {
          "description": "Type classes to allow for XML handling functions to be generalized to work with different document types",
          "hierarchy": "Text XML Expat Internal DocumentClass",
          "module": "Text.XML.Expat.Internal.DocumentClass",
          "name": "DocumentClass",
          "package": "hexpat",
          "partial": "Document Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-DocumentClass.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Internal.DocumentClass",
          "name": "DocumentClass",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Internal-DocumentClass.html#DocumentClass",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text XML Expat Internal DocumentClass",
          "module": "Text.XML.Expat.Internal.DocumentClass",
          "name": "DocumentClass",
          "package": "hexpat",
          "partial": "Document Class",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-DocumentClass.html#t:DocumentClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStub for future expansion.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Internal.DocumentClass",
          "name": "DocumentTypeDeclaration",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Internal-DocumentClass.html#DocumentTypeDeclaration",
          "type": "data"
        },
        "index": {
          "description": "Stub for future expansion",
          "hierarchy": "Text XML Expat Internal DocumentClass",
          "module": "Text.XML.Expat.Internal.DocumentClass",
          "name": "DocumentTypeDeclaration",
          "package": "hexpat",
          "partial": "Document Type Declaration",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-DocumentClass.html#t:DocumentTypeDeclaration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Internal.DocumentClass",
          "name": "Misc",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Internal-DocumentClass.html#Misc",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text XML Expat Internal DocumentClass",
          "module": "Text.XML.Expat.Internal.DocumentClass",
          "name": "Misc",
          "package": "hexpat",
          "partial": "Misc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-DocumentClass.html#t:Misc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Internal.DocumentClass",
          "name": "NodeType",
          "package": "hexpat",
          "signature": "NodeType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Internal DocumentClass",
          "module": "Text.XML.Expat.Internal.DocumentClass",
          "name": "NodeType",
          "package": "hexpat",
          "partial": "Node Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-DocumentClass.html#t:NodeType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eXML declaration, consisting of version, encoding and standalone.\n\u003c/p\u003e\u003cp\u003eThe formatting functions always outputs only UTF-8, regardless\n of what encoding is specified here.  If you want to produce a document in a\n different encoding, then set the encoding here, format the document, and then\n convert the output text from UTF-8 to your desired encoding using some\n text conversion library.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Internal.DocumentClass",
          "name": "XMLDeclaration",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Internal-DocumentClass.html#XMLDeclaration",
          "type": "data"
        },
        "index": {
          "description": "XML declaration consisting of version encoding and standalone The formatting functions always outputs only UTF-8 regardless of what encoding is specified here If you want to produce document in different encoding then set the encoding here format the document and then convert the output text from UTF-8 to your desired encoding using some text conversion library",
          "hierarchy": "Text XML Expat Internal DocumentClass",
          "module": "Text.XML.Expat.Internal.DocumentClass",
          "name": "XMLDeclaration",
          "package": "hexpat",
          "partial": "XMLDeclaration",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-DocumentClass.html#t:XMLDeclaration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Internal.DocumentClass",
          "name": "Comment",
          "package": "hexpat",
          "signature": "Comment !text",
          "source": "src/Text-XML-Expat-Internal-DocumentClass.html#Misc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Internal DocumentClass",
          "module": "Text.XML.Expat.Internal.DocumentClass",
          "name": "Comment",
          "package": "hexpat",
          "partial": "Comment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-DocumentClass.html#v:Comment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Internal.DocumentClass",
          "name": "DocumentTypeDeclaration",
          "package": "hexpat",
          "signature": "DocumentTypeDeclaration",
          "source": "src/Text-XML-Expat-Internal-DocumentClass.html#DocumentTypeDeclaration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Internal DocumentClass",
          "module": "Text.XML.Expat.Internal.DocumentClass",
          "name": "DocumentTypeDeclaration",
          "package": "hexpat",
          "partial": "Document Type Declaration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-DocumentClass.html#v:DocumentTypeDeclaration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Internal.DocumentClass",
          "name": "ProcessingInstruction",
          "package": "hexpat",
          "signature": "ProcessingInstruction !text !text",
          "source": "src/Text-XML-Expat-Internal-DocumentClass.html#Misc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Internal DocumentClass",
          "module": "Text.XML.Expat.Internal.DocumentClass",
          "name": "ProcessingInstruction",
          "package": "hexpat",
          "partial": "Processing Instruction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-DocumentClass.html#v:ProcessingInstruction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Internal.DocumentClass",
          "name": "XMLDeclaration",
          "package": "hexpat",
          "signature": "XMLDeclaration text (Maybe text) (Maybe Bool)",
          "source": "src/Text-XML-Expat-Internal-DocumentClass.html#XMLDeclaration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Internal DocumentClass",
          "module": "Text.XML.Expat.Internal.DocumentClass",
          "name": "XMLDeclaration",
          "package": "hexpat",
          "partial": "XMLDeclaration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-DocumentClass.html#v:XMLDeclaration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the Document Type Declaration (DTD) for this document.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Internal.DocumentClass",
          "name": "getDocumentTypeDeclaration",
          "package": "hexpat",
          "signature": "d c tag text -\u003e Maybe (DocumentTypeDeclaration c tag text)",
          "source": "src/Text-XML-Expat-Internal-DocumentClass.html#getDocumentTypeDeclaration",
          "type": "method"
        },
        "index": {
          "description": "Get the Document Type Declaration DTD for this document",
          "hierarchy": "Text XML Expat Internal DocumentClass",
          "module": "Text.XML.Expat.Internal.DocumentClass",
          "name": "getDocumentTypeDeclaration",
          "normalized": "a b c d-\u003eMaybe(DocumentTypeDeclaration b c d)",
          "package": "hexpat",
          "partial": "Document Type Declaration",
          "signature": "d c tag text-\u003eMaybe(DocumentTypeDeclaration c tag text)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-DocumentClass.html#v:getDocumentTypeDeclaration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the root element for this document.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Internal.DocumentClass",
          "name": "getRoot",
          "package": "hexpat",
          "signature": "d c tag text -\u003e NodeType d c tag text",
          "source": "src/Text-XML-Expat-Internal-DocumentClass.html#getRoot",
          "type": "method"
        },
        "index": {
          "description": "Get the root element for this document",
          "hierarchy": "Text XML Expat Internal DocumentClass",
          "module": "Text.XML.Expat.Internal.DocumentClass",
          "name": "getRoot",
          "normalized": "a b c d-\u003eNodeType a b c d",
          "package": "hexpat",
          "partial": "Root",
          "signature": "d c tag text-\u003eNodeType d c tag text",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-DocumentClass.html#v:getRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the top-level \u003ccode\u003e\u003ca\u003eMisc\u003c/a\u003e\u003c/code\u003e nodes for this document.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Internal.DocumentClass",
          "name": "getTopLevelMiscs",
          "package": "hexpat",
          "signature": "d c tag text -\u003e c (Misc text)",
          "source": "src/Text-XML-Expat-Internal-DocumentClass.html#getTopLevelMiscs",
          "type": "method"
        },
        "index": {
          "description": "Get the top-level Misc nodes for this document",
          "hierarchy": "Text XML Expat Internal DocumentClass",
          "module": "Text.XML.Expat.Internal.DocumentClass",
          "name": "getTopLevelMiscs",
          "normalized": "a b c d-\u003eb(Misc d)",
          "package": "hexpat",
          "partial": "Top Level Miscs",
          "signature": "d c tag text-\u003ec(Misc text)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-DocumentClass.html#v:getTopLevelMiscs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the XML declaration for this document.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Internal.DocumentClass",
          "name": "getXMLDeclaration",
          "package": "hexpat",
          "signature": "d c tag text -\u003e Maybe (XMLDeclaration text)",
          "source": "src/Text-XML-Expat-Internal-DocumentClass.html#getXMLDeclaration",
          "type": "method"
        },
        "index": {
          "description": "Get the XML declaration for this document",
          "hierarchy": "Text XML Expat Internal DocumentClass",
          "module": "Text.XML.Expat.Internal.DocumentClass",
          "name": "getXMLDeclaration",
          "normalized": "a b c d-\u003eMaybe(XMLDeclaration d)",
          "package": "hexpat",
          "partial": "XMLDeclaration",
          "signature": "d c tag text-\u003eMaybe(XMLDeclaration text)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-DocumentClass.html#v:getXMLDeclaration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a document with the specified fields.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Internal.DocumentClass",
          "name": "mkDocument",
          "package": "hexpat",
          "signature": "Maybe (XMLDeclaration text) -\u003e Maybe (DocumentTypeDeclaration c tag text) -\u003e c (Misc text) -\u003e NodeType d c tag text -\u003e d c tag text",
          "source": "src/Text-XML-Expat-Internal-DocumentClass.html#mkDocument",
          "type": "method"
        },
        "index": {
          "description": "Make document with the specified fields",
          "hierarchy": "Text XML Expat Internal DocumentClass",
          "module": "Text.XML.Expat.Internal.DocumentClass",
          "name": "mkDocument",
          "normalized": "Maybe(XMLDeclaration a)-\u003eMaybe(DocumentTypeDeclaration b c a)-\u003eb(Misc a)-\u003eNodeType d b c a-\u003ed b c a",
          "package": "hexpat",
          "partial": "Document",
          "signature": "Maybe(XMLDeclaration text)-\u003eMaybe(DocumentTypeDeclaration c tag text)-\u003ec(Misc text)-\u003eNodeType d c tag text-\u003ed c tag text",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-DocumentClass.html#v:mkDocument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a document with the specified root node and all other information\n set to defaults.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Internal.DocumentClass",
          "name": "mkPlainDocument",
          "package": "hexpat",
          "signature": "NodeType d c tag text -\u003e d c tag text",
          "source": "src/Text-XML-Expat-Internal-DocumentClass.html#mkPlainDocument",
          "type": "function"
        },
        "index": {
          "description": "Make document with the specified root node and all other information set to defaults",
          "hierarchy": "Text XML Expat Internal DocumentClass",
          "module": "Text.XML.Expat.Internal.DocumentClass",
          "name": "mkPlainDocument",
          "normalized": "NodeType a b c d-\u003ea b c d",
          "package": "hexpat",
          "partial": "Plain Document",
          "signature": "NodeType d c tag text-\u003ed c tag text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-DocumentClass.html#v:mkPlainDocument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Internal.DocumentClass",
          "name": "modifyDocumentTypeDeclaration",
          "package": "hexpat",
          "signature": "(Maybe (DocumentTypeDeclaration c tag text) -\u003e Maybe (DocumentTypeDeclaration c tag text)) -\u003e d c tag text -\u003e d c tag text",
          "source": "src/Text-XML-Expat-Internal-DocumentClass.html#modifyDocumentTypeDeclaration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Internal DocumentClass",
          "module": "Text.XML.Expat.Internal.DocumentClass",
          "name": "modifyDocumentTypeDeclaration",
          "normalized": "(Maybe(DocumentTypeDeclaration a b c)-\u003eMaybe(DocumentTypeDeclaration a b c))-\u003ed a b c-\u003ed a b c",
          "package": "hexpat",
          "partial": "Document Type Declaration",
          "signature": "(Maybe(DocumentTypeDeclaration c tag text)-\u003eMaybe(DocumentTypeDeclaration c tag text))-\u003ed c tag text-\u003ed c tag text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-DocumentClass.html#v:modifyDocumentTypeDeclaration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Internal.DocumentClass",
          "name": "modifyRoot",
          "package": "hexpat",
          "signature": "(NodeType d c tag text -\u003e NodeType d c tag text) -\u003e d c tag text -\u003e d c tag text",
          "source": "src/Text-XML-Expat-Internal-DocumentClass.html#modifyRoot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Internal DocumentClass",
          "module": "Text.XML.Expat.Internal.DocumentClass",
          "name": "modifyRoot",
          "normalized": "(NodeType a b c d-\u003eNodeType a b c d)-\u003ea b c d-\u003ea b c d",
          "package": "hexpat",
          "partial": "Root",
          "signature": "(NodeType d c tag text-\u003eNodeType d c tag text)-\u003ed c tag text-\u003ed c tag text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-DocumentClass.html#v:modifyRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Internal.DocumentClass",
          "name": "modifyTopLevelMiscs",
          "package": "hexpat",
          "signature": "(c (Misc text) -\u003e c (Misc text)) -\u003e d c tag text -\u003e d c tag text",
          "source": "src/Text-XML-Expat-Internal-DocumentClass.html#modifyTopLevelMiscs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Internal DocumentClass",
          "module": "Text.XML.Expat.Internal.DocumentClass",
          "name": "modifyTopLevelMiscs",
          "normalized": "(a(Misc b)-\u003ea(Misc b))-\u003ec a d b-\u003ec a d b",
          "package": "hexpat",
          "partial": "Top Level Miscs",
          "signature": "(c(Misc text)-\u003ec(Misc text))-\u003ed c tag text-\u003ed c tag text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-DocumentClass.html#v:modifyTopLevelMiscs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Internal.DocumentClass",
          "name": "modifyXMLDeclaration",
          "package": "hexpat",
          "signature": "(Maybe (XMLDeclaration text) -\u003e Maybe (XMLDeclaration text)) -\u003e d c tag text -\u003e d c tag text",
          "source": "src/Text-XML-Expat-Internal-DocumentClass.html#modifyXMLDeclaration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Internal DocumentClass",
          "module": "Text.XML.Expat.Internal.DocumentClass",
          "name": "modifyXMLDeclaration",
          "normalized": "(Maybe(XMLDeclaration a)-\u003eMaybe(XMLDeclaration a))-\u003eb c d a-\u003eb c d a",
          "package": "hexpat",
          "partial": "XMLDeclaration",
          "signature": "(Maybe(XMLDeclaration text)-\u003eMaybe(XMLDeclaration text))-\u003ed c tag text-\u003ed c tag text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-DocumentClass.html#v:modifyXMLDeclaration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLow-level interface to Expat. Unless speed is paramount, this should\n normally be avoided in favour of the interfaces provided by\n \u003ccode\u003e\u003ca\u003eSAX\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eTree\u003c/a\u003e\u003c/code\u003e, etc.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.Expat.Internal.IO",
          "name": "IO",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Internal-IO.html",
          "type": "module"
        },
        "index": {
          "description": "Low-level interface to Expat Unless speed is paramount this should normally be avoided in favour of the interfaces provided by SAX and Tree etc",
          "hierarchy": "Text XML Expat Internal IO",
          "module": "Text.XML.Expat.Internal.IO",
          "name": "IO",
          "package": "hexpat",
          "partial": "IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-IO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Internal.IO",
          "name": "Encoding",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Internal-IO.html#Encoding",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text XML Expat Internal IO",
          "module": "Text.XML.Expat.Internal.IO",
          "name": "Encoding",
          "package": "hexpat",
          "partial": "Encoding",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-IO.html#t:Encoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Internal.IO",
          "name": "HParser",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Internal-IO.html#HParser",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text XML Expat Internal IO",
          "module": "Text.XML.Expat.Internal.IO",
          "name": "HParser",
          "package": "hexpat",
          "partial": "HParser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-IO.html#t:HParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse error, consisting of message text and error location\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Internal.IO",
          "name": "XMLParseError",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Internal-IO.html#XMLParseError",
          "type": "data"
        },
        "index": {
          "description": "Parse error consisting of message text and error location",
          "hierarchy": "Text XML Expat Internal IO",
          "module": "Text.XML.Expat.Internal.IO",
          "name": "XMLParseError",
          "package": "hexpat",
          "partial": "XMLParse Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-IO.html#t:XMLParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies a location of an event within the input text\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Internal.IO",
          "name": "XMLParseLocation",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Internal-IO.html#XMLParseLocation",
          "type": "data"
        },
        "index": {
          "description": "Specifies location of an event within the input text",
          "hierarchy": "Text XML Expat Internal IO",
          "module": "Text.XML.Expat.Internal.IO",
          "name": "XMLParseLocation",
          "package": "hexpat",
          "partial": "XMLParse Location",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-IO.html#t:XMLParseLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Internal.IO",
          "name": "encodingToString",
          "package": "hexpat",
          "signature": "Encoding -\u003e String",
          "source": "src/Text-XML-Expat-Internal-IO.html#encodingToString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Internal IO",
          "module": "Text.XML.Expat.Internal.IO",
          "name": "encodingToString",
          "normalized": "Encoding-\u003eString",
          "package": "hexpat",
          "partial": "To String",
          "signature": "Encoding-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-IO.html#v:encodingToString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Internal.IO",
          "name": "hexpatNewParser",
          "package": "hexpat",
          "signature": "Maybe Encoding-\u003e Maybe (ByteString -\u003e Maybe ByteString)-\u003e Bool-\u003e IO (HParser, IO XMLParseLocation)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Internal IO",
          "module": "Text.XML.Expat.Internal.IO",
          "name": "hexpatNewParser",
          "normalized": "Maybe Encoding-\u003eMaybe(ByteString-\u003eMaybe ByteString)-\u003eBool-\u003eIO(HParser,IO XMLParseLocation)",
          "package": "hexpat",
          "partial": "New Parser",
          "signature": "Maybe Encoding-\u003eMaybe(ByteString-\u003eMaybe ByteString)-\u003eBool-\u003eIO(HParser,IO XMLParseLocation)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-IO.html#v:hexpatNewParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Internal.Namespaced",
          "name": "Namespaced",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Internal-Namespaced.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text XML Expat Internal Namespaced",
          "module": "Text.XML.Expat.Internal.Namespaced",
          "name": "Namespaced",
          "package": "hexpat",
          "partial": "Namespaced",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-Namespaced.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType shortcut for attributes with namespaced names\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Internal.Namespaced",
          "name": "NAttributes",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Internal-Namespaced.html#NAttributes",
          "type": "type"
        },
        "index": {
          "description": "Type shortcut for attributes with namespaced names",
          "hierarchy": "Text XML Expat Internal Namespaced",
          "module": "Text.XML.Expat.Internal.Namespaced",
          "name": "NAttributes",
          "package": "hexpat",
          "partial": "NAttributes",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-Namespaced.html#t:NAttributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA namespace-qualified tag.\n\u003c/p\u003e\u003cp\u003eNName has two components, a local part and an optional namespace. The local part is the\n name of the tag. The namespace is the URI identifying collections of declared tags.\n Tags with the same local part but from different namespaces are distinct. Unqualified tags\n are those with no namespace. They are in the default namespace, and all uses of an\n unqualified tag are equivalent.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Internal.Namespaced",
          "name": "NName",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Internal-Namespaced.html#NName",
          "type": "data"
        },
        "index": {
          "description": "namespace-qualified tag NName has two components local part and an optional namespace The local part is the name of the tag The namespace is the URI identifying collections of declared tags Tags with the same local part but from different namespaces are distinct Unqualified tags are those with no namespace They are in the default namespace and all uses of an unqualified tag are equivalent",
          "hierarchy": "Text XML Expat Internal Namespaced",
          "module": "Text.XML.Expat.Internal.Namespaced",
          "name": "NName",
          "package": "hexpat",
          "partial": "NName",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-Namespaced.html#t:NName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Internal.Namespaced",
          "name": "NName",
          "package": "hexpat",
          "signature": "NName",
          "source": "src/Text-XML-Expat-Internal-Namespaced.html#NName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Internal Namespaced",
          "module": "Text.XML.Expat.Internal.Namespaced",
          "name": "NName",
          "package": "hexpat",
          "partial": "NName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-Namespaced.html#v:NName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Internal.Namespaced",
          "name": "fromNamespaced",
          "package": "hexpat",
          "signature": "n c (NName text) text -\u003e n c (QName text) text",
          "source": "src/Text-XML-Expat-Internal-Namespaced.html#fromNamespaced",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Internal Namespaced",
          "module": "Text.XML.Expat.Internal.Namespaced",
          "name": "fromNamespaced",
          "normalized": "a b(NName c)c-\u003ea b(QName c)c",
          "package": "hexpat",
          "partial": "Namespaced",
          "signature": "n c(NName text)text-\u003en c(QName text)text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-Namespaced.html#v:fromNamespaced"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a new NName with no prefix.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Internal.Namespaced",
          "name": "mkAnNName",
          "package": "hexpat",
          "signature": "text -\u003e NName text",
          "source": "src/Text-XML-Expat-Internal-Namespaced.html#mkAnNName",
          "type": "function"
        },
        "index": {
          "description": "Make new NName with no prefix",
          "hierarchy": "Text XML Expat Internal Namespaced",
          "module": "Text.XML.Expat.Internal.Namespaced",
          "name": "mkAnNName",
          "normalized": "a-\u003eNName a",
          "package": "hexpat",
          "partial": "An NName",
          "signature": "text-\u003eNName text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-Namespaced.html#v:mkAnNName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a new NName from a prefix and localPart.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Internal.Namespaced",
          "name": "mkNName",
          "package": "hexpat",
          "signature": "text -\u003e text -\u003e NName text",
          "source": "src/Text-XML-Expat-Internal-Namespaced.html#mkNName",
          "type": "function"
        },
        "index": {
          "description": "Make new NName from prefix and localPart",
          "hierarchy": "Text XML Expat Internal Namespaced",
          "module": "Text.XML.Expat.Internal.Namespaced",
          "name": "mkNName",
          "normalized": "a-\u003ea-\u003eNName a",
          "package": "hexpat",
          "partial": "NName",
          "signature": "text-\u003etext-\u003eNName text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-Namespaced.html#v:mkNName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Internal.Namespaced",
          "name": "nnLocalPart",
          "package": "hexpat",
          "signature": "text",
          "source": "src/Text-XML-Expat-Internal-Namespaced.html#NName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Internal Namespaced",
          "module": "Text.XML.Expat.Internal.Namespaced",
          "name": "nnLocalPart",
          "package": "hexpat",
          "partial": "Local Part",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-Namespaced.html#v:nnLocalPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Internal.Namespaced",
          "name": "nnNamespace",
          "package": "hexpat",
          "signature": "Maybe text",
          "source": "src/Text-XML-Expat-Internal-Namespaced.html#NName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Internal Namespaced",
          "module": "Text.XML.Expat.Internal.Namespaced",
          "name": "nnNamespace",
          "package": "hexpat",
          "partial": "Namespace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-Namespaced.html#v:nnNamespace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Internal.Namespaced",
          "name": "toNamespaced",
          "package": "hexpat",
          "signature": "n c (QName text) text -\u003e n c (NName text) text",
          "source": "src/Text-XML-Expat-Internal-Namespaced.html#toNamespaced",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Internal Namespaced",
          "module": "Text.XML.Expat.Internal.Namespaced",
          "name": "toNamespaced",
          "normalized": "a b(QName c)c-\u003ea b(NName c)c",
          "package": "hexpat",
          "partial": "Namespaced",
          "signature": "n c(QName text)text-\u003en c(NName text)text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-Namespaced.html#v:toNamespaced"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Internal.Namespaced",
          "name": "xmlns",
          "package": "hexpat",
          "signature": "text",
          "source": "src/Text-XML-Expat-Internal-Namespaced.html#xmlns",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Internal Namespaced",
          "module": "Text.XML.Expat.Internal.Namespaced",
          "name": "xmlns",
          "package": "hexpat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-Namespaced.html#v:xmlns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Internal.Namespaced",
          "name": "xmlnsUri",
          "package": "hexpat",
          "signature": "text",
          "source": "src/Text-XML-Expat-Internal-Namespaced.html#xmlnsUri",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Internal Namespaced",
          "module": "Text.XML.Expat.Internal.Namespaced",
          "name": "xmlnsUri",
          "package": "hexpat",
          "partial": "Uri",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-Namespaced.html#v:xmlnsUri"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eType classes to allow for XML handling functions to be generalized to\n work with different node types, including the ones defined in \u003cem\u003eTree\u003c/em\u003e and\n \u003cem\u003eAnnotated\u003c/em\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "NodeClass",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Internal-NodeClass.html",
          "type": "module"
        },
        "index": {
          "description": "Type classes to allow for XML handling functions to be generalized to work with different node types including the ones defined in Tree and Annotated",
          "hierarchy": "Text XML Expat Internal NodeClass",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "NodeClass",
          "package": "hexpat",
          "partial": "Node Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-NodeClass.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType shortcut for attributes\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "Attributes",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Internal-NodeClass.html#Attributes",
          "type": "type"
        },
        "index": {
          "description": "Type shortcut for attributes",
          "hierarchy": "Text XML Expat Internal NodeClass",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "Attributes",
          "package": "hexpat",
          "partial": "Attributes",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-NodeClass.html#t:Attributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type function to give the type of a list of nodes, using the appropriate\n list type for the specified node type, e.g. \u003ccode\u003eListOf (UNode Text)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "ListOf",
          "package": "hexpat",
          "signature": "ListOf",
          "type": "function"
        },
        "index": {
          "description": "type function to give the type of list of nodes using the appropriate list type for the specified node type e.g ListOf UNode Text",
          "hierarchy": "Text XML Expat Internal NodeClass",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "ListOf",
          "package": "hexpat",
          "partial": "List Of",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-NodeClass.html#t:ListOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class of node types where an Element can be constructed given a tag,\n attributes and children.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "MkElementClass",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Internal-NodeClass.html#MkElementClass",
          "type": "class"
        },
        "index": {
          "description": "class of node types where an Element can be constructed given tag attributes and children",
          "hierarchy": "Text XML Expat Internal NodeClass",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "MkElementClass",
          "package": "hexpat",
          "partial": "Mk Element Class",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-NodeClass.html#t:MkElementClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "NodeClass",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Internal-NodeClass.html#NodeClass",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text XML Expat Internal NodeClass",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "NodeClass",
          "package": "hexpat",
          "partial": "Node Class",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-NodeClass.html#t:NodeClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType shortcut for attributes with unqualified names where tag and\n text are the same string type.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "UAttributes",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Internal-NodeClass.html#UAttributes",
          "type": "type"
        },
        "index": {
          "description": "Type shortcut for attributes with unqualified names where tag and text are the same string type",
          "hierarchy": "Text XML Expat Internal NodeClass",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "UAttributes",
          "package": "hexpat",
          "partial": "UAttributes",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-NodeClass.html#t:UAttributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esetAttribute if \u003cem\u003eJust\u003c/em\u003e, deleteAttribute if \u003cem\u003eNothing\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "alterAttribute",
          "package": "hexpat",
          "signature": "tag -\u003e Maybe text -\u003e n c tag text -\u003e n c tag text",
          "source": "src/Text-XML-Expat-Internal-NodeClass.html#alterAttribute",
          "type": "function"
        },
        "index": {
          "description": "setAttribute if Just deleteAttribute if Nothing",
          "hierarchy": "Text XML Expat Internal NodeClass",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "alterAttribute",
          "normalized": "a-\u003eMaybe b-\u003ec d a b-\u003ec d a b",
          "package": "hexpat",
          "partial": "Attribute",
          "signature": "tag-\u003eMaybe text-\u003en c tag text-\u003en c tag text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-NodeClass.html#v:alterAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete the first attribute matching the specified name.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "deleteAttribute",
          "package": "hexpat",
          "signature": "tag -\u003e n c tag text -\u003e n c tag text",
          "source": "src/Text-XML-Expat-Internal-NodeClass.html#deleteAttribute",
          "type": "function"
        },
        "index": {
          "description": "Delete the first attribute matching the specified name",
          "hierarchy": "Text XML Expat Internal NodeClass",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "deleteAttribute",
          "normalized": "a-\u003eb c a d-\u003eb c a d",
          "package": "hexpat",
          "partial": "Attribute",
          "signature": "tag-\u003en c tag text-\u003en c tag text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-NodeClass.html#v:deleteAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerically convert an element of one node type to another.  Useful for\n adding or removing annotations.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "fromElement",
          "package": "hexpat",
          "signature": "n c tag text -\u003e n' c tag text",
          "source": "src/Text-XML-Expat-Internal-NodeClass.html#fromElement",
          "type": "function"
        },
        "index": {
          "description": "Generically convert an element of one node type to another Useful for adding or removing annotations",
          "hierarchy": "Text XML Expat Internal NodeClass",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "fromElement",
          "normalized": "a b c d-\u003ee b c d",
          "package": "hexpat",
          "partial": "Element",
          "signature": "n c tag text-\u003en' c tag text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-NodeClass.html#v:fromElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerically convert an element of one node type to another, using\n the specified element constructor.  Useful for adding or removing annotations.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "fromElement_",
          "package": "hexpat",
          "signature": "(tag -\u003e Attributes tag text -\u003e c (n' c tag text) -\u003e n' c tag text)-\u003e n c tag text-\u003e n' c tag text",
          "type": "function"
        },
        "index": {
          "description": "Generically convert an element of one node type to another using the specified element constructor Useful for adding or removing annotations",
          "hierarchy": "Text XML Expat Internal NodeClass",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "fromElement_",
          "normalized": "(a-\u003eAttributes a b-\u003ec(d c a b)-\u003ed c a b)-\u003ee c a b-\u003ed c a b",
          "package": "hexpat",
          "partial": "Element",
          "signature": "(tag-\u003eAttributes tag text-\u003ec(n' c tag text)-\u003en' c tag text)-\u003en c tag text-\u003en' c tag text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-NodeClass.html#v:fromElement_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange a node recursively from one container type to another.  This\n extracts the entire tree contents to standard lists and re-constructs them\n with the new container type.  For monadic list types used in\n \u003ccode\u003ehexpat-iteratee\u003c/code\u003e this operation forces evaluation. \n\u003c/p\u003e",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "fromNodeContainer",
          "package": "hexpat",
          "signature": "n c tag text -\u003e ItemM c (n c' tag text)",
          "source": "src/Text-XML-Expat-Internal-NodeClass.html#fromNodeContainer",
          "type": "function"
        },
        "index": {
          "description": "Change node recursively from one container type to another This extracts the entire tree contents to standard lists and re-constructs them with the new container type For monadic list types used in hexpat-iteratee this operation forces evaluation",
          "hierarchy": "Text XML Expat Internal NodeClass",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "fromNodeContainer",
          "normalized": "a b c d-\u003eItemM b(a e c d)",
          "package": "hexpat",
          "partial": "Node Container",
          "signature": "n c tag text-\u003eItemM c(n c' tag text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-NodeClass.html#v:fromNodeContainer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange a list of nodes recursively from one container type to another.  This\n extracts the entire tree contents to standard lists and re-constructs them\n with the new container type.  For monadic list types used in\n \u003ccode\u003ehexpat-iteratee\u003c/code\u003e this operation forces evaluation.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "fromNodeListContainer",
          "package": "hexpat",
          "signature": "c (n c tag text) -\u003e ItemM c (c' (n c' tag text))",
          "source": "src/Text-XML-Expat-Internal-NodeClass.html#fromNodeListContainer",
          "type": "function"
        },
        "index": {
          "description": "Change list of nodes recursively from one container type to another This extracts the entire tree contents to standard lists and re-constructs them with the new container type For monadic list types used in hexpat-iteratee this operation forces evaluation",
          "hierarchy": "Text XML Expat Internal NodeClass",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "fromNodeListContainer",
          "normalized": "a(b a c d)-\u003eItemM a(e(b e c d))",
          "package": "hexpat",
          "partial": "Node List Container",
          "signature": "c(n c tag text)-\u003eItemM c(c'(n c' tag text))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-NodeClass.html#v:fromNodeListContainer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerically convert a list of nodes from one node type to another.  Useful for\n adding or removing annotations.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "fromNodes",
          "package": "hexpat",
          "signature": "c (n c tag text) -\u003e c (n' c tag text)",
          "source": "src/Text-XML-Expat-Internal-NodeClass.html#fromNodes",
          "type": "function"
        },
        "index": {
          "description": "Generically convert list of nodes from one node type to another Useful for adding or removing annotations",
          "hierarchy": "Text XML Expat Internal NodeClass",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "fromNodes",
          "normalized": "a(b a c d)-\u003ea(e a c d)",
          "package": "hexpat",
          "partial": "Nodes",
          "signature": "c(n c tag text)-\u003ec(n' c tag text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-NodeClass.html#v:fromNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerically convert a list of nodes from one node type to another, using\n the specified element constructor.  Useful for adding or removing annotations.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "fromNodes_",
          "package": "hexpat",
          "signature": "(tag -\u003e Attributes tag text -\u003e c (n' c tag text) -\u003e n' c tag text)-\u003e c (n c tag text)-\u003e c (n' c tag text)",
          "type": "function"
        },
        "index": {
          "description": "Generically convert list of nodes from one node type to another using the specified element constructor Useful for adding or removing annotations",
          "hierarchy": "Text XML Expat Internal NodeClass",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "fromNodes_",
          "normalized": "(a-\u003eAttributes a b-\u003ec(d c a b)-\u003ed c a b)-\u003ec(e c a b)-\u003ec(d c a b)",
          "package": "hexpat",
          "partial": "Nodes",
          "signature": "(tag-\u003eAttributes tag text-\u003ec(n' c tag text)-\u003en' c tag text)-\u003ec(n c tag text)-\u003ec(n' c tag text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-NodeClass.html#v:fromNodes_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the value of the attribute having the specified name.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "getAttribute",
          "package": "hexpat",
          "signature": "n c tag text -\u003e tag -\u003e Maybe text",
          "source": "src/Text-XML-Expat-Internal-NodeClass.html#getAttribute",
          "type": "function"
        },
        "index": {
          "description": "Get the value of the attribute having the specified name",
          "hierarchy": "Text XML Expat Internal NodeClass",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "getAttribute",
          "normalized": "a b c d-\u003ec-\u003eMaybe d",
          "package": "hexpat",
          "partial": "Attribute",
          "signature": "n c tag text-\u003etag-\u003eMaybe text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-NodeClass.html#v:getAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the attributes of a node if it's an element, return empty list otherwise.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "getAttributes",
          "package": "hexpat",
          "signature": "n c tag text -\u003e [(tag, text)]",
          "source": "src/Text-XML-Expat-Internal-NodeClass.html#getAttributes",
          "type": "method"
        },
        "index": {
          "description": "Get the attributes of node if it an element return empty list otherwise",
          "hierarchy": "Text XML Expat Internal NodeClass",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "getAttributes",
          "normalized": "a b c d-\u003e[(c,d)]",
          "package": "hexpat",
          "partial": "Attributes",
          "signature": "n c tag text-\u003e[(tag,text)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-NodeClass.html#v:getAttributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet children of a node if it's an element, return empty list otherwise.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "getChildren",
          "package": "hexpat",
          "signature": "n c tag text -\u003e c (n c tag text)",
          "source": "src/Text-XML-Expat-Internal-NodeClass.html#getChildren",
          "type": "method"
        },
        "index": {
          "description": "Get children of node if it an element return empty list otherwise",
          "hierarchy": "Text XML Expat Internal NodeClass",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "getChildren",
          "normalized": "a b c d-\u003eb(a b c d)",
          "package": "hexpat",
          "partial": "Children",
          "signature": "n c tag text-\u003ec(n c tag text)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-NodeClass.html#v:getChildren"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the name of this node if it's an element, return empty string otherwise.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "getName",
          "package": "hexpat",
          "signature": "n c tag text -\u003e tag",
          "source": "src/Text-XML-Expat-Internal-NodeClass.html#getName",
          "type": "method"
        },
        "index": {
          "description": "Get the name of this node if it an element return empty string otherwise",
          "hierarchy": "Text XML Expat Internal NodeClass",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "getName",
          "normalized": "a b c d-\u003ec",
          "package": "hexpat",
          "partial": "Name",
          "signature": "n c tag text-\u003etag",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-NodeClass.html#v:getName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the target of this node if it's a Processing Instruction, return empty string otherwise.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "getTarget",
          "package": "hexpat",
          "signature": "n c tag text -\u003e text",
          "source": "src/Text-XML-Expat-Internal-NodeClass.html#getTarget",
          "type": "method"
        },
        "index": {
          "description": "Get the target of this node if it Processing Instruction return empty string otherwise",
          "hierarchy": "Text XML Expat Internal NodeClass",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "getTarget",
          "normalized": "a b c d-\u003ed",
          "package": "hexpat",
          "partial": "Target",
          "signature": "n c tag text-\u003etext",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-NodeClass.html#v:getTarget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet this node's text if it's a text node, comment, or processing instruction,\n return empty text otherwise.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "getText",
          "package": "hexpat",
          "signature": "n c tag text -\u003e text",
          "source": "src/Text-XML-Expat-Internal-NodeClass.html#getText",
          "type": "method"
        },
        "index": {
          "description": "Get this node text if it text node comment or processing instruction return empty text otherwise",
          "hierarchy": "Text XML Expat Internal NodeClass",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "getText",
          "normalized": "a b c d-\u003ed",
          "package": "hexpat",
          "partial": "Text",
          "signature": "n c tag text-\u003etext",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-NodeClass.html#v:getText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs the given node a Processing Instruction with the given target?\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "hasTarget",
          "package": "hexpat",
          "signature": "text -\u003e n c tag text -\u003e Bool",
          "source": "src/Text-XML-Expat-Internal-NodeClass.html#hasTarget",
          "type": "method"
        },
        "index": {
          "description": "Is the given node Processing Instruction with the given target",
          "hierarchy": "Text XML Expat Internal NodeClass",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "hasTarget",
          "normalized": "a-\u003eb c d a-\u003eBool",
          "package": "hexpat",
          "partial": "Target",
          "signature": "text-\u003en c tag text-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-NodeClass.html#v:hasTarget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs the given node CData?\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "isCData",
          "package": "hexpat",
          "signature": "n c tag text -\u003e Bool",
          "source": "src/Text-XML-Expat-Internal-NodeClass.html#isCData",
          "type": "method"
        },
        "index": {
          "description": "Is the given node CData",
          "hierarchy": "Text XML Expat Internal NodeClass",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "isCData",
          "normalized": "a b c d-\u003eBool",
          "package": "hexpat",
          "partial": "CData",
          "signature": "n c tag text-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-NodeClass.html#v:isCData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs the given node a comment?\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "isComment",
          "package": "hexpat",
          "signature": "n c tag text -\u003e Bool",
          "source": "src/Text-XML-Expat-Internal-NodeClass.html#isComment",
          "type": "method"
        },
        "index": {
          "description": "Is the given node comment",
          "hierarchy": "Text XML Expat Internal NodeClass",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "isComment",
          "normalized": "a b c d-\u003eBool",
          "package": "hexpat",
          "partial": "Comment",
          "signature": "n c tag text-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-NodeClass.html#v:isComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs the given node an element?\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "isElement",
          "package": "hexpat",
          "signature": "n c tag text -\u003e Bool",
          "source": "src/Text-XML-Expat-Internal-NodeClass.html#isElement",
          "type": "method"
        },
        "index": {
          "description": "Is the given node an element",
          "hierarchy": "Text XML Expat Internal NodeClass",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "isElement",
          "normalized": "a b c d-\u003eBool",
          "package": "hexpat",
          "partial": "Element",
          "signature": "n c tag text-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-NodeClass.html#v:isElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs the given node a tag with the given name?\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "isNamed",
          "package": "hexpat",
          "signature": "tag -\u003e n c tag text -\u003e Bool",
          "source": "src/Text-XML-Expat-Internal-NodeClass.html#isNamed",
          "type": "method"
        },
        "index": {
          "description": "Is the given node tag with the given name",
          "hierarchy": "Text XML Expat Internal NodeClass",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "isNamed",
          "normalized": "a-\u003eb c a d-\u003eBool",
          "package": "hexpat",
          "partial": "Named",
          "signature": "tag-\u003en c tag text-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-NodeClass.html#v:isNamed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs the given node a processing instruction?\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "isProcessingInstruction",
          "package": "hexpat",
          "signature": "n c tag text -\u003e Bool",
          "source": "src/Text-XML-Expat-Internal-NodeClass.html#isProcessingInstruction",
          "type": "method"
        },
        "index": {
          "description": "Is the given node processing instruction",
          "hierarchy": "Text XML Expat Internal NodeClass",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "isProcessingInstruction",
          "normalized": "a b c d-\u003eBool",
          "package": "hexpat",
          "partial": "Processing Instruction",
          "signature": "n c tag text-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-NodeClass.html#v:isProcessingInstruction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs the given node text?\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "isText",
          "package": "hexpat",
          "signature": "n c tag text -\u003e Bool",
          "source": "src/Text-XML-Expat-Internal-NodeClass.html#isText",
          "type": "method"
        },
        "index": {
          "description": "Is the given node text",
          "hierarchy": "Text XML Expat Internal NodeClass",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "isText",
          "normalized": "a b c d-\u003eBool",
          "package": "hexpat",
          "partial": "Text",
          "signature": "n c tag text-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-NodeClass.html#v:isText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap all tags (both tag names and attribute names) recursively.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "mapAllTags",
          "package": "hexpat",
          "signature": "(tag -\u003e tag') -\u003e n c tag text -\u003e n c tag' text",
          "source": "src/Text-XML-Expat-Internal-NodeClass.html#mapAllTags",
          "type": "method"
        },
        "index": {
          "description": "Map all tags both tag names and attribute names recursively",
          "hierarchy": "Text XML Expat Internal NodeClass",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "mapAllTags",
          "normalized": "(a-\u003eb)-\u003ec d a e-\u003ec d b e",
          "package": "hexpat",
          "partial": "All Tags",
          "signature": "(tag-\u003etag')-\u003en c tag text-\u003en c tag' text",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-NodeClass.html#v:mapAllTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange a node recursively from one container type to another, with a\n specified function to convert the container type.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "mapNodeContainer",
          "package": "hexpat",
          "signature": "(forall a.  c a -\u003e ItemM c (c' a)) -\u003e n c tag text -\u003e ItemM c (n c' tag text)",
          "source": "src/Text-XML-Expat-Internal-NodeClass.html#mapNodeContainer",
          "type": "method"
        },
        "index": {
          "description": "Change node recursively from one container type to another with specified function to convert the container type",
          "hierarchy": "Text XML Expat Internal NodeClass",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "mapNodeContainer",
          "normalized": "(a b c d-\u003eItemM c(e d))-\u003ef c g h-\u003eItemM c(f e g h)",
          "package": "hexpat",
          "partial": "Node Container",
          "signature": "(forall a. c a-\u003eItemM c(c' a))-\u003en c tag text-\u003eItemM c(n c' tag text)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-NodeClass.html#v:mapNodeContainer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange a list of nodes recursively from one container type to another, with\n a specified function to convert the container type.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "mapNodeListContainer",
          "package": "hexpat",
          "signature": "(forall a.  c a -\u003e ItemM c (c' a)) -\u003e c (n c tag text) -\u003e ItemM c (c' (n c' tag text))",
          "source": "src/Text-XML-Expat-Internal-NodeClass.html#mapNodeListContainer",
          "type": "function"
        },
        "index": {
          "description": "Change list of nodes recursively from one container type to another with specified function to convert the container type",
          "hierarchy": "Text XML Expat Internal NodeClass",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "mapNodeListContainer",
          "normalized": "(a b c d-\u003eItemM c(e d))-\u003ec(f c g h)-\u003eItemM c(e(f e g h))",
          "package": "hexpat",
          "partial": "Node List Container",
          "signature": "(forall a. c a-\u003eItemM c(c' a))-\u003ec(n c tag text)-\u003eItemM c(c'(n c' tag text))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-NodeClass.html#v:mapNodeListContainer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric element constructor.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "mkElement",
          "package": "hexpat",
          "signature": "tag -\u003e Attributes tag text -\u003e c (n c tag text) -\u003e n c tag text",
          "source": "src/Text-XML-Expat-Internal-NodeClass.html#mkElement",
          "type": "method"
        },
        "index": {
          "description": "Generic element constructor",
          "hierarchy": "Text XML Expat Internal NodeClass",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "mkElement",
          "normalized": "a-\u003eAttributes a b-\u003ec(d c a b)-\u003ed c a b",
          "package": "hexpat",
          "partial": "Element",
          "signature": "tag-\u003eAttributes tag text-\u003ec(n c tag text)-\u003en c tag text",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-NodeClass.html#v:mkElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric text node constructor.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "mkText",
          "package": "hexpat",
          "signature": "text -\u003e n c tag text",
          "source": "src/Text-XML-Expat-Internal-NodeClass.html#mkText",
          "type": "method"
        },
        "index": {
          "description": "Generic text node constructor",
          "hierarchy": "Text XML Expat Internal NodeClass",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "mkText",
          "normalized": "a-\u003eb c d a",
          "package": "hexpat",
          "partial": "Text",
          "signature": "text-\u003en c tag text",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-NodeClass.html#v:mkText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify attributes if it's an element, no-op otherwise.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "modifyAttributes",
          "package": "hexpat",
          "signature": "([(tag, text)] -\u003e [(tag, text)]) -\u003e n c tag text -\u003e n c tag text",
          "source": "src/Text-XML-Expat-Internal-NodeClass.html#modifyAttributes",
          "type": "method"
        },
        "index": {
          "description": "Modify attributes if it an element no-op otherwise",
          "hierarchy": "Text XML Expat Internal NodeClass",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "modifyAttributes",
          "normalized": "([(a,b)]-\u003e[(a,b)])-\u003ec d a b-\u003ec d a b",
          "package": "hexpat",
          "partial": "Attributes",
          "signature": "([(tag,text)]-\u003e[(tag,text)])-\u003en c tag text-\u003en c tag text",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-NodeClass.html#v:modifyAttributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify children (non-recursively) if it's an element, no-op otherwise.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "modifyChildren",
          "package": "hexpat",
          "signature": "(c (n c tag text) -\u003e c (n c tag text)) -\u003e n c tag text -\u003e n c tag text",
          "source": "src/Text-XML-Expat-Internal-NodeClass.html#modifyChildren",
          "type": "method"
        },
        "index": {
          "description": "Modify children non-recursively if it an element no-op otherwise",
          "hierarchy": "Text XML Expat Internal NodeClass",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "modifyChildren",
          "normalized": "(a(b a c d)-\u003ea(b a c d))-\u003eb a c d-\u003eb a c d",
          "package": "hexpat",
          "partial": "Children",
          "signature": "(c(n c tag text)-\u003ec(n c tag text))-\u003en c tag text-\u003en c tag text",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-NodeClass.html#v:modifyChildren"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap an element non-recursively, allowing the tag type to be changed.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "modifyElement",
          "package": "hexpat",
          "signature": "((tag, [(tag, text)], c (n c tag text)) -\u003e (tag', [(tag', text)], c (n c tag' text))) -\u003e n c tag text -\u003e n c tag' text",
          "source": "src/Text-XML-Expat-Internal-NodeClass.html#modifyElement",
          "type": "method"
        },
        "index": {
          "description": "Map an element non-recursively allowing the tag type to be changed",
          "hierarchy": "Text XML Expat Internal NodeClass",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "modifyElement",
          "normalized": "((a,[(a,b)],c(d c a b))-\u003e(e,[(e,b)],c(d c e b)))-\u003ed c a b-\u003ed c e b",
          "package": "hexpat",
          "partial": "Element",
          "signature": "((tag,[(tag,text)],c(n c tag text))-\u003e(tag',[(tag',text)],c(n c tag' text)))-\u003en c tag text-\u003en c tag' text",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-NodeClass.html#v:modifyElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify name if it's an element, no-op otherwise.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "modifyName",
          "package": "hexpat",
          "signature": "(tag -\u003e tag) -\u003e n c tag text -\u003e n c tag text",
          "source": "src/Text-XML-Expat-Internal-NodeClass.html#modifyName",
          "type": "method"
        },
        "index": {
          "description": "Modify name if it an element no-op otherwise",
          "hierarchy": "Text XML Expat Internal NodeClass",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "modifyName",
          "normalized": "(a-\u003ea)-\u003eb c a d-\u003eb c a d",
          "package": "hexpat",
          "partial": "Name",
          "signature": "(tag-\u003etag)-\u003en c tag text-\u003en c tag text",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-NodeClass.html#v:modifyName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the value of the attribute with the specified name to the value, overwriting\n the first existing attribute with that name if present.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "setAttribute",
          "package": "hexpat",
          "signature": "tag -\u003e text -\u003e n c tag text -\u003e n c tag text",
          "source": "src/Text-XML-Expat-Internal-NodeClass.html#setAttribute",
          "type": "function"
        },
        "index": {
          "description": "Set the value of the attribute with the specified name to the value overwriting the first existing attribute with that name if present",
          "hierarchy": "Text XML Expat Internal NodeClass",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "setAttribute",
          "normalized": "a-\u003eb-\u003ec d a b-\u003ec d a b",
          "package": "hexpat",
          "partial": "Attribute",
          "signature": "tag-\u003etext-\u003en c tag text-\u003en c tag text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-NodeClass.html#v:setAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract all text content from inside a tag into a single string, including\n any text contained in children.  This \u003cem\u003eexcludes\u003c/em\u003e the contents of \u003cem\u003ecomments\u003c/em\u003e or\n \u003cem\u003eprocessing instructions\u003c/em\u003e.  To get the text for these node types, use \u003ccode\u003e\u003ca\u003egetText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "textContent",
          "package": "hexpat",
          "signature": "n [] tag text -\u003e text",
          "source": "src/Text-XML-Expat-Internal-NodeClass.html#textContent",
          "type": "function"
        },
        "index": {
          "description": "Extract all text content from inside tag into single string including any text contained in children This excludes the contents of comments or processing instructions To get the text for these node types use getText",
          "hierarchy": "Text XML Expat Internal NodeClass",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "textContent",
          "normalized": "a[]b c-\u003ec",
          "package": "hexpat",
          "partial": "Content",
          "signature": "n[]tag text-\u003etext",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-NodeClass.html#v:textContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract all text content from inside a tag into a single string, including\n any text contained in children.  This \u003cem\u003eexcludes\u003c/em\u003e the contents of \u003cem\u003ecomments\u003c/em\u003e or\n \u003cem\u003eprocessing instructions\u003c/em\u003e.  To get the text for these node types, use \u003ccode\u003e\u003ca\u003egetText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "textContentM",
          "package": "hexpat",
          "signature": "n c tag text -\u003e ItemM c text",
          "source": "src/Text-XML-Expat-Internal-NodeClass.html#textContentM",
          "type": "method"
        },
        "index": {
          "description": "Extract all text content from inside tag into single string including any text contained in children This excludes the contents of comments or processing instructions To get the text for these node types use getText",
          "hierarchy": "Text XML Expat Internal NodeClass",
          "module": "Text.XML.Expat.Internal.NodeClass",
          "name": "textContentM",
          "normalized": "a b c d-\u003eItemM b d",
          "package": "hexpat",
          "partial": "Content",
          "signature": "n c tag text-\u003eItemM c text",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-NodeClass.html#v:textContentM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIn the default representation, qualified tag and attribute names such as\n \u003cabc:hello\u003e are represented just as a string containing a colon, e.g.\n \"abc:hello\".\n\u003c/p\u003e\u003cp\u003eThis module provides functionality to handle these more intelligently, splitting\n all tag and attribute names into their Prefix and LocalPart components.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.Expat.Internal.Qualified",
          "name": "Qualified",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Internal-Qualified.html",
          "type": "module"
        },
        "index": {
          "description": "In the default representation qualified tag and attribute names such as abc hello are represented just as string containing colon e.g abc hello This module provides functionality to handle these more intelligently splitting all tag and attribute names into their Prefix and LocalPart components",
          "hierarchy": "Text XML Expat Internal Qualified",
          "module": "Text.XML.Expat.Internal.Qualified",
          "name": "Qualified",
          "package": "hexpat",
          "partial": "Qualified",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-Qualified.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType shortcut for attributes with qualified names\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Internal.Qualified",
          "name": "QAttributes",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Internal-Qualified.html#QAttributes",
          "type": "type"
        },
        "index": {
          "description": "Type shortcut for attributes with qualified names",
          "hierarchy": "Text XML Expat Internal Qualified",
          "module": "Text.XML.Expat.Internal.Qualified",
          "name": "QAttributes",
          "package": "hexpat",
          "partial": "QAttributes",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-Qualified.html#t:QAttributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA qualified name.\n\u003c/p\u003e\u003cp\u003eQualified names have two parts, a prefix and a local part. The local part\n is the name of the tag. The prefix scopes that name to a particular\n group of legal tags.\n\u003c/p\u003e\u003cp\u003eThe prefix will usually be associated with a namespace URI. This is usually\n achieved by using xmlns attributes to bind prefixes to URIs.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Internal.Qualified",
          "name": "QName",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Internal-Qualified.html#QName",
          "type": "data"
        },
        "index": {
          "description": "qualified name Qualified names have two parts prefix and local part The local part is the name of the tag The prefix scopes that name to particular group of legal tags The prefix will usually be associated with namespace URI This is usually achieved by using xmlns attributes to bind prefixes to URIs",
          "hierarchy": "Text XML Expat Internal Qualified",
          "module": "Text.XML.Expat.Internal.Qualified",
          "name": "QName",
          "package": "hexpat",
          "partial": "QName",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-Qualified.html#t:QName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Internal.Qualified",
          "name": "QName",
          "package": "hexpat",
          "signature": "QName",
          "source": "src/Text-XML-Expat-Internal-Qualified.html#QName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Internal Qualified",
          "module": "Text.XML.Expat.Internal.Qualified",
          "name": "QName",
          "package": "hexpat",
          "partial": "QName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-Qualified.html#v:QName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Internal.Qualified",
          "name": "fromQualified",
          "package": "hexpat",
          "signature": "n c (QName text) text -\u003e n c text text",
          "source": "src/Text-XML-Expat-Internal-Qualified.html#fromQualified",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Internal Qualified",
          "module": "Text.XML.Expat.Internal.Qualified",
          "name": "fromQualified",
          "normalized": "a b(QName c)c-\u003ea b c c",
          "package": "hexpat",
          "partial": "Qualified",
          "signature": "n c(QName text)text-\u003en c text text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-Qualified.html#v:fromQualified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a new QName with no prefix.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Internal.Qualified",
          "name": "mkAnQName",
          "package": "hexpat",
          "signature": "text -\u003e QName text",
          "source": "src/Text-XML-Expat-Internal-Qualified.html#mkAnQName",
          "type": "function"
        },
        "index": {
          "description": "Make new QName with no prefix",
          "hierarchy": "Text XML Expat Internal Qualified",
          "module": "Text.XML.Expat.Internal.Qualified",
          "name": "mkAnQName",
          "normalized": "a-\u003eQName a",
          "package": "hexpat",
          "partial": "An QName",
          "signature": "text-\u003eQName text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-Qualified.html#v:mkAnQName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a new QName from a prefix and localPart.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Internal.Qualified",
          "name": "mkQName",
          "package": "hexpat",
          "signature": "text -\u003e text -\u003e QName text",
          "source": "src/Text-XML-Expat-Internal-Qualified.html#mkQName",
          "type": "function"
        },
        "index": {
          "description": "Make new QName from prefix and localPart",
          "hierarchy": "Text XML Expat Internal Qualified",
          "module": "Text.XML.Expat.Internal.Qualified",
          "name": "mkQName",
          "normalized": "a-\u003ea-\u003eQName a",
          "package": "hexpat",
          "partial": "QName",
          "signature": "text-\u003etext-\u003eQName text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-Qualified.html#v:mkQName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Internal.Qualified",
          "name": "qnLocalPart",
          "package": "hexpat",
          "signature": "text",
          "source": "src/Text-XML-Expat-Internal-Qualified.html#QName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Internal Qualified",
          "module": "Text.XML.Expat.Internal.Qualified",
          "name": "qnLocalPart",
          "package": "hexpat",
          "partial": "Local Part",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-Qualified.html#v:qnLocalPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Internal.Qualified",
          "name": "qnPrefix",
          "package": "hexpat",
          "signature": "Maybe text",
          "source": "src/Text-XML-Expat-Internal-Qualified.html#QName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Internal Qualified",
          "module": "Text.XML.Expat.Internal.Qualified",
          "name": "qnPrefix",
          "package": "hexpat",
          "partial": "Prefix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-Qualified.html#v:qnPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Internal.Qualified",
          "name": "toQualified",
          "package": "hexpat",
          "signature": "n c text text -\u003e n c (QName text) text",
          "source": "src/Text-XML-Expat-Internal-Qualified.html#toQualified",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Internal Qualified",
          "module": "Text.XML.Expat.Internal.Qualified",
          "name": "toQualified",
          "normalized": "a b c c-\u003ea b(QName c)c",
          "package": "hexpat",
          "partial": "Qualified",
          "signature": "n c text text-\u003en c(QName text)text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Internal-Qualified.html#v:toQualified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module ported from Text.XML.Light.Proc\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.Expat.Proc",
          "name": "Proc",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Proc.html",
          "type": "module"
        },
        "index": {
          "description": "This module ported from Text.XML.Light.Proc",
          "hierarchy": "Text XML Expat Proc",
          "module": "Text.XML.Expat.Proc",
          "name": "Proc",
          "package": "hexpat",
          "partial": "Proc",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Proc.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind an immediate child with the given name.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Proc",
          "name": "filterChild",
          "package": "hexpat",
          "signature": "(n [] tag text -\u003e Bool) -\u003e n [] tag text -\u003e Maybe (n [] tag text)",
          "source": "src/Text-XML-Expat-Proc.html#filterChild",
          "type": "function"
        },
        "index": {
          "description": "Find an immediate child with the given name",
          "hierarchy": "Text XML Expat Proc",
          "module": "Text.XML.Expat.Proc",
          "name": "filterChild",
          "normalized": "(a[]b c-\u003eBool)-\u003ea[]b c-\u003eMaybe(a[]b c)",
          "package": "hexpat",
          "partial": "Child",
          "signature": "(n[]tag text-\u003eBool)-\u003en[]tag text-\u003eMaybe(n[]tag text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Proc.html#v:filterChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind an immediate child with name matching a predicate.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Proc",
          "name": "filterChildName",
          "package": "hexpat",
          "signature": "(tag -\u003e Bool) -\u003e n [] tag text -\u003e Maybe (n [] tag text)",
          "source": "src/Text-XML-Expat-Proc.html#filterChildName",
          "type": "function"
        },
        "index": {
          "description": "Find an immediate child with name matching predicate",
          "hierarchy": "Text XML Expat Proc",
          "module": "Text.XML.Expat.Proc",
          "name": "filterChildName",
          "normalized": "(a-\u003eBool)-\u003eb[]a c-\u003eMaybe(b[]a c)",
          "package": "hexpat",
          "partial": "Child Name",
          "signature": "(tag-\u003eBool)-\u003en[]tag text-\u003eMaybe(n[]tag text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Proc.html#v:filterChildName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter all immediate children wrt a given predicate.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Proc",
          "name": "filterChildren",
          "package": "hexpat",
          "signature": "(n c tag text -\u003e Bool) -\u003e n c tag text -\u003e c (n c tag text)",
          "source": "src/Text-XML-Expat-Proc.html#filterChildren",
          "type": "function"
        },
        "index": {
          "description": "Filter all immediate children wrt given predicate",
          "hierarchy": "Text XML Expat Proc",
          "module": "Text.XML.Expat.Proc",
          "name": "filterChildren",
          "normalized": "(a b c d-\u003eBool)-\u003ea b c d-\u003eb(a b c d)",
          "package": "hexpat",
          "partial": "Children",
          "signature": "(n c tag text-\u003eBool)-\u003en c tag text-\u003ec(n c tag text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Proc.html#v:filterChildren"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter all immediate children wrt a given predicate over their names.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Proc",
          "name": "filterChildrenName",
          "package": "hexpat",
          "signature": "(tag -\u003e Bool) -\u003e n c tag text -\u003e c (n c tag text)",
          "source": "src/Text-XML-Expat-Proc.html#filterChildrenName",
          "type": "function"
        },
        "index": {
          "description": "Filter all immediate children wrt given predicate over their names",
          "hierarchy": "Text XML Expat Proc",
          "module": "Text.XML.Expat.Proc",
          "name": "filterChildrenName",
          "normalized": "(a-\u003eBool)-\u003eb c a d-\u003ec(b c a d)",
          "package": "hexpat",
          "partial": "Children Name",
          "signature": "(tag-\u003eBool)-\u003en c tag text-\u003ec(n c tag text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Proc.html#v:filterChildrenName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter the left-most occurrence of an element wrt. given predicate.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Proc",
          "name": "filterElement",
          "package": "hexpat",
          "signature": "(n [] tag text -\u003e Bool) -\u003e n [] tag text -\u003e Maybe (n [] tag text)",
          "source": "src/Text-XML-Expat-Proc.html#filterElement",
          "type": "function"
        },
        "index": {
          "description": "Filter the left-most occurrence of an element wrt given predicate",
          "hierarchy": "Text XML Expat Proc",
          "module": "Text.XML.Expat.Proc",
          "name": "filterElement",
          "normalized": "(a[]b c-\u003eBool)-\u003ea[]b c-\u003eMaybe(a[]b c)",
          "package": "hexpat",
          "partial": "Element",
          "signature": "(n[]tag text-\u003eBool)-\u003en[]tag text-\u003eMaybe(n[]tag text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Proc.html#v:filterElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter the left-most occurrence of an element wrt. given predicate.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Proc",
          "name": "filterElementName",
          "package": "hexpat",
          "signature": "(tag -\u003e Bool) -\u003e n [] tag text -\u003e Maybe (n [] tag text)",
          "source": "src/Text-XML-Expat-Proc.html#filterElementName",
          "type": "function"
        },
        "index": {
          "description": "Filter the left-most occurrence of an element wrt given predicate",
          "hierarchy": "Text XML Expat Proc",
          "module": "Text.XML.Expat.Proc",
          "name": "filterElementName",
          "normalized": "(a-\u003eBool)-\u003eb[]a c-\u003eMaybe(b[]a c)",
          "package": "hexpat",
          "partial": "Element Name",
          "signature": "(tag-\u003eBool)-\u003en[]tag text-\u003eMaybe(n[]tag text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Proc.html#v:filterElementName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind all non-nested occurrences of an element wrt. given predicate.\n (i.e., once we have found an element, we do not search\n for more occurances among the element's children).\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Proc",
          "name": "filterElements",
          "package": "hexpat",
          "signature": "(n c tag text -\u003e Bool) -\u003e n c tag text -\u003e c (n c tag text)",
          "source": "src/Text-XML-Expat-Proc.html#filterElements",
          "type": "function"
        },
        "index": {
          "description": "Find all non-nested occurrences of an element wrt given predicate i.e once we have found an element we do not search for more occurances among the element children",
          "hierarchy": "Text XML Expat Proc",
          "module": "Text.XML.Expat.Proc",
          "name": "filterElements",
          "normalized": "(a b c d-\u003eBool)-\u003ea b c d-\u003eb(a b c d)",
          "package": "hexpat",
          "partial": "Elements",
          "signature": "(n c tag text-\u003eBool)-\u003en c tag text-\u003ec(n c tag text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Proc.html#v:filterElements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind all non-nested occurences of an element wrt a predicate over element names.\n (i.e., once we have found an element, we do not search\n for more occurances among the element's children).\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Proc",
          "name": "filterElementsName",
          "package": "hexpat",
          "signature": "(tag -\u003e Bool) -\u003e n c tag text -\u003e c (n c tag text)",
          "source": "src/Text-XML-Expat-Proc.html#filterElementsName",
          "type": "function"
        },
        "index": {
          "description": "Find all non-nested occurences of an element wrt predicate over element names i.e once we have found an element we do not search for more occurances among the element children",
          "hierarchy": "Text XML Expat Proc",
          "module": "Text.XML.Expat.Proc",
          "name": "filterElementsName",
          "normalized": "(a-\u003eBool)-\u003eb c a d-\u003ec(b c a d)",
          "package": "hexpat",
          "partial": "Elements Name",
          "signature": "(tag-\u003eBool)-\u003en c tag text-\u003ec(n c tag text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Proc.html#v:filterElementsName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind an immediate child with the given name.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Proc",
          "name": "findChild",
          "package": "hexpat",
          "signature": "tag -\u003e n [] tag text -\u003e Maybe (n [] tag text)",
          "source": "src/Text-XML-Expat-Proc.html#findChild",
          "type": "function"
        },
        "index": {
          "description": "Find an immediate child with the given name",
          "hierarchy": "Text XML Expat Proc",
          "module": "Text.XML.Expat.Proc",
          "name": "findChild",
          "normalized": "a-\u003eb[]a c-\u003eMaybe(b[]a c)",
          "package": "hexpat",
          "partial": "Child",
          "signature": "tag-\u003en[]tag text-\u003eMaybe(n[]tag text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Proc.html#v:findChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind all immediate children with the given name.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Proc",
          "name": "findChildren",
          "package": "hexpat",
          "signature": "tag -\u003e n c tag text -\u003e c (n c tag text)",
          "source": "src/Text-XML-Expat-Proc.html#findChildren",
          "type": "function"
        },
        "index": {
          "description": "Find all immediate children with the given name",
          "hierarchy": "Text XML Expat Proc",
          "module": "Text.XML.Expat.Proc",
          "name": "findChildren",
          "normalized": "a-\u003eb c a d-\u003ec(b c a d)",
          "package": "hexpat",
          "partial": "Children",
          "signature": "tag-\u003en c tag text-\u003ec(n c tag text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Proc.html#v:findChildren"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the left-most occurrence of an element matching given name.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Proc",
          "name": "findElement",
          "package": "hexpat",
          "signature": "tag -\u003e n [] tag text -\u003e Maybe (n [] tag text)",
          "source": "src/Text-XML-Expat-Proc.html#findElement",
          "type": "function"
        },
        "index": {
          "description": "Find the left-most occurrence of an element matching given name",
          "hierarchy": "Text XML Expat Proc",
          "module": "Text.XML.Expat.Proc",
          "name": "findElement",
          "normalized": "a-\u003eb[]a c-\u003eMaybe(b[]a c)",
          "package": "hexpat",
          "partial": "Element",
          "signature": "tag-\u003en[]tag text-\u003eMaybe(n[]tag text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Proc.html#v:findElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind all non-nested occurances of an element.\n (i.e., once we have found an element, we do not search\n for more occurances among the element's children).\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Proc",
          "name": "findElements",
          "package": "hexpat",
          "signature": "tag -\u003e n c tag text -\u003e c (n c tag text)",
          "source": "src/Text-XML-Expat-Proc.html#findElements",
          "type": "function"
        },
        "index": {
          "description": "Find all non-nested occurances of an element i.e once we have found an element we do not search for more occurances among the element children",
          "hierarchy": "Text XML Expat Proc",
          "module": "Text.XML.Expat.Proc",
          "name": "findElements",
          "normalized": "a-\u003eb c a d-\u003ec(b c a d)",
          "package": "hexpat",
          "partial": "Elements",
          "signature": "tag-\u003en c tag text-\u003ec(n c tag text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Proc.html#v:findElements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect only the elements from a list of XML content.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Proc",
          "name": "onlyElems",
          "package": "hexpat",
          "signature": "c (n c tag text) -\u003e c (n c tag text)",
          "source": "src/Text-XML-Expat-Proc.html#onlyElems",
          "type": "function"
        },
        "index": {
          "description": "Select only the elements from list of XML content",
          "hierarchy": "Text XML Expat Proc",
          "module": "Text.XML.Expat.Proc",
          "name": "onlyElems",
          "normalized": "a(b a c d)-\u003ea(b a c d)",
          "package": "hexpat",
          "partial": "Elems",
          "signature": "c(n c tag text)-\u003ec(n c tag text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Proc.html#v:onlyElems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect only the text from a list of XML content.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Proc",
          "name": "onlyText",
          "package": "hexpat",
          "signature": "c (n c tag text) -\u003e c text",
          "source": "src/Text-XML-Expat-Proc.html#onlyText",
          "type": "function"
        },
        "index": {
          "description": "Select only the text from list of XML content",
          "hierarchy": "Text XML Expat Proc",
          "module": "Text.XML.Expat.Proc",
          "name": "onlyText",
          "normalized": "a(b a c d)-\u003ea d",
          "package": "hexpat",
          "partial": "Text",
          "signature": "c(n c tag text)-\u003ec text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Proc.html#v:onlyText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides functions to parse an XML document to a lazy\n stream of SAX events.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.Expat.SAX",
          "name": "SAX",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-SAX.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides functions to parse an XML document to lazy stream of SAX events",
          "hierarchy": "Text XML Expat SAX",
          "module": "Text.XML.Expat.SAX",
          "name": "SAX",
          "package": "hexpat",
          "partial": "SAX",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-SAX.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.SAX",
          "name": "Encoding",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Internal-IO.html#Encoding",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text XML Expat SAX",
          "module": "Text.XML.Expat.SAX",
          "name": "Encoding",
          "package": "hexpat",
          "partial": "Encoding",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-SAX.html#t:Encoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn abstraction for any string type you want to use as xml text (that is,\n attribute values or element text content). If you want to use a\n new string type with \u003cem\u003ehexpat\u003c/em\u003e, you must make it an instance of\n \u003ccode\u003e\u003ca\u003eGenericXMLString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.SAX",
          "name": "GenericXMLString",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-SAX.html#GenericXMLString",
          "type": "class"
        },
        "index": {
          "description": "An abstraction for any string type you want to use as xml text that is attribute values or element text content If you want to use new string type with hexpat you must make it an instance of GenericXMLString",
          "hierarchy": "Text XML Expat SAX",
          "module": "Text.XML.Expat.SAX",
          "name": "GenericXMLString",
          "package": "hexpat",
          "partial": "Generic XMLString",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-SAX.html#t:GenericXMLString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.SAX",
          "name": "ParseOptions",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-SAX.html#ParseOptions",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text XML Expat SAX",
          "module": "Text.XML.Expat.SAX",
          "name": "ParseOptions",
          "package": "hexpat",
          "partial": "Parse Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-SAX.html#t:ParseOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.SAX",
          "name": "SAXEvent",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-SAX.html#SAXEvent",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text XML Expat SAX",
          "module": "Text.XML.Expat.SAX",
          "name": "SAXEvent",
          "package": "hexpat",
          "partial": "SAXEvent",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-SAX.html#t:SAXEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse error, consisting of message text and error location\n\u003c/p\u003e",
          "module": "Text.XML.Expat.SAX",
          "name": "XMLParseError",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Internal-IO.html#XMLParseError",
          "type": "data"
        },
        "index": {
          "description": "Parse error consisting of message text and error location",
          "hierarchy": "Text XML Expat SAX",
          "module": "Text.XML.Expat.SAX",
          "name": "XMLParseError",
          "package": "hexpat",
          "partial": "XMLParse Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-SAX.html#t:XMLParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn exception indicating an XML parse error, used by the \u003cem\u003e..Throwing\u003c/em\u003e variants.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.SAX",
          "name": "XMLParseException",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-SAX.html#XMLParseException",
          "type": "data"
        },
        "index": {
          "description": "An exception indicating an XML parse error used by the Throwing variants",
          "hierarchy": "Text XML Expat SAX",
          "module": "Text.XML.Expat.SAX",
          "name": "XMLParseException",
          "package": "hexpat",
          "partial": "XMLParse Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-SAX.html#t:XMLParseException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies a location of an event within the input text\n\u003c/p\u003e",
          "module": "Text.XML.Expat.SAX",
          "name": "XMLParseLocation",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Internal-IO.html#XMLParseLocation",
          "type": "data"
        },
        "index": {
          "description": "Specifies location of an event within the input text",
          "hierarchy": "Text XML Expat SAX",
          "module": "Text.XML.Expat.SAX",
          "name": "XMLParseLocation",
          "package": "hexpat",
          "partial": "XMLParse Location",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-SAX.html#t:XMLParseLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.SAX",
          "name": "CharacterData",
          "package": "hexpat",
          "signature": "CharacterData text",
          "source": "src/Text-XML-Expat-SAX.html#SAXEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat SAX",
          "module": "Text.XML.Expat.SAX",
          "name": "CharacterData",
          "package": "hexpat",
          "partial": "Character Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-SAX.html#v:CharacterData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.SAX",
          "name": "Comment",
          "package": "hexpat",
          "signature": "Comment text",
          "source": "src/Text-XML-Expat-SAX.html#SAXEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat SAX",
          "module": "Text.XML.Expat.SAX",
          "name": "Comment",
          "package": "hexpat",
          "partial": "Comment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-SAX.html#v:Comment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.SAX",
          "name": "EndCData",
          "package": "hexpat",
          "signature": "EndCData",
          "source": "src/Text-XML-Expat-SAX.html#SAXEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat SAX",
          "module": "Text.XML.Expat.SAX",
          "name": "EndCData",
          "package": "hexpat",
          "partial": "End CData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-SAX.html#v:EndCData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.SAX",
          "name": "EndElement",
          "package": "hexpat",
          "signature": "EndElement tag",
          "source": "src/Text-XML-Expat-SAX.html#SAXEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat SAX",
          "module": "Text.XML.Expat.SAX",
          "name": "EndElement",
          "package": "hexpat",
          "partial": "End Element",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-SAX.html#v:EndElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.SAX",
          "name": "FailDocument",
          "package": "hexpat",
          "signature": "FailDocument XMLParseError",
          "source": "src/Text-XML-Expat-SAX.html#SAXEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat SAX",
          "module": "Text.XML.Expat.SAX",
          "name": "FailDocument",
          "package": "hexpat",
          "partial": "Fail Document",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-SAX.html#v:FailDocument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.SAX",
          "name": "ProcessingInstruction",
          "package": "hexpat",
          "signature": "ProcessingInstruction text text",
          "source": "src/Text-XML-Expat-SAX.html#SAXEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat SAX",
          "module": "Text.XML.Expat.SAX",
          "name": "ProcessingInstruction",
          "package": "hexpat",
          "partial": "Processing Instruction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-SAX.html#v:ProcessingInstruction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.SAX",
          "name": "StartCData",
          "package": "hexpat",
          "signature": "StartCData",
          "source": "src/Text-XML-Expat-SAX.html#SAXEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat SAX",
          "module": "Text.XML.Expat.SAX",
          "name": "StartCData",
          "package": "hexpat",
          "partial": "Start CData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-SAX.html#v:StartCData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.SAX",
          "name": "StartElement",
          "package": "hexpat",
          "signature": "StartElement tag [(tag, text)]",
          "source": "src/Text-XML-Expat-SAX.html#SAXEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat SAX",
          "module": "Text.XML.Expat.SAX",
          "name": "StartElement",
          "normalized": "StartElement a[(a,b)]",
          "package": "hexpat",
          "partial": "Start Element",
          "signature": "StartElement tag[(tag,text)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-SAX.html#v:StartElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.SAX",
          "name": "XMLDeclaration",
          "package": "hexpat",
          "signature": "XMLDeclaration text (Maybe text) (Maybe Bool)",
          "source": "src/Text-XML-Expat-SAX.html#SAXEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat SAX",
          "module": "Text.XML.Expat.SAX",
          "name": "XMLDeclaration",
          "package": "hexpat",
          "partial": "XMLDeclaration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-SAX.html#v:XMLDeclaration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.SAX",
          "name": "gxBreakOn",
          "package": "hexpat",
          "signature": "Char -\u003e s -\u003e (s, s)",
          "source": "src/Text-XML-Expat-SAX.html#gxBreakOn",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XML Expat SAX",
          "module": "Text.XML.Expat.SAX",
          "name": "gxBreakOn",
          "normalized": "Char-\u003ea-\u003e(a,a)",
          "package": "hexpat",
          "partial": "Break On",
          "signature": "Char-\u003es-\u003e(s,s)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-SAX.html#v:gxBreakOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.SAX",
          "name": "gxFromByteString",
          "package": "hexpat",
          "signature": "ByteString -\u003e s",
          "source": "src/Text-XML-Expat-SAX.html#gxFromByteString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XML Expat SAX",
          "module": "Text.XML.Expat.SAX",
          "name": "gxFromByteString",
          "normalized": "ByteString-\u003ea",
          "package": "hexpat",
          "partial": "From Byte String",
          "signature": "ByteString-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-SAX.html#v:gxFromByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.SAX",
          "name": "gxFromChar",
          "package": "hexpat",
          "signature": "Char -\u003e s",
          "source": "src/Text-XML-Expat-SAX.html#gxFromChar",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XML Expat SAX",
          "module": "Text.XML.Expat.SAX",
          "name": "gxFromChar",
          "normalized": "Char-\u003ea",
          "package": "hexpat",
          "partial": "From Char",
          "signature": "Char-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-SAX.html#v:gxFromChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.SAX",
          "name": "gxFromString",
          "package": "hexpat",
          "signature": "String -\u003e s",
          "source": "src/Text-XML-Expat-SAX.html#gxFromString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XML Expat SAX",
          "module": "Text.XML.Expat.SAX",
          "name": "gxFromString",
          "normalized": "String-\u003ea",
          "package": "hexpat",
          "partial": "From String",
          "signature": "String-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-SAX.html#v:gxFromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.SAX",
          "name": "gxHead",
          "package": "hexpat",
          "signature": "s -\u003e Char",
          "source": "src/Text-XML-Expat-SAX.html#gxHead",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XML Expat SAX",
          "module": "Text.XML.Expat.SAX",
          "name": "gxHead",
          "normalized": "a-\u003eChar",
          "package": "hexpat",
          "partial": "Head",
          "signature": "s-\u003eChar",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-SAX.html#v:gxHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.SAX",
          "name": "gxNullString",
          "package": "hexpat",
          "signature": "s -\u003e Bool",
          "source": "src/Text-XML-Expat-SAX.html#gxNullString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XML Expat SAX",
          "module": "Text.XML.Expat.SAX",
          "name": "gxNullString",
          "normalized": "a-\u003eBool",
          "package": "hexpat",
          "partial": "Null String",
          "signature": "s-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-SAX.html#v:gxNullString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.SAX",
          "name": "gxTail",
          "package": "hexpat",
          "signature": "s -\u003e s",
          "source": "src/Text-XML-Expat-SAX.html#gxTail",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XML Expat SAX",
          "module": "Text.XML.Expat.SAX",
          "name": "gxTail",
          "normalized": "a-\u003ea",
          "package": "hexpat",
          "partial": "Tail",
          "signature": "s-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-SAX.html#v:gxTail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.SAX",
          "name": "gxToByteString",
          "package": "hexpat",
          "signature": "s -\u003e ByteString",
          "source": "src/Text-XML-Expat-SAX.html#gxToByteString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XML Expat SAX",
          "module": "Text.XML.Expat.SAX",
          "name": "gxToByteString",
          "normalized": "a-\u003eByteString",
          "package": "hexpat",
          "partial": "To Byte String",
          "signature": "s-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-SAX.html#v:gxToByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.SAX",
          "name": "gxToString",
          "package": "hexpat",
          "signature": "s -\u003e String",
          "source": "src/Text-XML-Expat-SAX.html#gxToString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XML Expat SAX",
          "module": "Text.XML.Expat.SAX",
          "name": "gxToString",
          "normalized": "a-\u003eString",
          "package": "hexpat",
          "partial": "To String",
          "signature": "s-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-SAX.html#v:gxToString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLazily parse XML to SAX events. In the event of an error, FailDocument is\n the last element of the output list.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.SAX",
          "name": "parse",
          "package": "hexpat",
          "signature": "ParseOptions tag text-\u003e ByteString-\u003e [SAXEvent tag text]",
          "type": "function"
        },
        "index": {
          "description": "Lazily parse XML to SAX events In the event of an error FailDocument is the last element of the output list",
          "hierarchy": "Text XML Expat SAX",
          "module": "Text.XML.Expat.SAX",
          "name": "parse",
          "normalized": "ParseOptions a b-\u003eByteString-\u003e[SAXEvent a b]",
          "package": "hexpat",
          "signature": "ParseOptions tag text-\u003eByteString-\u003e[SAXEvent tag text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-SAX.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a generalized list of ByteStrings containing XML to SAX events.\n In the event of an error, FailDocument is the last element of the output list.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.SAX",
          "name": "parseG",
          "package": "hexpat",
          "signature": "ParseOptions tag text-\u003e l ByteString-\u003e l (SAXEvent tag text)",
          "type": "function"
        },
        "index": {
          "description": "Parse generalized list of ByteStrings containing XML to SAX events In the event of an error FailDocument is the last element of the output list",
          "hierarchy": "Text XML Expat SAX",
          "module": "Text.XML.Expat.SAX",
          "name": "parseG",
          "normalized": "ParseOptions a b-\u003ec ByteString-\u003ec(SAXEvent a b)",
          "package": "hexpat",
          "signature": "ParseOptions tag text-\u003el ByteString-\u003el(SAXEvent tag text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-SAX.html#v:parseG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of parseSAX that gives a document location with each SAX event.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.SAX",
          "name": "parseLocations",
          "package": "hexpat",
          "signature": "ParseOptions tag text-\u003e ByteString-\u003e [(SAXEvent tag text, XMLParseLocation)]",
          "type": "function"
        },
        "index": {
          "description": "variant of parseSAX that gives document location with each SAX event",
          "hierarchy": "Text XML Expat SAX",
          "module": "Text.XML.Expat.SAX",
          "name": "parseLocations",
          "normalized": "ParseOptions a b-\u003eByteString-\u003e[(SAXEvent a b,XMLParseLocation)]",
          "package": "hexpat",
          "partial": "Locations",
          "signature": "ParseOptions tag text-\u003eByteString-\u003e[(SAXEvent tag text,XMLParseLocation)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-SAX.html#v:parseLocations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a generalized list of ByteStrings containing XML to SAX events.\n In the event of an error, FailDocument is the last element of the output list.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.SAX",
          "name": "parseLocationsG",
          "package": "hexpat",
          "signature": "ParseOptions tag text-\u003e l ByteString-\u003e l (SAXEvent tag text, XMLParseLocation)",
          "type": "function"
        },
        "index": {
          "description": "Parse generalized list of ByteStrings containing XML to SAX events In the event of an error FailDocument is the last element of the output list",
          "hierarchy": "Text XML Expat SAX",
          "module": "Text.XML.Expat.SAX",
          "name": "parseLocationsG",
          "normalized": "ParseOptions a b-\u003ec ByteString-\u003ec(SAXEvent a b,XMLParseLocation)",
          "package": "hexpat",
          "partial": "Locations",
          "signature": "ParseOptions tag text-\u003el ByteString-\u003el(SAXEvent tag text,XMLParseLocation)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-SAX.html#v:parseLocationsG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of parseSAX that gives a document location with each SAX event.\n In the event of an error, throw \u003ccode\u003e\u003ca\u003eXMLParseException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eparseLocationsThrowing\u003c/code\u003e can throw an exception from pure code, which is generally a bad\n way to handle errors, because Haskell's lazy evaluation means it's hard to\n predict where it will be thrown from.  However, it may be acceptable in\n situations where it's not expected during normal operation, depending on the\n design of your program.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.SAX",
          "name": "parseLocationsThrowing",
          "package": "hexpat",
          "signature": "ParseOptions tag text-\u003e ByteString-\u003e [(SAXEvent tag text, XMLParseLocation)]",
          "type": "function"
        },
        "index": {
          "description": "variant of parseSAX that gives document location with each SAX event In the event of an error throw XMLParseException parseLocationsThrowing can throw an exception from pure code which is generally bad way to handle errors because Haskell lazy evaluation means it hard to predict where it will be thrown from However it may be acceptable in situations where it not expected during normal operation depending on the design of your program",
          "hierarchy": "Text XML Expat SAX",
          "module": "Text.XML.Expat.SAX",
          "name": "parseLocationsThrowing",
          "normalized": "ParseOptions a b-\u003eByteString-\u003e[(SAXEvent a b,XMLParseLocation)]",
          "package": "hexpat",
          "partial": "Locations Throwing",
          "signature": "ParseOptions tag text-\u003eByteString-\u003e[(SAXEvent tag text,XMLParseLocation)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-SAX.html#v:parseLocationsThrowing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLazily parse XML to SAX events. In the event of an error, throw\n \u003ccode\u003e\u003ca\u003eXMLParseException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eparseThrowing\u003c/code\u003e can throw an exception from pure code, which is generally a bad\n way to handle errors, because Haskell's lazy evaluation means it's hard to\n predict where it will be thrown from.  However, it may be acceptable in\n situations where it's not expected during normal operation, depending on the\n design of your program.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.SAX",
          "name": "parseThrowing",
          "package": "hexpat",
          "signature": "ParseOptions tag text-\u003e ByteString-\u003e [SAXEvent tag text]",
          "type": "function"
        },
        "index": {
          "description": "Lazily parse XML to SAX events In the event of an error throw XMLParseException parseThrowing can throw an exception from pure code which is generally bad way to handle errors because Haskell lazy evaluation means it hard to predict where it will be thrown from However it may be acceptable in situations where it not expected during normal operation depending on the design of your program",
          "hierarchy": "Text XML Expat SAX",
          "module": "Text.XML.Expat.SAX",
          "name": "parseThrowing",
          "normalized": "ParseOptions a b-\u003eByteString-\u003e[SAXEvent a b]",
          "package": "hexpat",
          "partial": "Throwing",
          "signature": "ParseOptions tag text-\u003eByteString-\u003e[SAXEvent tag text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-SAX.html#v:parseThrowing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides functions to parse an XML document to a tree structure,\n either strictly or lazily.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eGenericXMLString\u003c/a\u003e\u003c/code\u003e type class allows you to use any string type. Three\n string types are provided for here: \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eHere is a complete example to get you started:\n\u003c/p\u003e\u003cpre\u003e -- | A \"hello world\" example of hexpat that lazily parses a document, printing\n -- it to standard out.\n\n import Text.XML.Expat.Tree\n import Text.XML.Expat.Format\n import System.Environment\n import System.Exit\n import System.IO\n import qualified Data.ByteString.Lazy as L\n\n main = do\n     args \u003c- getArgs\n     case args of\n         [filename] -\u003e process filename\n         otherwise  -\u003e do\n             hPutStrLn stderr \"Usage: helloworld \u003cfile.xml\u003e\"\n             exitWith $ ExitFailure 1\n\n process :: String -\u003e IO ()\n process filename = do\n     inputText \u003c- L.readFile filename\n     -- Note: Because we're not using the tree, Haskell can't infer the type of\n     -- strings we're using so we need to tell it explicitly with a type signature.\n     let (xml, mErr) = parse defaultParseOptions inputText :: (UNode String, Maybe XMLParseError)\n     -- Process document before handling error, so we get lazy processing.\n     L.hPutStr stdout $ format xml\n     putStrLn \"\"\n     case mErr of\n         Nothing -\u003e return ()\n         Just err -\u003e do\n             hPutStrLn stderr $ \"XML parse failed: \"++show err\n             exitWith $ ExitFailure 2\n\u003c/pre\u003e\u003cp\u003eError handling in strict parses is very straightforward - just check the\n \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e return value.  Lazy parses are not so simple.  Here are two working\n examples that illustrate the ways to handle errors.  Here they are:\n\u003c/p\u003e\u003cp\u003eWay no. 1 - Using a Maybe value\n\u003c/p\u003e\u003cpre\u003e import Text.XML.Expat.Tree\n import qualified Data.ByteString.Lazy as L\n import Data.ByteString.Internal (c2w)\n\n -- This is the recommended way to handle errors in lazy parses\n main = do\n     let (tree, mError) = parse defaultParseOptions\n                    (L.pack $ map c2w $ \"\u003ctop\u003e\u003cbanana\u003e\u003c/apple\u003e\u003c/top\u003e\")\n     print (tree :: UNode String)\n\n     -- Note: We check the error _after_ we have finished our processing\n     -- on the tree.\n     case mError of\n         Just err -\u003e putStrLn $ \"It failed : \"++show err\n         Nothing -\u003e putStrLn \"Success!\"\n\u003c/pre\u003e\u003cp\u003eWay no. 2 - Using exceptions\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eparseThrowing\u003c/a\u003e\u003c/code\u003e can throw an exception from pure code, which is generally a bad\n way to handle errors, because Haskell's lazy evaluation means it's hard to\n predict where it will be thrown from.  However, it may be acceptable in\n situations where it's not expected during normal operation, depending on the\n design of your program.\n\u003c/p\u003e\u003cpre\u003e ...\n import Control.Exception.Extensible as E\n\n -- This is not the recommended way to handle errors.\n main = do\n     do\n         let tree = parseThrowing defaultParseOptions\n                        (L.pack $ map c2w $ \"\u003ctop\u003e\u003cbanana\u003e\u003c/apple\u003e\u003c/top\u003e\")\n         print (tree :: UNode String)\n         -- Because of lazy evaluation, you should not process the tree outside\n         -- the 'do' block, or exceptions could be thrown that won't get caught.\n     `E.catch` (\\exc -\u003e\n         case E.fromException exc of\n             Just (XMLParseException err) -\u003e putStrLn $ \"It failed : \"++show err\n             Nothing -\u003e E.throwIO exc)\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Text.XML.Expat.Tree",
          "name": "Tree",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Tree.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides functions to parse an XML document to tree structure either strictly or lazily The GenericXMLString type class allows you to use any string type Three string types are provided for here String ByteString and Text Here is complete example to get you started hello world example of hexpat that lazily parses document printing it to standard out import Text.XML.Expat.Tree import Text.XML.Expat.Format import System.Environment import System.Exit import System.IO import qualified Data.ByteString.Lazy as main do args getArgs case args of filename process filename otherwise do hPutStrLn stderr Usage helloworld file.xml exitWith ExitFailure process String IO process filename do inputText L.readFile filename Note Because we re not using the tree Haskell can infer the type of strings we re using so we need to tell it explicitly with type signature let xml mErr parse defaultParseOptions inputText UNode String Maybe XMLParseError Process document before handling error so we get lazy processing L.hPutStr stdout format xml putStrLn case mErr of Nothing return Just err do hPutStrLn stderr XML parse failed show err exitWith ExitFailure Error handling in strict parses is very straightforward just check the Either return value Lazy parses are not so simple Here are two working examples that illustrate the ways to handle errors Here they are Way no Using Maybe value import Text.XML.Expat.Tree import qualified Data.ByteString.Lazy as import Data.ByteString.Internal c2w This is the recommended way to handle errors in lazy parses main do let tree mError parse defaultParseOptions L.pack map c2w top banana apple top print tree UNode String Note We check the error after we have finished our processing on the tree case mError of Just err putStrLn It failed show err Nothing putStrLn Success Way no Using exceptions parseThrowing can throw an exception from pure code which is generally bad way to handle errors because Haskell lazy evaluation means it hard to predict where it will be thrown from However it may be acceptable in situations where it not expected during normal operation depending on the design of your program import Control.Exception.Extensible as This is not the recommended way to handle errors main do do let tree parseThrowing defaultParseOptions L.pack map c2w top banana apple top print tree UNode String Because of lazy evaluation you should not process the tree outside the do block or exceptions could be thrown that won get caught E.catch exc case E.fromException exc of Just XMLParseException err putStrLn It failed show err Nothing E.throwIO exc",
          "hierarchy": "Text XML Expat Tree",
          "module": "Text.XML.Expat.Tree",
          "name": "Tree",
          "package": "hexpat",
          "partial": "Tree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Tree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Tree",
          "name": "Encoding",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Internal-IO.html#Encoding",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text XML Expat Tree",
          "module": "Text.XML.Expat.Tree",
          "name": "Encoding",
          "package": "hexpat",
          "partial": "Encoding",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Tree.html#t:Encoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn abstraction for any string type you want to use as xml text (that is,\n attribute values or element text content). If you want to use a\n new string type with \u003cem\u003ehexpat\u003c/em\u003e, you must make it an instance of\n \u003ccode\u003e\u003ca\u003eGenericXMLString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Tree",
          "name": "GenericXMLString",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-SAX.html#GenericXMLString",
          "type": "class"
        },
        "index": {
          "description": "An abstraction for any string type you want to use as xml text that is attribute values or element text content If you want to use new string type with hexpat you must make it an instance of GenericXMLString",
          "hierarchy": "Text XML Expat Tree",
          "module": "Text.XML.Expat.Tree",
          "name": "GenericXMLString",
          "package": "hexpat",
          "partial": "Generic XMLString",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Tree.html#t:GenericXMLString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType alias for a node where namespaced names are used for tags\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Tree",
          "name": "NNode",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Tree.html#NNode",
          "type": "type"
        },
        "index": {
          "description": "Type alias for node where namespaced names are used for tags",
          "hierarchy": "Text XML Expat Tree",
          "module": "Text.XML.Expat.Tree",
          "name": "NNode",
          "package": "hexpat",
          "partial": "NNode",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Tree.html#t:NNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pure tree representation that uses a list as its container type.\n\u003c/p\u003e\u003cp\u003eIn the \u003ccode\u003ehexpat\u003c/code\u003e package, a list of nodes has the type \u003ccode\u003e[Node tag text]\u003c/code\u003e, but note\n that you can also use the more general type function \u003ccode\u003e\u003ca\u003eListOf\u003c/a\u003e\u003c/code\u003e to give a list of\n any node type, using that node's associated list type, e.g.\n \u003ccode\u003eListOf (UNode Text)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Tree",
          "name": "Node",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Tree.html#Node",
          "type": "type"
        },
        "index": {
          "description": "pure tree representation that uses list as its container type In the hexpat package list of nodes has the type Node tag text but note that you can also use the more general type function ListOf to give list of any node type using that node associated list type e.g ListOf UNode Text",
          "hierarchy": "Text XML Expat Tree",
          "module": "Text.XML.Expat.Tree",
          "name": "Node",
          "package": "hexpat",
          "partial": "Node",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Tree.html#t:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe tree representation of the XML document.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ec\u003c/code\u003e is the container type for the element's children, which would normally be [],\n but could potentially be a monadic list type to allow for chunked I/O.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003etag\u003c/code\u003e is the tag type, which can either be one of several string types,\n or a special type from the \u003ccode\u003eText.XML.Expat.Namespaced\u003c/code\u003e or\n \u003ccode\u003eText.XML.Expat.Qualified\u003c/code\u003e modules.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003etext\u003c/code\u003e is the string type for text content.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Tree",
          "name": "NodeG",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Tree.html#NodeG",
          "type": "data"
        },
        "index": {
          "description": "The tree representation of the XML document is the container type for the element children which would normally be but could potentially be monadic list type to allow for chunked tag is the tag type which can either be one of several string types or special type from the Text.XML.Expat.Namespaced or Text.XML.Expat.Qualified modules text is the string type for text content",
          "hierarchy": "Text XML Expat Tree",
          "module": "Text.XML.Expat.Tree",
          "name": "NodeG",
          "package": "hexpat",
          "partial": "Node",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Tree.html#t:NodeG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Tree",
          "name": "ParseOptions",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-SAX.html#ParseOptions",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text XML Expat Tree",
          "module": "Text.XML.Expat.Tree",
          "name": "ParseOptions",
          "package": "hexpat",
          "partial": "Parse Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Tree.html#t:ParseOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType alias for a node where qualified names are used for tags\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Tree",
          "name": "QNode",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Tree.html#QNode",
          "type": "type"
        },
        "index": {
          "description": "Type alias for node where qualified names are used for tags",
          "hierarchy": "Text XML Expat Tree",
          "module": "Text.XML.Expat.Tree",
          "name": "QNode",
          "package": "hexpat",
          "partial": "QNode",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Tree.html#t:QNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType alias for a node with unqualified tag names where tag and\n text are the same string type.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Tree",
          "name": "UNode",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Tree.html#UNode",
          "type": "type"
        },
        "index": {
          "description": "Type alias for node with unqualified tag names where tag and text are the same string type",
          "hierarchy": "Text XML Expat Tree",
          "module": "Text.XML.Expat.Tree",
          "name": "UNode",
          "package": "hexpat",
          "partial": "UNode",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Tree.html#t:UNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse error, consisting of message text and error location\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Tree",
          "name": "XMLParseError",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Internal-IO.html#XMLParseError",
          "type": "data"
        },
        "index": {
          "description": "Parse error consisting of message text and error location",
          "hierarchy": "Text XML Expat Tree",
          "module": "Text.XML.Expat.Tree",
          "name": "XMLParseError",
          "package": "hexpat",
          "partial": "XMLParse Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Tree.html#t:XMLParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn exception indicating an XML parse error, used by the \u003cem\u003e..Throwing\u003c/em\u003e variants.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Tree",
          "name": "XMLParseException",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-SAX.html#XMLParseException",
          "type": "data"
        },
        "index": {
          "description": "An exception indicating an XML parse error used by the Throwing variants",
          "hierarchy": "Text XML Expat Tree",
          "module": "Text.XML.Expat.Tree",
          "name": "XMLParseException",
          "package": "hexpat",
          "partial": "XMLParse Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Tree.html#t:XMLParseException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies a location of an event within the input text\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Tree",
          "name": "XMLParseLocation",
          "package": "hexpat",
          "source": "src/Text-XML-Expat-Internal-IO.html#XMLParseLocation",
          "type": "data"
        },
        "index": {
          "description": "Specifies location of an event within the input text",
          "hierarchy": "Text XML Expat Tree",
          "module": "Text.XML.Expat.Tree",
          "name": "XMLParseLocation",
          "package": "hexpat",
          "partial": "XMLParse Location",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Tree.html#t:XMLParseLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Tree",
          "name": "Element",
          "package": "hexpat",
          "signature": "Element",
          "source": "src/Text-XML-Expat-Tree.html#NodeG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Tree",
          "module": "Text.XML.Expat.Tree",
          "name": "Element",
          "package": "hexpat",
          "partial": "Element",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Tree.html#v:Element"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Tree",
          "name": "Text",
          "package": "hexpat",
          "signature": "Text !text",
          "source": "src/Text-XML-Expat-Tree.html#NodeG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Tree",
          "module": "Text.XML.Expat.Tree",
          "name": "Text",
          "package": "hexpat",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Tree.html#v:Text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Tree",
          "name": "eAttributes",
          "package": "hexpat",
          "signature": "[(tag, text)]",
          "source": "src/Text-XML-Expat-Tree.html#NodeG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Tree",
          "module": "Text.XML.Expat.Tree",
          "name": "eAttributes",
          "normalized": "[(a,b)]",
          "package": "hexpat",
          "partial": "Attributes",
          "signature": "[(tag,text)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Tree.html#v:eAttributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Tree",
          "name": "eChildren",
          "package": "hexpat",
          "signature": "c (NodeG c tag text)",
          "source": "src/Text-XML-Expat-Tree.html#NodeG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Tree",
          "module": "Text.XML.Expat.Tree",
          "name": "eChildren",
          "package": "hexpat",
          "partial": "Children",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Tree.html#v:eChildren"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Tree",
          "name": "eName",
          "package": "hexpat",
          "signature": "tag",
          "source": "src/Text-XML-Expat-Tree.html#NodeG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Tree",
          "module": "Text.XML.Expat.Tree",
          "name": "eName",
          "package": "hexpat",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Tree.html#v:eName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Tree",
          "name": "gxBreakOn",
          "package": "hexpat",
          "signature": "Char -\u003e s -\u003e (s, s)",
          "source": "src/Text-XML-Expat-SAX.html#gxBreakOn",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XML Expat Tree",
          "module": "Text.XML.Expat.Tree",
          "name": "gxBreakOn",
          "normalized": "Char-\u003ea-\u003e(a,a)",
          "package": "hexpat",
          "partial": "Break On",
          "signature": "Char-\u003es-\u003e(s,s)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Tree.html#v:gxBreakOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Tree",
          "name": "gxFromByteString",
          "package": "hexpat",
          "signature": "ByteString -\u003e s",
          "source": "src/Text-XML-Expat-SAX.html#gxFromByteString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XML Expat Tree",
          "module": "Text.XML.Expat.Tree",
          "name": "gxFromByteString",
          "normalized": "ByteString-\u003ea",
          "package": "hexpat",
          "partial": "From Byte String",
          "signature": "ByteString-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Tree.html#v:gxFromByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Tree",
          "name": "gxFromChar",
          "package": "hexpat",
          "signature": "Char -\u003e s",
          "source": "src/Text-XML-Expat-SAX.html#gxFromChar",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XML Expat Tree",
          "module": "Text.XML.Expat.Tree",
          "name": "gxFromChar",
          "normalized": "Char-\u003ea",
          "package": "hexpat",
          "partial": "From Char",
          "signature": "Char-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Tree.html#v:gxFromChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Tree",
          "name": "gxFromString",
          "package": "hexpat",
          "signature": "String -\u003e s",
          "source": "src/Text-XML-Expat-SAX.html#gxFromString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XML Expat Tree",
          "module": "Text.XML.Expat.Tree",
          "name": "gxFromString",
          "normalized": "String-\u003ea",
          "package": "hexpat",
          "partial": "From String",
          "signature": "String-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Tree.html#v:gxFromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Tree",
          "name": "gxHead",
          "package": "hexpat",
          "signature": "s -\u003e Char",
          "source": "src/Text-XML-Expat-SAX.html#gxHead",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XML Expat Tree",
          "module": "Text.XML.Expat.Tree",
          "name": "gxHead",
          "normalized": "a-\u003eChar",
          "package": "hexpat",
          "partial": "Head",
          "signature": "s-\u003eChar",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Tree.html#v:gxHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Tree",
          "name": "gxNullString",
          "package": "hexpat",
          "signature": "s -\u003e Bool",
          "source": "src/Text-XML-Expat-SAX.html#gxNullString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XML Expat Tree",
          "module": "Text.XML.Expat.Tree",
          "name": "gxNullString",
          "normalized": "a-\u003eBool",
          "package": "hexpat",
          "partial": "Null String",
          "signature": "s-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Tree.html#v:gxNullString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Tree",
          "name": "gxTail",
          "package": "hexpat",
          "signature": "s -\u003e s",
          "source": "src/Text-XML-Expat-SAX.html#gxTail",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XML Expat Tree",
          "module": "Text.XML.Expat.Tree",
          "name": "gxTail",
          "normalized": "a-\u003ea",
          "package": "hexpat",
          "partial": "Tail",
          "signature": "s-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Tree.html#v:gxTail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Tree",
          "name": "gxToByteString",
          "package": "hexpat",
          "signature": "s -\u003e ByteString",
          "source": "src/Text-XML-Expat-SAX.html#gxToByteString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XML Expat Tree",
          "module": "Text.XML.Expat.Tree",
          "name": "gxToByteString",
          "normalized": "a-\u003eByteString",
          "package": "hexpat",
          "partial": "To Byte String",
          "signature": "s-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Tree.html#v:gxToByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Tree",
          "name": "gxToString",
          "package": "hexpat",
          "signature": "s -\u003e String",
          "source": "src/Text-XML-Expat-SAX.html#gxToString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XML Expat Tree",
          "module": "Text.XML.Expat.Tree",
          "name": "gxToString",
          "normalized": "a-\u003eString",
          "package": "hexpat",
          "partial": "To String",
          "signature": "s-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Tree.html#v:gxToString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLazily parse XML to tree. Note that forcing the XMLParseError return value\n will force the entire parse.  Therefore, to ensure lazy operation, don't\n check the error status until you have processed the tree.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Tree",
          "name": "parse",
          "package": "hexpat",
          "signature": "ParseOptions tag text-\u003e ByteString-\u003e (Node tag text, Maybe XMLParseError)",
          "type": "function"
        },
        "index": {
          "description": "Lazily parse XML to tree Note that forcing the XMLParseError return value will force the entire parse Therefore to ensure lazy operation don check the error status until you have processed the tree",
          "hierarchy": "Text XML Expat Tree",
          "module": "Text.XML.Expat.Tree",
          "name": "parse",
          "normalized": "ParseOptions a b-\u003eByteString-\u003e(Node a b,Maybe XMLParseError)",
          "package": "hexpat",
          "signature": "ParseOptions tag text-\u003eByteString-\u003e(Node tag text,Maybe XMLParseError)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Tree.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrictly parse XML to tree. Returns error message or valid parsed tree.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Tree",
          "name": "parse'",
          "package": "hexpat",
          "signature": "ParseOptions tag text-\u003e ByteString-\u003e Either XMLParseError (Node tag text)",
          "type": "function"
        },
        "index": {
          "description": "Strictly parse XML to tree Returns error message or valid parsed tree",
          "hierarchy": "Text XML Expat Tree",
          "module": "Text.XML.Expat.Tree",
          "name": "parse'",
          "normalized": "ParseOptions a b-\u003eByteString-\u003eEither XMLParseError(Node a b)",
          "package": "hexpat",
          "signature": "ParseOptions tag text-\u003eByteString-\u003eEither XMLParseError(Node tag text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Tree.html#v:parse-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a generalized list to a tree, ignoring parse errors.\n This function allows for a parse from an enumerator/iteratee to a \u003ca\u003elazy\u003c/a\u003e\n tree structure using the \u003ccode\u003eList-enumerator\u003c/code\u003e package.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Tree",
          "name": "parseG",
          "package": "hexpat",
          "signature": "ParseOptions tag text-\u003e l ByteString-\u003e ItemM l (NodeG l tag text)",
          "type": "function"
        },
        "index": {
          "description": "Parse generalized list to tree ignoring parse errors This function allows for parse from an enumerator iteratee to lazy tree structure using the List-enumerator package",
          "hierarchy": "Text XML Expat Tree",
          "module": "Text.XML.Expat.Tree",
          "name": "parseG",
          "normalized": "ParseOptions a b-\u003ec ByteString-\u003eItemM c(NodeG c a b)",
          "package": "hexpat",
          "signature": "ParseOptions tag text-\u003el ByteString-\u003eItemM l(NodeG l tag text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Tree.html#v:parseG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLazily parse XML to tree. In the event of an error, throw \u003ccode\u003e\u003ca\u003eXMLParseException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eparseThrowing\u003c/code\u003e can throw an exception from pure code, which is generally a bad\n way to handle errors, because Haskell's lazy evaluation means it's hard to\n predict where it will be thrown from.  However, it may be acceptable in\n situations where it's not expected during normal operation, depending on the\n design of your program.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Tree",
          "name": "parseThrowing",
          "package": "hexpat",
          "signature": "ParseOptions tag text-\u003e ByteString-\u003e Node tag text",
          "type": "function"
        },
        "index": {
          "description": "Lazily parse XML to tree In the event of an error throw XMLParseException parseThrowing can throw an exception from pure code which is generally bad way to handle errors because Haskell lazy evaluation means it hard to predict where it will be thrown from However it may be acceptable in situations where it not expected during normal operation depending on the design of your program",
          "hierarchy": "Text XML Expat Tree",
          "module": "Text.XML.Expat.Tree",
          "name": "parseThrowing",
          "normalized": "ParseOptions a b-\u003eByteString-\u003eNode a b",
          "package": "hexpat",
          "partial": "Throwing",
          "signature": "ParseOptions tag text-\u003eByteString-\u003eNode tag text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Tree.html#v:parseThrowing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA lower level function that lazily converts a SAX stream into a tree structure.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Tree",
          "name": "saxToTree",
          "package": "hexpat",
          "signature": "[SAXEvent tag text] -\u003e (Node tag text, Maybe XMLParseError)",
          "source": "src/Text-XML-Expat-Tree.html#saxToTree",
          "type": "function"
        },
        "index": {
          "description": "lower level function that lazily converts SAX stream into tree structure",
          "hierarchy": "Text XML Expat Tree",
          "module": "Text.XML.Expat.Tree",
          "name": "saxToTree",
          "normalized": "[SAXEvent a b]-\u003e(Node a b,Maybe XMLParseError)",
          "package": "hexpat",
          "partial": "To Tree",
          "signature": "[SAXEvent tag text]-\u003e(Node tag text,Maybe XMLParseError)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Tree.html#v:saxToTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA lower level function that converts a generalized SAX stream into a tree structure.\n Ignores parse errors.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Tree",
          "name": "saxToTreeG",
          "package": "hexpat",
          "signature": "l (SAXEvent tag text) -\u003e ItemM l (NodeG l tag text)",
          "source": "src/Text-XML-Expat-Tree.html#saxToTreeG",
          "type": "function"
        },
        "index": {
          "description": "lower level function that converts generalized SAX stream into tree structure Ignores parse errors",
          "hierarchy": "Text XML Expat Tree",
          "module": "Text.XML.Expat.Tree",
          "name": "saxToTreeG",
          "normalized": "a(SAXEvent b c)-\u003eItemM a(NodeG a b c)",
          "package": "hexpat",
          "partial": "To Tree",
          "signature": "l(SAXEvent tag text)-\u003eItemM l(NodeG l tag text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat/docs/Text-XML-Expat-Tree.html#v:saxToTreeG"
      }
    }
  ]
]