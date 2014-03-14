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
        "word": "libxml-sax"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBindings for the libXML2 SAX interface\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.LibXML.SAX",
          "name": "SAX",
          "package": "libxml-sax",
          "source": "src/Text-XML-LibXML-SAX.html",
          "type": "module"
        },
        "index": {
          "description": "Bindings for the libXML2 SAX interface",
          "hierarchy": "Text XML LibXML SAX",
          "module": "Text.XML.LibXML.SAX",
          "name": "SAX",
          "package": "libxml-sax",
          "partial": "SAX",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/libxml-sax/docs/Text-XML-LibXML-SAX.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.LibXML.SAX",
          "name": "Callback",
          "package": "libxml-sax",
          "source": "src/Text-XML-LibXML-SAX.html#Callback",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text XML LibXML SAX",
          "module": "Text.XML.LibXML.SAX",
          "name": "Callback",
          "package": "libxml-sax",
          "partial": "Callback",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libxml-sax/docs/Text-XML-LibXML-SAX.html#t:Callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e tracks the internal state of a LibXML parser context.\n\u003c/p\u003e\u003cp\u003eAs LibXML is a very stateful library, parsers must operate within either\n the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e monad. Use \u003ccode\u003e\u003ca\u003enewParserIO\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003enewParserST\u003c/a\u003e\u003c/code\u003e to create\n parsers in the appropriate monad.\n\u003c/p\u003e\u003cp\u003eIn general, clients should prefer \u003ccode\u003e\u003ca\u003enewParserST\u003c/a\u003e\u003c/code\u003e, because ST values can be\n safely computed with no side effects.\n\u003c/p\u003e",
          "module": "Text.XML.LibXML.SAX",
          "name": "Parser",
          "package": "libxml-sax",
          "source": "src/Text-XML-LibXML-SAX.html#Parser",
          "type": "data"
        },
        "index": {
          "description": "Parser tracks the internal state of LibXML parser context As LibXML is very stateful library parsers must operate within either the IO or ST monad Use newParserIO or newParserST to create parsers in the appropriate monad In general clients should prefer newParserST because ST values can be safely computed with no side effects",
          "hierarchy": "Text XML LibXML SAX",
          "module": "Text.XML.LibXML.SAX",
          "name": "Parser",
          "package": "libxml-sax",
          "partial": "Parser",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libxml-sax/docs/Text-XML-LibXML-SAX.html#t:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove a callback from the parser. This might also change the parser's\n behavior, such as automatically expanding entity references when no\n \u003ccode\u003e\u003ca\u003eparsedReference\u003c/a\u003e\u003c/code\u003e callback is set.\n\u003c/p\u003e",
          "module": "Text.XML.LibXML.SAX",
          "name": "clearCallback",
          "package": "libxml-sax",
          "signature": "Parser m -\u003e Callback m a -\u003e m ()",
          "source": "src/Text-XML-LibXML-SAX.html#clearCallback",
          "type": "function"
        },
        "index": {
          "description": "Remove callback from the parser This might also change the parser behavior such as automatically expanding entity references when no parsedReference callback is set",
          "hierarchy": "Text XML LibXML SAX",
          "module": "Text.XML.LibXML.SAX",
          "name": "clearCallback",
          "normalized": "Parser a-\u003eCallback a b-\u003ea()",
          "package": "libxml-sax",
          "partial": "Callback",
          "signature": "Parser m-\u003eCallback m a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libxml-sax/docs/Text-XML-LibXML-SAX.html#v:clearCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.LibXML.SAX",
          "name": "newParserIO",
          "package": "libxml-sax",
          "signature": "Maybe Text-\u003e IO (Parser IO)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML LibXML SAX",
          "module": "Text.XML.LibXML.SAX",
          "name": "newParserIO",
          "normalized": "Maybe Text-\u003eIO(Parser IO)",
          "package": "libxml-sax",
          "partial": "Parser IO",
          "signature": "Maybe Text-\u003eIO(Parser IO)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libxml-sax/docs/Text-XML-LibXML-SAX.html#v:newParserIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.LibXML.SAX",
          "name": "newParserST",
          "package": "libxml-sax",
          "signature": "Maybe Text-\u003e ST s (Parser (ST s))",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML LibXML SAX",
          "module": "Text.XML.LibXML.SAX",
          "name": "newParserST",
          "normalized": "Maybe Text-\u003eST a(Parser(ST a))",
          "package": "libxml-sax",
          "partial": "Parser ST",
          "signature": "Maybe Text-\u003eST s(Parser(ST s))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libxml-sax/docs/Text-XML-LibXML-SAX.html#v:newParserST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.LibXML.SAX",
          "name": "parseBytes",
          "package": "libxml-sax",
          "signature": "Parser m -\u003e ByteString -\u003e m ()",
          "source": "src/Text-XML-LibXML-SAX.html#parseBytes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML LibXML SAX",
          "module": "Text.XML.LibXML.SAX",
          "name": "parseBytes",
          "normalized": "Parser a-\u003eByteString-\u003ea()",
          "package": "libxml-sax",
          "partial": "Bytes",
          "signature": "Parser m-\u003eByteString-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libxml-sax/docs/Text-XML-LibXML-SAX.html#v:parseBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinish parsing any buffered data, and check that the document was\n closed correctly.\n\u003c/p\u003e",
          "module": "Text.XML.LibXML.SAX",
          "name": "parseComplete",
          "package": "libxml-sax",
          "signature": "Parser m -\u003e m ()",
          "source": "src/Text-XML-LibXML-SAX.html#parseComplete",
          "type": "function"
        },
        "index": {
          "description": "Finish parsing any buffered data and check that the document was closed correctly",
          "hierarchy": "Text XML LibXML SAX",
          "module": "Text.XML.LibXML.SAX",
          "name": "parseComplete",
          "normalized": "Parser a-\u003ea()",
          "package": "libxml-sax",
          "partial": "Complete",
          "signature": "Parser m-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libxml-sax/docs/Text-XML-LibXML-SAX.html#v:parseComplete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.LibXML.SAX",
          "name": "parsedBeginDocument",
          "package": "libxml-sax",
          "signature": "Callback m (m Bool)",
          "source": "src/Text-XML-LibXML-SAX.html#parsedBeginDocument",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML LibXML SAX",
          "module": "Text.XML.LibXML.SAX",
          "name": "parsedBeginDocument",
          "package": "libxml-sax",
          "partial": "Begin Document",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libxml-sax/docs/Text-XML-LibXML-SAX.html#v:parsedBeginDocument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.LibXML.SAX",
          "name": "parsedBeginElement",
          "package": "libxml-sax",
          "signature": "Callback m (Name -\u003e [(Name, [Content])] -\u003e m Bool)",
          "source": "src/Text-XML-LibXML-SAX.html#parsedBeginElement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML LibXML SAX",
          "module": "Text.XML.LibXML.SAX",
          "name": "parsedBeginElement",
          "normalized": "Callback a(Name-\u003e[(Name,[Content])]-\u003ea Bool)",
          "package": "libxml-sax",
          "partial": "Begin Element",
          "signature": "Callback m(Name-\u003e[(Name,[Content])]-\u003em Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libxml-sax/docs/Text-XML-LibXML-SAX.html#v:parsedBeginElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eparsedCDATA\u003c/a\u003e\u003c/code\u003e is set, it receives any text contained in CDATA\n blocks. By default, all text is received by \u003ccode\u003e\u003ca\u003eparsedCharacters\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XML.LibXML.SAX",
          "name": "parsedCDATA",
          "package": "libxml-sax",
          "signature": "Callback m (Text -\u003e m Bool)",
          "source": "src/Text-XML-LibXML-SAX.html#parsedCDATA",
          "type": "function"
        },
        "index": {
          "description": "If parsedCDATA is set it receives any text contained in CDATA blocks By default all text is received by parsedCharacters",
          "hierarchy": "Text XML LibXML SAX",
          "module": "Text.XML.LibXML.SAX",
          "name": "parsedCDATA",
          "normalized": "Callback a(Text-\u003ea Bool)",
          "package": "libxml-sax",
          "partial": "CDATA",
          "signature": "Callback m(Text-\u003em Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libxml-sax/docs/Text-XML-LibXML-SAX.html#v:parsedCDATA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.LibXML.SAX",
          "name": "parsedCharacters",
          "package": "libxml-sax",
          "signature": "Callback m (Text -\u003e m Bool)",
          "source": "src/Text-XML-LibXML-SAX.html#parsedCharacters",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML LibXML SAX",
          "module": "Text.XML.LibXML.SAX",
          "name": "parsedCharacters",
          "normalized": "Callback a(Text-\u003ea Bool)",
          "package": "libxml-sax",
          "partial": "Characters",
          "signature": "Callback m(Text-\u003em Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libxml-sax/docs/Text-XML-LibXML-SAX.html#v:parsedCharacters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.LibXML.SAX",
          "name": "parsedComment",
          "package": "libxml-sax",
          "signature": "Callback m (Text -\u003e m Bool)",
          "source": "src/Text-XML-LibXML-SAX.html#parsedComment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML LibXML SAX",
          "module": "Text.XML.LibXML.SAX",
          "name": "parsedComment",
          "normalized": "Callback a(Text-\u003ea Bool)",
          "package": "libxml-sax",
          "partial": "Comment",
          "signature": "Callback m(Text-\u003em Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libxml-sax/docs/Text-XML-LibXML-SAX.html#v:parsedComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.LibXML.SAX",
          "name": "parsedEndDocument",
          "package": "libxml-sax",
          "signature": "Callback m (m Bool)",
          "source": "src/Text-XML-LibXML-SAX.html#parsedEndDocument",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML LibXML SAX",
          "module": "Text.XML.LibXML.SAX",
          "name": "parsedEndDocument",
          "package": "libxml-sax",
          "partial": "End Document",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libxml-sax/docs/Text-XML-LibXML-SAX.html#v:parsedEndDocument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.LibXML.SAX",
          "name": "parsedEndElement",
          "package": "libxml-sax",
          "signature": "Callback m (Name -\u003e m Bool)",
          "source": "src/Text-XML-LibXML-SAX.html#parsedEndElement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML LibXML SAX",
          "module": "Text.XML.LibXML.SAX",
          "name": "parsedEndElement",
          "normalized": "Callback a(Name-\u003ea Bool)",
          "package": "libxml-sax",
          "partial": "End Element",
          "signature": "Callback m(Name-\u003em Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libxml-sax/docs/Text-XML-LibXML-SAX.html#v:parsedEndElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.LibXML.SAX",
          "name": "parsedExternalSubset",
          "package": "libxml-sax",
          "signature": "Callback m (Text -\u003e Maybe ExternalID -\u003e m Bool)",
          "source": "src/Text-XML-LibXML-SAX.html#parsedExternalSubset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML LibXML SAX",
          "module": "Text.XML.LibXML.SAX",
          "name": "parsedExternalSubset",
          "normalized": "Callback a(Text-\u003eMaybe ExternalID-\u003ea Bool)",
          "package": "libxml-sax",
          "partial": "External Subset",
          "signature": "Callback m(Text-\u003eMaybe ExternalID-\u003em Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libxml-sax/docs/Text-XML-LibXML-SAX.html#v:parsedExternalSubset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.LibXML.SAX",
          "name": "parsedInstruction",
          "package": "libxml-sax",
          "signature": "Callback m (Instruction -\u003e m Bool)",
          "source": "src/Text-XML-LibXML-SAX.html#parsedInstruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML LibXML SAX",
          "module": "Text.XML.LibXML.SAX",
          "name": "parsedInstruction",
          "normalized": "Callback a(Instruction-\u003ea Bool)",
          "package": "libxml-sax",
          "partial": "Instruction",
          "signature": "Callback m(Instruction-\u003em Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libxml-sax/docs/Text-XML-LibXML-SAX.html#v:parsedInstruction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.LibXML.SAX",
          "name": "parsedInternalSubset",
          "package": "libxml-sax",
          "signature": "Callback m (Text -\u003e Maybe ExternalID -\u003e m Bool)",
          "source": "src/Text-XML-LibXML-SAX.html#parsedInternalSubset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML LibXML SAX",
          "module": "Text.XML.LibXML.SAX",
          "name": "parsedInternalSubset",
          "normalized": "Callback a(Text-\u003eMaybe ExternalID-\u003ea Bool)",
          "package": "libxml-sax",
          "partial": "Internal Subset",
          "signature": "Callback m(Text-\u003eMaybe ExternalID-\u003em Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libxml-sax/docs/Text-XML-LibXML-SAX.html#v:parsedInternalSubset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eparsedReference\u003c/a\u003e\u003c/code\u003e is set, entity references in element and attribute\n content will reported separately from text, and will not be automatically\n expanded.\n\u003c/p\u003e\u003cp\u003eUse this when processing documents in passthrough mode, to preserve\n existing entity references.\n\u003c/p\u003e",
          "module": "Text.XML.LibXML.SAX",
          "name": "parsedReference",
          "package": "libxml-sax",
          "signature": "Callback m (Text -\u003e m Bool)",
          "source": "src/Text-XML-LibXML-SAX.html#parsedReference",
          "type": "function"
        },
        "index": {
          "description": "If parsedReference is set entity references in element and attribute content will reported separately from text and will not be automatically expanded Use this when processing documents in passthrough mode to preserve existing entity references",
          "hierarchy": "Text XML LibXML SAX",
          "module": "Text.XML.LibXML.SAX",
          "name": "parsedReference",
          "normalized": "Callback a(Text-\u003ea Bool)",
          "package": "libxml-sax",
          "partial": "Reference",
          "signature": "Callback m(Text-\u003em Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libxml-sax/docs/Text-XML-LibXML-SAX.html#v:parsedReference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eparsedWhitespace\u003c/a\u003e\u003c/code\u003e is set, it receives any whitespace marked as\n ignorable by the document's DTD. By default, all text is received by\n \u003ccode\u003e\u003ca\u003eparsedCharacters\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XML.LibXML.SAX",
          "name": "parsedWhitespace",
          "package": "libxml-sax",
          "signature": "Callback m (Text -\u003e m Bool)",
          "source": "src/Text-XML-LibXML-SAX.html#parsedWhitespace",
          "type": "function"
        },
        "index": {
          "description": "If parsedWhitespace is set it receives any whitespace marked as ignorable by the document DTD By default all text is received by parsedCharacters",
          "hierarchy": "Text XML LibXML SAX",
          "module": "Text.XML.LibXML.SAX",
          "name": "parsedWhitespace",
          "normalized": "Callback a(Text-\u003ea Bool)",
          "package": "libxml-sax",
          "partial": "Whitespace",
          "signature": "Callback m(Text-\u003em Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libxml-sax/docs/Text-XML-LibXML-SAX.html#v:parsedWhitespace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.LibXML.SAX",
          "name": "reportError",
          "package": "libxml-sax",
          "signature": "Callback m (Text -\u003e m Bool)",
          "source": "src/Text-XML-LibXML-SAX.html#reportError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML LibXML SAX",
          "module": "Text.XML.LibXML.SAX",
          "name": "reportError",
          "normalized": "Callback a(Text-\u003ea Bool)",
          "package": "libxml-sax",
          "partial": "Error",
          "signature": "Callback m(Text-\u003em Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libxml-sax/docs/Text-XML-LibXML-SAX.html#v:reportError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.LibXML.SAX",
          "name": "reportWarning",
          "package": "libxml-sax",
          "signature": "Callback m (Text -\u003e m Bool)",
          "source": "src/Text-XML-LibXML-SAX.html#reportWarning",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML LibXML SAX",
          "module": "Text.XML.LibXML.SAX",
          "name": "reportWarning",
          "normalized": "Callback a(Text-\u003ea Bool)",
          "package": "libxml-sax",
          "partial": "Warning",
          "signature": "Callback m(Text-\u003em Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libxml-sax/docs/Text-XML-LibXML-SAX.html#v:reportWarning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a callback computation to run when a particular parse event occurs.\n The callback should return \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e to continue parsing, or \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e\n to abort.\n\u003c/p\u003e\u003cp\u003eAlternatively, callbacks may throw an \u003ccode\u003e\u003ca\u003eException\u003c/a\u003e\u003c/code\u003e to abort parsing. The\n exception will be propagated through to the caller of \u003ccode\u003e\u003ca\u003eparseBytes\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003eparseComplete\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XML.LibXML.SAX",
          "name": "setCallback",
          "package": "libxml-sax",
          "signature": "Parser m -\u003e Callback m a -\u003e a -\u003e m ()",
          "source": "src/Text-XML-LibXML-SAX.html#setCallback",
          "type": "function"
        },
        "index": {
          "description": "Set callback computation to run when particular parse event occurs The callback should return True to continue parsing or False to abort Alternatively callbacks may throw an Exception to abort parsing The exception will be propagated through to the caller of parseBytes or parseComplete",
          "hierarchy": "Text XML LibXML SAX",
          "module": "Text.XML.LibXML.SAX",
          "name": "setCallback",
          "normalized": "Parser a-\u003eCallback a b-\u003eb-\u003ea()",
          "package": "libxml-sax",
          "partial": "Callback",
          "signature": "Parser m-\u003eCallback m a-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libxml-sax/docs/Text-XML-LibXML-SAX.html#v:setCallback"
      }
    }
  ]
]