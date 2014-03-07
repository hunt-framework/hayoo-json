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
        "word": "libxml"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Force the finalization of a document. This function is a no-op on non-ghc systems.\n",
          "module": "Text.XML.LibXML.Internals",
          "name": "freeDocument",
          "package": "libxml",
          "signature": "Document -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/libxml/docs/src/Text-XML-LibXML-Internals.html#freeDocument",
          "type": "function"
        },
        "index": {
          "description": "Force the finalization of document This function is no-op on non-ghc systems",
          "hierarchy": "Text XML LibXML Internals",
          "module": "Text.XML.LibXML.Internals",
          "name": "freeDocument",
          "normalized": "Document-\u003eIO()",
          "package": "libxml",
          "partial": "Document",
          "signature": "Document-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libxml/docs/Text-XML-LibXML-Internals.html#v:freeDocument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.LibXML.Internals",
          "name": "mkFinalizedDocument",
          "package": "libxml",
          "signature": "Ptr Document -\u003e IO Document",
          "source": "http://hackage.haskell.org/package/libxml/docs/src/Text-XML-LibXML-Internals.html#mkFinalizedDocument",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML LibXML Internals",
          "module": "Text.XML.LibXML.Internals",
          "name": "mkFinalizedDocument",
          "normalized": "Ptr Document-\u003eIO Document",
          "package": "libxml",
          "partial": "Finalized Document",
          "signature": "Ptr Document-\u003eIO Document",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libxml/docs/Text-XML-LibXML-Internals.html#v:mkFinalizedDocument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.LibXML.Internals",
          "name": "mkFinalizedNode",
          "package": "libxml",
          "signature": "Ptr Node -\u003e IO Node",
          "source": "http://hackage.haskell.org/package/libxml/docs/src/Text-XML-LibXML-Internals.html#mkFinalizedNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML LibXML Internals",
          "module": "Text.XML.LibXML.Internals",
          "name": "mkFinalizedNode",
          "normalized": "Ptr Node-\u003eIO Node",
          "package": "libxml",
          "partial": "Finalized Node",
          "signature": "Ptr Node-\u003eIO Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libxml/docs/Text-XML-LibXML-Internals.html#v:mkFinalizedNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.LibXML.Internals",
          "name": "xmlFreeDoc",
          "package": "libxml",
          "signature": "FunPtr (Ptr Document -\u003e IO ())",
          "source": "http://hackage.haskell.org/package/libxml/docs/src/Text-XML-LibXML-Internals.html#xmlFreeDoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML LibXML Internals",
          "module": "Text.XML.LibXML.Internals",
          "name": "xmlFreeDoc",
          "normalized": "FunPtr(Ptr Document-\u003eIO())",
          "package": "libxml",
          "partial": "Free Doc",
          "signature": "FunPtr(Ptr Document-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libxml/docs/Text-XML-LibXML-Internals.html#v:xmlFreeDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.LibXML.Internals",
          "name": "xmlFreeNode",
          "package": "libxml",
          "signature": "FunPtr (Ptr Node -\u003e IO ())",
          "source": "http://hackage.haskell.org/package/libxml/docs/src/Text-XML-LibXML-Internals.html#xmlFreeNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML LibXML Internals",
          "module": "Text.XML.LibXML.Internals",
          "name": "xmlFreeNode",
          "normalized": "FunPtr(Ptr Node-\u003eIO())",
          "package": "libxml",
          "partial": "Free Node",
          "signature": "FunPtr(Ptr Node-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libxml/docs/Text-XML-LibXML-Internals.html#v:xmlFreeNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.LibXML.Parser",
          "name": "cleanupParser",
          "package": "libxml",
          "signature": "IO ()",
          "source": "http://hackage.haskell.org/package/libxml/docs/src/Text-XML-LibXML-Parser.html#cleanupParser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML LibXML Parser",
          "module": "Text.XML.LibXML.Parser",
          "name": "cleanupParser",
          "normalized": "IO()",
          "package": "libxml",
          "partial": "Parser",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libxml/docs/Text-XML-LibXML-Parser.html#v:cleanupParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Parse XML document from a file. Throws an exception on error.\n",
          "module": "Text.XML.LibXML.Parser",
          "name": "parseFile",
          "package": "libxml",
          "signature": "FilePath -\u003e m Document",
          "source": "http://hackage.haskell.org/package/libxml/docs/src/Text-XML-LibXML-Parser.html#parseFile",
          "type": "function"
        },
        "index": {
          "description": "Parse XML document from file Throws an exception on error",
          "hierarchy": "Text XML LibXML Parser",
          "module": "Text.XML.LibXML.Parser",
          "name": "parseFile",
          "normalized": "FilePath-\u003ea Document",
          "package": "libxml",
          "partial": "File",
          "signature": "FilePath-\u003em Document",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libxml/docs/Text-XML-LibXML-Parser.html#v:parseFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.LibXML.Parser",
          "name": "parseFile_",
          "package": "libxml",
          "signature": "FilePath -\u003e m (Maybe Document)",
          "source": "http://hackage.haskell.org/package/libxml/docs/src/Text-XML-LibXML-Parser.html#parseFile_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML LibXML Parser",
          "module": "Text.XML.LibXML.Parser",
          "name": "parseFile_",
          "normalized": "FilePath-\u003ea(Maybe Document)",
          "package": "libxml",
          "partial": "File",
          "signature": "FilePath-\u003em(Maybe Document)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libxml/docs/Text-XML-LibXML-Parser.html#v:parseFile_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.LibXML.Parser",
          "name": "parseMemory",
          "package": "libxml",
          "signature": "ByteString -\u003e m Document",
          "source": "http://hackage.haskell.org/package/libxml/docs/src/Text-XML-LibXML-Parser.html#parseMemory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML LibXML Parser",
          "module": "Text.XML.LibXML.Parser",
          "name": "parseMemory",
          "normalized": "ByteString-\u003ea Document",
          "package": "libxml",
          "partial": "Memory",
          "signature": "ByteString-\u003em Document",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libxml/docs/Text-XML-LibXML-Parser.html#v:parseMemory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.LibXML.Parser",
          "name": "parseMemory_",
          "package": "libxml",
          "signature": "ByteString -\u003e m (Maybe Document)",
          "source": "http://hackage.haskell.org/package/libxml/docs/src/Text-XML-LibXML-Parser.html#parseMemory_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML LibXML Parser",
          "module": "Text.XML.LibXML.Parser",
          "name": "parseMemory_",
          "normalized": "ByteString-\u003ea(Maybe Document)",
          "package": "libxml",
          "partial": "Memory",
          "signature": "ByteString-\u003em(Maybe Document)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libxml/docs/Text-XML-LibXML-Parser.html#v:parseMemory_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Set and return the previous value for default entity support.\n",
          "module": "Text.XML.LibXML.Parser",
          "name": "substituteEntitiesDefault",
          "package": "libxml",
          "signature": "Bool -\u003e m Bool",
          "source": "http://hackage.haskell.org/package/libxml/docs/src/Text-XML-LibXML-Parser.html#substituteEntitiesDefault",
          "type": "function"
        },
        "index": {
          "description": "Set and return the previous value for default entity support",
          "hierarchy": "Text XML LibXML Parser",
          "module": "Text.XML.LibXML.Parser",
          "name": "substituteEntitiesDefault",
          "normalized": "Bool-\u003ea Bool",
          "package": "libxml",
          "partial": "Entities Default",
          "signature": "Bool-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libxml/docs/Text-XML-LibXML-Parser.html#v:substituteEntitiesDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.LibXML.Tree",
          "name": "addChild",
          "package": "libxml",
          "signature": "Node -\u003e Node -\u003e m ()",
          "source": "http://hackage.haskell.org/package/libxml/docs/src/Text-XML-LibXML-Tree.html#addChild",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML LibXML Tree",
          "module": "Text.XML.LibXML.Tree",
          "name": "addChild",
          "normalized": "Node-\u003eNode-\u003ea()",
          "package": "libxml",
          "partial": "Child",
          "signature": "Node-\u003eNode-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libxml/docs/Text-XML-LibXML-Tree.html#v:addChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.LibXML.Tree",
          "name": "addSibling",
          "package": "libxml",
          "signature": "Node -\u003e Node -\u003e m ()",
          "source": "http://hackage.haskell.org/package/libxml/docs/src/Text-XML-LibXML-Tree.html#addSibling",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML LibXML Tree",
          "module": "Text.XML.LibXML.Tree",
          "name": "addSibling",
          "normalized": "Node-\u003eNode-\u003ea()",
          "package": "libxml",
          "partial": "Sibling",
          "signature": "Node-\u003eNode-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libxml/docs/Text-XML-LibXML-Tree.html#v:addSibling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.LibXML.Tree",
          "name": "documentDumpMemory",
          "package": "libxml",
          "signature": "Document -\u003e m ByteString",
          "source": "http://hackage.haskell.org/package/libxml/docs/src/Text-XML-LibXML-Tree.html#documentDumpMemory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML LibXML Tree",
          "module": "Text.XML.LibXML.Tree",
          "name": "documentDumpMemory",
          "normalized": "Document-\u003ea ByteString",
          "package": "libxml",
          "partial": "Dump Memory",
          "signature": "Document-\u003em ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libxml/docs/Text-XML-LibXML-Tree.html#v:documentDumpMemory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.LibXML.Tree",
          "name": "getDocumentRootElement",
          "package": "libxml",
          "signature": "Document -\u003e m Node",
          "source": "http://hackage.haskell.org/package/libxml/docs/src/Text-XML-LibXML-Tree.html#getDocumentRootElement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML LibXML Tree",
          "module": "Text.XML.LibXML.Tree",
          "name": "getDocumentRootElement",
          "normalized": "Document-\u003ea Node",
          "package": "libxml",
          "partial": "Document Root Element",
          "signature": "Document-\u003em Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libxml/docs/Text-XML-LibXML-Tree.html#v:getDocumentRootElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.LibXML.Tree",
          "name": "newChild",
          "package": "libxml",
          "signature": "Node -\u003e Maybe Namespace -\u003e String -\u003e Maybe String -\u003e m Node",
          "source": "http://hackage.haskell.org/package/libxml/docs/src/Text-XML-LibXML-Tree.html#newChild",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML LibXML Tree",
          "module": "Text.XML.LibXML.Tree",
          "name": "newChild",
          "normalized": "Node-\u003eMaybe Namespace-\u003eString-\u003eMaybe String-\u003ea Node",
          "package": "libxml",
          "partial": "Child",
          "signature": "Node-\u003eMaybe Namespace-\u003eString-\u003eMaybe String-\u003em Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libxml/docs/Text-XML-LibXML-Tree.html#v:newChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Version\n",
          "module": "Text.XML.LibXML.Tree",
          "name": "newDocument",
          "package": "libxml",
          "signature": "String-\u003e m Document",
          "source": "http://hackage.haskell.org/package/libxml/docs/src/Text-XML-LibXML-Tree.html#newDocument",
          "type": "function"
        },
        "index": {
          "description": "Version",
          "hierarchy": "Text XML LibXML Tree",
          "module": "Text.XML.LibXML.Tree",
          "name": "newDocument",
          "normalized": "String-\u003ea Document",
          "package": "libxml",
          "partial": "Document",
          "signature": "String-\u003em Document",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libxml/docs/Text-XML-LibXML-Tree.html#v:newDocument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.LibXML.Tree",
          "name": "newDocumentNode",
          "package": "libxml",
          "signature": "Document -\u003e Maybe Namespace -\u003e String -\u003e Maybe String -\u003e m Node",
          "source": "http://hackage.haskell.org/package/libxml/docs/src/Text-XML-LibXML-Tree.html#newDocumentNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML LibXML Tree",
          "module": "Text.XML.LibXML.Tree",
          "name": "newDocumentNode",
          "normalized": "Document-\u003eMaybe Namespace-\u003eString-\u003eMaybe String-\u003ea Node",
          "package": "libxml",
          "partial": "Document Node",
          "signature": "Document-\u003eMaybe Namespace-\u003eString-\u003eMaybe String-\u003em Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libxml/docs/Text-XML-LibXML-Tree.html#v:newDocumentNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.LibXML.Tree",
          "name": "newDocumentPI",
          "package": "libxml",
          "signature": "Document -\u003e String -\u003e String -\u003e m Node",
          "source": "http://hackage.haskell.org/package/libxml/docs/src/Text-XML-LibXML-Tree.html#newDocumentPI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML LibXML Tree",
          "module": "Text.XML.LibXML.Tree",
          "name": "newDocumentPI",
          "normalized": "Document-\u003eString-\u003eString-\u003ea Node",
          "package": "libxml",
          "partial": "Document PI",
          "signature": "Document-\u003eString-\u003eString-\u003em Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libxml/docs/Text-XML-LibXML-Tree.html#v:newDocumentPI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.LibXML.Tree",
          "name": "newNode",
          "package": "libxml",
          "signature": "Maybe Namespace -\u003e String -\u003e m Node",
          "source": "http://hackage.haskell.org/package/libxml/docs/src/Text-XML-LibXML-Tree.html#newNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML LibXML Tree",
          "module": "Text.XML.LibXML.Tree",
          "name": "newNode",
          "normalized": "Maybe Namespace-\u003eString-\u003ea Node",
          "package": "libxml",
          "partial": "Node",
          "signature": "Maybe Namespace-\u003eString-\u003em Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libxml/docs/Text-XML-LibXML-Tree.html#v:newNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.LibXML.Tree",
          "name": "newProperty",
          "package": "libxml",
          "signature": "Node -\u003e String -\u003e String -\u003e m ()",
          "source": "http://hackage.haskell.org/package/libxml/docs/src/Text-XML-LibXML-Tree.html#newProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML LibXML Tree",
          "module": "Text.XML.LibXML.Tree",
          "name": "newProperty",
          "normalized": "Node-\u003eString-\u003eString-\u003ea()",
          "package": "libxml",
          "partial": "Property",
          "signature": "Node-\u003eString-\u003eString-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libxml/docs/Text-XML-LibXML-Tree.html#v:newProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.LibXML.Tree",
          "name": "newText",
          "package": "libxml",
          "signature": "String -\u003e m Node",
          "source": "http://hackage.haskell.org/package/libxml/docs/src/Text-XML-LibXML-Tree.html#newText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML LibXML Tree",
          "module": "Text.XML.LibXML.Tree",
          "name": "newText",
          "normalized": "String-\u003ea Node",
          "package": "libxml",
          "partial": "Text",
          "signature": "String-\u003em Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libxml/docs/Text-XML-LibXML-Tree.html#v:newText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.LibXML.Tree",
          "name": "newTextChild",
          "package": "libxml",
          "signature": "Node -\u003e Maybe Namespace -\u003e String -\u003e String -\u003e m Node",
          "source": "http://hackage.haskell.org/package/libxml/docs/src/Text-XML-LibXML-Tree.html#newTextChild",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML LibXML Tree",
          "module": "Text.XML.LibXML.Tree",
          "name": "newTextChild",
          "normalized": "Node-\u003eMaybe Namespace-\u003eString-\u003eString-\u003ea Node",
          "package": "libxml",
          "partial": "Text Child",
          "signature": "Node-\u003eMaybe Namespace-\u003eString-\u003eString-\u003em Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libxml/docs/Text-XML-LibXML-Tree.html#v:newTextChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.LibXML.Tree",
          "name": "setDocumentRootElement",
          "package": "libxml",
          "signature": "Document -\u003e Node -\u003e m ()",
          "source": "http://hackage.haskell.org/package/libxml/docs/src/Text-XML-LibXML-Tree.html#setDocumentRootElement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML LibXML Tree",
          "module": "Text.XML.LibXML.Tree",
          "name": "setDocumentRootElement",
          "normalized": "Document-\u003eNode-\u003ea()",
          "package": "libxml",
          "partial": "Document Root Element",
          "signature": "Document-\u003eNode-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libxml/docs/Text-XML-LibXML-Tree.html#v:setDocumentRootElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.LibXML.Types",
          "name": "Document",
          "package": "libxml",
          "source": "http://hackage.haskell.org/package/libxml/docs/src/Text-XML-LibXML-Types.html#Document",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Text XML LibXML Types",
          "module": "Text.XML.LibXML.Types",
          "name": "Document",
          "package": "libxml",
          "partial": "Document",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/libxml/docs/Text-XML-LibXML-Types.html#t:Document"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.LibXML.Types",
          "name": "Namespace",
          "package": "libxml",
          "source": "http://hackage.haskell.org/package/libxml/docs/src/Text-XML-LibXML-Types.html#Namespace",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Text XML LibXML Types",
          "module": "Text.XML.LibXML.Types",
          "name": "Namespace",
          "package": "libxml",
          "partial": "Namespace",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/libxml/docs/Text-XML-LibXML-Types.html#t:Namespace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.LibXML.Types",
          "name": "Node",
          "package": "libxml",
          "source": "http://hackage.haskell.org/package/libxml/docs/src/Text-XML-LibXML-Types.html#Node",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Text XML LibXML Types",
          "module": "Text.XML.LibXML.Types",
          "name": "Node",
          "package": "libxml",
          "partial": "Node",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/libxml/docs/Text-XML-LibXML-Types.html#t:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.LibXML.Types",
          "name": "Property",
          "package": "libxml",
          "source": "http://hackage.haskell.org/package/libxml/docs/src/Text-XML-LibXML-Types.html#Property",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Text XML LibXML Types",
          "module": "Text.XML.LibXML.Types",
          "name": "Property",
          "package": "libxml",
          "partial": "Property",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/libxml/docs/Text-XML-LibXML-Types.html#t:Property"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.LibXML.Types",
          "name": "withDocument",
          "package": "libxml",
          "signature": "Document -\u003e (Ptr Document -\u003e IO a) -\u003e IO a",
          "source": "http://hackage.haskell.org/package/libxml/docs/src/Text-XML-LibXML-Types.html#withDocument",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML LibXML Types",
          "module": "Text.XML.LibXML.Types",
          "name": "withDocument",
          "normalized": "Document-\u003e(Ptr Document-\u003eIO a)-\u003eIO a",
          "package": "libxml",
          "partial": "Document",
          "signature": "Document-\u003e(Ptr Document-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libxml/docs/Text-XML-LibXML-Types.html#v:withDocument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.LibXML.Types",
          "name": "withNamespace",
          "package": "libxml",
          "signature": "Namespace -\u003e (Ptr Namespace -\u003e IO a) -\u003e IO a",
          "source": "http://hackage.haskell.org/package/libxml/docs/src/Text-XML-LibXML-Types.html#withNamespace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML LibXML Types",
          "module": "Text.XML.LibXML.Types",
          "name": "withNamespace",
          "normalized": "Namespace-\u003e(Ptr Namespace-\u003eIO a)-\u003eIO a",
          "package": "libxml",
          "partial": "Namespace",
          "signature": "Namespace-\u003e(Ptr Namespace-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libxml/docs/Text-XML-LibXML-Types.html#v:withNamespace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.LibXML.Types",
          "name": "withNode",
          "package": "libxml",
          "signature": "Node -\u003e (Ptr Node -\u003e IO a) -\u003e IO a",
          "source": "http://hackage.haskell.org/package/libxml/docs/src/Text-XML-LibXML-Types.html#withNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML LibXML Types",
          "module": "Text.XML.LibXML.Types",
          "name": "withNode",
          "normalized": "Node-\u003e(Ptr Node-\u003eIO a)-\u003eIO a",
          "package": "libxml",
          "partial": "Node",
          "signature": "Node-\u003e(Ptr Node-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libxml/docs/Text-XML-LibXML-Types.html#v:withNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.LibXML.Types",
          "name": "withProperty",
          "package": "libxml",
          "signature": "Property -\u003e (Ptr Property -\u003e IO a) -\u003e IO a",
          "source": "http://hackage.haskell.org/package/libxml/docs/src/Text-XML-LibXML-Types.html#withProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML LibXML Types",
          "module": "Text.XML.LibXML.Types",
          "name": "withProperty",
          "normalized": "Property-\u003e(Ptr Property-\u003eIO a)-\u003eIO a",
          "package": "libxml",
          "partial": "Property",
          "signature": "Property-\u003e(Ptr Property-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libxml/docs/Text-XML-LibXML-Types.html#v:withProperty"
      }
    }
  ]
]