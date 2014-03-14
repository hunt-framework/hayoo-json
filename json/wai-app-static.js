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
        "word": "wai-app-static"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStatic file serving for WAI.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Wai.Application.Static",
          "name": "Static",
          "package": "wai-app-static",
          "source": "src/Network-Wai-Application-Static.html",
          "type": "module"
        },
        "index": {
          "description": "Static file serving for WAI",
          "hierarchy": "Network Wai Application Static",
          "module": "Network.Wai.Application.Static",
          "name": "Static",
          "package": "wai-app-static",
          "partial": "Static",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/Network-Wai-Application-Static.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll of the settings available to users for tweaking wai-app-static.\n\u003c/p\u003e\u003cp\u003eNote that you should use the settings type approach for modifying values.\n See \u003ca\u003ehttp://www.yesodweb.com/book/settings-types\u003c/a\u003e for more information.\n\u003c/p\u003e",
          "module": "Network.Wai.Application.Static",
          "name": "StaticSettings",
          "package": "wai-app-static",
          "source": "src/WaiAppStatic-Types.html#StaticSettings",
          "type": "data"
        },
        "index": {
          "description": "All of the settings available to users for tweaking wai-app-static Note that you should use the settings type approach for modifying values See http www.yesodweb.com book settings-types for more information",
          "hierarchy": "Network Wai Application Static",
          "module": "Network.Wai.Application.Static",
          "name": "StaticSettings",
          "package": "wai-app-static",
          "partial": "Static Settings",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/Network-Wai-Application-Static.html#t:StaticSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSettings optimized for a file server. More conservative caching will be\n applied, and indices and listings are enabled.\n\u003c/p\u003e",
          "module": "[\"Network.Wai.Application.Static\",\"WaiAppStatic.Storage.Filesystem\"]",
          "name": "defaultFileServerSettings",
          "package": "wai-app-static",
          "signature": "FilePath-\u003e StaticSettings",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wai-app-static/docs/Network-Wai-Application-Static.html#v:defaultFileServerSettings\",\"http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Storage-Filesystem.html#v:defaultFileServerSettings\"]"
        },
        "index": {
          "description": "Settings optimized for file server More conservative caching will be applied and indices and listings are enabled",
          "hierarchy": "Network Wai Application Static",
          "module": "Network.Wai.Application.Static",
          "name": "defaultFileServerSettings",
          "normalized": "FilePath-\u003eStaticSettings",
          "package": "wai-app-static",
          "partial": "File Server Settings",
          "signature": "FilePath-\u003eStaticSettings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/Network-Wai-Application-Static.html#v:defaultFileServerSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSettings optimized for a web application. Files will have aggressive\n caching applied and hashes calculated, and indices and listings are disabled.\n\u003c/p\u003e",
          "module": "[\"Network.Wai.Application.Static\",\"WaiAppStatic.Storage.Filesystem\"]",
          "name": "defaultWebAppSettings",
          "package": "wai-app-static",
          "signature": "FilePath-\u003e StaticSettings",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wai-app-static/docs/Network-Wai-Application-Static.html#v:defaultWebAppSettings\",\"http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Storage-Filesystem.html#v:defaultWebAppSettings\"]"
        },
        "index": {
          "description": "Settings optimized for web application Files will have aggressive caching applied and hashes calculated and indices and listings are disabled",
          "hierarchy": "Network Wai Application Static",
          "module": "Network.Wai.Application.Static",
          "name": "defaultWebAppSettings",
          "normalized": "FilePath-\u003eStaticSettings",
          "package": "wai-app-static",
          "partial": "Web App Settings",
          "signature": "FilePath-\u003eStaticSettings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/Network-Wai-Application-Static.html#v:defaultWebAppSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eServe the list of path/content pairs directly from memory.\n\u003c/p\u003e",
          "module": "[\"Network.Wai.Application.Static\",\"WaiAppStatic.Storage.Embedded\"]",
          "name": "embeddedSettings",
          "package": "wai-app-static",
          "signature": "[(FilePath, ByteString)] -\u003e StaticSettings",
          "source": "src/WaiAppStatic-Storage-Embedded-Runtime.html#embeddedSettings",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wai-app-static/docs/Network-Wai-Application-Static.html#v:embeddedSettings\",\"http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Storage-Embedded.html#v:embeddedSettings\"]"
        },
        "index": {
          "description": "Serve the list of path content pairs directly from memory",
          "hierarchy": "Network Wai Application Static",
          "module": "Network.Wai.Application.Static",
          "name": "embeddedSettings",
          "normalized": "[(FilePath,ByteString)]-\u003eStaticSettings",
          "package": "wai-app-static",
          "partial": "Settings",
          "signature": "[(FilePath,ByteString)]-\u003eStaticSettings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/Network-Wai-Application-Static.html#v:embeddedSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine the mime type of the given file. Note that this function\n lives in \u003ccode\u003eIO\u003c/code\u003e in case you want to perform more complicated mimetype\n analysis, such as via the \u003ccode\u003efile\u003c/code\u003e utility.\n\u003c/p\u003e",
          "module": "Network.Wai.Application.Static",
          "name": "ssGetMimeType",
          "package": "wai-app-static",
          "signature": "StaticSettings -\u003e File -\u003e IO MimeType",
          "source": "src/WaiAppStatic-Types.html#ssGetMimeType",
          "type": "function"
        },
        "index": {
          "description": "Determine the mime type of the given file Note that this function lives in IO in case you want to perform more complicated mimetype analysis such as via the file utility",
          "hierarchy": "Network Wai Application Static",
          "module": "Network.Wai.Application.Static",
          "name": "ssGetMimeType",
          "normalized": "StaticSettings-\u003eFile-\u003eIO MimeType",
          "package": "wai-app-static",
          "partial": "Get Mime Type",
          "signature": "StaticSettings-\u003eFile-\u003eIO MimeType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/Network-Wai-Application-Static.html#v:ssGetMimeType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOrdered list of filenames to be used for indices. If the user\n requests a folder, and a file with the given name is found in that\n folder, that file is served. This supercedes any directory listing.\n\u003c/p\u003e",
          "module": "Network.Wai.Application.Static",
          "name": "ssIndices",
          "package": "wai-app-static",
          "signature": "StaticSettings -\u003e [Piece]",
          "source": "src/WaiAppStatic-Types.html#ssIndices",
          "type": "function"
        },
        "index": {
          "description": "Ordered list of filenames to be used for indices If the user requests folder and file with the given name is found in that folder that file is served This supercedes any directory listing",
          "hierarchy": "Network Wai Application Static",
          "module": "Network.Wai.Application.Static",
          "name": "ssIndices",
          "normalized": "StaticSettings-\u003e[Piece]",
          "package": "wai-app-static",
          "partial": "Indices",
          "signature": "StaticSettings-\u003e[Piece]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/Network-Wai-Application-Static.html#v:ssIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow to perform a directory listing. Optional. Will be used when the\n user requested a folder.\n\u003c/p\u003e",
          "module": "Network.Wai.Application.Static",
          "name": "ssListing",
          "package": "wai-app-static",
          "signature": "StaticSettings -\u003e Maybe Listing",
          "source": "src/WaiAppStatic-Types.html#ssListing",
          "type": "function"
        },
        "index": {
          "description": "How to perform directory listing Optional Will be used when the user requested folder",
          "hierarchy": "Network Wai Application Static",
          "module": "Network.Wai.Application.Static",
          "name": "ssListing",
          "normalized": "StaticSettings-\u003eMaybe Listing",
          "package": "wai-app-static",
          "partial": "Listing",
          "signature": "StaticSettings-\u003eMaybe Listing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/Network-Wai-Application-Static.html#v:ssListing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup a single file or folder. This is how you can control storage\n backend (filesystem, embedded, etc) and where to lookup.\n\u003c/p\u003e",
          "module": "Network.Wai.Application.Static",
          "name": "ssLookupFile",
          "package": "wai-app-static",
          "signature": "StaticSettings -\u003e Pieces -\u003e IO LookupResult",
          "source": "src/WaiAppStatic-Types.html#ssLookupFile",
          "type": "function"
        },
        "index": {
          "description": "Lookup single file or folder This is how you can control storage backend filesystem embedded etc and where to lookup",
          "hierarchy": "Network Wai Application Static",
          "module": "Network.Wai.Application.Static",
          "name": "ssLookupFile",
          "normalized": "StaticSettings-\u003ePieces-\u003eIO LookupResult",
          "package": "wai-app-static",
          "partial": "Lookup File",
          "signature": "StaticSettings-\u003ePieces-\u003eIO LookupResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/Network-Wai-Application-Static.html#v:ssLookupFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValue to provide for max age in the cache-control.\n\u003c/p\u003e",
          "module": "Network.Wai.Application.Static",
          "name": "ssMaxAge",
          "package": "wai-app-static",
          "signature": "StaticSettings -\u003e MaxAge",
          "source": "src/WaiAppStatic-Types.html#ssMaxAge",
          "type": "function"
        },
        "index": {
          "description": "Value to provide for max age in the cache-control",
          "hierarchy": "Network Wai Application Static",
          "module": "Network.Wai.Application.Static",
          "name": "ssMaxAge",
          "normalized": "StaticSettings-\u003eMaxAge",
          "package": "wai-app-static",
          "partial": "Max Age",
          "signature": "StaticSettings-\u003eMaxAge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/Network-Wai-Application-Static.html#v:ssMaxAge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a requested path and a new destination, construct a string\n that will go there. Default implementation will use relative paths.\n\u003c/p\u003e",
          "module": "Network.Wai.Application.Static",
          "name": "ssMkRedirect",
          "package": "wai-app-static",
          "signature": "StaticSettings -\u003e Pieces -\u003e ByteString -\u003e ByteString",
          "source": "src/WaiAppStatic-Types.html#ssMkRedirect",
          "type": "function"
        },
        "index": {
          "description": "Given requested path and new destination construct string that will go there Default implementation will use relative paths",
          "hierarchy": "Network Wai Application Static",
          "module": "Network.Wai.Application.Static",
          "name": "ssMkRedirect",
          "normalized": "StaticSettings-\u003ePieces-\u003eByteString-\u003eByteString",
          "package": "wai-app-static",
          "partial": "Mk Redirect",
          "signature": "StaticSettings-\u003ePieces-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/Network-Wai-Application-Static.html#v:ssMkRedirect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf \u003ccode\u003eTrue\u003c/code\u003e, send a redirect to the user when a folder is requested\n and an index page should be displayed. When \u003ccode\u003eFalse\u003c/code\u003e, display the\n content immediately.\n\u003c/p\u003e",
          "module": "Network.Wai.Application.Static",
          "name": "ssRedirectToIndex",
          "package": "wai-app-static",
          "signature": "StaticSettings -\u003e Bool",
          "source": "src/WaiAppStatic-Types.html#ssRedirectToIndex",
          "type": "function"
        },
        "index": {
          "description": "If True send redirect to the user when folder is requested and an index page should be displayed When False display the content immediately",
          "hierarchy": "Network Wai Application Static",
          "module": "Network.Wai.Application.Static",
          "name": "ssRedirectToIndex",
          "normalized": "StaticSettings-\u003eBool",
          "package": "wai-app-static",
          "partial": "Redirect To Index",
          "signature": "StaticSettings-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/Network-Wai-Application-Static.html#v:ssRedirectToIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn a \u003ccode\u003eStaticSettings\u003c/code\u003e into a WAI application.\n\u003c/p\u003e",
          "module": "Network.Wai.Application.Static",
          "name": "staticApp",
          "package": "wai-app-static",
          "signature": "StaticSettings -\u003e Application",
          "source": "src/Network-Wai-Application-Static.html#staticApp",
          "type": "function"
        },
        "index": {
          "description": "Turn StaticSettings into WAI application",
          "hierarchy": "Network Wai Application Static",
          "module": "Network.Wai.Application.Static",
          "name": "staticApp",
          "normalized": "StaticSettings-\u003eApplication",
          "package": "wai-app-static",
          "partial": "App",
          "signature": "StaticSettings-\u003eApplication",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/Network-Wai-Application-Static.html#v:staticApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003edefaultWebAppSettings\u003c/code\u003e, but additionally uses a specialized\n \u003ccode\u003eETagLookup\u003c/code\u003e in place of the standard one. This can allow you to cache your\n hash values, or even precompute them.\n\u003c/p\u003e",
          "module": "[\"Network.Wai.Application.Static\",\"WaiAppStatic.Storage.Filesystem\"]",
          "name": "webAppSettingsWithLookup",
          "package": "wai-app-static",
          "signature": "FilePath-\u003e ETagLookup-\u003e StaticSettings",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wai-app-static/docs/Network-Wai-Application-Static.html#v:webAppSettingsWithLookup\",\"http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Storage-Filesystem.html#v:webAppSettingsWithLookup\"]"
        },
        "index": {
          "description": "Same as defaultWebAppSettings but additionally uses specialized ETagLookup in place of the standard one This can allow you to cache your hash values or even precompute them",
          "hierarchy": "Network Wai Application Static",
          "module": "Network.Wai.Application.Static",
          "name": "webAppSettingsWithLookup",
          "normalized": "FilePath-\u003eETagLookup-\u003eStaticSettings",
          "package": "wai-app-static",
          "partial": "App Settings With Lookup",
          "signature": "FilePath-\u003eETagLookup-\u003eStaticSettings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/Network-Wai-Application-Static.html#v:webAppSettingsWithLookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "WaiAppStatic.Listing",
          "name": "Listing",
          "package": "wai-app-static",
          "source": "src/WaiAppStatic-Listing.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "WaiAppStatic Listing",
          "module": "WaiAppStatic.Listing",
          "name": "Listing",
          "package": "wai-app-static",
          "partial": "Listing",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Listing.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvides a default directory listing, suitable for most apps.\n\u003c/p\u003e\u003cp\u003eCode below taken from Happstack: \u003ca\u003ehttp://patch-tag.com/r/mae/happstack/snapshot/current/content/pretty/happstack-server/src/Happstack/Server/FileServe/BuildingBlocks.hs\u003c/a\u003e\n\u003c/p\u003e",
          "module": "WaiAppStatic.Listing",
          "name": "defaultListing",
          "package": "wai-app-static",
          "signature": "Listing",
          "source": "src/WaiAppStatic-Listing.html#defaultListing",
          "type": "function"
        },
        "index": {
          "description": "Provides default directory listing suitable for most apps Code below taken from Happstack http patch-tag.com mae happstack snapshot current content pretty happstack-server src Happstack Server FileServe BuildingBlocks.hs",
          "hierarchy": "WaiAppStatic Listing",
          "module": "WaiAppStatic.Listing",
          "name": "defaultListing",
          "package": "wai-app-static",
          "partial": "Listing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Listing.html#v:defaultListing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "WaiAppStatic.Storage.Embedded",
          "name": "Embedded",
          "package": "wai-app-static",
          "source": "src/WaiAppStatic-Storage-Embedded.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "WaiAppStatic Storage Embedded",
          "module": "WaiAppStatic.Storage.Embedded",
          "name": "Embedded",
          "package": "wai-app-static",
          "partial": "Embedded",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Storage-Embedded.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed at compile time to hold data about an entry to embed into the compiled executable.\n\u003c/p\u003e",
          "module": "WaiAppStatic.Storage.Embedded",
          "name": "EmbeddableEntry",
          "package": "wai-app-static",
          "source": "src/WaiAppStatic-Storage-Embedded-TH.html#EmbeddableEntry",
          "type": "data"
        },
        "index": {
          "description": "Used at compile time to hold data about an entry to embed into the compiled executable",
          "hierarchy": "WaiAppStatic Storage Embedded",
          "module": "WaiAppStatic.Storage.Embedded",
          "name": "EmbeddableEntry",
          "package": "wai-app-static",
          "partial": "Embeddable Entry",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Storage-Embedded.html#t:EmbeddableEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn Etag is used to return 304 Not Modified responses so the client does not need\n   to download resources a second time.  Usually the etag is built from a hash of\n   the content.  To disable Etags, you can pass the empty string.  This will cause the\n   content to be redownloaded on every request.\n\u003c/p\u003e",
          "module": "WaiAppStatic.Storage.Embedded",
          "name": "Etag",
          "package": "wai-app-static",
          "source": "src/WaiAppStatic-Storage-Embedded-TH.html#Etag",
          "type": "type"
        },
        "index": {
          "description": "An Etag is used to return Not Modified responses so the client does not need to download resources second time Usually the etag is built from hash of the content To disable Etags you can pass the empty string This will cause the content to be redownloaded on every request",
          "hierarchy": "WaiAppStatic Storage Embedded",
          "module": "WaiAppStatic.Storage.Embedded",
          "name": "Etag",
          "package": "wai-app-static",
          "partial": "Etag",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Storage-Embedded.html#t:Etag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "WaiAppStatic.Storage.Embedded",
          "name": "EmbeddableEntry",
          "package": "wai-app-static",
          "signature": "EmbeddableEntry",
          "source": "src/WaiAppStatic-Storage-Embedded-TH.html#EmbeddableEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "WaiAppStatic Storage Embedded",
          "module": "WaiAppStatic.Storage.Embedded",
          "name": "EmbeddableEntry",
          "package": "wai-app-static",
          "partial": "Embeddable Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Storage-Embedded.html#v:EmbeddableEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe content itself.  The content can be given as a tag and bytestring,\n   in which case the content will be embedded directly into the execuatble.\n   Alternatively, the content can be given as a template haskell expression\n   returning \u003ccode\u003eIO (\u003ccode\u003e\u003ca\u003eEtag\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e in which case this action will\n   be executed on every request to reload the content (this is useful\n   for a debugging mode).\n\u003c/p\u003e",
          "module": "WaiAppStatic.Storage.Embedded",
          "name": "eContent",
          "package": "wai-app-static",
          "signature": "Either (Etag, ByteString) ExpQ",
          "source": "src/WaiAppStatic-Storage-Embedded-TH.html#EmbeddableEntry",
          "type": "function"
        },
        "index": {
          "description": "The content itself The content can be given as tag and bytestring in which case the content will be embedded directly into the execuatble Alternatively the content can be given as template haskell expression returning IO Etag ByteString in which case this action will be executed on every request to reload the content this is useful for debugging mode",
          "hierarchy": "WaiAppStatic Storage Embedded",
          "module": "WaiAppStatic.Storage.Embedded",
          "name": "eContent",
          "normalized": "Either(Etag,ByteString)ExpQ",
          "package": "wai-app-static",
          "partial": "Content",
          "signature": "Either(Etag,ByteString)ExpQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Storage-Embedded.html#v:eContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe location where this resource should be served from.  The\n   location can contain forward slashes (/) to simulate directories,\n   but must not end with a forward slash.\n\u003c/p\u003e",
          "module": "WaiAppStatic.Storage.Embedded",
          "name": "eLocation",
          "package": "wai-app-static",
          "signature": "Text",
          "source": "src/WaiAppStatic-Storage-Embedded-TH.html#EmbeddableEntry",
          "type": "function"
        },
        "index": {
          "description": "The location where this resource should be served from The location can contain forward slashes to simulate directories but must not end with forward slash",
          "hierarchy": "WaiAppStatic Storage Embedded",
          "module": "WaiAppStatic.Storage.Embedded",
          "name": "eLocation",
          "package": "wai-app-static",
          "partial": "Location",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Storage-Embedded.html#v:eLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe mime type.\n\u003c/p\u003e",
          "module": "WaiAppStatic.Storage.Embedded",
          "name": "eMimeType",
          "package": "wai-app-static",
          "signature": "MimeType",
          "source": "src/WaiAppStatic-Storage-Embedded-TH.html#EmbeddableEntry",
          "type": "function"
        },
        "index": {
          "description": "The mime type",
          "hierarchy": "WaiAppStatic Storage Embedded",
          "module": "WaiAppStatic.Storage.Embedded",
          "name": "eMimeType",
          "package": "wai-app-static",
          "partial": "Mime Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Storage-Embedded.html#v:eMimeType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eStaticSettings\u003c/a\u003e\u003c/code\u003e at compile time that embeds resources directly into the compiled\n   executable.  The embedded resources are precompressed (depending on mime type)\n   so that during runtime the resource can be served very quickly.\n\u003c/p\u003e\u003cp\u003eBecause of GHC Template Haskell stage restrictions, you must define\n   the entries in a different module than where you create the \u003ccode\u003e\u003ca\u003eStaticSettings\u003c/a\u003e\u003c/code\u003e.\n   For example,\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE TemplateHaskell, QuasiQuotes, OverloadedStrings #-}\n module A (mkEmbedded) where\n \n import WaiAppStatic.Storage.Embedded\n import Crypto.Hash.MD5 (hashlazy)\n import qualified Data.ByteString.Lazy as BL\n import qualified Data.ByteString.Base64 as B64\n import qualified Data.Text as T\n import qualified Data.Text.Encoding as T\n \n hash :: BL.ByteString -\u003e T.Text\n hash = T.take 8 . T.decodeUtf8 . B64.encode . hashlazy\n \n mkEmbedded :: IO [EmbeddableEntry]\n mkEmbedded = do\n     file \u003c- BL.readFile \"test.css\"\n     let emb = EmbeddableEntry {\n                   eLocation = \"somedir/test.css\"\n                 , eMimeType = \"text/css\"\n                 , eContent  = Left (hash file, file)\n                 }\n \n     let reload = EmbeddableEntry {\n                      eLocation = \"anotherdir/test2.txt\"\n                    , eMimeType = \"text/plain\"\n                    , eContent  = Right [| BL.readFile \"test2.txt\" \u003e\u003e= \\c -\u003e return (hash c, c) |]\n                    }\n \n     return [emb, reload]\n\u003c/pre\u003e\u003cp\u003eThe above \u003ccode\u003emkEmbedded\u003c/code\u003e will be executed at compile time.  It loads the contents of test.css and\n computes the hash of test.css for the etag.  The content will be available at the URL somedir/test.css.\n Internally, \u003ccode\u003eembedApp\u003c/code\u003e below will attempt to compress the content at compile time. The compression will\n only happen if the compressed content is shorter than the original and the mime type is either text or\n javascript.  If the content is compressed, at runtime the precomputed compressed content will be served\n with the appropriate HTTP header. If \u003ccode\u003eembedApp\u003c/code\u003e decides not to compress the content, it will be\n served directly.\n\u003c/p\u003e\u003cp\u003eSecondly, \u003ccode\u003emkEmbedded\u003c/code\u003e creates a reloadable entry.  This will be available at the URL anotherdir/test2.txt.\n Whenver a request comes in for anotherdir/test2.txt, the action inside the quasiquote in eContent will\n be executed.  This will re-read the test2.txt file and recompute its hash.\n\u003c/p\u003e\u003cp\u003eFinally, here is a module which uses the above action to create a \u003ccode\u003e\u003ca\u003eApplication\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE TemplateHaskell #-}\n module B where\n \n import A\n import Network.Wai (Application)\n import Network.Wai.Application.Static (staticApp)\n import WaiAppStatic.Storage.Embedded\n import Network.Wai.Handler.Warp (run)\n \n myApp :: Application\n myApp = staticApp $(mkSettings mkEmbedded)\n \n main :: IO ()\n main = run 3000 myApp\n\u003c/pre\u003e",
          "module": "WaiAppStatic.Storage.Embedded",
          "name": "mkSettings",
          "package": "wai-app-static",
          "signature": "IO [EmbeddableEntry] -\u003e ExpQ",
          "source": "src/WaiAppStatic-Storage-Embedded-TH.html#mkSettings",
          "type": "function"
        },
        "index": {
          "description": "Create StaticSettings at compile time that embeds resources directly into the compiled executable The embedded resources are precompressed depending on mime type so that during runtime the resource can be served very quickly Because of GHC Template Haskell stage restrictions you must define the entries in different module than where you create the StaticSettings For example LANGUAGE TemplateHaskell QuasiQuotes OverloadedStrings module mkEmbedded where import WaiAppStatic.Storage.Embedded import Crypto.Hash.MD5 hashlazy import qualified Data.ByteString.Lazy as BL import qualified Data.ByteString.Base64 as B64 import qualified Data.Text as import qualified Data.Text.Encoding as hash BL.ByteString T.Text hash T.take T.decodeUtf8 B64.encode hashlazy mkEmbedded IO EmbeddableEntry mkEmbedded do file BL.readFile test.css let emb EmbeddableEntry eLocation somedir test.css eMimeType text css eContent Left hash file file let reload EmbeddableEntry eLocation anotherdir test2.txt eMimeType text plain eContent Right BL.readFile test2.txt return hash return emb reload The above mkEmbedded will be executed at compile time It loads the contents of test.css and computes the hash of test.css for the etag The content will be available at the URL somedir test.css Internally embedApp below will attempt to compress the content at compile time The compression will only happen if the compressed content is shorter than the original and the mime type is either text or javascript If the content is compressed at runtime the precomputed compressed content will be served with the appropriate HTTP header If embedApp decides not to compress the content it will be served directly Secondly mkEmbedded creates reloadable entry This will be available at the URL anotherdir test2.txt Whenver request comes in for anotherdir test2.txt the action inside the quasiquote in eContent will be executed This will re-read the test2.txt file and recompute its hash Finally here is module which uses the above action to create Application LANGUAGE TemplateHaskell module where import import Network.Wai Application import Network.Wai.Application.Static staticApp import WaiAppStatic.Storage.Embedded import Network.Wai.Handler.Warp run myApp Application myApp staticApp mkSettings mkEmbedded main IO main run myApp",
          "hierarchy": "WaiAppStatic Storage Embedded",
          "module": "WaiAppStatic.Storage.Embedded",
          "name": "mkSettings",
          "normalized": "IO[EmbeddableEntry]-\u003eExpQ",
          "package": "wai-app-static",
          "partial": "Settings",
          "signature": "IO[EmbeddableEntry]-\u003eExpQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Storage-Embedded.html#v:mkSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAccess files on the filesystem.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "WaiAppStatic.Storage.Filesystem",
          "name": "Filesystem",
          "package": "wai-app-static",
          "source": "src/WaiAppStatic-Storage-Filesystem.html",
          "type": "module"
        },
        "index": {
          "description": "Access files on the filesystem",
          "hierarchy": "WaiAppStatic Storage Filesystem",
          "module": "WaiAppStatic.Storage.Filesystem",
          "name": "Filesystem",
          "package": "wai-app-static",
          "partial": "Filesystem",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Storage-Filesystem.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow to calculate etags. Can perform filesystem reads on each call, or use\n some caching mechanism.\n\u003c/p\u003e",
          "module": "WaiAppStatic.Storage.Filesystem",
          "name": "ETagLookup",
          "package": "wai-app-static",
          "source": "src/WaiAppStatic-Storage-Filesystem.html#ETagLookup",
          "type": "type"
        },
        "index": {
          "description": "How to calculate etags Can perform filesystem reads on each call or use some caching mechanism",
          "hierarchy": "WaiAppStatic Storage Filesystem",
          "module": "WaiAppStatic.Storage.Filesystem",
          "name": "ETagLookup",
          "package": "wai-app-static",
          "partial": "ETag Lookup",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Storage-Filesystem.html#t:ETagLookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "WaiAppStatic.Types",
          "name": "Types",
          "package": "wai-app-static",
          "source": "src/WaiAppStatic-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "WaiAppStatic Types",
          "module": "WaiAppStatic.Types",
          "name": "Types",
          "package": "wai-app-static",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation on an individual file.\n\u003c/p\u003e",
          "module": "WaiAppStatic.Types",
          "name": "File",
          "package": "wai-app-static",
          "source": "src/WaiAppStatic-Types.html#File",
          "type": "data"
        },
        "index": {
          "description": "Information on an individual file",
          "hierarchy": "WaiAppStatic Types",
          "module": "WaiAppStatic.Types",
          "name": "File",
          "package": "wai-app-static",
          "partial": "File",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#t:File"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresent contents of a single folder, which can be itself either a file\n or a folder.\n\u003c/p\u003e",
          "module": "WaiAppStatic.Types",
          "name": "Folder",
          "package": "wai-app-static",
          "source": "src/WaiAppStatic-Types.html#Folder",
          "type": "data"
        },
        "index": {
          "description": "Represent contents of single folder which can be itself either file or folder",
          "hierarchy": "WaiAppStatic Types",
          "module": "WaiAppStatic.Types",
          "name": "Folder",
          "package": "wai-app-static",
          "partial": "Folder",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#t:Folder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJust the name of a folder.\n\u003c/p\u003e",
          "module": "WaiAppStatic.Types",
          "name": "FolderName",
          "package": "wai-app-static",
          "source": "src/WaiAppStatic-Types.html#FolderName",
          "type": "type"
        },
        "index": {
          "description": "Just the name of folder",
          "hierarchy": "WaiAppStatic Types",
          "module": "WaiAppStatic.Types",
          "name": "FolderName",
          "package": "wai-app-static",
          "partial": "Folder Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#t:FolderName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow to construct a directory listing page for the given request path and\n the resulting folder.\n\u003c/p\u003e",
          "module": "WaiAppStatic.Types",
          "name": "Listing",
          "package": "wai-app-static",
          "source": "src/WaiAppStatic-Types.html#Listing",
          "type": "type"
        },
        "index": {
          "description": "How to construct directory listing page for the given request path and the resulting folder",
          "hierarchy": "WaiAppStatic Types",
          "module": "WaiAppStatic.Types",
          "name": "Listing",
          "package": "wai-app-static",
          "partial": "Listing",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#t:Listing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResult of looking up a file in some storage backend.\n\u003c/p\u003e\u003cp\u003eThe lookup is either a file or folder, or does not exist.\n\u003c/p\u003e",
          "module": "WaiAppStatic.Types",
          "name": "LookupResult",
          "package": "wai-app-static",
          "source": "src/WaiAppStatic-Types.html#LookupResult",
          "type": "data"
        },
        "index": {
          "description": "Result of looking up file in some storage backend The lookup is either file or folder or does not exist",
          "hierarchy": "WaiAppStatic Types",
          "module": "WaiAppStatic.Types",
          "name": "LookupResult",
          "package": "wai-app-static",
          "partial": "Lookup Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#t:LookupResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValues for the max-age component of the cache-control response header.\n\u003c/p\u003e",
          "module": "WaiAppStatic.Types",
          "name": "MaxAge",
          "package": "wai-app-static",
          "source": "src/WaiAppStatic-Types.html#MaxAge",
          "type": "data"
        },
        "index": {
          "description": "Values for the max-age component of the cache-control response header",
          "hierarchy": "WaiAppStatic Types",
          "module": "WaiAppStatic.Types",
          "name": "MaxAge",
          "package": "wai-app-static",
          "partial": "Max Age",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#t:MaxAge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn individual component of a path, or of a filepath.\n\u003c/p\u003e\u003cp\u003eThis is the core type used by wai-app-static for doing lookups. It provides\n a smart constructor to avoid the possibility of constructing unsafe path\n segments (though \u003ccode\u003eunsafeToPiece\u003c/code\u003e can get around that as necessary).\n\u003c/p\u003e\u003cp\u003eIndividual file lookup backends must know how to convert from a \u003ccode\u003ePiece\u003c/code\u003e to\n their storage system.\n\u003c/p\u003e",
          "module": "WaiAppStatic.Types",
          "name": "Piece",
          "package": "wai-app-static",
          "source": "src/WaiAppStatic-Types.html#Piece",
          "type": "data"
        },
        "index": {
          "description": "An individual component of path or of filepath This is the core type used by wai-app-static for doing lookups It provides smart constructor to avoid the possibility of constructing unsafe path segments though unsafeToPiece can get around that as necessary Individual file lookup backends must know how to convert from Piece to their storage system",
          "hierarchy": "WaiAppStatic Types",
          "module": "WaiAppStatic.Types",
          "name": "Piece",
          "package": "wai-app-static",
          "partial": "Piece",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#t:Piece"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequest coming from a user. Corresponds to \u003ccode\u003epathInfo\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "WaiAppStatic.Types",
          "name": "Pieces",
          "package": "wai-app-static",
          "source": "src/WaiAppStatic-Types.html#Pieces",
          "type": "type"
        },
        "index": {
          "description": "Request coming from user Corresponds to pathInfo",
          "hierarchy": "WaiAppStatic Types",
          "module": "WaiAppStatic.Types",
          "name": "Pieces",
          "package": "wai-app-static",
          "partial": "Pieces",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#t:Pieces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll of the settings available to users for tweaking wai-app-static.\n\u003c/p\u003e\u003cp\u003eNote that you should use the settings type approach for modifying values.\n See \u003ca\u003ehttp://www.yesodweb.com/book/settings-types\u003c/a\u003e for more information.\n\u003c/p\u003e",
          "module": "WaiAppStatic.Types",
          "name": "StaticSettings",
          "package": "wai-app-static",
          "source": "src/WaiAppStatic-Types.html#StaticSettings",
          "type": "data"
        },
        "index": {
          "description": "All of the settings available to users for tweaking wai-app-static Note that you should use the settings type approach for modifying values See http www.yesodweb.com book settings-types for more information",
          "hierarchy": "WaiAppStatic Types",
          "module": "WaiAppStatic.Types",
          "name": "StaticSettings",
          "package": "wai-app-static",
          "partial": "Static Settings",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#t:StaticSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "WaiAppStatic.Types",
          "name": "File",
          "package": "wai-app-static",
          "signature": "File",
          "source": "src/WaiAppStatic-Types.html#File",
          "type": "function"
        },
        "index": {
          "hierarchy": "WaiAppStatic Types",
          "module": "WaiAppStatic.Types",
          "name": "File",
          "package": "wai-app-static",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#v:File"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "WaiAppStatic.Types",
          "name": "Folder",
          "package": "wai-app-static",
          "signature": "Folder",
          "source": "src/WaiAppStatic-Types.html#Folder",
          "type": "function"
        },
        "index": {
          "hierarchy": "WaiAppStatic Types",
          "module": "WaiAppStatic.Types",
          "name": "Folder",
          "package": "wai-app-static",
          "partial": "Folder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#v:Folder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "WaiAppStatic.Types",
          "name": "LRFile",
          "package": "wai-app-static",
          "signature": "LRFile File",
          "source": "src/WaiAppStatic-Types.html#LookupResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "WaiAppStatic Types",
          "module": "WaiAppStatic.Types",
          "name": "LRFile",
          "package": "wai-app-static",
          "partial": "LRFile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#v:LRFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "WaiAppStatic.Types",
          "name": "LRFolder",
          "package": "wai-app-static",
          "signature": "LRFolder Folder",
          "source": "src/WaiAppStatic-Types.html#LookupResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "WaiAppStatic Types",
          "module": "WaiAppStatic.Types",
          "name": "LRFolder",
          "package": "wai-app-static",
          "partial": "LRFolder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#v:LRFolder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "WaiAppStatic.Types",
          "name": "LRNotFound",
          "package": "wai-app-static",
          "signature": "LRNotFound",
          "source": "src/WaiAppStatic-Types.html#LookupResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "WaiAppStatic Types",
          "module": "WaiAppStatic.Types",
          "name": "LRNotFound",
          "package": "wai-app-static",
          "partial": "LRNot Found",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#v:LRNotFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eessentially infinite caching; in reality, probably one year\n\u003c/p\u003e",
          "module": "WaiAppStatic.Types",
          "name": "MaxAgeForever",
          "package": "wai-app-static",
          "signature": "MaxAgeForever",
          "source": "src/WaiAppStatic-Types.html#MaxAge",
          "type": "function"
        },
        "index": {
          "description": "essentially infinite caching in reality probably one year",
          "hierarchy": "WaiAppStatic Types",
          "module": "WaiAppStatic.Types",
          "name": "MaxAgeForever",
          "package": "wai-app-static",
          "partial": "Max Age Forever",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#v:MaxAgeForever"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset to the given number of seconds\n\u003c/p\u003e",
          "module": "WaiAppStatic.Types",
          "name": "MaxAgeSeconds",
          "package": "wai-app-static",
          "signature": "MaxAgeSeconds Int",
          "source": "src/WaiAppStatic-Types.html#MaxAge",
          "type": "function"
        },
        "index": {
          "description": "set to the given number of seconds",
          "hierarchy": "WaiAppStatic Types",
          "module": "WaiAppStatic.Types",
          "name": "MaxAgeSeconds",
          "package": "wai-app-static",
          "partial": "Max Age Seconds",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#v:MaxAgeSeconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eno cache-control set\n\u003c/p\u003e",
          "module": "WaiAppStatic.Types",
          "name": "NoMaxAge",
          "package": "wai-app-static",
          "signature": "NoMaxAge",
          "source": "src/WaiAppStatic-Types.html#MaxAge",
          "type": "function"
        },
        "index": {
          "description": "no cache-control set",
          "hierarchy": "WaiAppStatic Types",
          "module": "WaiAppStatic.Types",
          "name": "NoMaxAge",
          "package": "wai-app-static",
          "partial": "No Max Age",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#v:NoMaxAge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "WaiAppStatic.Types",
          "name": "StaticSettings",
          "package": "wai-app-static",
          "signature": "StaticSettings",
          "source": "src/WaiAppStatic-Types.html#StaticSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "WaiAppStatic Types",
          "module": "WaiAppStatic.Types",
          "name": "StaticSettings",
          "package": "wai-app-static",
          "partial": "Static Settings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#v:StaticSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate a hash of the contents of this file, such as for etag.\n\u003c/p\u003e",
          "module": "WaiAppStatic.Types",
          "name": "fileGetHash",
          "package": "wai-app-static",
          "signature": "IO (Maybe ByteString)",
          "source": "src/WaiAppStatic-Types.html#File",
          "type": "function"
        },
        "index": {
          "description": "Calculate hash of the contents of this file such as for etag",
          "hierarchy": "WaiAppStatic Types",
          "module": "WaiAppStatic.Types",
          "name": "fileGetHash",
          "package": "wai-app-static",
          "partial": "Get Hash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#v:fileGetHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLast modified time, used for both display in listings and if-modified-since.\n\u003c/p\u003e",
          "module": "WaiAppStatic.Types",
          "name": "fileGetModified",
          "package": "wai-app-static",
          "signature": "Maybe EpochTime",
          "source": "src/WaiAppStatic-Types.html#File",
          "type": "function"
        },
        "index": {
          "description": "Last modified time used for both display in listings and if-modified-since",
          "hierarchy": "WaiAppStatic Types",
          "module": "WaiAppStatic.Types",
          "name": "fileGetModified",
          "package": "wai-app-static",
          "partial": "Get Modified",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#v:fileGetModified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSize of file in bytes\n\u003c/p\u003e",
          "module": "WaiAppStatic.Types",
          "name": "fileGetSize",
          "package": "wai-app-static",
          "signature": "Int",
          "source": "src/WaiAppStatic-Types.html#File",
          "type": "function"
        },
        "index": {
          "description": "Size of file in bytes",
          "hierarchy": "WaiAppStatic Types",
          "module": "WaiAppStatic.Types",
          "name": "fileGetSize",
          "package": "wai-app-static",
          "partial": "Get Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#v:fileGetSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLast component of the filename.\n\u003c/p\u003e",
          "module": "WaiAppStatic.Types",
          "name": "fileName",
          "package": "wai-app-static",
          "signature": "Piece",
          "source": "src/WaiAppStatic-Types.html#File",
          "type": "function"
        },
        "index": {
          "description": "Last component of the filename",
          "hierarchy": "WaiAppStatic Types",
          "module": "WaiAppStatic.Types",
          "name": "fileName",
          "package": "wai-app-static",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#v:fileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow to construct a WAI response for this file. Some files are stored\n on the filesystem and can use \u003ccode\u003eResponseFile\u003c/code\u003e, while others are stored\n in memory and should use \u003ccode\u003eResponseBuilder\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "WaiAppStatic.Types",
          "name": "fileToResponse",
          "package": "wai-app-static",
          "signature": "Status -\u003e ResponseHeaders -\u003e Response",
          "source": "src/WaiAppStatic-Types.html#File",
          "type": "function"
        },
        "index": {
          "description": "How to construct WAI response for this file Some files are stored on the filesystem and can use ResponseFile while others are stored in memory and should use ResponseBuilder",
          "hierarchy": "WaiAppStatic Types",
          "module": "WaiAppStatic.Types",
          "name": "fileToResponse",
          "normalized": "Status-\u003eResponseHeaders-\u003eResponse",
          "package": "wai-app-static",
          "partial": "To Response",
          "signature": "Status-\u003eResponseHeaders-\u003eResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#v:fileToResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "WaiAppStatic.Types",
          "name": "folderContents",
          "package": "wai-app-static",
          "signature": "[Either FolderName File]",
          "source": "src/WaiAppStatic-Types.html#Folder",
          "type": "function"
        },
        "index": {
          "hierarchy": "WaiAppStatic Types",
          "module": "WaiAppStatic.Types",
          "name": "folderContents",
          "normalized": "[Either FolderName File]",
          "package": "wai-app-static",
          "partial": "Contents",
          "signature": "[Either FolderName File]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#v:folderContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "WaiAppStatic.Types",
          "name": "fromPiece",
          "package": "wai-app-static",
          "signature": "Piece -\u003e Text",
          "source": "src/WaiAppStatic-Types.html#fromPiece",
          "type": "function"
        },
        "index": {
          "hierarchy": "WaiAppStatic Types",
          "module": "WaiAppStatic.Types",
          "name": "fromPiece",
          "normalized": "Piece-\u003eText",
          "package": "wai-app-static",
          "partial": "Piece",
          "signature": "Piece-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#v:fromPiece"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine the mime type of the given file. Note that this function\n lives in \u003ccode\u003eIO\u003c/code\u003e in case you want to perform more complicated mimetype\n analysis, such as via the \u003ccode\u003efile\u003c/code\u003e utility.\n\u003c/p\u003e",
          "module": "WaiAppStatic.Types",
          "name": "ssGetMimeType",
          "package": "wai-app-static",
          "signature": "File -\u003e IO MimeType",
          "source": "src/WaiAppStatic-Types.html#StaticSettings",
          "type": "function"
        },
        "index": {
          "description": "Determine the mime type of the given file Note that this function lives in IO in case you want to perform more complicated mimetype analysis such as via the file utility",
          "hierarchy": "WaiAppStatic Types",
          "module": "WaiAppStatic.Types",
          "name": "ssGetMimeType",
          "normalized": "File-\u003eIO MimeType",
          "package": "wai-app-static",
          "partial": "Get Mime Type",
          "signature": "File-\u003eIO MimeType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#v:ssGetMimeType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOrdered list of filenames to be used for indices. If the user\n requests a folder, and a file with the given name is found in that\n folder, that file is served. This supercedes any directory listing.\n\u003c/p\u003e",
          "module": "WaiAppStatic.Types",
          "name": "ssIndices",
          "package": "wai-app-static",
          "signature": "[Piece]",
          "source": "src/WaiAppStatic-Types.html#StaticSettings",
          "type": "function"
        },
        "index": {
          "description": "Ordered list of filenames to be used for indices If the user requests folder and file with the given name is found in that folder that file is served This supercedes any directory listing",
          "hierarchy": "WaiAppStatic Types",
          "module": "WaiAppStatic.Types",
          "name": "ssIndices",
          "normalized": "[Piece]",
          "package": "wai-app-static",
          "partial": "Indices",
          "signature": "[Piece]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#v:ssIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow to perform a directory listing. Optional. Will be used when the\n user requested a folder.\n\u003c/p\u003e",
          "module": "WaiAppStatic.Types",
          "name": "ssListing",
          "package": "wai-app-static",
          "signature": "Maybe Listing",
          "source": "src/WaiAppStatic-Types.html#StaticSettings",
          "type": "function"
        },
        "index": {
          "description": "How to perform directory listing Optional Will be used when the user requested folder",
          "hierarchy": "WaiAppStatic Types",
          "module": "WaiAppStatic.Types",
          "name": "ssListing",
          "package": "wai-app-static",
          "partial": "Listing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#v:ssListing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup a single file or folder. This is how you can control storage\n backend (filesystem, embedded, etc) and where to lookup.\n\u003c/p\u003e",
          "module": "WaiAppStatic.Types",
          "name": "ssLookupFile",
          "package": "wai-app-static",
          "signature": "Pieces -\u003e IO LookupResult",
          "source": "src/WaiAppStatic-Types.html#StaticSettings",
          "type": "function"
        },
        "index": {
          "description": "Lookup single file or folder This is how you can control storage backend filesystem embedded etc and where to lookup",
          "hierarchy": "WaiAppStatic Types",
          "module": "WaiAppStatic.Types",
          "name": "ssLookupFile",
          "normalized": "Pieces-\u003eIO LookupResult",
          "package": "wai-app-static",
          "partial": "Lookup File",
          "signature": "Pieces-\u003eIO LookupResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#v:ssLookupFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValue to provide for max age in the cache-control.\n\u003c/p\u003e",
          "module": "WaiAppStatic.Types",
          "name": "ssMaxAge",
          "package": "wai-app-static",
          "signature": "MaxAge",
          "source": "src/WaiAppStatic-Types.html#StaticSettings",
          "type": "function"
        },
        "index": {
          "description": "Value to provide for max age in the cache-control",
          "hierarchy": "WaiAppStatic Types",
          "module": "WaiAppStatic.Types",
          "name": "ssMaxAge",
          "package": "wai-app-static",
          "partial": "Max Age",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#v:ssMaxAge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a requested path and a new destination, construct a string\n that will go there. Default implementation will use relative paths.\n\u003c/p\u003e",
          "module": "WaiAppStatic.Types",
          "name": "ssMkRedirect",
          "package": "wai-app-static",
          "signature": "Pieces -\u003e ByteString -\u003e ByteString",
          "source": "src/WaiAppStatic-Types.html#StaticSettings",
          "type": "function"
        },
        "index": {
          "description": "Given requested path and new destination construct string that will go there Default implementation will use relative paths",
          "hierarchy": "WaiAppStatic Types",
          "module": "WaiAppStatic.Types",
          "name": "ssMkRedirect",
          "normalized": "Pieces-\u003eByteString-\u003eByteString",
          "package": "wai-app-static",
          "partial": "Mk Redirect",
          "signature": "Pieces-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#v:ssMkRedirect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf \u003ccode\u003eTrue\u003c/code\u003e, send a redirect to the user when a folder is requested\n and an index page should be displayed. When \u003ccode\u003eFalse\u003c/code\u003e, display the\n content immediately.\n\u003c/p\u003e",
          "module": "WaiAppStatic.Types",
          "name": "ssRedirectToIndex",
          "package": "wai-app-static",
          "signature": "Bool",
          "source": "src/WaiAppStatic-Types.html#StaticSettings",
          "type": "function"
        },
        "index": {
          "description": "If True send redirect to the user when folder is requested and an index page should be displayed When False display the content immediately",
          "hierarchy": "WaiAppStatic Types",
          "module": "WaiAppStatic.Types",
          "name": "ssRedirectToIndex",
          "package": "wai-app-static",
          "partial": "Redirect To Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#v:ssRedirectToIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrefer usage of etag caching to last-modified caching.\n\u003c/p\u003e",
          "module": "WaiAppStatic.Types",
          "name": "ssUseHash",
          "package": "wai-app-static",
          "signature": "Bool",
          "source": "src/WaiAppStatic-Types.html#StaticSettings",
          "type": "function"
        },
        "index": {
          "description": "Prefer usage of etag caching to last-modified caching",
          "hierarchy": "WaiAppStatic Types",
          "module": "WaiAppStatic.Types",
          "name": "ssUseHash",
          "package": "wai-app-static",
          "partial": "Use Hash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#v:ssUseHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSmart constructor for a \u003ccode\u003ePiece\u003c/code\u003e. Won't allow unsafe components, such as\n pieces beginning with a period or containing a slash. This \u003cem\u003ewill\u003c/em\u003e, however,\n allow null pieces.\n\u003c/p\u003e",
          "module": "WaiAppStatic.Types",
          "name": "toPiece",
          "package": "wai-app-static",
          "signature": "Text -\u003e Maybe Piece",
          "source": "src/WaiAppStatic-Types.html#toPiece",
          "type": "function"
        },
        "index": {
          "description": "Smart constructor for Piece Won allow unsafe components such as pieces beginning with period or containing slash This will however allow null pieces",
          "hierarchy": "WaiAppStatic Types",
          "module": "WaiAppStatic.Types",
          "name": "toPiece",
          "normalized": "Text-\u003eMaybe Piece",
          "package": "wai-app-static",
          "partial": "Piece",
          "signature": "Text-\u003eMaybe Piece",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#v:toPiece"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCall \u003ccode\u003etoPiece\u003c/code\u003e on a list.\n\u003c/p\u003e\u003cpre\u003e toPieces = mapM toPiece\n\u003c/pre\u003e",
          "module": "WaiAppStatic.Types",
          "name": "toPieces",
          "package": "wai-app-static",
          "signature": "[Text] -\u003e Maybe Pieces",
          "source": "src/WaiAppStatic-Types.html#toPieces",
          "type": "function"
        },
        "index": {
          "description": "Call toPiece on list toPieces mapM toPiece",
          "hierarchy": "WaiAppStatic Types",
          "module": "WaiAppStatic.Types",
          "name": "toPieces",
          "normalized": "[Text]-\u003eMaybe Pieces",
          "package": "wai-app-static",
          "partial": "Pieces",
          "signature": "[Text]-\u003eMaybe Pieces",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#v:toPieces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003ePiece\u003c/code\u003e without input validation.\n\u003c/p\u003e",
          "module": "WaiAppStatic.Types",
          "name": "unsafeToPiece",
          "package": "wai-app-static",
          "signature": "Text -\u003e Piece",
          "source": "src/WaiAppStatic-Types.html#unsafeToPiece",
          "type": "function"
        },
        "index": {
          "description": "Construct Piece without input validation",
          "hierarchy": "WaiAppStatic Types",
          "module": "WaiAppStatic.Types",
          "name": "unsafeToPiece",
          "normalized": "Text-\u003ePiece",
          "package": "wai-app-static",
          "partial": "To Piece",
          "signature": "Text-\u003ePiece",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#v:unsafeToPiece"
      }
    }
  ]
]