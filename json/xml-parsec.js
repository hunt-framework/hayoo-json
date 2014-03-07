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
        "word": "xml-parsec"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHelper functions to use a Parsec-Parser for XML documents.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.ParserCombinators.Parsec.XML",
          "name": "XML",
          "package": "xml-parsec",
          "source": "src/Text-ParserCombinators-Parsec-XML.html",
          "type": "module"
        },
        "index": {
          "description": "Helper functions to use Parsec-Parser for XML documents",
          "hierarchy": "Text ParserCombinators Parsec XML",
          "module": "Text.ParserCombinators.Parsec.XML",
          "name": "XML",
          "package": "xml-parsec",
          "partial": "XML",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xml-parsec/docs/Text-ParserCombinators-Parsec-XML.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Parser for XML \u003ccode\u003e\u003ca\u003eContent\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.XML",
          "name": "XMLParser",
          "package": "xml-parsec",
          "source": "src/Text-ParserCombinators-Parsec-XML.html#XMLParser",
          "type": "type"
        },
        "index": {
          "description": "Parser for XML Content",
          "hierarchy": "Text ParserCombinators Parsec XML",
          "module": "Text.ParserCombinators.Parsec.XML",
          "name": "XMLParser",
          "package": "xml-parsec",
          "partial": "XMLParser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/xml-parsec/docs/Text-ParserCombinators-Parsec-XML.html#t:XMLParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccepts any content.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.XML",
          "name": "anyContent",
          "package": "xml-parsec",
          "signature": "XMLParser (Content Posn)",
          "source": "src/Text-ParserCombinators-Parsec-XML.html#anyContent",
          "type": "function"
        },
        "index": {
          "description": "Accepts any content",
          "hierarchy": "Text ParserCombinators Parsec XML",
          "module": "Text.ParserCombinators.Parsec.XML",
          "name": "anyContent",
          "package": "xml-parsec",
          "partial": "Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-parsec/docs/Text-ParserCombinators-Parsec-XML.html#v:anyContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccepts content verified by a function.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.XML",
          "name": "content",
          "package": "xml-parsec",
          "signature": "(Content Posn -\u003e Maybe a) -\u003e XMLParser a",
          "source": "src/Text-ParserCombinators-Parsec-XML.html#content",
          "type": "function"
        },
        "index": {
          "description": "Accepts content verified by function",
          "hierarchy": "Text ParserCombinators Parsec XML",
          "module": "Text.ParserCombinators.Parsec.XML",
          "name": "content",
          "normalized": "(Content Posn-\u003eMaybe a)-\u003eXMLParser a",
          "package": "xml-parsec",
          "signature": "(Content Posn-\u003eMaybe a)-\u003eXMLParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-parsec/docs/Text-ParserCombinators-Parsec-XML.html#v:content"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForces an \u003ccode\u003e\u003ca\u003eElement\u003c/a\u003e\u003c/code\u003e as next token.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.XML",
          "name": "element",
          "package": "xml-parsec",
          "signature": "XMLParser (Element Posn)",
          "source": "src/Text-ParserCombinators-Parsec-XML.html#element",
          "type": "function"
        },
        "index": {
          "description": "Forces an Element as next token",
          "hierarchy": "Text ParserCombinators Parsec XML",
          "module": "Text.ParserCombinators.Parsec.XML",
          "name": "element",
          "package": "xml-parsec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-parsec/docs/Text-ParserCombinators-Parsec-XML.html#v:element"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003enamedElementWithAttrs\u003c/a\u003e\u003c/code\u003e, ony that the attributes are ignored.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.XML",
          "name": "namedElement",
          "package": "xml-parsec",
          "signature": "String -\u003e XMLParser [Content Posn]",
          "source": "src/Text-ParserCombinators-Parsec-XML.html#namedElement",
          "type": "function"
        },
        "index": {
          "description": "As namedElementWithAttrs ony that the attributes are ignored",
          "hierarchy": "Text ParserCombinators Parsec XML",
          "module": "Text.ParserCombinators.Parsec.XML",
          "name": "namedElement",
          "normalized": "String-\u003eXMLParser[Content Posn]",
          "package": "xml-parsec",
          "partial": "Element",
          "signature": "String-\u003eXMLParser[Content Posn]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-parsec/docs/Text-ParserCombinators-Parsec-XML.html#v:namedElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses an element with given name. Returns the xml \u003ccode\u003e\u003ca\u003eAttribute\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.XML",
          "name": "namedElementWithAttrs",
          "package": "xml-parsec",
          "signature": "String -\u003e XMLParser ([Attribute], [Content Posn])",
          "source": "src/Text-ParserCombinators-Parsec-XML.html#namedElementWithAttrs",
          "type": "function"
        },
        "index": {
          "description": "Parses an element with given name Returns the xml Attribute",
          "hierarchy": "Text ParserCombinators Parsec XML",
          "module": "Text.ParserCombinators.Parsec.XML",
          "name": "namedElementWithAttrs",
          "normalized": "String-\u003eXMLParser([Attribute],[Content Posn])",
          "package": "xml-parsec",
          "partial": "Element With Attrs",
          "signature": "String-\u003eXMLParser([Attribute],[Content Posn])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-parsec/docs/Text-ParserCombinators-Parsec-XML.html#v:namedElementWithAttrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function to recurse through an XML document.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.XML",
          "name": "recurse",
          "package": "xml-parsec",
          "signature": "XMLParser a -\u003e [Content Posn] -\u003e XMLParser a",
          "source": "src/Text-ParserCombinators-Parsec-XML.html#recurse",
          "type": "function"
        },
        "index": {
          "description": "Helper function to recurse through an XML document",
          "hierarchy": "Text ParserCombinators Parsec XML",
          "module": "Text.ParserCombinators.Parsec.XML",
          "name": "recurse",
          "normalized": "XMLParser a-\u003e[Content Posn]-\u003eXMLParser a",
          "package": "xml-parsec",
          "signature": "XMLParser a-\u003e[Content Posn]-\u003eXMLParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-parsec/docs/Text-ParserCombinators-Parsec-XML.html#v:recurse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function to recurse through an XML document.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.XML",
          "name": "recurseElements",
          "package": "xml-parsec",
          "signature": "XMLParser a -\u003e [Content Posn] -\u003e XMLParser a",
          "source": "src/Text-ParserCombinators-Parsec-XML.html#recurseElements",
          "type": "function"
        },
        "index": {
          "description": "Helper function to recurse through an XML document",
          "hierarchy": "Text ParserCombinators Parsec XML",
          "module": "Text.ParserCombinators.Parsec.XML",
          "name": "recurseElements",
          "normalized": "XMLParser a-\u003e[Content Posn]-\u003eXMLParser a",
          "package": "xml-parsec",
          "partial": "Elements",
          "signature": "XMLParser a-\u003e[Content Posn]-\u003eXMLParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-parsec/docs/Text-ParserCombinators-Parsec-XML.html#v:recurseElements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses an element with a given name. The text content is returned.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.XML",
          "name": "stringElement",
          "package": "xml-parsec",
          "signature": "String -\u003e XMLParser String",
          "source": "src/Text-ParserCombinators-Parsec-XML.html#stringElement",
          "type": "function"
        },
        "index": {
          "description": "Parses an element with given name The text content is returned",
          "hierarchy": "Text ParserCombinators Parsec XML",
          "module": "Text.ParserCombinators.Parsec.XML",
          "name": "stringElement",
          "normalized": "String-\u003eXMLParser String",
          "package": "xml-parsec",
          "partial": "Element",
          "signature": "String-\u003eXMLParser String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-parsec/docs/Text-ParserCombinators-Parsec-XML.html#v:stringElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForces plain text as next token.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.XML",
          "name": "text",
          "package": "xml-parsec",
          "signature": "XMLParser String",
          "source": "src/Text-ParserCombinators-Parsec-XML.html#text",
          "type": "function"
        },
        "index": {
          "description": "Forces plain text as next token",
          "hierarchy": "Text ParserCombinators Parsec XML",
          "module": "Text.ParserCombinators.Parsec.XML",
          "name": "text",
          "package": "xml-parsec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-parsec/docs/Text-ParserCombinators-Parsec-XML.html#v:text"
      }
    }
  ]
]