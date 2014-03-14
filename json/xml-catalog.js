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
        "word": "xml-catalog"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUsed for loading a catalog file, caching DTDs and applying DTDs to\n documents.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.Catalog",
          "name": "Catalog",
          "package": "xml-catalog",
          "source": "src/Text-XML-Catalog.html",
          "type": "module"
        },
        "index": {
          "description": "Used for loading catalog file caching DTDs and applying DTDs to documents",
          "hierarchy": "Text XML Catalog",
          "module": "Text.XML.Catalog",
          "name": "Catalog",
          "package": "xml-catalog",
          "partial": "Catalog",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xml-catalog/docs/Text-XML-Catalog.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn XML catalog, mapping public and system identifiers to filepaths.\n\u003c/p\u003e",
          "module": "Text.XML.Catalog",
          "name": "Catalog",
          "package": "xml-catalog",
          "source": "src/Text-XML-Catalog.html#Catalog",
          "type": "type"
        },
        "index": {
          "description": "An XML catalog mapping public and system identifiers to filepaths",
          "hierarchy": "Text XML Catalog",
          "module": "Text.XML.Catalog",
          "name": "Catalog",
          "package": "xml-catalog",
          "partial": "Catalog",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/xml-catalog/docs/Text-XML-Catalog.html#t:Catalog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEither a public or system identifier.\n\u003c/p\u003e",
          "module": "Text.XML.Catalog",
          "name": "PubSys",
          "package": "xml-catalog",
          "source": "src/Text-XML-Catalog.html#PubSys",
          "type": "data"
        },
        "index": {
          "description": "Either public or system identifier",
          "hierarchy": "Text XML Catalog",
          "module": "Text.XML.Catalog",
          "name": "PubSys",
          "package": "xml-catalog",
          "partial": "Pub Sys",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml-catalog/docs/Text-XML-Catalog.html#t:PubSys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Catalog",
          "name": "Public",
          "package": "xml-catalog",
          "signature": "Public Text",
          "source": "src/Text-XML-Catalog.html#PubSys",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Catalog",
          "module": "Text.XML.Catalog",
          "name": "Public",
          "package": "xml-catalog",
          "partial": "Public",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-catalog/docs/Text-XML-Catalog.html#v:Public"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Catalog",
          "name": "System",
          "package": "xml-catalog",
          "signature": "System Text",
          "source": "src/Text-XML-Catalog.html#PubSys",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Catalog",
          "module": "Text.XML.Catalog",
          "name": "System",
          "package": "xml-catalog",
          "partial": "System",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-catalog/docs/Text-XML-Catalog.html#v:System"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a \u003ccode\u003e\u003ca\u003eCatalog\u003c/a\u003e\u003c/code\u003e from the given path.\n\u003c/p\u003e",
          "module": "Text.XML.Catalog",
          "name": "loadCatalog",
          "package": "xml-catalog",
          "signature": "SchemeMap -\u003e URI -\u003e m Catalog",
          "source": "src/Text-XML-Catalog.html#loadCatalog",
          "type": "function"
        },
        "index": {
          "description": "Load Catalog from the given path",
          "hierarchy": "Text XML Catalog",
          "module": "Text.XML.Catalog",
          "name": "loadCatalog",
          "normalized": "SchemeMap-\u003eURI-\u003ea Catalog",
          "package": "xml-catalog",
          "partial": "Catalog",
          "signature": "SchemeMap-\u003eURI-\u003em Catalog",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-catalog/docs/Text-XML-Catalog.html#v:loadCatalog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Catalog",
          "name": "resolveURI",
          "package": "xml-catalog",
          "signature": "Catalog-\u003e Maybe URI-\u003e ExternalID-\u003e Maybe URI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Catalog",
          "module": "Text.XML.Catalog",
          "name": "resolveURI",
          "normalized": "Catalog-\u003eMaybe URI-\u003eExternalID-\u003eMaybe URI",
          "package": "xml-catalog",
          "partial": "URI",
          "signature": "Catalog-\u003eMaybe URI-\u003eExternalID-\u003eMaybe URI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-catalog/docs/Text-XML-Catalog.html#v:resolveURI"
      }
    }
  ]
]