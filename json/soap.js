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
        "word": "soap"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SOAP.Exception",
          "name": "Exception",
          "package": "soap",
          "source": "src/Network-SOAP-Exception.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network SOAP Exception",
          "module": "Network.SOAP.Exception",
          "name": "Exception",
          "package": "soap",
          "partial": "Exception",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/soap/docs/Network-SOAP-Exception.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eException to be thrown when transport encounters an exception that is\n   acutally a SOAP Fault.\n\u003c/p\u003e",
          "module": "Network.SOAP.Exception",
          "name": "SOAPFault",
          "package": "soap",
          "source": "src/Network-SOAP-Exception.html#SOAPFault",
          "type": "data"
        },
        "index": {
          "description": "Exception to be thrown when transport encounters an exception that is acutally SOAP Fault",
          "hierarchy": "Network SOAP Exception",
          "module": "Network.SOAP.Exception",
          "name": "SOAPFault",
          "package": "soap",
          "partial": "SOAPFault",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/soap/docs/Network-SOAP-Exception.html#t:SOAPFault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SOAP.Exception",
          "name": "SOAPParsingError",
          "package": "soap",
          "source": "src/Network-SOAP-Exception.html#SOAPParsingError",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network SOAP Exception",
          "module": "Network.SOAP.Exception",
          "name": "SOAPParsingError",
          "package": "soap",
          "partial": "SOAPParsing Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/soap/docs/Network-SOAP-Exception.html#t:SOAPParsingError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.SOAP.Exception\",\"Network.SOAP\"]",
          "name": "SOAPFault",
          "package": "soap",
          "signature": "SOAPFault",
          "source": "src/Network-SOAP-Exception.html#SOAPFault",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/soap/docs/Network-SOAP-Exception.html#v:SOAPFault\",\"http://hackage.haskell.org/package/soap/docs/Network-SOAP.html#v:SOAPFault\"]"
        },
        "index": {
          "hierarchy": "Network SOAP Exception",
          "module": "Network.SOAP.Exception",
          "name": "SOAPFault",
          "package": "soap",
          "partial": "SOAPFault",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/soap/docs/Network-SOAP-Exception.html#v:SOAPFault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.SOAP.Exception\",\"Network.SOAP\"]",
          "name": "SOAPParsingError",
          "package": "soap",
          "signature": "SOAPParsingError String",
          "source": "src/Network-SOAP-Exception.html#SOAPParsingError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/soap/docs/Network-SOAP-Exception.html#v:SOAPParsingError\",\"http://hackage.haskell.org/package/soap/docs/Network-SOAP.html#v:SOAPParsingError\"]"
        },
        "index": {
          "hierarchy": "Network SOAP Exception",
          "module": "Network.SOAP.Exception",
          "name": "SOAPParsingError",
          "package": "soap",
          "partial": "SOAPParsing Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/soap/docs/Network-SOAP-Exception.html#v:SOAPParsingError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to find a SOAP Fault in a document.\n\u003c/p\u003e",
          "module": "Network.SOAP.Exception",
          "name": "extractSoapFault",
          "package": "soap",
          "signature": "Document -\u003e Maybe SOAPFault",
          "source": "src/Network-SOAP-Exception.html#extractSoapFault",
          "type": "function"
        },
        "index": {
          "description": "Try to find SOAP Fault in document",
          "hierarchy": "Network SOAP Exception",
          "module": "Network.SOAP.Exception",
          "name": "extractSoapFault",
          "normalized": "Document-\u003eMaybe SOAPFault",
          "package": "soap",
          "partial": "Soap Fault",
          "signature": "Document-\u003eMaybe SOAPFault",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/soap/docs/Network-SOAP-Exception.html#v:extractSoapFault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.SOAP.Exception\",\"Network.SOAP\"]",
          "name": "faultCode",
          "package": "soap",
          "signature": "Text",
          "source": "src/Network-SOAP-Exception.html#SOAPFault",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/soap/docs/Network-SOAP-Exception.html#v:faultCode\",\"http://hackage.haskell.org/package/soap/docs/Network-SOAP.html#v:faultCode\"]"
        },
        "index": {
          "hierarchy": "Network SOAP Exception",
          "module": "Network.SOAP.Exception",
          "name": "faultCode",
          "package": "soap",
          "partial": "Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/soap/docs/Network-SOAP-Exception.html#v:faultCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.SOAP.Exception\",\"Network.SOAP\"]",
          "name": "faultDetail",
          "package": "soap",
          "signature": "Text",
          "source": "src/Network-SOAP-Exception.html#SOAPFault",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/soap/docs/Network-SOAP-Exception.html#v:faultDetail\",\"http://hackage.haskell.org/package/soap/docs/Network-SOAP.html#v:faultDetail\"]"
        },
        "index": {
          "hierarchy": "Network SOAP Exception",
          "module": "Network.SOAP.Exception",
          "name": "faultDetail",
          "package": "soap",
          "partial": "Detail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/soap/docs/Network-SOAP-Exception.html#v:faultDetail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.SOAP.Exception\",\"Network.SOAP\"]",
          "name": "faultString",
          "package": "soap",
          "signature": "Text",
          "source": "src/Network-SOAP-Exception.html#SOAPFault",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/soap/docs/Network-SOAP-Exception.html#v:faultString\",\"http://hackage.haskell.org/package/soap/docs/Network-SOAP.html#v:faultString\"]"
        },
        "index": {
          "hierarchy": "Network SOAP Exception",
          "module": "Network.SOAP.Exception",
          "name": "faultString",
          "package": "soap",
          "partial": "String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/soap/docs/Network-SOAP-Exception.html#v:faultString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSome helpers to parse documents with Text.XML.Cursor.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.SOAP.Parsing.Cursor",
          "name": "Cursor",
          "package": "soap",
          "source": "src/Network-SOAP-Parsing-Cursor.html",
          "type": "module"
        },
        "index": {
          "description": "Some helpers to parse documents with Text.XML.Cursor",
          "hierarchy": "Network SOAP Parsing Cursor",
          "module": "Network.SOAP.Parsing.Cursor",
          "name": "Cursor",
          "package": "soap",
          "partial": "Cursor",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/soap/docs/Network-SOAP-Parsing-Cursor.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVery generic type to catch server reply when you don't care about types.\n\u003c/p\u003e",
          "module": "Network.SOAP.Parsing.Cursor",
          "name": "Dict",
          "package": "soap",
          "source": "src/Network-SOAP-Parsing-Cursor.html#Dict",
          "type": "type"
        },
        "index": {
          "description": "Very generic type to catch server reply when you don care about types",
          "hierarchy": "Network SOAP Parsing Cursor",
          "module": "Network.SOAP.Parsing.Cursor",
          "name": "Dict",
          "package": "soap",
          "partial": "Dict",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/soap/docs/Network-SOAP-Parsing-Cursor.html#t:Dict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple parser to grab a flat response by an element name.\n\u003c/p\u003e\u003cpre\u003e result \u003c- invokeWS &#8230; (dictBy \"BigDataResult\")\n case HM.lookup \"SuccessError\" result of &#8230;\n\u003c/pre\u003e",
          "module": "Network.SOAP.Parsing.Cursor",
          "name": "dictBy",
          "package": "soap",
          "signature": "Text -\u003e ResponseParser Dict",
          "source": "src/Network-SOAP-Parsing-Cursor.html#dictBy",
          "type": "function"
        },
        "index": {
          "description": "Simple parser to grab flat response by an element name result invokeWS dictBy BigDataResult case HM.lookup SuccessError result of",
          "hierarchy": "Network SOAP Parsing Cursor",
          "module": "Network.SOAP.Parsing.Cursor",
          "name": "dictBy",
          "normalized": "Text-\u003eResponseParser Dict",
          "package": "soap",
          "partial": "By",
          "signature": "Text-\u003eResponseParser Dict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/soap/docs/Network-SOAP-Parsing-Cursor.html#v:dictBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract a read-able type from a content of a node with given name.\n\u003c/p\u003e\u003cpre\u003e age = readC \"age\" :: Cursor -\u003e Integer\n\u003c/pre\u003e",
          "module": "Network.SOAP.Parsing.Cursor",
          "name": "readC",
          "package": "soap",
          "signature": "Text -\u003e Cursor -\u003e a",
          "source": "src/Network-SOAP-Parsing-Cursor.html#readC",
          "type": "function"
        },
        "index": {
          "description": "Extract read-able type from content of node with given name age readC age Cursor Integer",
          "hierarchy": "Network SOAP Parsing Cursor",
          "module": "Network.SOAP.Parsing.Cursor",
          "name": "readC",
          "normalized": "Text-\u003eCursor-\u003ea",
          "package": "soap",
          "signature": "Text-\u003eCursor-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/soap/docs/Network-SOAP-Parsing-Cursor.html#v:readC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply an axis and extract a key-value from child elements.\n\u003c/p\u003e\u003cpre\u003e invokeWS &#8230; (CursorParser . readDict $ laxElement \"WebScaleResponse\" &/ laxElement \"BigDataResult\")\n\u003c/pre\u003e",
          "module": "Network.SOAP.Parsing.Cursor",
          "name": "readDict",
          "package": "soap",
          "signature": "Axis -\u003e Cursor -\u003e Dict",
          "source": "src/Network-SOAP-Parsing-Cursor.html#readDict",
          "type": "function"
        },
        "index": {
          "description": "Apply an axis and extract key-value from child elements invokeWS CursorParser readDict laxElement WebScaleResponse laxElement BigDataResult",
          "hierarchy": "Network SOAP Parsing Cursor",
          "module": "Network.SOAP.Parsing.Cursor",
          "name": "readDict",
          "normalized": "Axis-\u003eCursor-\u003eDict",
          "package": "soap",
          "partial": "Dict",
          "signature": "Axis-\u003eCursor-\u003eDict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/soap/docs/Network-SOAP-Parsing-Cursor.html#v:readDict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGrab node content by element name.\n\u003c/p\u003e\u003cpre\u003e pair cur = (readT \"fst\" cur, readT \"snd\" cur)\n\u003c/pre\u003e",
          "module": "Network.SOAP.Parsing.Cursor",
          "name": "readT",
          "package": "soap",
          "signature": "Text -\u003e Cursor -\u003e Text",
          "source": "src/Network-SOAP-Parsing-Cursor.html#readT",
          "type": "function"
        },
        "index": {
          "description": "Grab node content by element name pair cur readT fst cur readT snd cur",
          "hierarchy": "Network SOAP Parsing Cursor",
          "module": "Network.SOAP.Parsing.Cursor",
          "name": "readT",
          "normalized": "Text-\u003eCursor-\u003eText",
          "package": "soap",
          "signature": "Text-\u003eCursor-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/soap/docs/Network-SOAP-Parsing-Cursor.html#v:readT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCollection of helpers to use with Text.XML.Stream.Parse parsers.\n\u003c/p\u003e\u003cpre\u003e let sink = flaxTag \"MethodNameResponse\"\n          $ flaxTag \"MethodNameResult\" $ do\n              info \u003c- flaxTag \"Info\" $ do\n                          q \u003c- readTag \"quantity\"\n                          b \u003c- readTag \"balance\"\n                          return $ Info q b\n              rc \u003c- readTag \"ResponseCode\"\n              return (rc, info)\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Network.SOAP.Parsing.Stream",
          "name": "Stream",
          "package": "soap",
          "source": "src/Network-SOAP-Parsing-Stream.html",
          "type": "module"
        },
        "index": {
          "description": "Collection of helpers to use with Text.XML.Stream.Parse parsers let sink flaxTag MethodNameResponse flaxTag MethodNameResult do info flaxTag Info do readTag quantity readTag balance return Info rc readTag ResponseCode return rc info",
          "hierarchy": "Network SOAP Parsing Stream",
          "module": "Network.SOAP.Parsing.Stream",
          "name": "Stream",
          "package": "soap",
          "partial": "Stream",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/soap/docs/Network-SOAP-Parsing-Stream.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSome XML processing tools are incremental, and work in terms of events\n rather than node trees. The \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e type allows a document to be fully\n specified as a sequence of events.\n\u003c/p\u003e\u003cp\u003eEvent-based XML libraries include:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003ehttp://hackage.haskell.org/package/xml-enumerator\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://hackage.haskell.org/package/libxml-enumerator\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://hackage.haskell.org/package/expat-enumerator\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Network.SOAP.Parsing.Stream",
          "name": "Event",
          "package": "soap",
          "type": "data"
        },
        "index": {
          "description": "Some XML processing tools are incremental and work in terms of events rather than node trees The Event type allows document to be fully specified as sequence of events Event-based XML libraries include http hackage.haskell.org package xml-enumerator http hackage.haskell.org package libxml-enumerator http hackage.haskell.org package expat-enumerator",
          "hierarchy": "Network SOAP Parsing Stream",
          "module": "Network.SOAP.Parsing.Stream",
          "name": "Event",
          "package": "soap",
          "partial": "Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/soap/docs/Network-SOAP-Parsing-Stream.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsumes a stream of input values and produces a final result, without\n producing any output.\n\u003c/p\u003e\u003cpre\u003e type Sink i m r = ConduitM i Void m r\n\u003c/pre\u003e\u003cp\u003eSince 0.5.0\n\u003c/p\u003e",
          "module": "Network.SOAP.Parsing.Stream",
          "name": "Sink",
          "package": "soap",
          "type": "type"
        },
        "index": {
          "description": "Consumes stream of input values and produces final result without producing any output type Sink ConduitM Void Since",
          "hierarchy": "Network SOAP Parsing Stream",
          "module": "Network.SOAP.Parsing.Stream",
          "name": "Sink",
          "package": "soap",
          "partial": "Sink",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/soap/docs/Network-SOAP-Parsing-Stream.html#t:Sink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SOAP.Parsing.Stream",
          "name": "flaxContent",
          "package": "soap",
          "signature": "Text -\u003e Sink Event m Text",
          "source": "src/Network-SOAP-Parsing-Stream.html#flaxContent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SOAP Parsing Stream",
          "module": "Network.SOAP.Parsing.Stream",
          "name": "flaxContent",
          "normalized": "Text-\u003eSink Event a Text",
          "package": "soap",
          "partial": "Content",
          "signature": "Text-\u003eSink Event m Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/soap/docs/Network-SOAP-Parsing-Stream.html#v:flaxContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon-maybe version of laxTag/tagNoAttr.\n\u003c/p\u003e",
          "module": "Network.SOAP.Parsing.Stream",
          "name": "flaxTag",
          "package": "soap",
          "signature": "Text -\u003e Sink Event m a -\u003e Sink Event m a",
          "source": "src/Network-SOAP-Parsing-Stream.html#flaxTag",
          "type": "function"
        },
        "index": {
          "description": "Non-maybe version of laxTag tagNoAttr",
          "hierarchy": "Network SOAP Parsing Stream",
          "module": "Network.SOAP.Parsing.Stream",
          "name": "flaxTag",
          "normalized": "Text-\u003eSink Event a b-\u003eSink Event a b",
          "package": "soap",
          "partial": "Tag",
          "signature": "Text-\u003eSink Event m a-\u003eSink Event m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/soap/docs/Network-SOAP-Parsing-Stream.html#v:flaxTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SOAP.Parsing.Stream",
          "name": "laxContent",
          "package": "soap",
          "signature": "Text -\u003e Sink Event m (Maybe Text)",
          "source": "src/Network-SOAP-Parsing-Stream.html#laxContent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SOAP Parsing Stream",
          "module": "Network.SOAP.Parsing.Stream",
          "name": "laxContent",
          "normalized": "Text-\u003eSink Event a(Maybe Text)",
          "package": "soap",
          "partial": "Content",
          "signature": "Text-\u003eSink Event m(Maybe Text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/soap/docs/Network-SOAP-Parsing-Stream.html#v:laxContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNamespace- and attribute- ignorant tagNoAttr.\n\u003c/p\u003e",
          "module": "Network.SOAP.Parsing.Stream",
          "name": "laxTag",
          "package": "soap",
          "signature": "Text -\u003e Sink Event m a -\u003e Sink Event m (Maybe a)",
          "source": "src/Network-SOAP-Parsing-Stream.html#laxTag",
          "type": "function"
        },
        "index": {
          "description": "Namespace and attribute ignorant tagNoAttr",
          "hierarchy": "Network SOAP Parsing Stream",
          "module": "Network.SOAP.Parsing.Stream",
          "name": "laxTag",
          "normalized": "Text-\u003eSink Event a b-\u003eSink Event a(Maybe b)",
          "package": "soap",
          "partial": "Tag",
          "signature": "Text-\u003eSink Event m a-\u003eSink Event m(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/soap/docs/Network-SOAP-Parsing-Stream.html#v:laxTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnpack and read a current tag content.\n\u003c/p\u003e",
          "module": "Network.SOAP.Parsing.Stream",
          "name": "readContent",
          "package": "soap",
          "signature": "Sink Event m a",
          "source": "src/Network-SOAP-Parsing-Stream.html#readContent",
          "type": "function"
        },
        "index": {
          "description": "Unpack and read current tag content",
          "hierarchy": "Network SOAP Parsing Stream",
          "module": "Network.SOAP.Parsing.Stream",
          "name": "readContent",
          "package": "soap",
          "partial": "Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/soap/docs/Network-SOAP-Parsing-Stream.html#v:readContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnpack and read tag content by local name.\n\u003c/p\u003e",
          "module": "Network.SOAP.Parsing.Stream",
          "name": "readTag",
          "package": "soap",
          "signature": "Text -\u003e Sink Event m a",
          "source": "src/Network-SOAP-Parsing-Stream.html#readTag",
          "type": "function"
        },
        "index": {
          "description": "Unpack and read tag content by local name",
          "hierarchy": "Network SOAP Parsing Stream",
          "module": "Network.SOAP.Parsing.Stream",
          "name": "readTag",
          "normalized": "Text-\u003eSink Event a b",
          "package": "soap",
          "partial": "Tag",
          "signature": "Text-\u003eSink Event m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/soap/docs/Network-SOAP-Parsing-Stream.html#v:readTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SOAP.Transport.HTTP",
          "name": "HTTP",
          "package": "soap",
          "source": "src/Network-SOAP-Transport-HTTP.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network SOAP Transport HTTP",
          "module": "Network.SOAP.Transport.HTTP",
          "name": "HTTP",
          "package": "soap",
          "partial": "HTTP",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/soap/docs/Network-SOAP-Transport-HTTP.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess response body to make it a nice UTF8-encoded XML document.\n\u003c/p\u003e",
          "module": "Network.SOAP.Transport.HTTP",
          "name": "BodyP",
          "package": "soap",
          "source": "src/Network-SOAP-Transport-HTTP.html#BodyP",
          "type": "type"
        },
        "index": {
          "description": "Process response body to make it nice UTF8-encoded XML document",
          "hierarchy": "Network SOAP Transport HTTP",
          "module": "Network.SOAP.Transport.HTTP",
          "name": "BodyP",
          "package": "soap",
          "partial": "Body",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/soap/docs/Network-SOAP-Transport-HTTP.html#t:BodyP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWeb service URL. Configured at initialization, but you can tweak it\n   dynamically with a request processor.\n\u003c/p\u003e",
          "module": "Network.SOAP.Transport.HTTP",
          "name": "EndpointURL",
          "package": "soap",
          "source": "src/Network-SOAP-Transport-HTTP.html#EndpointURL",
          "type": "type"
        },
        "index": {
          "description": "Web service URL Configured at initialization but you can tweak it dynamically with request processor",
          "hierarchy": "Network SOAP Transport HTTP",
          "module": "Network.SOAP.Transport.HTTP",
          "name": "EndpointURL",
          "package": "soap",
          "partial": "Endpoint URL",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/soap/docs/Network-SOAP-Transport-HTTP.html#t:EndpointURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate request record after defaults and method-specific fields are set.\n\u003c/p\u003e",
          "module": "Network.SOAP.Transport.HTTP",
          "name": "RequestP",
          "package": "soap",
          "source": "src/Network-SOAP-Transport-HTTP.html#RequestP",
          "type": "type"
        },
        "index": {
          "description": "Update request record after defaults and method-specific fields are set",
          "hierarchy": "Network SOAP Transport HTTP",
          "module": "Network.SOAP.Transport.HTTP",
          "name": "RequestP",
          "package": "soap",
          "partial": "Request",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/soap/docs/Network-SOAP-Transport-HTTP.html#t:RequestP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad common transport parameters from a configurator file.\n\u003c/p\u003e\u003cpre\u003e soap {\n   url = \"https://vendor.tld/service/\"\n   trace = true\n   timeout = 15\n }\n\u003c/pre\u003e\u003cp\u003eOnly url field is required.\n\u003c/p\u003e\u003cpre\u003e import Data.Configurator (load, Worth(Required))\n main = do\n     transport \u003c- confTransport \"soap\" =\u003c\u003c load [Required \"etc/example.conf\"]\n\u003c/pre\u003e",
          "module": "Network.SOAP.Transport.HTTP",
          "name": "confTransport",
          "package": "soap",
          "signature": "Text -\u003e Config -\u003e IO Transport",
          "source": "src/Network-SOAP-Transport-HTTP.html#confTransport",
          "type": "function"
        },
        "index": {
          "description": "Load common transport parameters from configurator file soap url https vendor.tld service trace true timeout Only url field is required import Data.Configurator load Worth Required main do transport confTransport soap load Required etc example.conf",
          "hierarchy": "Network SOAP Transport HTTP",
          "module": "Network.SOAP.Transport.HTTP",
          "name": "confTransport",
          "normalized": "Text-\u003eConfig-\u003eIO Transport",
          "package": "soap",
          "partial": "Transport",
          "signature": "Text-\u003eConfig-\u003eIO Transport",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/soap/docs/Network-SOAP-Transport-HTTP.html#v:confTransport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA more extensible transport parameter loader.\n\u003c/p\u003e",
          "module": "Network.SOAP.Transport.HTTP",
          "name": "confTransportWith",
          "package": "soap",
          "signature": "ManagerSettings -\u003e Text -\u003e Config -\u003e RequestP -\u003e BodyP -\u003e IO Transport",
          "source": "src/Network-SOAP-Transport-HTTP.html#confTransportWith",
          "type": "function"
        },
        "index": {
          "description": "more extensible transport parameter loader",
          "hierarchy": "Network SOAP Transport HTTP",
          "module": "Network.SOAP.Transport.HTTP",
          "name": "confTransportWith",
          "normalized": "ManagerSettings-\u003eText-\u003eConfig-\u003eRequestP-\u003eBodyP-\u003eIO Transport",
          "package": "soap",
          "partial": "Transport With",
          "signature": "ManagerSettings-\u003eText-\u003eConfig-\u003eRequestP-\u003eBodyP-\u003eIO Transport",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/soap/docs/Network-SOAP-Transport-HTTP.html#v:confTransportWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an IConv-based processor.\n\u003c/p\u003e",
          "module": "Network.SOAP.Transport.HTTP",
          "name": "iconv",
          "package": "soap",
          "signature": "EncodingName -\u003e BodyP",
          "source": "src/Network-SOAP-Transport-HTTP.html#iconv",
          "type": "function"
        },
        "index": {
          "description": "Create an IConv-based processor",
          "hierarchy": "Network SOAP Transport HTTP",
          "module": "Network.SOAP.Transport.HTTP",
          "name": "iconv",
          "normalized": "EncodingName-\u003eBodyP",
          "package": "soap",
          "signature": "EncodingName-\u003eBodyP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/soap/docs/Network-SOAP-Transport-HTTP.html#v:iconv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a http-client transport. Use identity transformers if you\n   don't need any special treatment.\n\u003c/p\u003e",
          "module": "Network.SOAP.Transport.HTTP",
          "name": "initTransport",
          "package": "soap",
          "signature": "EndpointURL -\u003e RequestP -\u003e BodyP -\u003e IO Transport",
          "source": "src/Network-SOAP-Transport-HTTP.html#initTransport",
          "type": "function"
        },
        "index": {
          "description": "Create http-client transport Use identity transformers if you don need any special treatment",
          "hierarchy": "Network SOAP Transport HTTP",
          "module": "Network.SOAP.Transport.HTTP",
          "name": "initTransport",
          "normalized": "EndpointURL-\u003eRequestP-\u003eBodyP-\u003eIO Transport",
          "package": "soap",
          "partial": "Transport",
          "signature": "EndpointURL-\u003eRequestP-\u003eBodyP-\u003eIO Transport",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/soap/docs/Network-SOAP-Transport-HTTP.html#v:initTransport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a http-client transport using manager settings (for plugging tls etc.).\n\u003c/p\u003e",
          "module": "Network.SOAP.Transport.HTTP",
          "name": "initTransportWith",
          "package": "soap",
          "signature": "ManagerSettings -\u003e EndpointURL -\u003e RequestP -\u003e BodyP -\u003e IO Transport",
          "source": "src/Network-SOAP-Transport-HTTP.html#initTransportWith",
          "type": "function"
        },
        "index": {
          "description": "Create http-client transport using manager settings for plugging tls etc",
          "hierarchy": "Network SOAP Transport HTTP",
          "module": "Network.SOAP.Transport.HTTP",
          "name": "initTransportWith",
          "normalized": "ManagerSettings-\u003eEndpointURL-\u003eRequestP-\u003eBodyP-\u003eIO Transport",
          "package": "soap",
          "partial": "Transport With",
          "signature": "ManagerSettings-\u003eEndpointURL-\u003eRequestP-\u003eBodyP-\u003eIO Transport",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/soap/docs/Network-SOAP-Transport-HTTP.html#v:initTransportWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a transport without any request and body processing.\n\u003c/p\u003e",
          "module": "Network.SOAP.Transport.HTTP",
          "name": "initTransport_",
          "package": "soap",
          "signature": "EndpointURL -\u003e IO Transport",
          "source": "src/Network-SOAP-Transport-HTTP.html#initTransport_",
          "type": "function"
        },
        "index": {
          "description": "Create transport without any request and body processing",
          "hierarchy": "Network SOAP Transport HTTP",
          "module": "Network.SOAP.Transport.HTTP",
          "name": "initTransport_",
          "normalized": "EndpointURL-\u003eIO Transport",
          "package": "soap",
          "partial": "Transport",
          "signature": "EndpointURL-\u003eIO Transport",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/soap/docs/Network-SOAP-Transport-HTTP.html#v:initTransport_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender document, submit it as a POST request and retrieve a body.\n\u003c/p\u003e",
          "module": "Network.SOAP.Transport.HTTP",
          "name": "runQuery",
          "package": "soap",
          "signature": "Manager -\u003e EndpointURL -\u003e RequestP -\u003e BodyP -\u003e Transport",
          "source": "src/Network-SOAP-Transport-HTTP.html#runQuery",
          "type": "function"
        },
        "index": {
          "description": "Render document submit it as POST request and retrieve body",
          "hierarchy": "Network SOAP Transport HTTP",
          "module": "Network.SOAP.Transport.HTTP",
          "name": "runQuery",
          "normalized": "Manager-\u003eEndpointURL-\u003eRequestP-\u003eBodyP-\u003eTransport",
          "package": "soap",
          "partial": "Query",
          "signature": "Manager-\u003eEndpointURL-\u003eRequestP-\u003eBodyP-\u003eTransport",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/soap/docs/Network-SOAP-Transport-HTTP.html#v:runQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow a debug dump of a response body.\n\u003c/p\u003e",
          "module": "Network.SOAP.Transport.HTTP",
          "name": "traceBody",
          "package": "soap",
          "signature": "BodyP",
          "source": "src/Network-SOAP-Transport-HTTP.html#traceBody",
          "type": "function"
        },
        "index": {
          "description": "Show debug dump of response body",
          "hierarchy": "Network SOAP Transport HTTP",
          "module": "Network.SOAP.Transport.HTTP",
          "name": "traceBody",
          "package": "soap",
          "partial": "Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/soap/docs/Network-SOAP-Transport-HTTP.html#v:traceBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow a debug dump of a request body.\n\u003c/p\u003e",
          "module": "Network.SOAP.Transport.HTTP",
          "name": "traceRequest",
          "package": "soap",
          "signature": "RequestP",
          "source": "src/Network-SOAP-Transport-HTTP.html#traceRequest",
          "type": "function"
        },
        "index": {
          "description": "Show debug dump of request body",
          "hierarchy": "Network SOAP Transport HTTP",
          "module": "Network.SOAP.Transport.HTTP",
          "name": "traceRequest",
          "package": "soap",
          "partial": "Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/soap/docs/Network-SOAP-Transport-HTTP.html#v:traceRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDebug transport to train your parsers without bugging real services.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.SOAP.Transport.Mock",
          "name": "Mock",
          "package": "soap",
          "source": "src/Network-SOAP-Transport-Mock.html",
          "type": "module"
        },
        "index": {
          "description": "Debug transport to train your parsers without bugging real services",
          "hierarchy": "Network SOAP Transport Mock",
          "module": "Network.SOAP.Transport.Mock",
          "name": "Mock",
          "package": "soap",
          "partial": "Mock",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/soap/docs/Network-SOAP-Transport-Mock.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SOAP.Transport.Mock",
          "name": "Handler",
          "package": "soap",
          "source": "src/Network-SOAP-Transport-Mock.html#Handler",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network SOAP Transport Mock",
          "module": "Network.SOAP.Transport.Mock",
          "name": "Handler",
          "package": "soap",
          "partial": "Handler",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/soap/docs/Network-SOAP-Transport-Mock.html#t:Handler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SOAP.Transport.Mock",
          "name": "Handlers",
          "package": "soap",
          "source": "src/Network-SOAP-Transport-Mock.html#Handlers",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network SOAP Transport Mock",
          "module": "Network.SOAP.Transport.Mock",
          "name": "Handlers",
          "package": "soap",
          "partial": "Handlers",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/soap/docs/Network-SOAP-Transport-Mock.html#t:Handlers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmulate a SOAP fault.\n\u003c/p\u003e",
          "module": "Network.SOAP.Transport.Mock",
          "name": "fault",
          "package": "soap",
          "signature": "Text-\u003e Text-\u003e Text-\u003e Handler",
          "type": "function"
        },
        "index": {
          "description": "Emulate SOAP fault",
          "hierarchy": "Network SOAP Transport Mock",
          "module": "Network.SOAP.Transport.Mock",
          "name": "fault",
          "normalized": "Text-\u003eText-\u003eText-\u003eHandler",
          "package": "soap",
          "signature": "Text-\u003eText-\u003eText-\u003eHandler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/soap/docs/Network-SOAP-Transport-Mock.html#v:fault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess a Document and wrap result in a SOAP Envelope.\n\u003c/p\u003e",
          "module": "Network.SOAP.Transport.Mock",
          "name": "handler",
          "package": "soap",
          "signature": "(Document -\u003e IO a) -\u003e Handler",
          "source": "src/Network-SOAP-Transport-Mock.html#handler",
          "type": "function"
        },
        "index": {
          "description": "Process Document and wrap result in SOAP Envelope",
          "hierarchy": "Network SOAP Transport Mock",
          "module": "Network.SOAP.Transport.Mock",
          "name": "handler",
          "normalized": "(Document-\u003eIO a)-\u003eHandler",
          "package": "soap",
          "signature": "(Document-\u003eIO a)-\u003eHandler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/soap/docs/Network-SOAP-Transport-Mock.html#v:handler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap a collection of handlers into a transport.\n\u003c/p\u003e",
          "module": "Network.SOAP.Transport.Mock",
          "name": "initTransport",
          "package": "soap",
          "signature": "Handlers -\u003e IO Transport",
          "source": "src/Network-SOAP-Transport-Mock.html#initTransport",
          "type": "function"
        },
        "index": {
          "description": "Wrap collection of handlers into transport",
          "hierarchy": "Network SOAP Transport Mock",
          "module": "Network.SOAP.Transport.Mock",
          "name": "initTransport",
          "normalized": "Handlers-\u003eIO Transport",
          "package": "soap",
          "partial": "Transport",
          "signature": "Handlers-\u003eIO Transport",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/soap/docs/Network-SOAP-Transport-Mock.html#v:initTransport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChoose and apply a handler.\n\u003c/p\u003e",
          "module": "Network.SOAP.Transport.Mock",
          "name": "runQuery",
          "package": "soap",
          "signature": "[(String, Handler)] -\u003e Transport",
          "source": "src/Network-SOAP-Transport-Mock.html#runQuery",
          "type": "function"
        },
        "index": {
          "description": "Choose and apply handler",
          "hierarchy": "Network SOAP Transport Mock",
          "module": "Network.SOAP.Transport.Mock",
          "name": "runQuery",
          "normalized": "[(String,Handler)]-\u003eTransport",
          "package": "soap",
          "partial": "Query",
          "signature": "[(String,Handler)]-\u003eTransport",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/soap/docs/Network-SOAP-Transport-Mock.html#v:runQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis package comes with a single transport, but the your vendor's\n SOAP implementation can behave very differently, so invokeWS can be\n rigged to use anything that follows a simple interface.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.SOAP.Transport",
          "name": "Transport",
          "package": "soap",
          "source": "src/Network-SOAP-Transport.html",
          "type": "module"
        },
        "index": {
          "description": "This package comes with single transport but the your vendor SOAP implementation can behave very differently so invokeWS can be rigged to use anything that follows simple interface",
          "hierarchy": "Network SOAP Transport",
          "module": "Network.SOAP.Transport",
          "name": "Transport",
          "package": "soap",
          "partial": "Transport",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/soap/docs/Network-SOAP-Transport.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommon transport type. Get a request and deliver it to an endpoint\n   specified during initialization.\n\u003c/p\u003e",
          "module": "Network.SOAP.Transport",
          "name": "Transport",
          "package": "soap",
          "source": "src/Network-SOAP-Transport.html#Transport",
          "type": "type"
        },
        "index": {
          "description": "Common transport type Get request and deliver it to an endpoint specified during initialization",
          "hierarchy": "Network SOAP Transport",
          "module": "Network.SOAP.Transport",
          "name": "Transport",
          "package": "soap",
          "partial": "Transport",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/soap/docs/Network-SOAP-Transport.html#t:Transport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA heart of the package, \u003ccode\u003e\u003ca\u003einvokeWS\u003c/a\u003e\u003c/code\u003e assembles and executes requests.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.SOAP",
          "name": "SOAP",
          "package": "soap",
          "source": "src/Network-SOAP.html",
          "type": "module"
        },
        "index": {
          "description": "heart of the package invokeWS assembles and executes requests",
          "hierarchy": "Network SOAP",
          "module": "Network.SOAP",
          "name": "SOAP",
          "package": "soap",
          "partial": "SOAP",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/soap/docs/Network-SOAP.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStream parser from Text.XML.Stream.Parse.\n\u003c/p\u003e",
          "module": "Network.SOAP",
          "name": "Parser",
          "package": "soap",
          "source": "src/Network-SOAP.html#Parser",
          "type": "type"
        },
        "index": {
          "description": "Stream parser from Text.XML.Stream.Parse",
          "hierarchy": "Network SOAP",
          "module": "Network.SOAP",
          "name": "Parser",
          "package": "soap",
          "partial": "Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/soap/docs/Network-SOAP.html#t:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDifferent parsing modes available to extract reply contents.\n\u003c/p\u003e",
          "module": "Network.SOAP",
          "name": "ResponseParser",
          "package": "soap",
          "source": "src/Network-SOAP.html#ResponseParser",
          "type": "data"
        },
        "index": {
          "description": "Different parsing modes available to extract reply contents",
          "hierarchy": "Network SOAP",
          "module": "Network.SOAP",
          "name": "ResponseParser",
          "package": "soap",
          "partial": "Response Parser",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/soap/docs/Network-SOAP.html#t:ResponseParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eException to be thrown when transport encounters an exception that is\n   acutally a SOAP Fault.\n\u003c/p\u003e",
          "module": "Network.SOAP",
          "name": "SOAPFault",
          "package": "soap",
          "source": "src/Network-SOAP-Exception.html#SOAPFault",
          "type": "data"
        },
        "index": {
          "description": "Exception to be thrown when transport encounters an exception that is acutally SOAP Fault",
          "hierarchy": "Network SOAP",
          "module": "Network.SOAP",
          "name": "SOAPFault",
          "package": "soap",
          "partial": "SOAPFault",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/soap/docs/Network-SOAP.html#t:SOAPFault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SOAP",
          "name": "SOAPParsingError",
          "package": "soap",
          "source": "src/Network-SOAP-Exception.html#SOAPParsingError",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network SOAP",
          "module": "Network.SOAP",
          "name": "SOAPParsingError",
          "package": "soap",
          "partial": "SOAPParsing Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/soap/docs/Network-SOAP.html#t:SOAPParsingError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommon transport type. Get a request and deliver it to an endpoint\n   specified during initialization.\n\u003c/p\u003e",
          "module": "Network.SOAP",
          "name": "Transport",
          "package": "soap",
          "source": "src/Network-SOAP-Transport.html#Transport",
          "type": "type"
        },
        "index": {
          "description": "Common transport type Get request and deliver it to an endpoint specified during initialization",
          "hierarchy": "Network SOAP",
          "module": "Network.SOAP",
          "name": "Transport",
          "package": "soap",
          "partial": "Transport",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/soap/docs/Network-SOAP.html#t:Transport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eXPath-like parser from Text.XML.Cursor\n\u003c/p\u003e",
          "module": "Network.SOAP",
          "name": "CursorParser",
          "package": "soap",
          "signature": "CursorParser (Cursor -\u003e a)",
          "source": "src/Network-SOAP.html#ResponseParser",
          "type": "function"
        },
        "index": {
          "description": "XPath-like parser from Text.XML.Cursor",
          "hierarchy": "Network SOAP",
          "module": "Network.SOAP",
          "name": "CursorParser",
          "normalized": "CursorParser(Cursor-\u003ea)",
          "package": "soap",
          "partial": "Cursor Parser",
          "signature": "CursorParser(Cursor-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/soap/docs/Network-SOAP.html#v:CursorParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse raw XML document.\n\u003c/p\u003e",
          "module": "Network.SOAP",
          "name": "DocumentParser",
          "package": "soap",
          "signature": "DocumentParser (Document -\u003e a)",
          "source": "src/Network-SOAP.html#ResponseParser",
          "type": "function"
        },
        "index": {
          "description": "Parse raw XML document",
          "hierarchy": "Network SOAP",
          "module": "Network.SOAP",
          "name": "DocumentParser",
          "normalized": "DocumentParser(Document-\u003ea)",
          "package": "soap",
          "partial": "Document Parser",
          "signature": "DocumentParser(Document-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/soap/docs/Network-SOAP.html#v:DocumentParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWork with a raw bytestring.\n\u003c/p\u003e",
          "module": "Network.SOAP",
          "name": "RawParser",
          "package": "soap",
          "signature": "RawParser (ByteString -\u003e a)",
          "source": "src/Network-SOAP.html#ResponseParser",
          "type": "function"
        },
        "index": {
          "description": "Work with raw bytestring",
          "hierarchy": "Network SOAP",
          "module": "Network.SOAP",
          "name": "RawParser",
          "normalized": "RawParser(ByteString-\u003ea)",
          "package": "soap",
          "partial": "Raw Parser",
          "signature": "RawParser(ByteString-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/soap/docs/Network-SOAP.html#v:RawParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStreaming parser from Text.XML.Stream.Parse\n\u003c/p\u003e",
          "module": "Network.SOAP",
          "name": "StreamParser",
          "package": "soap",
          "signature": "StreamParser (Parser a)",
          "source": "src/Network-SOAP.html#ResponseParser",
          "type": "function"
        },
        "index": {
          "description": "Streaming parser from Text.XML.Stream.Parse",
          "hierarchy": "Network SOAP",
          "module": "Network.SOAP",
          "name": "StreamParser",
          "package": "soap",
          "partial": "Stream Parser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/soap/docs/Network-SOAP.html#v:StreamParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrepare data, assemble request and apply a parser to a response.\n\u003c/p\u003e",
          "module": "Network.SOAP",
          "name": "invokeWS",
          "package": "soap",
          "signature": "Transport-\u003e String-\u003e h-\u003e b-\u003e ResponseParser a-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Prepare data assemble request and apply parser to response",
          "hierarchy": "Network SOAP",
          "module": "Network.SOAP",
          "name": "invokeWS",
          "normalized": "Transport-\u003eString-\u003ea-\u003eb-\u003eResponseParser c-\u003eIO c",
          "package": "soap",
          "partial": "WS",
          "signature": "Transport-\u003eString-\u003eh-\u003eb-\u003eResponseParser a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/soap/docs/Network-SOAP.html#v:invokeWS"
      }
    }
  ]
]