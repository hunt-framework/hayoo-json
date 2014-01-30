[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libxml-sax/docs/Text-XML-LibXML-SAX.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBindings for the libXML2 SAX interface\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.XML.LibXML.SAX",
        "fct-package": "libxml-sax",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-LibXML-SAX.html",
        "fct-type": "module",
        "title": "SAX"
      },
      "index": {
        "description": "Bindings for the libXML2 SAX interface",
        "hierarchy": "Text XML LibXML SAX",
        "module": "Text.XML.LibXML.SAX",
        "name": "SAX",
        "normalized": "",
        "package": "libxml-sax",
        "partial": "SAX",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libxml-sax/docs/Text-XML-LibXML-SAX.html#t:Callback",
      "description": {
        "fct-module": "Text.XML.LibXML.SAX",
        "fct-package": "libxml-sax",
        "fct-signature": "data",
        "fct-source": "src/Text-XML-LibXML-SAX.html#Callback",
        "fct-type": "data",
        "title": "Callback"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML LibXML SAX",
        "module": "Text.XML.LibXML.SAX",
        "name": "Callback",
        "normalized": "",
        "package": "libxml-sax",
        "partial": "Callback",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libxml-sax/docs/Text-XML-LibXML-SAX.html#t:Parser",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e tracks the internal state of a LibXML parser context.\n\u003c/p\u003e\u003cp\u003eAs LibXML is a very stateful library, parsers must operate within either\n the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e monad. Use \u003ccode\u003e\u003ca\u003enewParserIO\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003enewParserST\u003c/a\u003e\u003c/code\u003e to create\n parsers in the appropriate monad.\n\u003c/p\u003e\u003cp\u003eIn general, clients should prefer \u003ccode\u003e\u003ca\u003enewParserST\u003c/a\u003e\u003c/code\u003e, because ST values can be\n safely computed with no side effects.\n\u003c/p\u003e",
        "fct-module": "Text.XML.LibXML.SAX",
        "fct-package": "libxml-sax",
        "fct-signature": "data",
        "fct-source": "src/Text-XML-LibXML-SAX.html#Parser",
        "fct-type": "data",
        "title": "Parser"
      },
      "index": {
        "description": "Parser tracks the internal state of LibXML parser context As LibXML is very stateful library parsers must operate within either the IO or ST monad Use newParserIO or newParserST to create parsers in the appropriate monad In general clients should prefer newParserST because ST values can be safely computed with no side effects",
        "hierarchy": "Text XML LibXML SAX",
        "module": "Text.XML.LibXML.SAX",
        "name": "Parser",
        "normalized": "",
        "package": "libxml-sax",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libxml-sax/docs/Text-XML-LibXML-SAX.html#v:clearCallback",
      "description": {
        "fct-descr": "\u003cp\u003eRemove a callback from the parser. This might also change the parser's\n behavior, such as automatically expanding entity references when no\n \u003ccode\u003e\u003ca\u003eparsedReference\u003c/a\u003e\u003c/code\u003e callback is set.\n\u003c/p\u003e",
        "fct-module": "Text.XML.LibXML.SAX",
        "fct-package": "libxml-sax",
        "fct-signature": "Parser m -\u003e Callback m a -\u003e m ()",
        "fct-source": "src/Text-XML-LibXML-SAX.html#clearCallback",
        "fct-type": "function",
        "title": "clearCallback"
      },
      "index": {
        "description": "Remove callback from the parser This might also change the parser behavior such as automatically expanding entity references when no parsedReference callback is set",
        "hierarchy": "Text XML LibXML SAX",
        "module": "Text.XML.LibXML.SAX",
        "name": "clearCallback",
        "normalized": "Parser a-\u003eCallback a b-\u003ea()",
        "package": "libxml-sax",
        "partial": "Callback",
        "signature": "Parser m-\u003eCallback m a-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libxml-sax/docs/Text-XML-LibXML-SAX.html#v:newParserIO",
      "description": {
        "fct-module": "Text.XML.LibXML.SAX",
        "fct-package": "libxml-sax",
        "fct-signature": "Maybe Text-\u003e IO (Parser IO)",
        "fct-type": "function",
        "title": "newParserIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML LibXML SAX",
        "module": "Text.XML.LibXML.SAX",
        "name": "newParserIO",
        "normalized": "Maybe Text-\u003eIO(Parser IO)",
        "package": "libxml-sax",
        "partial": "Parser IO",
        "signature": "Maybe Text-\u003eIO(Parser IO)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libxml-sax/docs/Text-XML-LibXML-SAX.html#v:newParserST",
      "description": {
        "fct-module": "Text.XML.LibXML.SAX",
        "fct-package": "libxml-sax",
        "fct-signature": "Maybe Text-\u003e ST s (Parser (ST s))",
        "fct-type": "function",
        "title": "newParserST"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML LibXML SAX",
        "module": "Text.XML.LibXML.SAX",
        "name": "newParserST",
        "normalized": "Maybe Text-\u003eST a(Parser(ST a))",
        "package": "libxml-sax",
        "partial": "Parser ST",
        "signature": "Maybe Text-\u003eST s(Parser(ST s))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libxml-sax/docs/Text-XML-LibXML-SAX.html#v:parseBytes",
      "description": {
        "fct-module": "Text.XML.LibXML.SAX",
        "fct-package": "libxml-sax",
        "fct-signature": "Parser m -\u003e ByteString -\u003e m ()",
        "fct-source": "src/Text-XML-LibXML-SAX.html#parseBytes",
        "fct-type": "function",
        "title": "parseBytes"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML LibXML SAX",
        "module": "Text.XML.LibXML.SAX",
        "name": "parseBytes",
        "normalized": "Parser a-\u003eByteString-\u003ea()",
        "package": "libxml-sax",
        "partial": "Bytes",
        "signature": "Parser m-\u003eByteString-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libxml-sax/docs/Text-XML-LibXML-SAX.html#v:parseComplete",
      "description": {
        "fct-descr": "\u003cp\u003eFinish parsing any buffered data, and check that the document was\n closed correctly.\n\u003c/p\u003e",
        "fct-module": "Text.XML.LibXML.SAX",
        "fct-package": "libxml-sax",
        "fct-signature": "Parser m -\u003e m ()",
        "fct-source": "src/Text-XML-LibXML-SAX.html#parseComplete",
        "fct-type": "function",
        "title": "parseComplete"
      },
      "index": {
        "description": "Finish parsing any buffered data and check that the document was closed correctly",
        "hierarchy": "Text XML LibXML SAX",
        "module": "Text.XML.LibXML.SAX",
        "name": "parseComplete",
        "normalized": "Parser a-\u003ea()",
        "package": "libxml-sax",
        "partial": "Complete",
        "signature": "Parser m-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libxml-sax/docs/Text-XML-LibXML-SAX.html#v:parsedBeginDocument",
      "description": {
        "fct-module": "Text.XML.LibXML.SAX",
        "fct-package": "libxml-sax",
        "fct-signature": "Callback m (m Bool)",
        "fct-source": "src/Text-XML-LibXML-SAX.html#parsedBeginDocument",
        "fct-type": "function",
        "title": "parsedBeginDocument"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML LibXML SAX",
        "module": "Text.XML.LibXML.SAX",
        "name": "parsedBeginDocument",
        "normalized": "",
        "package": "libxml-sax",
        "partial": "Begin Document",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libxml-sax/docs/Text-XML-LibXML-SAX.html#v:parsedBeginElement",
      "description": {
        "fct-module": "Text.XML.LibXML.SAX",
        "fct-package": "libxml-sax",
        "fct-signature": "Callback m (Name -\u003e [(Name, [Content])] -\u003e m Bool)",
        "fct-source": "src/Text-XML-LibXML-SAX.html#parsedBeginElement",
        "fct-type": "function",
        "title": "parsedBeginElement"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML LibXML SAX",
        "module": "Text.XML.LibXML.SAX",
        "name": "parsedBeginElement",
        "normalized": "Callback a(Name-\u003e[(Name,[Content])]-\u003ea Bool)",
        "package": "libxml-sax",
        "partial": "Begin Element",
        "signature": "Callback m(Name-\u003e[(Name,[Content])]-\u003em Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libxml-sax/docs/Text-XML-LibXML-SAX.html#v:parsedCDATA",
      "description": {
        "fct-descr": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eparsedCDATA\u003c/a\u003e\u003c/code\u003e is set, it receives any text contained in CDATA\n blocks. By default, all text is received by \u003ccode\u003e\u003ca\u003eparsedCharacters\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.XML.LibXML.SAX",
        "fct-package": "libxml-sax",
        "fct-signature": "Callback m (Text -\u003e m Bool)",
        "fct-source": "src/Text-XML-LibXML-SAX.html#parsedCDATA",
        "fct-type": "function",
        "title": "parsedCDATA"
      },
      "index": {
        "description": "If parsedCDATA is set it receives any text contained in CDATA blocks By default all text is received by parsedCharacters",
        "hierarchy": "Text XML LibXML SAX",
        "module": "Text.XML.LibXML.SAX",
        "name": "parsedCDATA",
        "normalized": "Callback a(Text-\u003ea Bool)",
        "package": "libxml-sax",
        "partial": "CDATA",
        "signature": "Callback m(Text-\u003em Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libxml-sax/docs/Text-XML-LibXML-SAX.html#v:parsedCharacters",
      "description": {
        "fct-module": "Text.XML.LibXML.SAX",
        "fct-package": "libxml-sax",
        "fct-signature": "Callback m (Text -\u003e m Bool)",
        "fct-source": "src/Text-XML-LibXML-SAX.html#parsedCharacters",
        "fct-type": "function",
        "title": "parsedCharacters"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML LibXML SAX",
        "module": "Text.XML.LibXML.SAX",
        "name": "parsedCharacters",
        "normalized": "Callback a(Text-\u003ea Bool)",
        "package": "libxml-sax",
        "partial": "Characters",
        "signature": "Callback m(Text-\u003em Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libxml-sax/docs/Text-XML-LibXML-SAX.html#v:parsedComment",
      "description": {
        "fct-module": "Text.XML.LibXML.SAX",
        "fct-package": "libxml-sax",
        "fct-signature": "Callback m (Text -\u003e m Bool)",
        "fct-source": "src/Text-XML-LibXML-SAX.html#parsedComment",
        "fct-type": "function",
        "title": "parsedComment"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML LibXML SAX",
        "module": "Text.XML.LibXML.SAX",
        "name": "parsedComment",
        "normalized": "Callback a(Text-\u003ea Bool)",
        "package": "libxml-sax",
        "partial": "Comment",
        "signature": "Callback m(Text-\u003em Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libxml-sax/docs/Text-XML-LibXML-SAX.html#v:parsedEndDocument",
      "description": {
        "fct-module": "Text.XML.LibXML.SAX",
        "fct-package": "libxml-sax",
        "fct-signature": "Callback m (m Bool)",
        "fct-source": "src/Text-XML-LibXML-SAX.html#parsedEndDocument",
        "fct-type": "function",
        "title": "parsedEndDocument"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML LibXML SAX",
        "module": "Text.XML.LibXML.SAX",
        "name": "parsedEndDocument",
        "normalized": "",
        "package": "libxml-sax",
        "partial": "End Document",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libxml-sax/docs/Text-XML-LibXML-SAX.html#v:parsedEndElement",
      "description": {
        "fct-module": "Text.XML.LibXML.SAX",
        "fct-package": "libxml-sax",
        "fct-signature": "Callback m (Name -\u003e m Bool)",
        "fct-source": "src/Text-XML-LibXML-SAX.html#parsedEndElement",
        "fct-type": "function",
        "title": "parsedEndElement"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML LibXML SAX",
        "module": "Text.XML.LibXML.SAX",
        "name": "parsedEndElement",
        "normalized": "Callback a(Name-\u003ea Bool)",
        "package": "libxml-sax",
        "partial": "End Element",
        "signature": "Callback m(Name-\u003em Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libxml-sax/docs/Text-XML-LibXML-SAX.html#v:parsedExternalSubset",
      "description": {
        "fct-module": "Text.XML.LibXML.SAX",
        "fct-package": "libxml-sax",
        "fct-signature": "Callback m (Text -\u003e Maybe ExternalID -\u003e m Bool)",
        "fct-source": "src/Text-XML-LibXML-SAX.html#parsedExternalSubset",
        "fct-type": "function",
        "title": "parsedExternalSubset"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML LibXML SAX",
        "module": "Text.XML.LibXML.SAX",
        "name": "parsedExternalSubset",
        "normalized": "Callback a(Text-\u003eMaybe ExternalID-\u003ea Bool)",
        "package": "libxml-sax",
        "partial": "External Subset",
        "signature": "Callback m(Text-\u003eMaybe ExternalID-\u003em Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libxml-sax/docs/Text-XML-LibXML-SAX.html#v:parsedInstruction",
      "description": {
        "fct-module": "Text.XML.LibXML.SAX",
        "fct-package": "libxml-sax",
        "fct-signature": "Callback m (Instruction -\u003e m Bool)",
        "fct-source": "src/Text-XML-LibXML-SAX.html#parsedInstruction",
        "fct-type": "function",
        "title": "parsedInstruction"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML LibXML SAX",
        "module": "Text.XML.LibXML.SAX",
        "name": "parsedInstruction",
        "normalized": "Callback a(Instruction-\u003ea Bool)",
        "package": "libxml-sax",
        "partial": "Instruction",
        "signature": "Callback m(Instruction-\u003em Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libxml-sax/docs/Text-XML-LibXML-SAX.html#v:parsedInternalSubset",
      "description": {
        "fct-module": "Text.XML.LibXML.SAX",
        "fct-package": "libxml-sax",
        "fct-signature": "Callback m (Text -\u003e Maybe ExternalID -\u003e m Bool)",
        "fct-source": "src/Text-XML-LibXML-SAX.html#parsedInternalSubset",
        "fct-type": "function",
        "title": "parsedInternalSubset"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML LibXML SAX",
        "module": "Text.XML.LibXML.SAX",
        "name": "parsedInternalSubset",
        "normalized": "Callback a(Text-\u003eMaybe ExternalID-\u003ea Bool)",
        "package": "libxml-sax",
        "partial": "Internal Subset",
        "signature": "Callback m(Text-\u003eMaybe ExternalID-\u003em Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libxml-sax/docs/Text-XML-LibXML-SAX.html#v:parsedReference",
      "description": {
        "fct-descr": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eparsedReference\u003c/a\u003e\u003c/code\u003e is set, entity references in element and attribute\n content will reported separately from text, and will not be automatically\n expanded.\n\u003c/p\u003e\u003cp\u003eUse this when processing documents in passthrough mode, to preserve\n existing entity references.\n\u003c/p\u003e",
        "fct-module": "Text.XML.LibXML.SAX",
        "fct-package": "libxml-sax",
        "fct-signature": "Callback m (Text -\u003e m Bool)",
        "fct-source": "src/Text-XML-LibXML-SAX.html#parsedReference",
        "fct-type": "function",
        "title": "parsedReference"
      },
      "index": {
        "description": "If parsedReference is set entity references in element and attribute content will reported separately from text and will not be automatically expanded Use this when processing documents in passthrough mode to preserve existing entity references",
        "hierarchy": "Text XML LibXML SAX",
        "module": "Text.XML.LibXML.SAX",
        "name": "parsedReference",
        "normalized": "Callback a(Text-\u003ea Bool)",
        "package": "libxml-sax",
        "partial": "Reference",
        "signature": "Callback m(Text-\u003em Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libxml-sax/docs/Text-XML-LibXML-SAX.html#v:parsedWhitespace",
      "description": {
        "fct-descr": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eparsedWhitespace\u003c/a\u003e\u003c/code\u003e is set, it receives any whitespace marked as\n ignorable by the document's DTD. By default, all text is received by\n \u003ccode\u003e\u003ca\u003eparsedCharacters\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.XML.LibXML.SAX",
        "fct-package": "libxml-sax",
        "fct-signature": "Callback m (Text -\u003e m Bool)",
        "fct-source": "src/Text-XML-LibXML-SAX.html#parsedWhitespace",
        "fct-type": "function",
        "title": "parsedWhitespace"
      },
      "index": {
        "description": "If parsedWhitespace is set it receives any whitespace marked as ignorable by the document DTD By default all text is received by parsedCharacters",
        "hierarchy": "Text XML LibXML SAX",
        "module": "Text.XML.LibXML.SAX",
        "name": "parsedWhitespace",
        "normalized": "Callback a(Text-\u003ea Bool)",
        "package": "libxml-sax",
        "partial": "Whitespace",
        "signature": "Callback m(Text-\u003em Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libxml-sax/docs/Text-XML-LibXML-SAX.html#v:reportError",
      "description": {
        "fct-module": "Text.XML.LibXML.SAX",
        "fct-package": "libxml-sax",
        "fct-signature": "Callback m (Text -\u003e m Bool)",
        "fct-source": "src/Text-XML-LibXML-SAX.html#reportError",
        "fct-type": "function",
        "title": "reportError"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML LibXML SAX",
        "module": "Text.XML.LibXML.SAX",
        "name": "reportError",
        "normalized": "Callback a(Text-\u003ea Bool)",
        "package": "libxml-sax",
        "partial": "Error",
        "signature": "Callback m(Text-\u003em Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libxml-sax/docs/Text-XML-LibXML-SAX.html#v:reportWarning",
      "description": {
        "fct-module": "Text.XML.LibXML.SAX",
        "fct-package": "libxml-sax",
        "fct-signature": "Callback m (Text -\u003e m Bool)",
        "fct-source": "src/Text-XML-LibXML-SAX.html#reportWarning",
        "fct-type": "function",
        "title": "reportWarning"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML LibXML SAX",
        "module": "Text.XML.LibXML.SAX",
        "name": "reportWarning",
        "normalized": "Callback a(Text-\u003ea Bool)",
        "package": "libxml-sax",
        "partial": "Warning",
        "signature": "Callback m(Text-\u003em Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libxml-sax/docs/Text-XML-LibXML-SAX.html#v:setCallback",
      "description": {
        "fct-descr": "\u003cp\u003eSet a callback computation to run when a particular parse event occurs.\n The callback should return \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e to continue parsing, or \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e\n to abort.\n\u003c/p\u003e\u003cp\u003eAlternatively, callbacks may throw an \u003ccode\u003e\u003ca\u003eException\u003c/a\u003e\u003c/code\u003e to abort parsing. The\n exception will be propagated through to the caller of \u003ccode\u003e\u003ca\u003eparseBytes\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003eparseComplete\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.XML.LibXML.SAX",
        "fct-package": "libxml-sax",
        "fct-signature": "Parser m -\u003e Callback m a -\u003e a -\u003e m ()",
        "fct-source": "src/Text-XML-LibXML-SAX.html#setCallback",
        "fct-type": "function",
        "title": "setCallback"
      },
      "index": {
        "description": "Set callback computation to run when particular parse event occurs The callback should return True to continue parsing or False to abort Alternatively callbacks may throw an Exception to abort parsing The exception will be propagated through to the caller of parseBytes or parseComplete",
        "hierarchy": "Text XML LibXML SAX",
        "module": "Text.XML.LibXML.SAX",
        "name": "setCallback",
        "normalized": "Parser a-\u003eCallback a b-\u003eb-\u003ea()",
        "package": "libxml-sax",
        "partial": "Callback",
        "signature": "Parser m-\u003eCallback m a-\u003ea-\u003em()"
      }
    }
  }
]