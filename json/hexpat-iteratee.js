[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#",
      "description": {
        "fct-module": "Text.XML.Expat.Chunked",
        "fct-package": "hexpat-iteratee",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-Expat-Chunked.html",
        "fct-type": "module",
        "title": "Chunked"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Expat Chunked",
        "module": "Text.XML.Expat.Chunked",
        "name": "Chunked",
        "normalized": "",
        "package": "hexpat-iteratee",
        "partial": "Chunked",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#t:Encoding",
      "description": {
        "fct-descr": "\u003cp\u003eEncoding types available for the document encoding.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Expat.Chunked",
        "fct-package": "hexpat-iteratee",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Encoding"
      },
      "index": {
        "description": "Encoding types available for the document encoding",
        "hierarchy": "Text XML Expat Chunked",
        "module": "Text.XML.Expat.Chunked",
        "name": "Encoding",
        "normalized": "",
        "package": "hexpat-iteratee",
        "partial": "Encoding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#t:NNode",
      "description": {
        "fct-descr": "\u003cp\u003eType alias for a single annotated node where namespaced names are used for tags\n\u003c/p\u003e\u003cp\u003eThe \u003cem\u003es\u003c/em\u003e parameter is a dummy type used to prevent nodes escaping from the\n handler.  See \u003ccode\u003es\u003c/code\u003e for more explanation.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Expat.Chunked",
        "fct-package": "hexpat-iteratee",
        "fct-signature": "type",
        "fct-source": "src/Text-XML-Expat-Chunked.html#NNode",
        "fct-type": "type",
        "title": "NNode"
      },
      "index": {
        "description": "Type alias for single annotated node where namespaced names are used for tags The parameter is dummy type used to prevent nodes escaping from the handler See for more explanation",
        "hierarchy": "Text XML Expat Chunked",
        "module": "Text.XML.Expat.Chunked",
        "name": "NNode",
        "normalized": "",
        "package": "hexpat-iteratee",
        "partial": "NNode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#t:Node",
      "description": {
        "fct-descr": "\u003cp\u003eA tree representation that uses a monadic list as its child list type.\n\u003c/p\u003e\u003cp\u003eNote that you can use the type function \u003ccode\u003e\u003ca\u003eListOf\u003c/a\u003e\u003c/code\u003e to give a list of\n any node type, using that node's associated list type, e.g.\n \u003ccode\u003eListOf (UNode Text)\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThe \u003cem\u003es\u003c/em\u003e parameter is a dummy type used to prevent nodes escaping from the\n handler.  See \u003ccode\u003es\u003c/code\u003e for more explanation.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Expat.Chunked",
        "fct-package": "hexpat-iteratee",
        "fct-signature": "type",
        "fct-source": "src/Text-XML-Expat-Chunked.html#Node",
        "fct-type": "type",
        "title": "Node"
      },
      "index": {
        "description": "tree representation that uses monadic list as its child list type Note that you can use the type function ListOf to give list of any node type using that node associated list type e.g ListOf UNode Text The parameter is dummy type used to prevent nodes escaping from the handler See for more explanation",
        "hierarchy": "Text XML Expat Chunked",
        "module": "Text.XML.Expat.Chunked",
        "name": "Node",
        "normalized": "",
        "package": "hexpat-iteratee",
        "partial": "Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#t:NodeG",
      "description": {
        "fct-descr": "\u003cp\u003eThe tree representation of the XML document.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ec\u003c/code\u003e is the container type for the element's children, which is [] in the\n \u003ccode\u003ehexpat\u003c/code\u003e package, and a monadic list type for \u003ccode\u003ehexpat-iteratee\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003etag\u003c/code\u003e is the tag type, which can either be one of several string types,\n or a special type from the \u003ccode\u003eText.XML.Expat.Namespaced\u003c/code\u003e or\n \u003ccode\u003eText.XML.Expat.Qualified\u003c/code\u003e modules.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003etext\u003c/code\u003e is the string type for text content.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Expat.Chunked",
        "fct-package": "hexpat-iteratee",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "NodeG"
      },
      "index": {
        "description": "The tree representation of the XML document is the container type for the element children which is in the hexpat package and monadic list type for hexpat-iteratee tag is the tag type which can either be one of several string types or special type from the Text.XML.Expat.Namespaced or Text.XML.Expat.Qualified modules text is the string type for text content",
        "hierarchy": "Text XML Expat Chunked",
        "module": "Text.XML.Expat.Chunked",
        "name": "NodeG",
        "normalized": "",
        "package": "hexpat-iteratee",
        "partial": "Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#t:ParseOptions",
      "description": {
        "fct-module": "Text.XML.Expat.Chunked",
        "fct-package": "hexpat-iteratee",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "ParseOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Expat Chunked",
        "module": "Text.XML.Expat.Chunked",
        "name": "ParseOptions",
        "normalized": "",
        "package": "hexpat-iteratee",
        "partial": "Parse Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#t:QNode",
      "description": {
        "fct-descr": "\u003cp\u003eType alias for a single annotated node where qualified names are used for tags\n\u003c/p\u003e\u003cp\u003eThe \u003cem\u003es\u003c/em\u003e parameter is a dummy type used to prevent nodes escaping from the\n handler.  See \u003ccode\u003es\u003c/code\u003e for more explanation.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Expat.Chunked",
        "fct-package": "hexpat-iteratee",
        "fct-signature": "type",
        "fct-source": "src/Text-XML-Expat-Chunked.html#QNode",
        "fct-type": "type",
        "title": "QNode"
      },
      "index": {
        "description": "Type alias for single annotated node where qualified names are used for tags The parameter is dummy type used to prevent nodes escaping from the handler See for more explanation",
        "hierarchy": "Text XML Expat Chunked",
        "module": "Text.XML.Expat.Chunked",
        "name": "QNode",
        "normalized": "",
        "package": "hexpat-iteratee",
        "partial": "QNode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#t:UNode",
      "description": {
        "fct-descr": "\u003cp\u003eType alias for a single node with unqualified tag names where tag and\n text are the same string type.\n\u003c/p\u003e\u003cp\u003eThe \u003cem\u003es\u003c/em\u003e parameter is a dummy type used to prevent nodes escaping from the\n handler.  See \u003ccode\u003es\u003c/code\u003e for more explanation.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Expat.Chunked",
        "fct-package": "hexpat-iteratee",
        "fct-signature": "type",
        "fct-source": "src/Text-XML-Expat-Chunked.html#UNode",
        "fct-type": "type",
        "title": "UNode"
      },
      "index": {
        "description": "Type alias for single node with unqualified tag names where tag and text are the same string type The parameter is dummy type used to prevent nodes escaping from the handler See for more explanation",
        "hierarchy": "Text XML Expat Chunked",
        "module": "Text.XML.Expat.Chunked",
        "name": "UNode",
        "normalized": "",
        "package": "hexpat-iteratee",
        "partial": "UNode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#t:XMLParseError",
      "description": {
        "fct-descr": "\u003cp\u003eParse error, consisting of message text and error location\n\u003c/p\u003e",
        "fct-module": "Text.XML.Expat.Chunked",
        "fct-package": "hexpat-iteratee",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "XMLParseError"
      },
      "index": {
        "description": "Parse error consisting of message text and error location",
        "hierarchy": "Text XML Expat Chunked",
        "module": "Text.XML.Expat.Chunked",
        "name": "XMLParseError",
        "normalized": "",
        "package": "hexpat-iteratee",
        "partial": "XMLParse Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#t:XMLParseLocation",
      "description": {
        "fct-descr": "\u003cp\u003eSpecifies a location of an event within the input text\n\u003c/p\u003e",
        "fct-module": "Text.XML.Expat.Chunked",
        "fct-package": "hexpat-iteratee",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "XMLParseLocation"
      },
      "index": {
        "description": "Specifies location of an event within the input text",
        "hierarchy": "Text XML Expat Chunked",
        "module": "Text.XML.Expat.Chunked",
        "name": "XMLParseLocation",
        "normalized": "",
        "package": "hexpat-iteratee",
        "partial": "XMLParse Location",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#t:XMLT",
      "description": {
        "fct-descr": "\u003cp\u003eThe monad transformer used for writing your handler for chunked XML trees,\n which executes as a co-routine.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Expat.Chunked",
        "fct-package": "hexpat-iteratee",
        "fct-signature": "data",
        "fct-source": "src/Text-XML-Expat-Chunked.html#XMLT",
        "fct-type": "data",
        "title": "XMLT"
      },
      "index": {
        "description": "The monad transformer used for writing your handler for chunked XML trees which executes as co-routine",
        "hierarchy": "Text XML Expat Chunked",
        "module": "Text.XML.Expat.Chunked",
        "name": "XMLT",
        "normalized": "",
        "package": "hexpat-iteratee",
        "partial": "XMLT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#v:ASCII",
      "description": {
        "fct-module": "Text.XML.Expat.Chunked",
        "fct-package": "hexpat-iteratee",
        "fct-signature": "ASCII",
        "fct-type": "function",
        "title": "ASCII"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Expat Chunked",
        "module": "Text.XML.Expat.Chunked",
        "name": "ASCII",
        "normalized": "",
        "package": "hexpat-iteratee",
        "partial": "ASCII",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#v:Element",
      "description": {
        "fct-module": "Text.XML.Expat.Chunked",
        "fct-package": "hexpat-iteratee",
        "fct-signature": "Element",
        "fct-type": "function",
        "title": "Element"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Expat Chunked",
        "module": "Text.XML.Expat.Chunked",
        "name": "Element",
        "normalized": "",
        "package": "hexpat-iteratee",
        "partial": "Element",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#v:ISO88591",
      "description": {
        "fct-module": "Text.XML.Expat.Chunked",
        "fct-package": "hexpat-iteratee",
        "fct-signature": "ISO88591",
        "fct-type": "function",
        "title": "ISO88591"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Expat Chunked",
        "module": "Text.XML.Expat.Chunked",
        "name": "ISO88591",
        "normalized": "",
        "package": "hexpat-iteratee",
        "partial": "ISO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#v:ParseOptions",
      "description": {
        "fct-module": "Text.XML.Expat.Chunked",
        "fct-package": "hexpat-iteratee",
        "fct-signature": "ParseOptions",
        "fct-type": "function",
        "title": "ParseOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Expat Chunked",
        "module": "Text.XML.Expat.Chunked",
        "name": "ParseOptions",
        "normalized": "",
        "package": "hexpat-iteratee",
        "partial": "Parse Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#v:Text",
      "description": {
        "fct-module": "Text.XML.Expat.Chunked",
        "fct-package": "hexpat-iteratee",
        "fct-signature": "Text !text",
        "fct-type": "function",
        "title": "Text"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Expat Chunked",
        "module": "Text.XML.Expat.Chunked",
        "name": "Text",
        "normalized": "",
        "package": "hexpat-iteratee",
        "partial": "Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#v:UTF16",
      "description": {
        "fct-module": "Text.XML.Expat.Chunked",
        "fct-package": "hexpat-iteratee",
        "fct-signature": "UTF16",
        "fct-type": "function",
        "title": "UTF16"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Expat Chunked",
        "module": "Text.XML.Expat.Chunked",
        "name": "UTF16",
        "normalized": "",
        "package": "hexpat-iteratee",
        "partial": "UTF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#v:UTF8",
      "description": {
        "fct-module": "Text.XML.Expat.Chunked",
        "fct-package": "hexpat-iteratee",
        "fct-signature": "UTF8",
        "fct-type": "function",
        "title": "UTF8"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Expat Chunked",
        "module": "Text.XML.Expat.Chunked",
        "name": "UTF8",
        "normalized": "",
        "package": "hexpat-iteratee",
        "partial": "UTF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#v:XMLParseError",
      "description": {
        "fct-module": "Text.XML.Expat.Chunked",
        "fct-package": "hexpat-iteratee",
        "fct-signature": "XMLParseError String XMLParseLocation",
        "fct-type": "function",
        "title": "XMLParseError"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Expat Chunked",
        "module": "Text.XML.Expat.Chunked",
        "name": "XMLParseError",
        "normalized": "",
        "package": "hexpat-iteratee",
        "partial": "XMLParse Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#v:XMLParseLocation",
      "description": {
        "fct-module": "Text.XML.Expat.Chunked",
        "fct-package": "hexpat-iteratee",
        "fct-signature": "XMLParseLocation",
        "fct-type": "function",
        "title": "XMLParseLocation"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Expat Chunked",
        "module": "Text.XML.Expat.Chunked",
        "name": "XMLParseLocation",
        "normalized": "",
        "package": "hexpat-iteratee",
        "partial": "XMLParse Location",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#v:defaultParseOptions",
      "description": {
        "fct-module": "Text.XML.Expat.Chunked",
        "fct-package": "hexpat-iteratee",
        "fct-signature": "ParseOptions tag text",
        "fct-type": "function",
        "title": "defaultParseOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Expat Chunked",
        "module": "Text.XML.Expat.Chunked",
        "name": "defaultParseOptions",
        "normalized": "",
        "package": "hexpat-iteratee",
        "partial": "Parse Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#v:eAttributes",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.XML.Expat.Chunked",
        "fct-package": "hexpat-iteratee",
        "fct-signature": "![(tag, text)]",
        "fct-type": "function",
        "title": "eAttributes"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Expat Chunked",
        "module": "Text.XML.Expat.Chunked",
        "name": "eAttributes",
        "normalized": "[(a,b)]",
        "package": "hexpat-iteratee",
        "partial": "Attributes",
        "signature": "[(tag,text)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#v:eChildren",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.XML.Expat.Chunked",
        "fct-package": "hexpat-iteratee",
        "fct-signature": "c (NodeG c tag text)",
        "fct-type": "function",
        "title": "eChildren"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Expat Chunked",
        "module": "Text.XML.Expat.Chunked",
        "name": "eChildren",
        "normalized": "",
        "package": "hexpat-iteratee",
        "partial": "Children",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#v:eName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.XML.Expat.Chunked",
        "fct-package": "hexpat-iteratee",
        "fct-signature": "!tag",
        "fct-type": "function",
        "title": "eName"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Expat Chunked",
        "module": "Text.XML.Expat.Chunked",
        "name": "eName",
        "normalized": "",
        "package": "hexpat-iteratee",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#v:entityDecoder",
      "description": {
        "fct-descr": "\u003cp\u003eIf provided, entity references (i.e. \u003ccode\u003e&nbsp;\u003c/code\u003e and friends) will\n be decoded into text using the supplied lookup function\n\u003c/p\u003e",
        "fct-module": "Text.XML.Expat.Chunked",
        "fct-package": "hexpat-iteratee",
        "fct-signature": "Maybe (tag -\u003e Maybe text)",
        "fct-type": "function",
        "title": "entityDecoder"
      },
      "index": {
        "description": "If provided entity references i.e nbsp and friends will be decoded into text using the supplied lookup function",
        "hierarchy": "Text XML Expat Chunked",
        "module": "Text.XML.Expat.Chunked",
        "name": "entityDecoder",
        "normalized": "Maybe(a-\u003eMaybe b)",
        "package": "hexpat-iteratee",
        "partial": "Decoder",
        "signature": "Maybe(tag-\u003eMaybe text)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#v:overrideEncoding",
      "description": {
        "fct-descr": "\u003cp\u003eThe encoding parameter, if provided, overrides the document's\n encoding declaration.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Expat.Chunked",
        "fct-package": "hexpat-iteratee",
        "fct-signature": "Maybe Encoding",
        "fct-type": "function",
        "title": "overrideEncoding"
      },
      "index": {
        "description": "The encoding parameter if provided overrides the document encoding declaration",
        "hierarchy": "Text XML Expat Chunked",
        "module": "Text.XML.Expat.Chunked",
        "name": "overrideEncoding",
        "normalized": "",
        "package": "hexpat-iteratee",
        "partial": "Encoding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#v:parse",
      "description": {
        "fct-descr": "\u003cp\u003eAn iteratee that parses the input document, passing a representation of it\n to the specified handler monad.  The monad runs lazily using co-routines, so\n if it requests a part of the tree that hasn't been parsed yet, it will\n be suspended, and continued when it's available.\n\u003c/p\u003e\u003cp\u003eThis implementation does \u003cem\u003enot\u003c/em\u003e use Haskell's lazy I/O.\n\u003c/p\u003e\u003cp\u003eThe \u003cem\u003es\u003c/em\u003e type argument is a dummy type, which you should just leave polymorphic\n by typing \u003cem\u003es\u003c/em\u003e when using the type.  The \"forall s .\" in the type signature\n prevents any parsed nodes escaping from the handler, because they may refer\n to parts of the tree that haven't been parsed yet, and this parsing can't\n take happen outside the handler.  If you need to extract nodes from your\n handler, use a function like \u003ccode\u003e\u003ca\u003efromNodeContainer\u003c/a\u003e\u003c/code\u003e to convert the container type.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Expat.Chunked",
        "fct-package": "hexpat-iteratee",
        "fct-signature": "ParseOptions tag text-\u003e (forall s.  ListT (XMLT s m) (Node s m tag text) -\u003e XMLT s m a)-\u003e m (IterateeG WrappedByteString Word8 m (Either ErrMsg a))",
        "fct-type": "function",
        "title": "parse"
      },
      "index": {
        "description": "An iteratee that parses the input document passing representation of it to the specified handler monad The monad runs lazily using co-routines so if it requests part of the tree that hasn been parsed yet it will be suspended and continued when it available This implementation does not use Haskell lazy The type argument is dummy type which you should just leave polymorphic by typing when using the type The forall in the type signature prevents any parsed nodes escaping from the handler because they may refer to parts of the tree that haven been parsed yet and this parsing can take happen outside the handler If you need to extract nodes from your handler use function like fromNodeContainer to convert the container type",
        "hierarchy": "Text XML Expat Chunked",
        "module": "Text.XML.Expat.Chunked",
        "name": "parse",
        "normalized": "ParseOptions a b-\u003e(c d ListT(XMLT e f)(Node e f a b)-\u003eXMLT e f g)-\u003ef(IterateeG WrappedByteString Word f(Either ErrMsg g))",
        "package": "hexpat-iteratee",
        "partial": "",
        "signature": "ParseOptions tag text-\u003e(forall s. ListT(XMLT s m)(Node s m tag text)-\u003eXMLT s m a)-\u003em(IterateeG WrappedByteString Word m(Either ErrMsg a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#v:xmlByteCount",
      "description": {
        "fct-descr": "\u003cp\u003eThe number of bytes in the event\n\u003c/p\u003e",
        "fct-module": "Text.XML.Expat.Chunked",
        "fct-package": "hexpat-iteratee",
        "fct-signature": "Int64",
        "fct-type": "function",
        "title": "xmlByteCount"
      },
      "index": {
        "description": "The number of bytes in the event",
        "hierarchy": "Text XML Expat Chunked",
        "module": "Text.XML.Expat.Chunked",
        "name": "xmlByteCount",
        "normalized": "",
        "package": "hexpat-iteratee",
        "partial": "Byte Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#v:xmlByteIndex",
      "description": {
        "fct-descr": "\u003cp\u003eByte index of event from start of document\n\u003c/p\u003e",
        "fct-module": "Text.XML.Expat.Chunked",
        "fct-package": "hexpat-iteratee",
        "fct-signature": "Int64",
        "fct-type": "function",
        "title": "xmlByteIndex"
      },
      "index": {
        "description": "Byte index of event from start of document",
        "hierarchy": "Text XML Expat Chunked",
        "module": "Text.XML.Expat.Chunked",
        "name": "xmlByteIndex",
        "normalized": "",
        "package": "hexpat-iteratee",
        "partial": "Byte Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#v:xmlColumnNumber",
      "description": {
        "fct-descr": "\u003cp\u003eColumn number of the event\n\u003c/p\u003e",
        "fct-module": "Text.XML.Expat.Chunked",
        "fct-package": "hexpat-iteratee",
        "fct-signature": "Int64",
        "fct-type": "function",
        "title": "xmlColumnNumber"
      },
      "index": {
        "description": "Column number of the event",
        "hierarchy": "Text XML Expat Chunked",
        "module": "Text.XML.Expat.Chunked",
        "name": "xmlColumnNumber",
        "normalized": "",
        "package": "hexpat-iteratee",
        "partial": "Column Number",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#v:xmlLineNumber",
      "description": {
        "fct-descr": "\u003cp\u003eLine number of the event\n\u003c/p\u003e",
        "fct-module": "Text.XML.Expat.Chunked",
        "fct-package": "hexpat-iteratee",
        "fct-signature": "Int64",
        "fct-type": "function",
        "title": "xmlLineNumber"
      },
      "index": {
        "description": "Line number of the event",
        "hierarchy": "Text XML Expat Chunked",
        "module": "Text.XML.Expat.Chunked",
        "name": "xmlLineNumber",
        "normalized": "",
        "package": "hexpat-iteratee",
        "partial": "Line Number",
        "signature": ""
      }
    }
  }
]