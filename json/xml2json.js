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
        "word": "xml2json"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.ToJSON.Builder",
          "name": "Builder",
          "package": "xml2json",
          "source": "src/Text-XML-ToJSON-Builder.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text XML ToJSON Builder",
          "module": "Text.XML.ToJSON.Builder",
          "name": "Builder",
          "package": "xml2json",
          "partial": "Builder",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xml2json/docs/Text-XML-ToJSON-Builder.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eState\u003c/a\u003e\u003c/code\u003e monad to transform a \u003ccode\u003e\u003ca\u003eStack\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XML.ToJSON.Builder",
          "name": "Builder",
          "package": "xml2json",
          "source": "src/Text-XML-ToJSON-Builder.html#Builder",
          "type": "type"
        },
        "index": {
          "description": "Builder is State monad to transform Stack",
          "hierarchy": "Text XML ToJSON Builder",
          "module": "Text.XML.ToJSON.Builder",
          "name": "Builder",
          "package": "xml2json",
          "partial": "Builder",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/xml2json/docs/Text-XML-ToJSON-Builder.html#t:Builder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erepresent a XML element.\n\u003c/p\u003e",
          "module": "Text.XML.ToJSON.Builder",
          "name": "Element",
          "package": "xml2json",
          "source": "src/Text-XML-ToJSON-Builder.html#Element",
          "type": "data"
        },
        "index": {
          "description": "represent XML element",
          "hierarchy": "Text XML ToJSON Builder",
          "module": "Text.XML.ToJSON.Builder",
          "name": "Element",
          "package": "xml2json",
          "partial": "Element",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml2json/docs/Text-XML-ToJSON-Builder.html#t:Element"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003exml element stack with recent opened element at the top.\n\u003c/p\u003e",
          "module": "Text.XML.ToJSON.Builder",
          "name": "Stack",
          "package": "xml2json",
          "source": "src/Text-XML-ToJSON-Builder.html#Stack",
          "type": "type"
        },
        "index": {
          "description": "xml element stack with recent opened element at the top",
          "hierarchy": "Text XML ToJSON Builder",
          "module": "Text.XML.ToJSON.Builder",
          "name": "Stack",
          "package": "xml2json",
          "partial": "Stack",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/xml2json/docs/Text-XML-ToJSON-Builder.html#t:Stack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.ToJSON.Builder",
          "name": "Element",
          "package": "xml2json",
          "signature": "Element",
          "source": "src/Text-XML-ToJSON-Builder.html#Element",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML ToJSON Builder",
          "module": "Text.XML.ToJSON.Builder",
          "name": "Element",
          "package": "xml2json",
          "partial": "Element",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml2json/docs/Text-XML-ToJSON-Builder.html#v:Element"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadd attribute to top element.\n\u003c/p\u003e",
          "module": "Text.XML.ToJSON.Builder",
          "name": "addAttr",
          "package": "xml2json",
          "signature": "(Text, Text) -\u003e Builder",
          "source": "src/Text-XML-ToJSON-Builder.html#addAttr",
          "type": "function"
        },
        "index": {
          "description": "add attribute to top element",
          "hierarchy": "Text XML ToJSON Builder",
          "module": "Text.XML.ToJSON.Builder",
          "name": "addAttr",
          "normalized": "(Text,Text)-\u003eBuilder",
          "package": "xml2json",
          "partial": "Attr",
          "signature": "(Text,Text)-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml2json/docs/Text-XML-ToJSON-Builder.html#v:addAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadd an attribute to an element\n\u003c/p\u003e",
          "module": "Text.XML.ToJSON.Builder",
          "name": "addAttr'",
          "package": "xml2json",
          "signature": "(Text, Text) -\u003e Element -\u003e Element",
          "source": "src/Text-XML-ToJSON-Builder.html#addAttr%27",
          "type": "function"
        },
        "index": {
          "description": "add an attribute to an element",
          "hierarchy": "Text XML ToJSON Builder",
          "module": "Text.XML.ToJSON.Builder",
          "name": "addAttr'",
          "normalized": "(Text,Text)-\u003eElement-\u003eElement",
          "package": "xml2json",
          "partial": "Attr'",
          "signature": "(Text,Text)-\u003eElement-\u003eElement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml2json/docs/Text-XML-ToJSON-Builder.html#v:addAttr-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadd multiple attributes to top element.\n\u003c/p\u003e",
          "module": "Text.XML.ToJSON.Builder",
          "name": "addAttrs",
          "package": "xml2json",
          "signature": "[(Text, Text)] -\u003e Builder",
          "source": "src/Text-XML-ToJSON-Builder.html#addAttrs",
          "type": "function"
        },
        "index": {
          "description": "add multiple attributes to top element",
          "hierarchy": "Text XML ToJSON Builder",
          "module": "Text.XML.ToJSON.Builder",
          "name": "addAttrs",
          "normalized": "[(Text,Text)]-\u003eBuilder",
          "package": "xml2json",
          "partial": "Attrs",
          "signature": "[(Text,Text)]-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml2json/docs/Text-XML-ToJSON-Builder.html#v:addAttrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadd multiple attributes to an element\n\u003c/p\u003e",
          "module": "Text.XML.ToJSON.Builder",
          "name": "addAttrs'",
          "package": "xml2json",
          "signature": "[(Text, Text)] -\u003e Element -\u003e Element",
          "source": "src/Text-XML-ToJSON-Builder.html#addAttrs%27",
          "type": "function"
        },
        "index": {
          "description": "add multiple attributes to an element",
          "hierarchy": "Text XML ToJSON Builder",
          "module": "Text.XML.ToJSON.Builder",
          "name": "addAttrs'",
          "normalized": "[(Text,Text)]-\u003eElement-\u003eElement",
          "package": "xml2json",
          "partial": "Attrs'",
          "signature": "[(Text,Text)]-\u003eElement-\u003eElement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml2json/docs/Text-XML-ToJSON-Builder.html#v:addAttrs-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadd child element to top element.\n\u003c/p\u003e",
          "module": "Text.XML.ToJSON.Builder",
          "name": "addChild",
          "package": "xml2json",
          "signature": "(Text, Element) -\u003e Builder",
          "source": "src/Text-XML-ToJSON-Builder.html#addChild",
          "type": "function"
        },
        "index": {
          "description": "add child element to top element",
          "hierarchy": "Text XML ToJSON Builder",
          "module": "Text.XML.ToJSON.Builder",
          "name": "addChild",
          "normalized": "(Text,Element)-\u003eBuilder",
          "package": "xml2json",
          "partial": "Child",
          "signature": "(Text,Element)-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml2json/docs/Text-XML-ToJSON-Builder.html#v:addChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadd a child element to an element\n\u003c/p\u003e",
          "module": "Text.XML.ToJSON.Builder",
          "name": "addChild'",
          "package": "xml2json",
          "signature": "(Text, Element) -\u003e Element -\u003e Element",
          "source": "src/Text-XML-ToJSON-Builder.html#addChild%27",
          "type": "function"
        },
        "index": {
          "description": "add child element to an element",
          "hierarchy": "Text XML ToJSON Builder",
          "module": "Text.XML.ToJSON.Builder",
          "name": "addChild'",
          "normalized": "(Text,Element)-\u003eElement-\u003eElement",
          "package": "xml2json",
          "partial": "Child'",
          "signature": "(Text,Element)-\u003eElement-\u003eElement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml2json/docs/Text-XML-ToJSON-Builder.html#v:addChild-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadd value to top element.\n\u003c/p\u003e",
          "module": "Text.XML.ToJSON.Builder",
          "name": "addValue",
          "package": "xml2json",
          "signature": "Text -\u003e Builder",
          "source": "src/Text-XML-ToJSON-Builder.html#addValue",
          "type": "function"
        },
        "index": {
          "description": "add value to top element",
          "hierarchy": "Text XML ToJSON Builder",
          "module": "Text.XML.ToJSON.Builder",
          "name": "addValue",
          "normalized": "Text-\u003eBuilder",
          "package": "xml2json",
          "partial": "Value",
          "signature": "Text-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml2json/docs/Text-XML-ToJSON-Builder.html#v:addValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadd a text value to an element\n\u003c/p\u003e",
          "module": "Text.XML.ToJSON.Builder",
          "name": "addValue'",
          "package": "xml2json",
          "signature": "Text -\u003e Element -\u003e Element",
          "source": "src/Text-XML-ToJSON-Builder.html#addValue%27",
          "type": "function"
        },
        "index": {
          "description": "add text value to an element",
          "hierarchy": "Text XML ToJSON Builder",
          "module": "Text.XML.ToJSON.Builder",
          "name": "addValue'",
          "normalized": "Text-\u003eElement-\u003eElement",
          "package": "xml2json",
          "partial": "Value'",
          "signature": "Text-\u003eElement-\u003eElement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml2json/docs/Text-XML-ToJSON-Builder.html#v:addValue-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eopen element\n\u003c/p\u003e",
          "module": "Text.XML.ToJSON.Builder",
          "name": "beginElement",
          "package": "xml2json",
          "signature": "Text -\u003e Builder",
          "source": "src/Text-XML-ToJSON-Builder.html#beginElement",
          "type": "function"
        },
        "index": {
          "description": "open element",
          "hierarchy": "Text XML ToJSON Builder",
          "module": "Text.XML.ToJSON.Builder",
          "name": "beginElement",
          "normalized": "Text-\u003eBuilder",
          "package": "xml2json",
          "partial": "Element",
          "signature": "Text-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml2json/docs/Text-XML-ToJSON-Builder.html#v:beginElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eclose all unclosed tags and return the root element.\n\u003c/p\u003e",
          "module": "Text.XML.ToJSON.Builder",
          "name": "closeStack",
          "package": "xml2json",
          "signature": "Stack -\u003e Element",
          "source": "src/Text-XML-ToJSON-Builder.html#closeStack",
          "type": "function"
        },
        "index": {
          "description": "close all unclosed tags and return the root element",
          "hierarchy": "Text XML ToJSON Builder",
          "module": "Text.XML.ToJSON.Builder",
          "name": "closeStack",
          "normalized": "Stack-\u003eElement",
          "package": "xml2json",
          "partial": "Stack",
          "signature": "Stack-\u003eElement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml2json/docs/Text-XML-ToJSON-Builder.html#v:closeStack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etag attributes.\n\u003c/p\u003e",
          "module": "Text.XML.ToJSON.Builder",
          "name": "elAttrs",
          "package": "xml2json",
          "signature": "[(Text, Text)]",
          "source": "src/Text-XML-ToJSON-Builder.html#Element",
          "type": "function"
        },
        "index": {
          "description": "tag attributes",
          "hierarchy": "Text XML ToJSON Builder",
          "module": "Text.XML.ToJSON.Builder",
          "name": "elAttrs",
          "normalized": "[(Text,Text)]",
          "package": "xml2json",
          "partial": "Attrs",
          "signature": "[(Text,Text)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml2json/docs/Text-XML-ToJSON-Builder.html#v:elAttrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echild elements.\n\u003c/p\u003e",
          "module": "Text.XML.ToJSON.Builder",
          "name": "elChildren",
          "package": "xml2json",
          "signature": "[(Text, Element)]",
          "source": "src/Text-XML-ToJSON-Builder.html#Element",
          "type": "function"
        },
        "index": {
          "description": "child elements",
          "hierarchy": "Text XML ToJSON Builder",
          "module": "Text.XML.ToJSON.Builder",
          "name": "elChildren",
          "normalized": "[(Text,Element)]",
          "package": "xml2json",
          "partial": "Children",
          "signature": "[(Text,Element)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml2json/docs/Text-XML-ToJSON-Builder.html#v:elChildren"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etext values.\n\u003c/p\u003e",
          "module": "Text.XML.ToJSON.Builder",
          "name": "elValues",
          "package": "xml2json",
          "signature": "[Text]",
          "source": "src/Text-XML-ToJSON-Builder.html#Element",
          "type": "function"
        },
        "index": {
          "description": "text values",
          "hierarchy": "Text XML ToJSON Builder",
          "module": "Text.XML.ToJSON.Builder",
          "name": "elValues",
          "normalized": "[Text]",
          "package": "xml2json",
          "partial": "Values",
          "signature": "[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml2json/docs/Text-XML-ToJSON-Builder.html#v:elValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.ToJSON.Builder",
          "name": "emptyElement",
          "package": "xml2json",
          "signature": "Element",
          "source": "src/Text-XML-ToJSON-Builder.html#emptyElement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML ToJSON Builder",
          "module": "Text.XML.ToJSON.Builder",
          "name": "emptyElement",
          "package": "xml2json",
          "partial": "Element",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml2json/docs/Text-XML-ToJSON-Builder.html#v:emptyElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eclose element\n\u003c/p\u003e",
          "module": "Text.XML.ToJSON.Builder",
          "name": "endElement",
          "package": "xml2json",
          "signature": "Builder",
          "source": "src/Text-XML-ToJSON-Builder.html#endElement",
          "type": "function"
        },
        "index": {
          "description": "close element",
          "hierarchy": "Text XML ToJSON Builder",
          "module": "Text.XML.ToJSON.Builder",
          "name": "endElement",
          "package": "xml2json",
          "partial": "Element",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml2json/docs/Text-XML-ToJSON-Builder.html#v:endElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eutil to modify top element.\n\u003c/p\u003e",
          "module": "Text.XML.ToJSON.Builder",
          "name": "modifyTopElement",
          "package": "xml2json",
          "signature": "(Element -\u003e Element) -\u003e Builder",
          "source": "src/Text-XML-ToJSON-Builder.html#modifyTopElement",
          "type": "function"
        },
        "index": {
          "description": "util to modify top element",
          "hierarchy": "Text XML ToJSON Builder",
          "module": "Text.XML.ToJSON.Builder",
          "name": "modifyTopElement",
          "normalized": "(Element-\u003eElement)-\u003eBuilder",
          "package": "xml2json",
          "partial": "Top Element",
          "signature": "(Element-\u003eElement)-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml2json/docs/Text-XML-ToJSON-Builder.html#v:modifyTopElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eclose current tag.\n\u003c/p\u003e",
          "module": "Text.XML.ToJSON.Builder",
          "name": "popStack",
          "package": "xml2json",
          "signature": "Stack -\u003e Stack",
          "source": "src/Text-XML-ToJSON-Builder.html#popStack",
          "type": "function"
        },
        "index": {
          "description": "close current tag",
          "hierarchy": "Text XML ToJSON Builder",
          "module": "Text.XML.ToJSON.Builder",
          "name": "popStack",
          "normalized": "Stack-\u003eStack",
          "package": "xml2json",
          "partial": "Stack",
          "signature": "Stack-\u003eStack",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml2json/docs/Text-XML-ToJSON-Builder.html#v:popStack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eexec the state monad and close the result stack.\n\u003c/p\u003e",
          "module": "Text.XML.ToJSON.Builder",
          "name": "runBuilder",
          "package": "xml2json",
          "signature": "Builder -\u003e Element",
          "source": "src/Text-XML-ToJSON-Builder.html#runBuilder",
          "type": "function"
        },
        "index": {
          "description": "exec the state monad and close the result stack",
          "hierarchy": "Text XML ToJSON Builder",
          "module": "Text.XML.ToJSON.Builder",
          "name": "runBuilder",
          "normalized": "Builder-\u003eElement",
          "package": "xml2json",
          "partial": "Builder",
          "signature": "Builder-\u003eElement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml2json/docs/Text-XML-ToJSON-Builder.html#v:runBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.ToJSON",
          "name": "ToJSON",
          "package": "xml2json",
          "source": "src/Text-XML-ToJSON.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text XML ToJSON",
          "module": "Text.XML.ToJSON",
          "name": "ToJSON",
          "package": "xml2json",
          "partial": "To JSON",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xml2json/docs/Text-XML-ToJSON.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.ToJSON",
          "name": "JSONParseError",
          "package": "xml2json",
          "source": "src/Text-XML-ToJSON.html#JSONParseError",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text XML ToJSON",
          "module": "Text.XML.ToJSON",
          "name": "JSONParseError",
          "package": "xml2json",
          "partial": "JSONParse Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml2json/docs/Text-XML-ToJSON.html#t:JSONParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume a source and convert the content to aeson \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e, it try to inspect xml encoding from first tag.\n\u003c/p\u003e\u003cp\u003ee.g. \u003ccode\u003exmlStreamToJSONResumable (requestBody req)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.ToJSON",
          "name": "bsRSourceToJSON",
          "package": "xml2json",
          "signature": "ResumableSource m ByteString -\u003e m Value",
          "source": "src/Text-XML-ToJSON.html#bsRSourceToJSON",
          "type": "function"
        },
        "index": {
          "description": "Consume source and convert the content to aeson Value it try to inspect xml encoding from first tag e.g xmlStreamToJSONResumable requestBody req",
          "hierarchy": "Text XML ToJSON",
          "module": "Text.XML.ToJSON",
          "name": "bsRSourceToJSON",
          "normalized": "ResumableSource a ByteString-\u003ea Value",
          "package": "xml2json",
          "partial": "RSource To JSON",
          "signature": "ResumableSource m ByteString-\u003em Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml2json/docs/Text-XML-ToJSON.html#v:bsRSourceToJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume a source and convert the content to aeson \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e, it try to inspect xml encoding from first tag.\n\u003c/p\u003e\u003cp\u003ee.g. \u003ccode\u003ebsSourceToJSON (C.sourceFile path_to_xml_file)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.ToJSON",
          "name": "bsSourceToJSON",
          "package": "xml2json",
          "signature": "Source m ByteString -\u003e m Value",
          "source": "src/Text-XML-ToJSON.html#bsSourceToJSON",
          "type": "function"
        },
        "index": {
          "description": "Consume source and convert the content to aeson Value it try to inspect xml encoding from first tag e.g bsSourceToJSON C.sourceFile path to xml file",
          "hierarchy": "Text XML ToJSON",
          "module": "Text.XML.ToJSON",
          "name": "bsSourceToJSON",
          "normalized": "Source a ByteString-\u003ea Value",
          "package": "xml2json",
          "partial": "Source To JSON",
          "signature": "Source m ByteString-\u003em Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml2json/docs/Text-XML-ToJSON.html#v:bsSourceToJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert xml \u003ccode\u003e\u003ca\u003eElement\u003c/a\u003e\u003c/code\u003e to aeson \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e .\n\u003c/p\u003e\u003cp\u003exml attributes and text values are converted to special object attribute \u003ccode\u003e__attributes\u003c/code\u003e and \u003ccode\u003e__values\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XML.ToJSON",
          "name": "elementToJSON",
          "package": "xml2json",
          "signature": "Element -\u003e Value",
          "source": "src/Text-XML-ToJSON.html#elementToJSON",
          "type": "function"
        },
        "index": {
          "description": "Convert xml Element to aeson Value xml attributes and text values are converted to special object attribute attributes and values",
          "hierarchy": "Text XML ToJSON",
          "module": "Text.XML.ToJSON",
          "name": "elementToJSON",
          "normalized": "Element-\u003eValue",
          "package": "xml2json",
          "partial": "To JSON",
          "signature": "Element-\u003eValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml2json/docs/Text-XML-ToJSON.html#v:elementToJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eparse xml to haskell data type by using aeson's \u003ccode\u003e\u003ca\u003eFromJSON\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XML.ToJSON",
          "name": "parseXML",
          "package": "xml2json",
          "signature": "ByteString -\u003e m a",
          "source": "src/Text-XML-ToJSON.html#parseXML",
          "type": "function"
        },
        "index": {
          "description": "parse xml to haskell data type by using aeson FromJSON",
          "hierarchy": "Text XML ToJSON",
          "module": "Text.XML.ToJSON",
          "name": "parseXML",
          "normalized": "ByteString-\u003ea b",
          "package": "xml2json",
          "partial": "XML",
          "signature": "ByteString-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml2json/docs/Text-XML-ToJSON.html#v:parseXML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert tagstream-conduit \u003ccode\u003eToken\u003c/code\u003e to xml element \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.ToJSON",
          "name": "tokenToBuilder",
          "package": "xml2json",
          "signature": "Token -\u003e Builder",
          "source": "src/Text-XML-ToJSON.html#tokenToBuilder",
          "type": "function"
        },
        "index": {
          "description": "Convert tagstream-conduit Token to xml element Builder",
          "hierarchy": "Text XML ToJSON",
          "module": "Text.XML.ToJSON",
          "name": "tokenToBuilder",
          "normalized": "Token-\u003eBuilder",
          "package": "xml2json",
          "partial": "To Builder",
          "signature": "Token-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml2json/docs/Text-XML-ToJSON.html#v:tokenToBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert list of tagstream-conduit \u003ccode\u003eToken\u003c/code\u003e to aeson \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.ToJSON",
          "name": "tokensToJSON",
          "package": "xml2json",
          "signature": "[Token] -\u003e Value",
          "source": "src/Text-XML-ToJSON.html#tokensToJSON",
          "type": "function"
        },
        "index": {
          "description": "Convert list of tagstream-conduit Token to aeson Value",
          "hierarchy": "Text XML ToJSON",
          "module": "Text.XML.ToJSON",
          "name": "tokensToJSON",
          "normalized": "[Token]-\u003eValue",
          "package": "xml2json",
          "partial": "To JSON",
          "signature": "[Token]-\u003eValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml2json/docs/Text-XML-ToJSON.html#v:tokensToJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvert lazy xml \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to aeson \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XML.ToJSON",
          "name": "xmlToJSON",
          "package": "xml2json",
          "signature": "ByteString -\u003e m Value",
          "source": "src/Text-XML-ToJSON.html#xmlToJSON",
          "type": "function"
        },
        "index": {
          "description": "convert lazy xml ByteString to aeson Value",
          "hierarchy": "Text XML ToJSON",
          "module": "Text.XML.ToJSON",
          "name": "xmlToJSON",
          "normalized": "ByteString-\u003ea Value",
          "package": "xml2json",
          "partial": "To JSON",
          "signature": "ByteString-\u003em Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml2json/docs/Text-XML-ToJSON.html#v:xmlToJSON"
      }
    }
  ]
]