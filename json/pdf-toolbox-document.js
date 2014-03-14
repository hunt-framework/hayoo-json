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
        "word": "pdf-toolbox-document"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDocument datalog\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Pdf.Toolbox.Document.Catalog",
          "name": "Catalog",
          "package": "pdf-toolbox-document",
          "source": "src/Pdf-Toolbox-Document-Catalog.html",
          "type": "module"
        },
        "index": {
          "description": "Document datalog",
          "hierarchy": "Pdf Toolbox Document Catalog",
          "module": "Pdf.Toolbox.Document.Catalog",
          "name": "Catalog",
          "package": "pdf-toolbox-document",
          "partial": "Catalog",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Catalog.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDocument catalog\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Document.Catalog",
          "name": "Catalog",
          "package": "pdf-toolbox-document",
          "source": "src/Pdf-Toolbox-Document-Internal-Types.html#Catalog",
          "type": "data"
        },
        "index": {
          "description": "Document catalog",
          "hierarchy": "Pdf Toolbox Document Catalog",
          "module": "Pdf.Toolbox.Document.Catalog",
          "name": "Catalog",
          "package": "pdf-toolbox-document",
          "partial": "Catalog",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Catalog.html#t:Catalog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet root node of page tree\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Document.Catalog",
          "name": "catalogPageNode",
          "package": "pdf-toolbox-document",
          "signature": "Catalog -\u003e PdfE m PageNode",
          "source": "src/Pdf-Toolbox-Document-Catalog.html#catalogPageNode",
          "type": "function"
        },
        "index": {
          "description": "Get root node of page tree",
          "hierarchy": "Pdf Toolbox Document Catalog",
          "module": "Pdf.Toolbox.Document.Catalog",
          "name": "catalogPageNode",
          "normalized": "Catalog-\u003ePdfE a PageNode",
          "package": "pdf-toolbox-document",
          "partial": "Page Node",
          "signature": "Catalog-\u003ePdfE m PageNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Catalog.html#v:catalogPageNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePDF document\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Pdf.Toolbox.Document.Document",
          "name": "Document",
          "package": "pdf-toolbox-document",
          "source": "src/Pdf-Toolbox-Document-Document.html",
          "type": "module"
        },
        "index": {
          "description": "PDF document",
          "hierarchy": "Pdf Toolbox Document Document",
          "module": "Pdf.Toolbox.Document.Document",
          "name": "Document",
          "package": "pdf-toolbox-document",
          "partial": "Document",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Document.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePDF document\n\u003c/p\u003e\u003cp\u003eIt is a trailer under the hood\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Document.Document",
          "name": "Document",
          "package": "pdf-toolbox-document",
          "source": "src/Pdf-Toolbox-Document-Internal-Types.html#Document",
          "type": "data"
        },
        "index": {
          "description": "PDF document It is trailer under the hood",
          "hierarchy": "Pdf Toolbox Document Document",
          "module": "Pdf.Toolbox.Document.Document",
          "name": "Document",
          "package": "pdf-toolbox-document",
          "partial": "Document",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Document.html#t:Document"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the document catalog\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Document.Document",
          "name": "documentCatalog",
          "package": "pdf-toolbox-document",
          "signature": "Document -\u003e PdfE m Catalog",
          "source": "src/Pdf-Toolbox-Document-Document.html#documentCatalog",
          "type": "function"
        },
        "index": {
          "description": "Get the document catalog",
          "hierarchy": "Pdf Toolbox Document Document",
          "module": "Pdf.Toolbox.Document.Document",
          "name": "documentCatalog",
          "normalized": "Document-\u003ePdfE a Catalog",
          "package": "pdf-toolbox-document",
          "partial": "Catalog",
          "signature": "Document-\u003ePdfE m Catalog",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Document.html#v:documentCatalog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDocument encryption dictionary\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Document.Document",
          "name": "documentEncryption",
          "package": "pdf-toolbox-document",
          "signature": "Document -\u003e PdfE m (Maybe Dict)",
          "source": "src/Pdf-Toolbox-Document-Document.html#documentEncryption",
          "type": "function"
        },
        "index": {
          "description": "Document encryption dictionary",
          "hierarchy": "Pdf Toolbox Document Document",
          "module": "Pdf.Toolbox.Document.Document",
          "name": "documentEncryption",
          "normalized": "Document-\u003ePdfE a(Maybe Dict)",
          "package": "pdf-toolbox-document",
          "partial": "Encryption",
          "signature": "Document-\u003ePdfE m(Maybe Dict)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Document.html#v:documentEncryption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfornation dictionary for the document\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Document.Document",
          "name": "documentInfo",
          "package": "pdf-toolbox-document",
          "signature": "Document -\u003e PdfE m (Maybe Info)",
          "source": "src/Pdf-Toolbox-Document-Document.html#documentInfo",
          "type": "function"
        },
        "index": {
          "description": "Infornation dictionary for the document",
          "hierarchy": "Pdf Toolbox Document Document",
          "module": "Pdf.Toolbox.Document.Document",
          "name": "documentInfo",
          "normalized": "Document-\u003ePdfE a(Maybe Info)",
          "package": "pdf-toolbox-document",
          "partial": "Info",
          "signature": "Document-\u003ePdfE m(Maybe Info)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Document.html#v:documentInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic support for encrypted PDF documents\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Pdf.Toolbox.Document.Encryption",
          "name": "Encryption",
          "package": "pdf-toolbox-document",
          "source": "src/Pdf-Toolbox-Document-Encryption.html",
          "type": "module"
        },
        "index": {
          "description": "Basic support for encrypted PDF documents",
          "hierarchy": "Pdf Toolbox Document Encryption",
          "module": "Pdf.Toolbox.Document.Encryption",
          "name": "Encryption",
          "package": "pdf-toolbox-document",
          "partial": "Encryption",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Encryption.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecrypt input stream\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Document.Encryption",
          "name": "Decryptor",
          "package": "pdf-toolbox-document",
          "source": "src/Pdf-Toolbox-Document-Encryption.html#Decryptor",
          "type": "type"
        },
        "index": {
          "description": "Decrypt input stream",
          "hierarchy": "Pdf Toolbox Document Encryption",
          "module": "Pdf.Toolbox.Document.Encryption",
          "name": "Decryptor",
          "package": "pdf-toolbox-document",
          "partial": "Decryptor",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Encryption.html#t:Decryptor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecrypt object with the decryptor\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Document.Encryption",
          "name": "decryptObject",
          "package": "pdf-toolbox-document",
          "signature": "(IS -\u003e IO IS) -\u003e Object a -\u003e IO (Object a)",
          "source": "src/Pdf-Toolbox-Document-Encryption.html#decryptObject",
          "type": "function"
        },
        "index": {
          "description": "Decrypt object with the decryptor",
          "hierarchy": "Pdf Toolbox Document Encryption",
          "module": "Pdf.Toolbox.Document.Encryption",
          "name": "decryptObject",
          "normalized": "(IS-\u003eIO IS)-\u003eObject a-\u003eIO(Object a)",
          "package": "pdf-toolbox-document",
          "partial": "Object",
          "signature": "(IS-\u003eIO IS)-\u003eObject a-\u003eIO(Object a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Encryption.html#v:decryptObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default user password\n\u003c/p\u003e",
          "module": "[\"Pdf.Toolbox.Document.Encryption\",\"Pdf.Toolbox.Document.Pdf\"]",
          "name": "defaultUserPassword",
          "package": "pdf-toolbox-document",
          "signature": "ByteString",
          "source": "src/Pdf-Toolbox-Document-Encryption.html#defaultUserPassword",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Encryption.html#v:defaultUserPassword\",\"http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Pdf.html#v:defaultUserPassword\"]"
        },
        "index": {
          "description": "The default user password",
          "hierarchy": "Pdf Toolbox Document Encryption",
          "module": "Pdf.Toolbox.Document.Encryption",
          "name": "defaultUserPassword",
          "package": "pdf-toolbox-document",
          "partial": "User Password",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Encryption.html#v:defaultUserPassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStandard decryptor. RC4\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Document.Encryption",
          "name": "mkStandardDecryptor",
          "package": "pdf-toolbox-document",
          "signature": "Dict-\u003e Dict-\u003e ByteString-\u003e PdfE m (Maybe Decryptor)",
          "type": "function"
        },
        "index": {
          "description": "Standard decryptor RC4",
          "hierarchy": "Pdf Toolbox Document Encryption",
          "module": "Pdf.Toolbox.Document.Encryption",
          "name": "mkStandardDecryptor",
          "normalized": "Dict-\u003eDict-\u003eByteString-\u003ePdfE a(Maybe Decryptor)",
          "package": "pdf-toolbox-document",
          "partial": "Standard Decryptor",
          "signature": "Dict-\u003eDict-\u003eByteString-\u003ePdfE m(Maybe Decryptor)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Encryption.html#v:mkStandardDecryptor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFont dictionary\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Pdf.Toolbox.Document.FontDict",
          "name": "FontDict",
          "package": "pdf-toolbox-document",
          "source": "src/Pdf-Toolbox-Document-FontDict.html",
          "type": "module"
        },
        "index": {
          "description": "Font dictionary",
          "hierarchy": "Pdf Toolbox Document FontDict",
          "module": "Pdf.Toolbox.Document.FontDict",
          "name": "FontDict",
          "package": "pdf-toolbox-document",
          "partial": "Font Dict",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-FontDict.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFont dictionary\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Document.FontDict",
          "name": "FontDict",
          "package": "pdf-toolbox-document",
          "source": "src/Pdf-Toolbox-Document-Internal-Types.html#FontDict",
          "type": "data"
        },
        "index": {
          "description": "Font dictionary",
          "hierarchy": "Pdf Toolbox Document FontDict",
          "module": "Pdf.Toolbox.Document.FontDict",
          "name": "FontDict",
          "package": "pdf-toolbox-document",
          "partial": "Font Dict",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-FontDict.html#t:FontDict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFont subtypes\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Document.FontDict",
          "name": "FontSubtype",
          "package": "pdf-toolbox-document",
          "source": "src/Pdf-Toolbox-Document-FontDict.html#FontSubtype",
          "type": "data"
        },
        "index": {
          "description": "Font subtypes",
          "hierarchy": "Pdf Toolbox Document FontDict",
          "module": "Pdf.Toolbox.Document.FontDict",
          "name": "FontSubtype",
          "package": "pdf-toolbox-document",
          "partial": "Font Subtype",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-FontDict.html#t:FontSubtype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Document.FontDict",
          "name": "FontMMType1",
          "package": "pdf-toolbox-document",
          "signature": "FontMMType1",
          "source": "src/Pdf-Toolbox-Document-FontDict.html#FontSubtype",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Document FontDict",
          "module": "Pdf.Toolbox.Document.FontDict",
          "name": "FontMMType1",
          "package": "pdf-toolbox-document",
          "partial": "Font MMType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-FontDict.html#v:FontMMType1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Document.FontDict",
          "name": "FontTrueType",
          "package": "pdf-toolbox-document",
          "signature": "FontTrueType",
          "source": "src/Pdf-Toolbox-Document-FontDict.html#FontSubtype",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Document FontDict",
          "module": "Pdf.Toolbox.Document.FontDict",
          "name": "FontTrueType",
          "package": "pdf-toolbox-document",
          "partial": "Font True Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-FontDict.html#v:FontTrueType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Document.FontDict",
          "name": "FontType0",
          "package": "pdf-toolbox-document",
          "signature": "FontType0",
          "source": "src/Pdf-Toolbox-Document-FontDict.html#FontSubtype",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Document FontDict",
          "module": "Pdf.Toolbox.Document.FontDict",
          "name": "FontType0",
          "package": "pdf-toolbox-document",
          "partial": "Font Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-FontDict.html#v:FontType0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Document.FontDict",
          "name": "FontType1",
          "package": "pdf-toolbox-document",
          "signature": "FontType1",
          "source": "src/Pdf-Toolbox-Document-FontDict.html#FontSubtype",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Document FontDict",
          "module": "Pdf.Toolbox.Document.FontDict",
          "name": "FontType1",
          "package": "pdf-toolbox-document",
          "partial": "Font Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-FontDict.html#v:FontType1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Document.FontDict",
          "name": "FontType3",
          "package": "pdf-toolbox-document",
          "signature": "FontType3",
          "source": "src/Pdf-Toolbox-Document-FontDict.html#FontSubtype",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Document FontDict",
          "module": "Pdf.Toolbox.Document.FontDict",
          "name": "FontType3",
          "package": "pdf-toolbox-document",
          "partial": "Font Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-FontDict.html#v:FontType3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad font info for the font\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Document.FontDict",
          "name": "fontDictLoadInfo",
          "package": "pdf-toolbox-document",
          "signature": "FontDict -\u003e PdfE m FontInfo",
          "source": "src/Pdf-Toolbox-Document-FontDict.html#fontDictLoadInfo",
          "type": "function"
        },
        "index": {
          "description": "Load font info for the font",
          "hierarchy": "Pdf Toolbox Document FontDict",
          "module": "Pdf.Toolbox.Document.FontDict",
          "name": "fontDictLoadInfo",
          "normalized": "FontDict-\u003ePdfE a FontInfo",
          "package": "pdf-toolbox-document",
          "partial": "Dict Load Info",
          "signature": "FontDict-\u003ePdfE m FontInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-FontDict.html#v:fontDictLoadInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet font subtype\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Document.FontDict",
          "name": "fontDictSubtype",
          "package": "pdf-toolbox-document",
          "signature": "FontDict -\u003e PdfE m FontSubtype",
          "source": "src/Pdf-Toolbox-Document-FontDict.html#fontDictSubtype",
          "type": "function"
        },
        "index": {
          "description": "Get font subtype",
          "hierarchy": "Pdf Toolbox Document FontDict",
          "module": "Pdf.Toolbox.Document.FontDict",
          "name": "fontDictSubtype",
          "normalized": "FontDict-\u003ePdfE a FontSubtype",
          "package": "pdf-toolbox-document",
          "partial": "Dict Subtype",
          "signature": "FontDict-\u003ePdfE m FontSubtype",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-FontDict.html#v:fontDictSubtype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDocument info dictionary\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Pdf.Toolbox.Document.Info",
          "name": "Info",
          "package": "pdf-toolbox-document",
          "source": "src/Pdf-Toolbox-Document-Info.html",
          "type": "module"
        },
        "index": {
          "description": "Document info dictionary",
          "hierarchy": "Pdf Toolbox Document Info",
          "module": "Pdf.Toolbox.Document.Info",
          "name": "Info",
          "package": "pdf-toolbox-document",
          "partial": "Info",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Info.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDocument title\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Document.Info",
          "name": "infoTitle",
          "package": "pdf-toolbox-document",
          "signature": "Info -\u003e PdfE m (Maybe Str)",
          "source": "src/Pdf-Toolbox-Document-Info.html#infoTitle",
          "type": "function"
        },
        "index": {
          "description": "Document title",
          "hierarchy": "Pdf Toolbox Document Info",
          "module": "Pdf.Toolbox.Document.Info",
          "name": "infoTitle",
          "normalized": "Info-\u003ePdfE a(Maybe Str)",
          "package": "pdf-toolbox-document",
          "partial": "Title",
          "signature": "Info-\u003ePdfE m(Maybe Str)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Info.html#v:infoTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInternal type declarations\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Pdf.Toolbox.Document.Internal.Types",
          "name": "Types",
          "package": "pdf-toolbox-document",
          "source": "src/Pdf-Toolbox-Document-Internal-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Internal type declarations",
          "hierarchy": "Pdf Toolbox Document Internal Types",
          "module": "Pdf.Toolbox.Document.Internal.Types",
          "name": "Types",
          "package": "pdf-toolbox-document",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Internal-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDocument catalog\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Document.Internal.Types",
          "name": "Catalog",
          "package": "pdf-toolbox-document",
          "source": "src/Pdf-Toolbox-Document-Internal-Types.html#Catalog",
          "type": "data"
        },
        "index": {
          "description": "Document catalog",
          "hierarchy": "Pdf Toolbox Document Internal Types",
          "module": "Pdf.Toolbox.Document.Internal.Types",
          "name": "Catalog",
          "package": "pdf-toolbox-document",
          "partial": "Catalog",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Internal-Types.html#t:Catalog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePDF document\n\u003c/p\u003e\u003cp\u003eIt is a trailer under the hood\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Document.Internal.Types",
          "name": "Document",
          "package": "pdf-toolbox-document",
          "source": "src/Pdf-Toolbox-Document-Internal-Types.html#Document",
          "type": "data"
        },
        "index": {
          "description": "PDF document It is trailer under the hood",
          "hierarchy": "Pdf Toolbox Document Internal Types",
          "module": "Pdf.Toolbox.Document.Internal.Types",
          "name": "Document",
          "package": "pdf-toolbox-document",
          "partial": "Document",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Internal-Types.html#t:Document"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFont dictionary\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Document.Internal.Types",
          "name": "FontDict",
          "package": "pdf-toolbox-document",
          "source": "src/Pdf-Toolbox-Document-Internal-Types.html#FontDict",
          "type": "data"
        },
        "index": {
          "description": "Font dictionary",
          "hierarchy": "Pdf Toolbox Document Internal Types",
          "module": "Pdf.Toolbox.Document.Internal.Types",
          "name": "FontDict",
          "package": "pdf-toolbox-document",
          "partial": "Font Dict",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Internal-Types.html#t:FontDict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation dictionary\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Document.Internal.Types",
          "name": "Info",
          "package": "pdf-toolbox-document",
          "source": "src/Pdf-Toolbox-Document-Internal-Types.html#Info",
          "type": "data"
        },
        "index": {
          "description": "Information dictionary",
          "hierarchy": "Pdf Toolbox Document Internal Types",
          "module": "Pdf.Toolbox.Document.Internal.Types",
          "name": "Info",
          "package": "pdf-toolbox-document",
          "partial": "Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Internal-Types.html#t:Info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePdf document page\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Document.Internal.Types",
          "name": "Page",
          "package": "pdf-toolbox-document",
          "source": "src/Pdf-Toolbox-Document-Internal-Types.html#Page",
          "type": "data"
        },
        "index": {
          "description": "Pdf document page",
          "hierarchy": "Pdf Toolbox Document Internal Types",
          "module": "Pdf.Toolbox.Document.Internal.Types",
          "name": "Page",
          "package": "pdf-toolbox-document",
          "partial": "Page",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Internal-Types.html#t:Page"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePage tree node, contains pages or other nodes\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Document.Internal.Types",
          "name": "PageNode",
          "package": "pdf-toolbox-document",
          "source": "src/Pdf-Toolbox-Document-Internal-Types.html#PageNode",
          "type": "data"
        },
        "index": {
          "description": "Page tree node contains pages or other nodes",
          "hierarchy": "Pdf Toolbox Document Internal Types",
          "module": "Pdf.Toolbox.Document.Internal.Types",
          "name": "PageNode",
          "package": "pdf-toolbox-document",
          "partial": "Page Node",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Internal-Types.html#t:PageNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePage tree\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Document.Internal.Types",
          "name": "PageTree",
          "package": "pdf-toolbox-document",
          "source": "src/Pdf-Toolbox-Document-Internal-Types.html#PageTree",
          "type": "data"
        },
        "index": {
          "description": "Page tree",
          "hierarchy": "Pdf Toolbox Document Internal Types",
          "module": "Pdf.Toolbox.Document.Internal.Types",
          "name": "PageTree",
          "package": "pdf-toolbox-document",
          "partial": "Page Tree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Internal-Types.html#t:PageTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Document.Internal.Types",
          "name": "Catalog",
          "package": "pdf-toolbox-document",
          "signature": "Catalog Ref Dict",
          "source": "src/Pdf-Toolbox-Document-Internal-Types.html#Catalog",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Document Internal Types",
          "module": "Pdf.Toolbox.Document.Internal.Types",
          "name": "Catalog",
          "package": "pdf-toolbox-document",
          "partial": "Catalog",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Internal-Types.html#v:Catalog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Document.Internal.Types",
          "name": "Document",
          "package": "pdf-toolbox-document",
          "signature": "Document XRef Dict",
          "source": "src/Pdf-Toolbox-Document-Internal-Types.html#Document",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Document Internal Types",
          "module": "Pdf.Toolbox.Document.Internal.Types",
          "name": "Document",
          "package": "pdf-toolbox-document",
          "partial": "Document",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Internal-Types.html#v:Document"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Document.Internal.Types",
          "name": "FontDict",
          "package": "pdf-toolbox-document",
          "signature": "FontDict Dict",
          "source": "src/Pdf-Toolbox-Document-Internal-Types.html#FontDict",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Document Internal Types",
          "module": "Pdf.Toolbox.Document.Internal.Types",
          "name": "FontDict",
          "package": "pdf-toolbox-document",
          "partial": "Font Dict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Internal-Types.html#v:FontDict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Document.Internal.Types",
          "name": "Info",
          "package": "pdf-toolbox-document",
          "signature": "Info Ref Dict",
          "source": "src/Pdf-Toolbox-Document-Internal-Types.html#Info",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Document Internal Types",
          "module": "Pdf.Toolbox.Document.Internal.Types",
          "name": "Info",
          "package": "pdf-toolbox-document",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Internal-Types.html#v:Info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Document.Internal.Types",
          "name": "Page",
          "package": "pdf-toolbox-document",
          "signature": "Page Ref Dict",
          "source": "src/Pdf-Toolbox-Document-Internal-Types.html#Page",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Document Internal Types",
          "module": "Pdf.Toolbox.Document.Internal.Types",
          "name": "Page",
          "package": "pdf-toolbox-document",
          "partial": "Page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Internal-Types.html#v:Page"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Document.Internal.Types",
          "name": "PageNode",
          "package": "pdf-toolbox-document",
          "signature": "PageNode Ref Dict",
          "source": "src/Pdf-Toolbox-Document-Internal-Types.html#PageNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Document Internal Types",
          "module": "Pdf.Toolbox.Document.Internal.Types",
          "name": "PageNode",
          "package": "pdf-toolbox-document",
          "partial": "Page Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Internal-Types.html#v:PageNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Pdf.Toolbox.Document.Internal.Types\",\"Pdf.Toolbox.Document.PageNode\"]",
          "name": "PageTreeLeaf",
          "package": "pdf-toolbox-document",
          "signature": "PageTreeLeaf Page",
          "source": "src/Pdf-Toolbox-Document-Internal-Types.html#PageTree",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Internal-Types.html#v:PageTreeLeaf\",\"http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-PageNode.html#v:PageTreeLeaf\"]"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Document Internal Types",
          "module": "Pdf.Toolbox.Document.Internal.Types",
          "name": "PageTreeLeaf",
          "package": "pdf-toolbox-document",
          "partial": "Page Tree Leaf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Internal-Types.html#v:PageTreeLeaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Pdf.Toolbox.Document.Internal.Types\",\"Pdf.Toolbox.Document.PageNode\"]",
          "name": "PageTreeNode",
          "package": "pdf-toolbox-document",
          "signature": "PageTreeNode PageNode",
          "source": "src/Pdf-Toolbox-Document-Internal-Types.html#PageTree",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Internal-Types.html#v:PageTreeNode\",\"http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-PageNode.html#v:PageTreeNode\"]"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Document Internal Types",
          "module": "Pdf.Toolbox.Document.Internal.Types",
          "name": "PageTreeNode",
          "package": "pdf-toolbox-document",
          "partial": "Page Tree Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Internal-Types.html#v:PageTreeNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for internal use\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Pdf.Toolbox.Document.Internal.Util",
          "name": "Util",
          "package": "pdf-toolbox-document",
          "source": "src/Pdf-Toolbox-Document-Internal-Util.html",
          "type": "module"
        },
        "index": {
          "description": "Utilities for internal use",
          "hierarchy": "Pdf Toolbox Document Internal Util",
          "module": "Pdf.Toolbox.Document.Internal.Util",
          "name": "Util",
          "package": "pdf-toolbox-document",
          "partial": "Util",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Internal-Util.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet dictionary type, name at key \"Type\"\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Document.Internal.Util",
          "name": "dictionaryType",
          "package": "pdf-toolbox-document",
          "signature": "Dict -\u003e PdfE m Name",
          "source": "src/Pdf-Toolbox-Document-Internal-Util.html#dictionaryType",
          "type": "function"
        },
        "index": {
          "description": "Get dictionary type name at key Type",
          "hierarchy": "Pdf Toolbox Document Internal Util",
          "module": "Pdf.Toolbox.Document.Internal.Util",
          "name": "dictionaryType",
          "normalized": "Dict-\u003ePdfE a Name",
          "package": "pdf-toolbox-document",
          "partial": "Type",
          "signature": "Dict-\u003ePdfE m Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Internal-Util.html#v:dictionaryType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck that the dictionary has the specified \"Type\" filed\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Document.Internal.Util",
          "name": "ensureType",
          "package": "pdf-toolbox-document",
          "signature": "Name -\u003e Dict -\u003e PdfE m ()",
          "source": "src/Pdf-Toolbox-Document-Internal-Util.html#ensureType",
          "type": "function"
        },
        "index": {
          "description": "Check that the dictionary has the specified Type filed",
          "hierarchy": "Pdf Toolbox Document Internal Util",
          "module": "Pdf.Toolbox.Document.Internal.Util",
          "name": "ensureType",
          "normalized": "Name-\u003eDict-\u003ePdfE a()",
          "package": "pdf-toolbox-document",
          "partial": "Type",
          "signature": "Name-\u003eDict-\u003ePdfE m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Internal-Util.html#v:ensureType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInterface to the underlying PDF file\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Pdf.Toolbox.Document.Monad",
          "name": "Monad",
          "package": "pdf-toolbox-document",
          "source": "src/Pdf-Toolbox-Document-Monad.html",
          "type": "module"
        },
        "index": {
          "description": "Interface to the underlying PDF file",
          "hierarchy": "Pdf Toolbox Document Monad",
          "module": "Pdf.Toolbox.Document.Monad",
          "name": "Monad",
          "package": "pdf-toolbox-document",
          "partial": "Monad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Monad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterface to the underlying PDF file\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Document.Monad",
          "name": "MonadPdf",
          "package": "pdf-toolbox-document",
          "source": "src/Pdf-Toolbox-Document-Monad.html#MonadPdf",
          "type": "class"
        },
        "index": {
          "description": "Interface to the underlying PDF file",
          "hierarchy": "Pdf Toolbox Document Monad",
          "module": "Pdf.Toolbox.Document.Monad",
          "name": "MonadPdf",
          "package": "pdf-toolbox-document",
          "partial": "Monad Pdf",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Monad.html#t:MonadPdf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecursively load indirect object\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Document.Monad",
          "name": "deref",
          "package": "pdf-toolbox-document",
          "signature": "Object a -\u003e PdfE m (Object ())",
          "source": "src/Pdf-Toolbox-Document-Monad.html#deref",
          "type": "function"
        },
        "index": {
          "description": "Recursively load indirect object",
          "hierarchy": "Pdf Toolbox Document Monad",
          "module": "Pdf.Toolbox.Document.Monad",
          "name": "deref",
          "normalized": "Object a-\u003ePdfE b(Object())",
          "package": "pdf-toolbox-document",
          "signature": "Object a-\u003ePdfE m(Object())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Monad.html#v:deref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCurrent decryptor\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Document.Monad",
          "name": "getDecryptor",
          "package": "pdf-toolbox-document",
          "signature": "PdfE m (Maybe Decryptor)",
          "source": "src/Pdf-Toolbox-Document-Monad.html#getDecryptor",
          "type": "method"
        },
        "index": {
          "description": "Current decryptor",
          "hierarchy": "Pdf Toolbox Document Monad",
          "module": "Pdf.Toolbox.Document.Monad",
          "name": "getDecryptor",
          "package": "pdf-toolbox-document",
          "partial": "Decryptor",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Monad.html#v:getDecryptor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet random access input stream for direct access to the PDF file\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Document.Monad",
          "name": "getRIS",
          "package": "pdf-toolbox-document",
          "signature": "PdfE m RIS",
          "source": "src/Pdf-Toolbox-Document-Monad.html#getRIS",
          "type": "method"
        },
        "index": {
          "description": "Get random access input stream for direct access to the PDF file",
          "hierarchy": "Pdf Toolbox Document Monad",
          "module": "Pdf.Toolbox.Document.Monad",
          "name": "getRIS",
          "package": "pdf-toolbox-document",
          "partial": "RIS",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Monad.html#v:getRIS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet all stream filters\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Document.Monad",
          "name": "getStreamFilters",
          "package": "pdf-toolbox-document",
          "signature": "PdfE m [StreamFilter]",
          "source": "src/Pdf-Toolbox-Document-Monad.html#getStreamFilters",
          "type": "method"
        },
        "index": {
          "description": "Get all stream filters",
          "hierarchy": "Pdf Toolbox Document Monad",
          "module": "Pdf.Toolbox.Document.Monad",
          "name": "getStreamFilters",
          "normalized": "PdfE a[StreamFilter]",
          "package": "pdf-toolbox-document",
          "partial": "Stream Filters",
          "signature": "PdfE m[StreamFilter]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Monad.html#v:getStreamFilters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efind object by it's reference\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Document.Monad",
          "name": "lookupObject",
          "package": "pdf-toolbox-document",
          "signature": "Ref -\u003e PdfE m (Object Int64)",
          "source": "src/Pdf-Toolbox-Document-Monad.html#lookupObject",
          "type": "method"
        },
        "index": {
          "description": "find object by it reference",
          "hierarchy": "Pdf Toolbox Document Monad",
          "module": "Pdf.Toolbox.Document.Monad",
          "name": "lookupObject",
          "normalized": "Ref-\u003ePdfE a(Object Int)",
          "package": "pdf-toolbox-document",
          "partial": "Object",
          "signature": "Ref-\u003ePdfE m(Object Int)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Monad.html#v:lookupObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edecoded stream content\n\u003c/p\u003e\u003cp\u003eNote: the \u003ccode\u003e\u003ca\u003eIS\u003c/a\u003e\u003c/code\u003e returned is valid only until the next \u003ccode\u003e\u003ca\u003elookupObject\u003c/a\u003e\u003c/code\u003e\n or any other operation, that requares seek\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Document.Monad",
          "name": "streamContent",
          "package": "pdf-toolbox-document",
          "signature": "Ref -\u003e Stream Int64 -\u003e PdfE m (Stream IS)",
          "source": "src/Pdf-Toolbox-Document-Monad.html#streamContent",
          "type": "method"
        },
        "index": {
          "description": "decoded stream content Note the IS returned is valid only until the next lookupObject or any other operation that requares seek",
          "hierarchy": "Pdf Toolbox Document Monad",
          "module": "Pdf.Toolbox.Document.Monad",
          "name": "streamContent",
          "normalized": "Ref-\u003eStream Int-\u003ePdfE a(Stream IS)",
          "package": "pdf-toolbox-document",
          "partial": "Content",
          "signature": "Ref-\u003eStream Int-\u003ePdfE m(Stream IS)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Monad.html#v:streamContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePDF document page\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Pdf.Toolbox.Document.Page",
          "name": "Page",
          "package": "pdf-toolbox-document",
          "source": "src/Pdf-Toolbox-Document-Page.html",
          "type": "module"
        },
        "index": {
          "description": "PDF document page",
          "hierarchy": "Pdf Toolbox Document Page",
          "module": "Pdf.Toolbox.Document.Page",
          "name": "Page",
          "package": "pdf-toolbox-document",
          "partial": "Page",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Page.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePdf document page\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Document.Page",
          "name": "Page",
          "package": "pdf-toolbox-document",
          "source": "src/Pdf-Toolbox-Document-Internal-Types.html#Page",
          "type": "data"
        },
        "index": {
          "description": "Pdf document page",
          "hierarchy": "Pdf Toolbox Document Page",
          "module": "Pdf.Toolbox.Document.Page",
          "name": "Page",
          "package": "pdf-toolbox-document",
          "partial": "Page",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Page.html#t:Page"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of references to page's content streams\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Document.Page",
          "name": "pageContents",
          "package": "pdf-toolbox-document",
          "signature": "Page -\u003e PdfE m [Ref]",
          "source": "src/Pdf-Toolbox-Document-Page.html#pageContents",
          "type": "function"
        },
        "index": {
          "description": "List of references to page content streams",
          "hierarchy": "Pdf Toolbox Document Page",
          "module": "Pdf.Toolbox.Document.Page",
          "name": "pageContents",
          "normalized": "Page-\u003ePdfE a[Ref]",
          "package": "pdf-toolbox-document",
          "partial": "Contents",
          "signature": "Page-\u003ePdfE m[Ref]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Page.html#v:pageContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract text from the page\n\u003c/p\u003e\u003cp\u003eRight now it doesn't even try to insert additional spaces or newlines,\n and returns text as it is embeded. But someday it will.\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Document.Page",
          "name": "pageExtractText",
          "package": "pdf-toolbox-document",
          "signature": "Page -\u003e PdfE m Text",
          "source": "src/Pdf-Toolbox-Document-Page.html#pageExtractText",
          "type": "function"
        },
        "index": {
          "description": "Extract text from the page Right now it doesn even try to insert additional spaces or newlines and returns text as it is embeded But someday it will",
          "hierarchy": "Pdf Toolbox Document Page",
          "module": "Pdf.Toolbox.Document.Page",
          "name": "pageExtractText",
          "normalized": "Page-\u003ePdfE a Text",
          "package": "pdf-toolbox-document",
          "partial": "Extract Text",
          "signature": "Page-\u003ePdfE m Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Page.html#v:pageExtractText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFont dictionaries for the page\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Document.Page",
          "name": "pageFontDicts",
          "package": "pdf-toolbox-document",
          "signature": "Page -\u003e PdfE m [(Name, FontDict)]",
          "source": "src/Pdf-Toolbox-Document-Page.html#pageFontDicts",
          "type": "function"
        },
        "index": {
          "description": "Font dictionaries for the page",
          "hierarchy": "Pdf Toolbox Document Page",
          "module": "Pdf.Toolbox.Document.Page",
          "name": "pageFontDicts",
          "normalized": "Page-\u003ePdfE a[(Name,FontDict)]",
          "package": "pdf-toolbox-document",
          "partial": "Font Dicts",
          "signature": "Page-\u003ePdfE m[(Name,FontDict)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Page.html#v:pageFontDicts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMedia box, inheritable\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Document.Page",
          "name": "pageMediaBox",
          "package": "pdf-toolbox-document",
          "signature": "Page -\u003e PdfE m (Rectangle Double)",
          "source": "src/Pdf-Toolbox-Document-Page.html#pageMediaBox",
          "type": "function"
        },
        "index": {
          "description": "Media box inheritable",
          "hierarchy": "Pdf Toolbox Document Page",
          "module": "Pdf.Toolbox.Document.Page",
          "name": "pageMediaBox",
          "normalized": "Page-\u003ePdfE a(Rectangle Double)",
          "package": "pdf-toolbox-document",
          "partial": "Media Box",
          "signature": "Page-\u003ePdfE m(Rectangle Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Page.html#v:pageMediaBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePage's parent node\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Document.Page",
          "name": "pageParentNode",
          "package": "pdf-toolbox-document",
          "signature": "Page -\u003e PdfE m PageNode",
          "source": "src/Pdf-Toolbox-Document-Page.html#pageParentNode",
          "type": "function"
        },
        "index": {
          "description": "Page parent node",
          "hierarchy": "Pdf Toolbox Document Page",
          "module": "Pdf.Toolbox.Document.Page",
          "name": "pageParentNode",
          "normalized": "Page-\u003ePdfE a PageNode",
          "package": "pdf-toolbox-document",
          "partial": "Parent Node",
          "signature": "Page-\u003ePdfE m PageNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Page.html#v:pageParentNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePage tree node\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Pdf.Toolbox.Document.PageNode",
          "name": "PageNode",
          "package": "pdf-toolbox-document",
          "source": "src/Pdf-Toolbox-Document-PageNode.html",
          "type": "module"
        },
        "index": {
          "description": "Page tree node",
          "hierarchy": "Pdf Toolbox Document PageNode",
          "module": "Pdf.Toolbox.Document.PageNode",
          "name": "PageNode",
          "package": "pdf-toolbox-document",
          "partial": "Page Node",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-PageNode.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePage tree node, contains pages or other nodes\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Document.PageNode",
          "name": "PageNode",
          "package": "pdf-toolbox-document",
          "source": "src/Pdf-Toolbox-Document-Internal-Types.html#PageNode",
          "type": "data"
        },
        "index": {
          "description": "Page tree node contains pages or other nodes",
          "hierarchy": "Pdf Toolbox Document PageNode",
          "module": "Pdf.Toolbox.Document.PageNode",
          "name": "PageNode",
          "package": "pdf-toolbox-document",
          "partial": "Page Node",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-PageNode.html#t:PageNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePage tree\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Document.PageNode",
          "name": "PageTree",
          "package": "pdf-toolbox-document",
          "source": "src/Pdf-Toolbox-Document-Internal-Types.html#PageTree",
          "type": "data"
        },
        "index": {
          "description": "Page tree",
          "hierarchy": "Pdf Toolbox Document PageNode",
          "module": "Pdf.Toolbox.Document.PageNode",
          "name": "PageTree",
          "package": "pdf-toolbox-document",
          "partial": "Page Tree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-PageNode.html#t:PageTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad page tree node by reference\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Document.PageNode",
          "name": "loadPageNode",
          "package": "pdf-toolbox-document",
          "signature": "Ref -\u003e PdfE m PageTree",
          "source": "src/Pdf-Toolbox-Document-PageNode.html#loadPageNode",
          "type": "function"
        },
        "index": {
          "description": "Load page tree node by reference",
          "hierarchy": "Pdf Toolbox Document PageNode",
          "module": "Pdf.Toolbox.Document.PageNode",
          "name": "loadPageNode",
          "normalized": "Ref-\u003ePdfE a PageTree",
          "package": "pdf-toolbox-document",
          "partial": "Page Node",
          "signature": "Ref-\u003ePdfE m PageTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-PageNode.html#v:loadPageNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReferencies to all kids\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Document.PageNode",
          "name": "pageNodeKids",
          "package": "pdf-toolbox-document",
          "signature": "PageNode -\u003e PdfE m [Ref]",
          "source": "src/Pdf-Toolbox-Document-PageNode.html#pageNodeKids",
          "type": "function"
        },
        "index": {
          "description": "Referencies to all kids",
          "hierarchy": "Pdf Toolbox Document PageNode",
          "module": "Pdf.Toolbox.Document.PageNode",
          "name": "pageNodeKids",
          "normalized": "PageNode-\u003ePdfE a[Ref]",
          "package": "pdf-toolbox-document",
          "partial": "Node Kids",
          "signature": "PageNode-\u003ePdfE m[Ref]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-PageNode.html#v:pageNodeKids"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTotal number of child leaf nodes, including deep children\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Document.PageNode",
          "name": "pageNodeNKids",
          "package": "pdf-toolbox-document",
          "signature": "PageNode -\u003e PdfE m Int",
          "source": "src/Pdf-Toolbox-Document-PageNode.html#pageNodeNKids",
          "type": "function"
        },
        "index": {
          "description": "Total number of child leaf nodes including deep children",
          "hierarchy": "Pdf Toolbox Document PageNode",
          "module": "Pdf.Toolbox.Document.PageNode",
          "name": "pageNodeNKids",
          "normalized": "PageNode-\u003ePdfE a Int",
          "package": "pdf-toolbox-document",
          "partial": "Node NKids",
          "signature": "PageNode-\u003ePdfE m Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-PageNode.html#v:pageNodeNKids"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind page by it's number\n\u003c/p\u003e\u003cp\u003eNote: it is not efficient for PDF files with a lot of pages,\n because it performs traversal through the page tree each time.\n Use \u003ccode\u003e\u003ca\u003epageNodeNKids\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epageNodeKids\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eloadPageNode\u003c/a\u003e\u003c/code\u003e for\n efficient traversal.\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Document.PageNode",
          "name": "pageNodePageByNum",
          "package": "pdf-toolbox-document",
          "signature": "PageNode -\u003e Int -\u003e PdfE m Page",
          "source": "src/Pdf-Toolbox-Document-PageNode.html#pageNodePageByNum",
          "type": "function"
        },
        "index": {
          "description": "Find page by it number Note it is not efficient for PDF files with lot of pages because it performs traversal through the page tree each time Use pageNodeNKids pageNodeKids and loadPageNode for efficient traversal",
          "hierarchy": "Pdf Toolbox Document PageNode",
          "module": "Pdf.Toolbox.Document.PageNode",
          "name": "pageNodePageByNum",
          "normalized": "PageNode-\u003eInt-\u003ePdfE a Page",
          "package": "pdf-toolbox-document",
          "partial": "Node Page By Num",
          "signature": "PageNode-\u003eInt-\u003ePdfE m Page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-PageNode.html#v:pageNodePageByNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParent page node\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Document.PageNode",
          "name": "pageNodeParent",
          "package": "pdf-toolbox-document",
          "signature": "PageNode -\u003e PdfE m (Maybe PageNode)",
          "source": "src/Pdf-Toolbox-Document-PageNode.html#pageNodeParent",
          "type": "function"
        },
        "index": {
          "description": "Parent page node",
          "hierarchy": "Pdf Toolbox Document PageNode",
          "module": "Pdf.Toolbox.Document.PageNode",
          "name": "pageNodeParent",
          "normalized": "PageNode-\u003ePdfE a(Maybe PageNode)",
          "package": "pdf-toolbox-document",
          "partial": "Node Parent",
          "signature": "PageNode-\u003ePdfE m(Maybe PageNode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-PageNode.html#v:pageNodeParent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic implementation of pdf monad\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Pdf.Toolbox.Document.Pdf",
          "name": "Pdf",
          "package": "pdf-toolbox-document",
          "source": "src/Pdf-Toolbox-Document-Pdf.html",
          "type": "module"
        },
        "index": {
          "description": "Basic implementation of pdf monad",
          "hierarchy": "Pdf Toolbox Document Pdf",
          "module": "Pdf.Toolbox.Document.Pdf",
          "name": "Pdf",
          "package": "pdf-toolbox-document",
          "partial": "Pdf",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Pdf.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Document.Pdf",
          "name": "MonadIO",
          "package": "pdf-toolbox-document",
          "type": "class"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Document Pdf",
          "module": "Pdf.Toolbox.Document.Pdf",
          "name": "MonadIO",
          "package": "pdf-toolbox-document",
          "partial": "Monad IO",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Pdf.html#t:MonadIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenient type alias\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Document.Pdf",
          "name": "Pdf",
          "package": "pdf-toolbox-document",
          "source": "src/Pdf-Toolbox-Document-Pdf.html#Pdf",
          "type": "type"
        },
        "index": {
          "description": "Convenient type alias",
          "hierarchy": "Pdf Toolbox Document Pdf",
          "module": "Pdf.Toolbox.Document.Pdf",
          "name": "Pdf",
          "package": "pdf-toolbox-document",
          "partial": "Pdf",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Pdf.html#t:Pdf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBasic implementation of pdf monad\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Document.Pdf",
          "name": "Pdf'",
          "package": "pdf-toolbox-document",
          "source": "src/Pdf-Toolbox-Document-Pdf.html#Pdf%27",
          "type": "data"
        },
        "index": {
          "description": "Basic implementation of pdf monad",
          "hierarchy": "Pdf Toolbox Document Pdf",
          "module": "Pdf.Toolbox.Document.Pdf",
          "name": "Pdf'",
          "package": "pdf-toolbox-document",
          "partial": "Pdf'",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Pdf.html#t:Pdf-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecrypt PDF object using user password is set\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Document.Pdf",
          "name": "decrypt",
          "package": "pdf-toolbox-document",
          "signature": "Ref -\u003e Object a -\u003e Pdf m (Object a)",
          "source": "src/Pdf-Toolbox-Document-Pdf.html#decrypt",
          "type": "function"
        },
        "index": {
          "description": "Decrypt PDF object using user password is set",
          "hierarchy": "Pdf Toolbox Document Pdf",
          "module": "Pdf.Toolbox.Document.Pdf",
          "name": "decrypt",
          "normalized": "Ref-\u003eObject a-\u003ePdf b(Object a)",
          "package": "pdf-toolbox-document",
          "signature": "Ref-\u003eObject a-\u003ePdf m(Object a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Pdf.html#v:decrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet PDF document\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Document.Pdf",
          "name": "document",
          "package": "pdf-toolbox-document",
          "signature": "Pdf m Document",
          "source": "src/Pdf-Toolbox-Document-Pdf.html#document",
          "type": "function"
        },
        "index": {
          "description": "Get PDF document",
          "hierarchy": "Pdf Toolbox Document Pdf",
          "module": "Pdf.Toolbox.Document.Pdf",
          "name": "document",
          "package": "pdf-toolbox-document",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Pdf.html#v:document"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove all objects from cache\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Document.Pdf",
          "name": "flushObjectCache",
          "package": "pdf-toolbox-document",
          "signature": "Pdf m ()",
          "source": "src/Pdf-Toolbox-Document-Pdf.html#flushObjectCache",
          "type": "function"
        },
        "index": {
          "description": "Remove all objects from cache",
          "hierarchy": "Pdf Toolbox Document Pdf",
          "module": "Pdf.Toolbox.Document.Pdf",
          "name": "flushObjectCache",
          "normalized": "Pdf a()",
          "package": "pdf-toolbox-document",
          "partial": "Object Cache",
          "signature": "Pdf m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Pdf.html#v:flushObjectCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether the PDF document it encrypted\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Document.Pdf",
          "name": "isEncrypted",
          "package": "pdf-toolbox-document",
          "signature": "Pdf m Bool",
          "source": "src/Pdf-Toolbox-Document-Pdf.html#isEncrypted",
          "type": "function"
        },
        "index": {
          "description": "Whether the PDF document it encrypted",
          "hierarchy": "Pdf Toolbox Document Pdf",
          "module": "Pdf.Toolbox.Document.Pdf",
          "name": "isEncrypted",
          "package": "pdf-toolbox-document",
          "partial": "Encrypted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Pdf.html#v:isEncrypted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll stream filters implemented by the toolbox\n\u003c/p\u003e\u003cp\u003eRight now it contains only FlateDecode filter\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Document.Pdf",
          "name": "knownFilters",
          "package": "pdf-toolbox-document",
          "signature": "[StreamFilter]",
          "type": "function"
        },
        "index": {
          "description": "All stream filters implemented by the toolbox Right now it contains only FlateDecode filter",
          "hierarchy": "Pdf Toolbox Document Pdf",
          "module": "Pdf.Toolbox.Document.Pdf",
          "name": "knownFilters",
          "normalized": "[StreamFilter]",
          "package": "pdf-toolbox-document",
          "partial": "Filters",
          "signature": "[StreamFilter]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Pdf.html#v:knownFilters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Document.Pdf",
          "name": "liftIO",
          "package": "pdf-toolbox-document",
          "signature": "IO a -\u003e m a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Document Pdf",
          "module": "Pdf.Toolbox.Document.Pdf",
          "name": "liftIO",
          "normalized": "IO a-\u003eb a",
          "package": "pdf-toolbox-document",
          "partial": "IO",
          "signature": "IO a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Pdf.html#v:liftIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute PDF action with \u003ccode\u003e\u003ca\u003eRIS\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Document.Pdf",
          "name": "runPdf",
          "package": "pdf-toolbox-document",
          "signature": "RIS -\u003e [StreamFilter] -\u003e Pdf m a -\u003e m (Either PdfError a)",
          "source": "src/Pdf-Toolbox-Document-Pdf.html#runPdf",
          "type": "function"
        },
        "index": {
          "description": "Execute PDF action with RIS",
          "hierarchy": "Pdf Toolbox Document Pdf",
          "module": "Pdf.Toolbox.Document.Pdf",
          "name": "runPdf",
          "normalized": "RIS-\u003e[StreamFilter]-\u003ePdf a b-\u003ea(Either PdfError b)",
          "package": "pdf-toolbox-document",
          "partial": "Pdf",
          "signature": "RIS-\u003e[StreamFilter]-\u003ePdf m a-\u003em(Either PdfError a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Pdf.html#v:runPdf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute PDF action with \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Document.Pdf",
          "name": "runPdfWithHandle",
          "package": "pdf-toolbox-document",
          "signature": "Handle -\u003e [StreamFilter] -\u003e Pdf m a -\u003e m (Either PdfError a)",
          "source": "src/Pdf-Toolbox-Document-Pdf.html#runPdfWithHandle",
          "type": "function"
        },
        "index": {
          "description": "Execute PDF action with Handle",
          "hierarchy": "Pdf Toolbox Document Pdf",
          "module": "Pdf.Toolbox.Document.Pdf",
          "name": "runPdfWithHandle",
          "normalized": "Handle-\u003e[StreamFilter]-\u003ePdf a b-\u003ea(Either PdfError b)",
          "package": "pdf-toolbox-document",
          "partial": "Pdf With Handle",
          "signature": "Handle-\u003e[StreamFilter]-\u003ePdf m a-\u003em(Either PdfError a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Pdf.html#v:runPdfWithHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the password to be user for decryption\n\u003c/p\u003e\u003cp\u003eReturns False when the password is wrong\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Document.Pdf",
          "name": "setUserPassword",
          "package": "pdf-toolbox-document",
          "signature": "ByteString -\u003e Pdf m Bool",
          "source": "src/Pdf-Toolbox-Document-Pdf.html#setUserPassword",
          "type": "function"
        },
        "index": {
          "description": "Set the password to be user for decryption Returns False when the password is wrong",
          "hierarchy": "Pdf Toolbox Document Pdf",
          "module": "Pdf.Toolbox.Document.Pdf",
          "name": "setUserPassword",
          "normalized": "ByteString-\u003ePdf a Bool",
          "package": "pdf-toolbox-document",
          "partial": "User Password",
          "signature": "ByteString-\u003ePdf m Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Pdf.html#v:setUserPassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform action without adding objects to cache.\n Note: the existent cache is not flushed, and is used\n within the action\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Document.Pdf",
          "name": "withoutObjectCache",
          "package": "pdf-toolbox-document",
          "signature": "Pdf m () -\u003e Pdf m ()",
          "source": "src/Pdf-Toolbox-Document-Pdf.html#withoutObjectCache",
          "type": "function"
        },
        "index": {
          "description": "Perform action without adding objects to cache Note the existent cache is not flushed and is used within the action",
          "hierarchy": "Pdf Toolbox Document Pdf",
          "module": "Pdf.Toolbox.Document.Pdf",
          "name": "withoutObjectCache",
          "normalized": "Pdf a()-\u003ePdf a()",
          "package": "pdf-toolbox-document",
          "partial": "Object Cache",
          "signature": "Pdf m()-\u003ePdf m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Pdf.html#v:withoutObjectCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVarious types\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Pdf.Toolbox.Document.Types",
          "name": "Types",
          "package": "pdf-toolbox-document",
          "source": "src/Pdf-Toolbox-Document-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Various types",
          "hierarchy": "Pdf Toolbox Document Types",
          "module": "Pdf.Toolbox.Document.Types",
          "name": "Types",
          "package": "pdf-toolbox-document",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRectangle\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Document.Types",
          "name": "Rectangle",
          "package": "pdf-toolbox-document",
          "source": "src/Pdf-Toolbox-Document-Types.html#Rectangle",
          "type": "data"
        },
        "index": {
          "description": "Rectangle",
          "hierarchy": "Pdf Toolbox Document Types",
          "module": "Pdf.Toolbox.Document.Types",
          "name": "Rectangle",
          "package": "pdf-toolbox-document",
          "partial": "Rectangle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Types.html#t:Rectangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Document.Types",
          "name": "Rectangle",
          "package": "pdf-toolbox-document",
          "signature": "Rectangle a a a a",
          "source": "src/Pdf-Toolbox-Document-Types.html#Rectangle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Document Types",
          "module": "Pdf.Toolbox.Document.Types",
          "name": "Rectangle",
          "package": "pdf-toolbox-document",
          "partial": "Rectangle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Types.html#v:Rectangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate rectangle form an array of 4 numbers\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Document.Types",
          "name": "rectangleFromArray",
          "package": "pdf-toolbox-document",
          "signature": "Array -\u003e PdfE m (Rectangle Double)",
          "source": "src/Pdf-Toolbox-Document-Types.html#rectangleFromArray",
          "type": "function"
        },
        "index": {
          "description": "Create rectangle form an array of numbers",
          "hierarchy": "Pdf Toolbox Document Types",
          "module": "Pdf.Toolbox.Document.Types",
          "name": "rectangleFromArray",
          "normalized": "Array-\u003ePdfE a(Rectangle Double)",
          "package": "pdf-toolbox-document",
          "partial": "From Array",
          "signature": "Array-\u003ePdfE m(Rectangle Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document-Types.html#v:rectangleFromArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMid level utils for processing PDF file\n\u003c/p\u003e\u003cp\u003eBasic example how to get number of pages in document\n\u003c/p\u003e\u003cpre\u003e\n  withBinaryFile \"input.pdf\" ReadMode $ handle -\u003e\n    \u003ccode\u003e\u003ca\u003erunPdfWithHandle\u003c/a\u003e\u003c/code\u003e handle \u003ccode\u003e\u003ca\u003eknownFilters\u003c/a\u003e\u003c/code\u003e $ do\n      pdf \u003c- \u003ccode\u003e\u003ca\u003edocument\u003c/a\u003e\u003c/code\u003e\n      catalog \u003c- \u003ccode\u003e\u003ca\u003edocumentCatalog\u003c/a\u003e\u003c/code\u003e pdf\n      rootNode \u003c- \u003ccode\u003e\u003ca\u003ecatalogPageNode\u003c/a\u003e\u003c/code\u003e catalog\n      cout \u003c- \u003ccode\u003e\u003ca\u003epageNodeNKids\u003c/a\u003e\u003c/code\u003e rootNode\n      liftIO $ print count\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Pdf.Toolbox.Document",
          "name": "Document",
          "package": "pdf-toolbox-document",
          "source": "src/Pdf-Toolbox-Document.html",
          "type": "module"
        },
        "index": {
          "description": "Mid level utils for processing PDF file Basic example how to get number of pages in document withBinaryFile input.pdf ReadMode handle runPdfWithHandle handle knownFilters do pdf document catalog documentCatalog pdf rootNode catalogPageNode catalog cout pageNodeNKids rootNode liftIO print count",
          "hierarchy": "Pdf Toolbox Document",
          "module": "Pdf.Toolbox.Document",
          "name": "Document",
          "package": "pdf-toolbox-document",
          "partial": "Document",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-document/docs/Pdf-Toolbox-Document.html#"
      }
    }
  ]
]