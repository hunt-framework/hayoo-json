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
        "word": "hexpat-iteratee"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Chunked",
          "name": "Chunked",
          "package": "hexpat-iteratee",
          "source": "src/Text-XML-Expat-Chunked.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text XML Expat Chunked",
          "module": "Text.XML.Expat.Chunked",
          "name": "Chunked",
          "package": "hexpat-iteratee",
          "partial": "Chunked",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncoding types available for the document encoding.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Chunked",
          "name": "Encoding",
          "package": "hexpat-iteratee",
          "type": "data"
        },
        "index": {
          "description": "Encoding types available for the document encoding",
          "hierarchy": "Text XML Expat Chunked",
          "module": "Text.XML.Expat.Chunked",
          "name": "Encoding",
          "package": "hexpat-iteratee",
          "partial": "Encoding",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#t:Encoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType alias for a single annotated node where namespaced names are used for tags\n\u003c/p\u003e\u003cp\u003eThe \u003cem\u003es\u003c/em\u003e parameter is a dummy type used to prevent nodes escaping from the\n handler.  See \u003ccode\u003es\u003c/code\u003e for more explanation.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Chunked",
          "name": "NNode",
          "package": "hexpat-iteratee",
          "source": "src/Text-XML-Expat-Chunked.html#NNode",
          "type": "type"
        },
        "index": {
          "description": "Type alias for single annotated node where namespaced names are used for tags The parameter is dummy type used to prevent nodes escaping from the handler See for more explanation",
          "hierarchy": "Text XML Expat Chunked",
          "module": "Text.XML.Expat.Chunked",
          "name": "NNode",
          "package": "hexpat-iteratee",
          "partial": "NNode",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#t:NNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA tree representation that uses a monadic list as its child list type.\n\u003c/p\u003e\u003cp\u003eNote that you can use the type function \u003ccode\u003e\u003ca\u003eListOf\u003c/a\u003e\u003c/code\u003e to give a list of\n any node type, using that node's associated list type, e.g.\n \u003ccode\u003eListOf (UNode Text)\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThe \u003cem\u003es\u003c/em\u003e parameter is a dummy type used to prevent nodes escaping from the\n handler.  See \u003ccode\u003es\u003c/code\u003e for more explanation.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Chunked",
          "name": "Node",
          "package": "hexpat-iteratee",
          "source": "src/Text-XML-Expat-Chunked.html#Node",
          "type": "type"
        },
        "index": {
          "description": "tree representation that uses monadic list as its child list type Note that you can use the type function ListOf to give list of any node type using that node associated list type e.g ListOf UNode Text The parameter is dummy type used to prevent nodes escaping from the handler See for more explanation",
          "hierarchy": "Text XML Expat Chunked",
          "module": "Text.XML.Expat.Chunked",
          "name": "Node",
          "package": "hexpat-iteratee",
          "partial": "Node",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#t:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe tree representation of the XML document.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ec\u003c/code\u003e is the container type for the element's children, which is [] in the\n \u003ccode\u003ehexpat\u003c/code\u003e package, and a monadic list type for \u003ccode\u003ehexpat-iteratee\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003etag\u003c/code\u003e is the tag type, which can either be one of several string types,\n or a special type from the \u003ccode\u003eText.XML.Expat.Namespaced\u003c/code\u003e or\n \u003ccode\u003eText.XML.Expat.Qualified\u003c/code\u003e modules.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003etext\u003c/code\u003e is the string type for text content.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Chunked",
          "name": "NodeG",
          "package": "hexpat-iteratee",
          "type": "data"
        },
        "index": {
          "description": "The tree representation of the XML document is the container type for the element children which is in the hexpat package and monadic list type for hexpat-iteratee tag is the tag type which can either be one of several string types or special type from the Text.XML.Expat.Namespaced or Text.XML.Expat.Qualified modules text is the string type for text content",
          "hierarchy": "Text XML Expat Chunked",
          "module": "Text.XML.Expat.Chunked",
          "name": "NodeG",
          "package": "hexpat-iteratee",
          "partial": "Node",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#t:NodeG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Chunked",
          "name": "ParseOptions",
          "package": "hexpat-iteratee",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text XML Expat Chunked",
          "module": "Text.XML.Expat.Chunked",
          "name": "ParseOptions",
          "package": "hexpat-iteratee",
          "partial": "Parse Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#t:ParseOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType alias for a single annotated node where qualified names are used for tags\n\u003c/p\u003e\u003cp\u003eThe \u003cem\u003es\u003c/em\u003e parameter is a dummy type used to prevent nodes escaping from the\n handler.  See \u003ccode\u003es\u003c/code\u003e for more explanation.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Chunked",
          "name": "QNode",
          "package": "hexpat-iteratee",
          "source": "src/Text-XML-Expat-Chunked.html#QNode",
          "type": "type"
        },
        "index": {
          "description": "Type alias for single annotated node where qualified names are used for tags The parameter is dummy type used to prevent nodes escaping from the handler See for more explanation",
          "hierarchy": "Text XML Expat Chunked",
          "module": "Text.XML.Expat.Chunked",
          "name": "QNode",
          "package": "hexpat-iteratee",
          "partial": "QNode",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#t:QNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType alias for a single node with unqualified tag names where tag and\n text are the same string type.\n\u003c/p\u003e\u003cp\u003eThe \u003cem\u003es\u003c/em\u003e parameter is a dummy type used to prevent nodes escaping from the\n handler.  See \u003ccode\u003es\u003c/code\u003e for more explanation.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Chunked",
          "name": "UNode",
          "package": "hexpat-iteratee",
          "source": "src/Text-XML-Expat-Chunked.html#UNode",
          "type": "type"
        },
        "index": {
          "description": "Type alias for single node with unqualified tag names where tag and text are the same string type The parameter is dummy type used to prevent nodes escaping from the handler See for more explanation",
          "hierarchy": "Text XML Expat Chunked",
          "module": "Text.XML.Expat.Chunked",
          "name": "UNode",
          "package": "hexpat-iteratee",
          "partial": "UNode",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#t:UNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse error, consisting of message text and error location\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Chunked",
          "name": "XMLParseError",
          "package": "hexpat-iteratee",
          "type": "data"
        },
        "index": {
          "description": "Parse error consisting of message text and error location",
          "hierarchy": "Text XML Expat Chunked",
          "module": "Text.XML.Expat.Chunked",
          "name": "XMLParseError",
          "package": "hexpat-iteratee",
          "partial": "XMLParse Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#t:XMLParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies a location of an event within the input text\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Chunked",
          "name": "XMLParseLocation",
          "package": "hexpat-iteratee",
          "type": "data"
        },
        "index": {
          "description": "Specifies location of an event within the input text",
          "hierarchy": "Text XML Expat Chunked",
          "module": "Text.XML.Expat.Chunked",
          "name": "XMLParseLocation",
          "package": "hexpat-iteratee",
          "partial": "XMLParse Location",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#t:XMLParseLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe monad transformer used for writing your handler for chunked XML trees,\n which executes as a co-routine.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Chunked",
          "name": "XMLT",
          "package": "hexpat-iteratee",
          "source": "src/Text-XML-Expat-Chunked.html#XMLT",
          "type": "data"
        },
        "index": {
          "description": "The monad transformer used for writing your handler for chunked XML trees which executes as co-routine",
          "hierarchy": "Text XML Expat Chunked",
          "module": "Text.XML.Expat.Chunked",
          "name": "XMLT",
          "package": "hexpat-iteratee",
          "partial": "XMLT",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#t:XMLT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Chunked",
          "name": "ASCII",
          "package": "hexpat-iteratee",
          "signature": "ASCII",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Chunked",
          "module": "Text.XML.Expat.Chunked",
          "name": "ASCII",
          "package": "hexpat-iteratee",
          "partial": "ASCII",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#v:ASCII"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Chunked",
          "name": "Element",
          "package": "hexpat-iteratee",
          "signature": "Element",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Chunked",
          "module": "Text.XML.Expat.Chunked",
          "name": "Element",
          "package": "hexpat-iteratee",
          "partial": "Element",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#v:Element"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Chunked",
          "name": "ISO88591",
          "package": "hexpat-iteratee",
          "signature": "ISO88591",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Chunked",
          "module": "Text.XML.Expat.Chunked",
          "name": "ISO88591",
          "package": "hexpat-iteratee",
          "partial": "ISO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#v:ISO88591"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Chunked",
          "name": "ParseOptions",
          "package": "hexpat-iteratee",
          "signature": "ParseOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Chunked",
          "module": "Text.XML.Expat.Chunked",
          "name": "ParseOptions",
          "package": "hexpat-iteratee",
          "partial": "Parse Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#v:ParseOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Chunked",
          "name": "Text",
          "package": "hexpat-iteratee",
          "signature": "Text !text",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Chunked",
          "module": "Text.XML.Expat.Chunked",
          "name": "Text",
          "package": "hexpat-iteratee",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#v:Text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Chunked",
          "name": "UTF16",
          "package": "hexpat-iteratee",
          "signature": "UTF16",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Chunked",
          "module": "Text.XML.Expat.Chunked",
          "name": "UTF16",
          "package": "hexpat-iteratee",
          "partial": "UTF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#v:UTF16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Chunked",
          "name": "UTF8",
          "package": "hexpat-iteratee",
          "signature": "UTF8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Chunked",
          "module": "Text.XML.Expat.Chunked",
          "name": "UTF8",
          "package": "hexpat-iteratee",
          "partial": "UTF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#v:UTF8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Chunked",
          "name": "XMLParseError",
          "package": "hexpat-iteratee",
          "signature": "XMLParseError String XMLParseLocation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Chunked",
          "module": "Text.XML.Expat.Chunked",
          "name": "XMLParseError",
          "package": "hexpat-iteratee",
          "partial": "XMLParse Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#v:XMLParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Chunked",
          "name": "XMLParseLocation",
          "package": "hexpat-iteratee",
          "signature": "XMLParseLocation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Chunked",
          "module": "Text.XML.Expat.Chunked",
          "name": "XMLParseLocation",
          "package": "hexpat-iteratee",
          "partial": "XMLParse Location",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#v:XMLParseLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Chunked",
          "name": "defaultParseOptions",
          "package": "hexpat-iteratee",
          "signature": "ParseOptions tag text",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Chunked",
          "module": "Text.XML.Expat.Chunked",
          "name": "defaultParseOptions",
          "package": "hexpat-iteratee",
          "partial": "Parse Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#v:defaultParseOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Chunked",
          "name": "eAttributes",
          "package": "hexpat-iteratee",
          "signature": "[(tag, text)]",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Chunked",
          "module": "Text.XML.Expat.Chunked",
          "name": "eAttributes",
          "normalized": "[(a,b)]",
          "package": "hexpat-iteratee",
          "partial": "Attributes",
          "signature": "[(tag,text)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#v:eAttributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Chunked",
          "name": "eChildren",
          "package": "hexpat-iteratee",
          "signature": "c (NodeG c tag text)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Chunked",
          "module": "Text.XML.Expat.Chunked",
          "name": "eChildren",
          "package": "hexpat-iteratee",
          "partial": "Children",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#v:eChildren"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Chunked",
          "name": "eName",
          "package": "hexpat-iteratee",
          "signature": "tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Chunked",
          "module": "Text.XML.Expat.Chunked",
          "name": "eName",
          "package": "hexpat-iteratee",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#v:eName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf provided, entity references (i.e. \u003ccode\u003e&nbsp;\u003c/code\u003e and friends) will\n be decoded into text using the supplied lookup function\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Chunked",
          "name": "entityDecoder",
          "package": "hexpat-iteratee",
          "signature": "Maybe (tag -\u003e Maybe text)",
          "type": "function"
        },
        "index": {
          "description": "If provided entity references i.e nbsp and friends will be decoded into text using the supplied lookup function",
          "hierarchy": "Text XML Expat Chunked",
          "module": "Text.XML.Expat.Chunked",
          "name": "entityDecoder",
          "normalized": "Maybe(a-\u003eMaybe b)",
          "package": "hexpat-iteratee",
          "partial": "Decoder",
          "signature": "Maybe(tag-\u003eMaybe text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#v:entityDecoder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe encoding parameter, if provided, overrides the document's\n encoding declaration.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Chunked",
          "name": "overrideEncoding",
          "package": "hexpat-iteratee",
          "signature": "Maybe Encoding",
          "type": "function"
        },
        "index": {
          "description": "The encoding parameter if provided overrides the document encoding declaration",
          "hierarchy": "Text XML Expat Chunked",
          "module": "Text.XML.Expat.Chunked",
          "name": "overrideEncoding",
          "package": "hexpat-iteratee",
          "partial": "Encoding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#v:overrideEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn iteratee that parses the input document, passing a representation of it\n to the specified handler monad.  The monad runs lazily using co-routines, so\n if it requests a part of the tree that hasn't been parsed yet, it will\n be suspended, and continued when it's available.\n\u003c/p\u003e\u003cp\u003eThis implementation does \u003cem\u003enot\u003c/em\u003e use Haskell's lazy I/O.\n\u003c/p\u003e\u003cp\u003eThe \u003cem\u003es\u003c/em\u003e type argument is a dummy type, which you should just leave polymorphic\n by typing \u003cem\u003es\u003c/em\u003e when using the type.  The \"forall s .\" in the type signature\n prevents any parsed nodes escaping from the handler, because they may refer\n to parts of the tree that haven't been parsed yet, and this parsing can't\n take happen outside the handler.  If you need to extract nodes from your\n handler, use a function like \u003ccode\u003e\u003ca\u003efromNodeContainer\u003c/a\u003e\u003c/code\u003e to convert the container type.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Chunked",
          "name": "parse",
          "package": "hexpat-iteratee",
          "signature": "ParseOptions tag text-\u003e (forall s.  ListT (XMLT s m) (Node s m tag text) -\u003e XMLT s m a)-\u003e m (IterateeG WrappedByteString Word8 m (Either ErrMsg a))",
          "type": "function"
        },
        "index": {
          "description": "An iteratee that parses the input document passing representation of it to the specified handler monad The monad runs lazily using co-routines so if it requests part of the tree that hasn been parsed yet it will be suspended and continued when it available This implementation does not use Haskell lazy The type argument is dummy type which you should just leave polymorphic by typing when using the type The forall in the type signature prevents any parsed nodes escaping from the handler because they may refer to parts of the tree that haven been parsed yet and this parsing can take happen outside the handler If you need to extract nodes from your handler use function like fromNodeContainer to convert the container type",
          "hierarchy": "Text XML Expat Chunked",
          "module": "Text.XML.Expat.Chunked",
          "name": "parse",
          "normalized": "ParseOptions a b-\u003e(c d ListT(XMLT e f)(Node e f a b)-\u003eXMLT e f g)-\u003ef(IterateeG WrappedByteString Word f(Either ErrMsg g))",
          "package": "hexpat-iteratee",
          "signature": "ParseOptions tag text-\u003e(forall s. ListT(XMLT s m)(Node s m tag text)-\u003eXMLT s m a)-\u003em(IterateeG WrappedByteString Word m(Either ErrMsg a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of bytes in the event\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Chunked",
          "name": "xmlByteCount",
          "package": "hexpat-iteratee",
          "signature": "Int64",
          "type": "function"
        },
        "index": {
          "description": "The number of bytes in the event",
          "hierarchy": "Text XML Expat Chunked",
          "module": "Text.XML.Expat.Chunked",
          "name": "xmlByteCount",
          "package": "hexpat-iteratee",
          "partial": "Byte Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#v:xmlByteCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eByte index of event from start of document\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Chunked",
          "name": "xmlByteIndex",
          "package": "hexpat-iteratee",
          "signature": "Int64",
          "type": "function"
        },
        "index": {
          "description": "Byte index of event from start of document",
          "hierarchy": "Text XML Expat Chunked",
          "module": "Text.XML.Expat.Chunked",
          "name": "xmlByteIndex",
          "package": "hexpat-iteratee",
          "partial": "Byte Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#v:xmlByteIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eColumn number of the event\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Chunked",
          "name": "xmlColumnNumber",
          "package": "hexpat-iteratee",
          "signature": "Int64",
          "type": "function"
        },
        "index": {
          "description": "Column number of the event",
          "hierarchy": "Text XML Expat Chunked",
          "module": "Text.XML.Expat.Chunked",
          "name": "xmlColumnNumber",
          "package": "hexpat-iteratee",
          "partial": "Column Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#v:xmlColumnNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLine number of the event\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Chunked",
          "name": "xmlLineNumber",
          "package": "hexpat-iteratee",
          "signature": "Int64",
          "type": "function"
        },
        "index": {
          "description": "Line number of the event",
          "hierarchy": "Text XML Expat Chunked",
          "module": "Text.XML.Expat.Chunked",
          "name": "xmlLineNumber",
          "package": "hexpat-iteratee",
          "partial": "Line Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-iteratee/docs/Text-XML-Expat-Chunked.html#v:xmlLineNumber"
      }
    }
  ]
]