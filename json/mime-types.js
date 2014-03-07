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
        "word": "mime-types"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Mime",
          "name": "Mime",
          "package": "mime-types",
          "source": "src/Network-Mime.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Mime",
          "module": "Network.Mime",
          "name": "Mime",
          "package": "mime-types",
          "partial": "Mime",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mime-types/docs/Network-Mime.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePath extension. May include multiple components, e.g. tar.gz\n\u003c/p\u003e",
          "module": "Network.Mime",
          "name": "Extension",
          "package": "mime-types",
          "source": "src/Network-Mime.html#Extension",
          "type": "type"
        },
        "index": {
          "description": "Path extension May include multiple components e.g tar.gz",
          "hierarchy": "Network Mime",
          "module": "Network.Mime",
          "name": "Extension",
          "package": "mime-types",
          "partial": "Extension",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/mime-types/docs/Network-Mime.html#t:Extension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe filename component of a filepath, leaving off the directory but\n keeping all extensions.\n\u003c/p\u003e",
          "module": "Network.Mime",
          "name": "FileName",
          "package": "mime-types",
          "source": "src/Network-Mime.html#FileName",
          "type": "type"
        },
        "index": {
          "description": "The filename component of filepath leaving off the directory but keeping all extensions",
          "hierarchy": "Network Mime",
          "module": "Network.Mime",
          "name": "FileName",
          "package": "mime-types",
          "partial": "File Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/mime-types/docs/Network-Mime.html#t:FileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaps extensions to mime types.\n\u003c/p\u003e",
          "module": "Network.Mime",
          "name": "MimeMap",
          "package": "mime-types",
          "source": "src/Network-Mime.html#MimeMap",
          "type": "type"
        },
        "index": {
          "description": "Maps extensions to mime types",
          "hierarchy": "Network Mime",
          "module": "Network.Mime",
          "name": "MimeMap",
          "package": "mime-types",
          "partial": "Mime Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/mime-types/docs/Network-Mime.html#t:MimeMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndividual mime type for be served over the wire.\n\u003c/p\u003e",
          "module": "Network.Mime",
          "name": "MimeType",
          "package": "mime-types",
          "source": "src/Network-Mime.html#MimeType",
          "type": "type"
        },
        "index": {
          "description": "Individual mime type for be served over the wire",
          "hierarchy": "Network Mime",
          "module": "Network.Mime",
          "name": "MimeType",
          "package": "mime-types",
          "partial": "Mime Type",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/mime-types/docs/Network-Mime.html#t:MimeType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003emimeByExt\u003c/code\u003e applied to \u003ccode\u003edefaultMimeType\u003c/code\u003e and \u003ccode\u003edefaultMimeMap\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Mime",
          "name": "defaultMimeLookup",
          "package": "mime-types",
          "signature": "FileName -\u003e MimeType",
          "source": "src/Network-Mime.html#defaultMimeLookup",
          "type": "function"
        },
        "index": {
          "description": "mimeByExt applied to defaultMimeType and defaultMimeMap",
          "hierarchy": "Network Mime",
          "module": "Network.Mime",
          "name": "defaultMimeLookup",
          "normalized": "FileName-\u003eMimeType",
          "package": "mime-types",
          "partial": "Mime Lookup",
          "signature": "FileName-\u003eMimeType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime-types/docs/Network-Mime.html#v:defaultMimeLookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA default mapping from filename extension to mime type.\n\u003c/p\u003e\u003cp\u003eGenerated from the Apache and nginx mime.types files.\n\u003c/p\u003e",
          "module": "Network.Mime",
          "name": "defaultMimeMap",
          "package": "mime-types",
          "signature": "MimeMap",
          "source": "src/Network-Mime.html#defaultMimeMap",
          "type": "function"
        },
        "index": {
          "description": "default mapping from filename extension to mime type Generated from the Apache and nginx mime.types files",
          "hierarchy": "Network Mime",
          "module": "Network.Mime",
          "name": "defaultMimeMap",
          "package": "mime-types",
          "partial": "Mime Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime-types/docs/Network-Mime.html#v:defaultMimeMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default fallback mime type \"application/octet-stream\".\n\u003c/p\u003e",
          "module": "Network.Mime",
          "name": "defaultMimeType",
          "package": "mime-types",
          "signature": "MimeType",
          "source": "src/Network-Mime.html#defaultMimeType",
          "type": "function"
        },
        "index": {
          "description": "The default fallback mime type application octet-stream",
          "hierarchy": "Network Mime",
          "module": "Network.Mime",
          "name": "defaultMimeType",
          "package": "mime-types",
          "partial": "Mime Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime-types/docs/Network-Mime.html#v:defaultMimeType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of all of the file name extensions from a piece.\n\u003c/p\u003e\u003cpre\u003e pieceExtensions \"foo.tar.gz\" == [\"tar.gz\", \"gz\"]\n\u003c/pre\u003e",
          "module": "Network.Mime",
          "name": "fileNameExtensions",
          "package": "mime-types",
          "signature": "FileName -\u003e [Extension]",
          "source": "src/Network-Mime.html#fileNameExtensions",
          "type": "function"
        },
        "index": {
          "description": "Get list of all of the file name extensions from piece pieceExtensions foo.tar.gz tar.gz gz",
          "hierarchy": "Network Mime",
          "module": "Network.Mime",
          "name": "fileNameExtensions",
          "normalized": "FileName-\u003e[Extension]",
          "package": "mime-types",
          "partial": "Name Extensions",
          "signature": "FileName-\u003e[Extension]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime-types/docs/Network-Mime.html#v:fileNameExtensions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook up a mime type from the given mime map and default mime type.\n\u003c/p\u003e",
          "module": "Network.Mime",
          "name": "mimeByExt",
          "package": "mime-types",
          "signature": "MimeMap-\u003e MimeType-\u003e FileName-\u003e MimeType",
          "type": "function"
        },
        "index": {
          "description": "Look up mime type from the given mime map and default mime type",
          "hierarchy": "Network Mime",
          "module": "Network.Mime",
          "name": "mimeByExt",
          "normalized": "MimeMap-\u003eMimeType-\u003eFileName-\u003eMimeType",
          "package": "mime-types",
          "partial": "By Ext",
          "signature": "MimeMap-\u003eMimeType-\u003eFileName-\u003eMimeType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime-types/docs/Network-Mime.html#v:mimeByExt"
      }
    }
  ]
]