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
        "word": "condor"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eContains basic data structures uses  by other modules.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Condor.Commons.Document",
          "name": "Document",
          "package": "condor",
          "source": "src/Condor-Commons-Document.html",
          "type": "module"
        },
        "index": {
          "description": "Contains basic data structures uses by other modules",
          "hierarchy": "Condor Commons Document",
          "module": "Condor.Commons.Document",
          "name": "Document",
          "package": "condor",
          "partial": "Document",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/condor/docs/Condor-Commons-Document.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDocument name\n\u003c/p\u003e",
          "module": "Condor.Commons.Document",
          "name": "DocName",
          "package": "condor",
          "source": "src/Condor-Commons-Document.html#DocName",
          "type": "type"
        },
        "index": {
          "description": "Document name",
          "hierarchy": "Condor Commons Document",
          "module": "Condor.Commons.Document",
          "name": "DocName",
          "package": "condor",
          "partial": "Doc Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/condor/docs/Condor-Commons-Document.html#t:DocName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDocument with name and contents \n\u003c/p\u003e",
          "module": "Condor.Commons.Document",
          "name": "Document",
          "package": "condor",
          "source": "src/Condor-Commons-Document.html#Document",
          "type": "data"
        },
        "index": {
          "description": "Document with name and contents",
          "hierarchy": "Condor Commons Document",
          "module": "Condor.Commons.Document",
          "name": "Document",
          "package": "condor",
          "partial": "Document",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/condor/docs/Condor-Commons-Document.html#t:Document"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Condor.Commons.Document",
          "name": "Document",
          "package": "condor",
          "signature": "Document DocName [Field]",
          "source": "src/Condor-Commons-Document.html#Document",
          "type": "function"
        },
        "index": {
          "hierarchy": "Condor Commons Document",
          "module": "Condor.Commons.Document",
          "name": "Document",
          "normalized": "Document DocName[Field]",
          "package": "condor",
          "partial": "Document",
          "signature": "Document DocName[Field]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/condor/docs/Condor-Commons-Document.html#v:Document"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate simple document with name and single field content.\n\u003c/p\u003e",
          "module": "Condor.Commons.Document",
          "name": "docFromStrings",
          "package": "condor",
          "signature": "String -\u003e String -\u003e Document",
          "source": "src/Condor-Commons-Document.html#docFromStrings",
          "type": "function"
        },
        "index": {
          "description": "Create simple document with name and single field content",
          "hierarchy": "Condor Commons Document",
          "module": "Condor.Commons.Document",
          "name": "docFromStrings",
          "normalized": "String-\u003eString-\u003eDocument",
          "package": "condor",
          "partial": "From Strings",
          "signature": "String-\u003eString-\u003eDocument",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/condor/docs/Condor-Commons-Document.html#v:docFromStrings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet document name\n\u003c/p\u003e",
          "module": "Condor.Commons.Document",
          "name": "docName",
          "package": "condor",
          "signature": "Document -\u003e Text",
          "source": "src/Condor-Commons-Document.html#docName",
          "type": "function"
        },
        "index": {
          "description": "Get document name",
          "hierarchy": "Condor Commons Document",
          "module": "Condor.Commons.Document",
          "name": "docName",
          "normalized": "Document-\u003eText",
          "package": "condor",
          "partial": "Name",
          "signature": "Document-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/condor/docs/Condor-Commons-Document.html#v:docName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet text from all fields\n\u003c/p\u003e",
          "module": "Condor.Commons.Document",
          "name": "docText",
          "package": "condor",
          "signature": "Document -\u003e Text",
          "source": "src/Condor-Commons-Document.html#docText",
          "type": "function"
        },
        "index": {
          "description": "Get text from all fields",
          "hierarchy": "Condor Commons Document",
          "module": "Condor.Commons.Document",
          "name": "docText",
          "normalized": "Document-\u003eText",
          "package": "condor",
          "partial": "Text",
          "signature": "Document-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/condor/docs/Condor-Commons-Document.html#v:docText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eReader for text files. Strict version.\nUses bang patters to force hGetContents to read the whole file.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Condor.Reader.Text",
          "name": "Text",
          "package": "condor",
          "source": "src/Condor-Reader-Text.html",
          "type": "module"
        },
        "index": {
          "description": "Reader for text files Strict version Uses bang patters to force hGetContents to read the whole file",
          "hierarchy": "Condor Reader Text",
          "module": "Condor.Reader.Text",
          "name": "Text",
          "package": "condor",
          "partial": "Text",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/condor/docs/Condor-Reader-Text.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eread text as UTF8 and return as document\n\u003c/p\u003e",
          "module": "Condor.Reader.Text",
          "name": "readDocument",
          "package": "condor",
          "signature": "FilePath -\u003e IO Document",
          "source": "src/Condor-Reader-Text.html#readDocument",
          "type": "function"
        },
        "index": {
          "description": "read text as UTF8 and return as document",
          "hierarchy": "Condor Reader Text",
          "module": "Condor.Reader.Text",
          "name": "readDocument",
          "normalized": "FilePath-\u003eIO Document",
          "package": "condor",
          "partial": "Document",
          "signature": "FilePath-\u003eIO Document",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/condor/docs/Condor-Reader-Text.html#v:readDocument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMemory based index.\nThis module contains functions which create, update and search index. \nDefault implementation uses algorithms for english language (stemming, stop words etc.)\n\u003c/p\u003e\u003cp\u003eFunctions in this module (for performance reasons) are based on unicode strings from module Data.Text.\n\u003c/p\u003e\u003cp\u003eBasic usage:\n\u003c/p\u003e\u003cpre\u003e import Condor.Search.Index (addDocument, search)\n import Condor.Commons.Document (docFromStrings)\n\n let idx = addDocument emptyIndex $ docFromStrings \"My document 1\" \"This is a document content.\"\n search idx \"content\"\n [\"My document 1\"]\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Condor.Search.Index",
          "name": "Index",
          "package": "condor",
          "source": "src/Condor-Search-Index.html",
          "type": "module"
        },
        "index": {
          "description": "Memory based index This module contains functions which create update and search index Default implementation uses algorithms for english language stemming stop words etc Functions in this module for performance reasons are based on unicode strings from module Data.Text Basic usage import Condor.Search.Index addDocument search import Condor.Commons.Document docFromStrings let idx addDocument emptyIndex docFromStrings My document This is document content search idx content My document",
          "hierarchy": "Condor Search Index",
          "module": "Condor.Search.Index",
          "name": "Index",
          "package": "condor",
          "partial": "Index",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/condor/docs/Condor-Search-Index.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInverted index\n\u003c/p\u003e",
          "module": "Condor.Search.Index",
          "name": "Index",
          "package": "condor",
          "source": "src/Condor-Search-Index.html#Index",
          "type": "data"
        },
        "index": {
          "description": "Inverted index",
          "hierarchy": "Condor Search Index",
          "module": "Condor.Search.Index",
          "name": "Index",
          "package": "condor",
          "partial": "Index",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/condor/docs/Condor-Search-Index.html#t:Index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSingle term. Could be normalized word\n\u003c/p\u003e",
          "module": "Condor.Search.Index",
          "name": "Term",
          "package": "condor",
          "source": "src/Condor-Search-Index.html#Term",
          "type": "type"
        },
        "index": {
          "description": "Single term Could be normalized word",
          "hierarchy": "Condor Search Index",
          "module": "Condor.Search.Index",
          "name": "Term",
          "package": "condor",
          "partial": "Term",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/condor/docs/Condor-Search-Index.html#t:Term"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd document to the index.\n This function should be used if document content should be splitted into terms\n with custom algorithms.\n\u003c/p\u003e",
          "module": "Condor.Search.Index",
          "name": "addDocTerms",
          "package": "condor",
          "signature": "DocName -\u003e [Term] -\u003e Index -\u003e Index",
          "source": "src/Condor-Search-Index.html#addDocTerms",
          "type": "function"
        },
        "index": {
          "description": "Add document to the index This function should be used if document content should be splitted into terms with custom algorithms",
          "hierarchy": "Condor Search Index",
          "module": "Condor.Search.Index",
          "name": "addDocTerms",
          "normalized": "DocName-\u003e[Term]-\u003eIndex-\u003eIndex",
          "package": "condor",
          "partial": "Doc Terms",
          "signature": "DocName-\u003e[Term]-\u003eIndex-\u003eIndex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/condor/docs/Condor-Search-Index.html#v:addDocTerms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd document to the index.\n This function uses algorithms for english language to split document content\n into index terms.\n\u003c/p\u003e",
          "module": "Condor.Search.Index",
          "name": "addDocument",
          "package": "condor",
          "signature": "Document -\u003e Index -\u003e Index",
          "source": "src/Condor-Search-Index.html#addDocument",
          "type": "function"
        },
        "index": {
          "description": "Add document to the index This function uses algorithms for english language to split document content into index terms",
          "hierarchy": "Condor Search Index",
          "module": "Condor.Search.Index",
          "name": "addDocument",
          "normalized": "Document-\u003eIndex-\u003eIndex",
          "package": "condor",
          "partial": "Document",
          "signature": "Document-\u003eIndex-\u003eIndex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/condor/docs/Condor-Search-Index.html#v:addDocument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the number of documents in the index\n\u003c/p\u003e",
          "module": "Condor.Search.Index",
          "name": "docCount",
          "package": "condor",
          "signature": "Index -\u003e Int",
          "source": "src/Condor-Search-Index.html#docCount",
          "type": "function"
        },
        "index": {
          "description": "Get the number of documents in the index",
          "hierarchy": "Condor Search Index",
          "module": "Condor.Search.Index",
          "name": "docCount",
          "normalized": "Index-\u003eInt",
          "package": "condor",
          "partial": "Count",
          "signature": "Index-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/condor/docs/Condor-Search-Index.html#v:docCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate empty index. \n This index will be configured for english language.\n\u003c/p\u003e",
          "module": "Condor.Search.Index",
          "name": "emptyIndex",
          "package": "condor",
          "signature": "Index",
          "source": "src/Condor-Search-Index.html#emptyIndex",
          "type": "function"
        },
        "index": {
          "description": "Create empty index This index will be configured for english language",
          "hierarchy": "Condor Search Index",
          "module": "Condor.Search.Index",
          "name": "emptyIndex",
          "package": "condor",
          "partial": "Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/condor/docs/Condor-Search-Index.html#v:emptyIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearch terms given as single string in the index\n This function uses algorithms for english language to split query into tokens.\n\u003c/p\u003e",
          "module": "Condor.Search.Index",
          "name": "search",
          "package": "condor",
          "signature": "Index -\u003e Text -\u003e [DocName]",
          "source": "src/Condor-Search-Index.html#search",
          "type": "function"
        },
        "index": {
          "description": "Search terms given as single string in the index This function uses algorithms for english language to split query into tokens",
          "hierarchy": "Condor Search Index",
          "module": "Condor.Search.Index",
          "name": "search",
          "normalized": "Index-\u003eText-\u003e[DocName]",
          "package": "condor",
          "signature": "Index-\u003eText-\u003e[DocName]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/condor/docs/Condor-Search-Index.html#v:search"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearch terms given as array in the index.\n This function should be used if query should be splitted into terms\n with custom algorithms\n\u003c/p\u003e",
          "module": "Condor.Search.Index",
          "name": "searchTerms",
          "package": "condor",
          "signature": "Index -\u003e [Term] -\u003e [DocName]",
          "source": "src/Condor-Search-Index.html#searchTerms",
          "type": "function"
        },
        "index": {
          "description": "Search terms given as array in the index This function should be used if query should be splitted into terms with custom algorithms",
          "hierarchy": "Condor Search Index",
          "module": "Condor.Search.Index",
          "name": "searchTerms",
          "normalized": "Index-\u003e[Term]-\u003e[DocName]",
          "package": "condor",
          "partial": "Terms",
          "signature": "Index-\u003e[Term]-\u003e[DocName]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/condor/docs/Condor-Search-Index.html#v:searchTerms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the number of terms in the index\n\u003c/p\u003e",
          "module": "Condor.Search.Index",
          "name": "termCount",
          "package": "condor",
          "signature": "Index -\u003e Int",
          "source": "src/Condor-Search-Index.html#termCount",
          "type": "function"
        },
        "index": {
          "description": "Get the number of terms in the index",
          "hierarchy": "Condor Search Index",
          "module": "Condor.Search.Index",
          "name": "termCount",
          "normalized": "Index-\u003eInt",
          "package": "condor",
          "partial": "Count",
          "signature": "Index-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/condor/docs/Condor-Search-Index.html#v:termCount"
      }
    }
  ]
]