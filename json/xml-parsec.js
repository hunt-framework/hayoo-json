[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-parsec/docs/Text-ParserCombinators-Parsec-XML.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHelper functions to use a Parsec-Parser for XML documents.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.XML",
        "fct-package": "xml-parsec",
        "fct-signature": "module",
        "fct-source": "src/Text-ParserCombinators-Parsec-XML.html",
        "fct-type": "module",
        "title": "XML"
      },
      "index": {
        "description": "Helper functions to use Parsec-Parser for XML documents",
        "hierarchy": "Text ParserCombinators Parsec XML",
        "module": "Text.ParserCombinators.Parsec.XML",
        "name": "XML",
        "normalized": "",
        "package": "xml-parsec",
        "partial": "XML",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-parsec/docs/Text-ParserCombinators-Parsec-XML.html#t:XMLParser",
      "description": {
        "fct-descr": "\u003cp\u003eA Parser for XML \u003ccode\u003e\u003ca\u003eContent\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.XML",
        "fct-package": "xml-parsec",
        "fct-signature": "type",
        "fct-source": "src/Text-ParserCombinators-Parsec-XML.html#XMLParser",
        "fct-type": "type",
        "title": "XMLParser"
      },
      "index": {
        "description": "Parser for XML Content",
        "hierarchy": "Text ParserCombinators Parsec XML",
        "module": "Text.ParserCombinators.Parsec.XML",
        "name": "XMLParser",
        "normalized": "",
        "package": "xml-parsec",
        "partial": "XMLParser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-parsec/docs/Text-ParserCombinators-Parsec-XML.html#v:anyContent",
      "description": {
        "fct-descr": "\u003cp\u003eAccepts any content.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.XML",
        "fct-package": "xml-parsec",
        "fct-signature": "XMLParser (Content Posn)",
        "fct-source": "src/Text-ParserCombinators-Parsec-XML.html#anyContent",
        "fct-type": "function",
        "title": "anyContent"
      },
      "index": {
        "description": "Accepts any content",
        "hierarchy": "Text ParserCombinators Parsec XML",
        "module": "Text.ParserCombinators.Parsec.XML",
        "name": "anyContent",
        "normalized": "",
        "package": "xml-parsec",
        "partial": "Content",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-parsec/docs/Text-ParserCombinators-Parsec-XML.html#v:content",
      "description": {
        "fct-descr": "\u003cp\u003eAccepts content verified by a function.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.XML",
        "fct-package": "xml-parsec",
        "fct-signature": "(Content Posn -\u003e Maybe a) -\u003e XMLParser a",
        "fct-source": "src/Text-ParserCombinators-Parsec-XML.html#content",
        "fct-type": "function",
        "title": "content"
      },
      "index": {
        "description": "Accepts content verified by function",
        "hierarchy": "Text ParserCombinators Parsec XML",
        "module": "Text.ParserCombinators.Parsec.XML",
        "name": "content",
        "normalized": "(Content Posn-\u003eMaybe a)-\u003eXMLParser a",
        "package": "xml-parsec",
        "partial": "",
        "signature": "(Content Posn-\u003eMaybe a)-\u003eXMLParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-parsec/docs/Text-ParserCombinators-Parsec-XML.html#v:element",
      "description": {
        "fct-descr": "\u003cp\u003eForces an \u003ccode\u003e\u003ca\u003eElement\u003c/a\u003e\u003c/code\u003e as next token.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.XML",
        "fct-package": "xml-parsec",
        "fct-signature": "XMLParser (Element Posn)",
        "fct-source": "src/Text-ParserCombinators-Parsec-XML.html#element",
        "fct-type": "function",
        "title": "element"
      },
      "index": {
        "description": "Forces an Element as next token",
        "hierarchy": "Text ParserCombinators Parsec XML",
        "module": "Text.ParserCombinators.Parsec.XML",
        "name": "element",
        "normalized": "",
        "package": "xml-parsec",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-parsec/docs/Text-ParserCombinators-Parsec-XML.html#v:namedElement",
      "description": {
        "fct-descr": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003enamedElementWithAttrs\u003c/a\u003e\u003c/code\u003e, ony that the attributes are ignored.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.XML",
        "fct-package": "xml-parsec",
        "fct-signature": "String -\u003e XMLParser [Content Posn]",
        "fct-source": "src/Text-ParserCombinators-Parsec-XML.html#namedElement",
        "fct-type": "function",
        "title": "namedElement"
      },
      "index": {
        "description": "As namedElementWithAttrs ony that the attributes are ignored",
        "hierarchy": "Text ParserCombinators Parsec XML",
        "module": "Text.ParserCombinators.Parsec.XML",
        "name": "namedElement",
        "normalized": "String-\u003eXMLParser[Content Posn]",
        "package": "xml-parsec",
        "partial": "Element",
        "signature": "String-\u003eXMLParser[Content Posn]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-parsec/docs/Text-ParserCombinators-Parsec-XML.html#v:namedElementWithAttrs",
      "description": {
        "fct-descr": "\u003cp\u003eParses an element with given name. Returns the xml \u003ccode\u003e\u003ca\u003eAttribute\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.XML",
        "fct-package": "xml-parsec",
        "fct-signature": "String -\u003e XMLParser ([Attribute], [Content Posn])",
        "fct-source": "src/Text-ParserCombinators-Parsec-XML.html#namedElementWithAttrs",
        "fct-type": "function",
        "title": "namedElementWithAttrs"
      },
      "index": {
        "description": "Parses an element with given name Returns the xml Attribute",
        "hierarchy": "Text ParserCombinators Parsec XML",
        "module": "Text.ParserCombinators.Parsec.XML",
        "name": "namedElementWithAttrs",
        "normalized": "String-\u003eXMLParser([Attribute],[Content Posn])",
        "package": "xml-parsec",
        "partial": "Element With Attrs",
        "signature": "String-\u003eXMLParser([Attribute],[Content Posn])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-parsec/docs/Text-ParserCombinators-Parsec-XML.html#v:recurse",
      "description": {
        "fct-descr": "\u003cp\u003eHelper function to recurse through an XML document.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.XML",
        "fct-package": "xml-parsec",
        "fct-signature": "XMLParser a -\u003e [Content Posn] -\u003e XMLParser a",
        "fct-source": "src/Text-ParserCombinators-Parsec-XML.html#recurse",
        "fct-type": "function",
        "title": "recurse"
      },
      "index": {
        "description": "Helper function to recurse through an XML document",
        "hierarchy": "Text ParserCombinators Parsec XML",
        "module": "Text.ParserCombinators.Parsec.XML",
        "name": "recurse",
        "normalized": "XMLParser a-\u003e[Content Posn]-\u003eXMLParser a",
        "package": "xml-parsec",
        "partial": "",
        "signature": "XMLParser a-\u003e[Content Posn]-\u003eXMLParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-parsec/docs/Text-ParserCombinators-Parsec-XML.html#v:recurseElements",
      "description": {
        "fct-descr": "\u003cp\u003eHelper function to recurse through an XML document.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.XML",
        "fct-package": "xml-parsec",
        "fct-signature": "XMLParser a -\u003e [Content Posn] -\u003e XMLParser a",
        "fct-source": "src/Text-ParserCombinators-Parsec-XML.html#recurseElements",
        "fct-type": "function",
        "title": "recurseElements"
      },
      "index": {
        "description": "Helper function to recurse through an XML document",
        "hierarchy": "Text ParserCombinators Parsec XML",
        "module": "Text.ParserCombinators.Parsec.XML",
        "name": "recurseElements",
        "normalized": "XMLParser a-\u003e[Content Posn]-\u003eXMLParser a",
        "package": "xml-parsec",
        "partial": "Elements",
        "signature": "XMLParser a-\u003e[Content Posn]-\u003eXMLParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-parsec/docs/Text-ParserCombinators-Parsec-XML.html#v:stringElement",
      "description": {
        "fct-descr": "\u003cp\u003eParses an element with a given name. The text content is returned.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.XML",
        "fct-package": "xml-parsec",
        "fct-signature": "String -\u003e XMLParser String",
        "fct-source": "src/Text-ParserCombinators-Parsec-XML.html#stringElement",
        "fct-type": "function",
        "title": "stringElement"
      },
      "index": {
        "description": "Parses an element with given name The text content is returned",
        "hierarchy": "Text ParserCombinators Parsec XML",
        "module": "Text.ParserCombinators.Parsec.XML",
        "name": "stringElement",
        "normalized": "String-\u003eXMLParser String",
        "package": "xml-parsec",
        "partial": "Element",
        "signature": "String-\u003eXMLParser String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-parsec/docs/Text-ParserCombinators-Parsec-XML.html#v:text",
      "description": {
        "fct-descr": "\u003cp\u003eForces plain text as next token.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.XML",
        "fct-package": "xml-parsec",
        "fct-signature": "XMLParser String",
        "fct-source": "src/Text-ParserCombinators-Parsec-XML.html#text",
        "fct-type": "function",
        "title": "text"
      },
      "index": {
        "description": "Forces plain text as next token",
        "hierarchy": "Text ParserCombinators Parsec XML",
        "module": "Text.ParserCombinators.Parsec.XML",
        "name": "text",
        "normalized": "",
        "package": "xml-parsec",
        "partial": "",
        "signature": ""
      }
    }
  }
]