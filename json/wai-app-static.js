[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/Network-Wai-Application-Static.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStatic file serving for WAI.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Wai.Application.Static",
        "fct-package": "wai-app-static",
        "fct-signature": "module",
        "fct-source": "src/Network-Wai-Application-Static.html",
        "fct-type": "module",
        "title": "Static"
      },
      "index": {
        "description": "Static file serving for WAI",
        "hierarchy": "Network Wai Application Static",
        "module": "Network.Wai.Application.Static",
        "name": "Static",
        "normalized": "",
        "package": "wai-app-static",
        "partial": "Static",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/Network-Wai-Application-Static.html#t:StaticSettings",
      "description": {
        "fct-descr": "\u003cp\u003eAll of the settings available to users for tweaking wai-app-static.\n\u003c/p\u003e\u003cp\u003eNote that you should use the settings type approach for modifying values.\n See \u003ca\u003ehttp://www.yesodweb.com/book/settings-types\u003c/a\u003e for more information.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Application.Static",
        "fct-package": "wai-app-static",
        "fct-signature": "data",
        "fct-source": "src/WaiAppStatic-Types.html#StaticSettings",
        "fct-type": "data",
        "title": "StaticSettings"
      },
      "index": {
        "description": "All of the settings available to users for tweaking wai-app-static Note that you should use the settings type approach for modifying values See http www.yesodweb.com book settings-types for more information",
        "hierarchy": "Network Wai Application Static",
        "module": "Network.Wai.Application.Static",
        "name": "StaticSettings",
        "normalized": "",
        "package": "wai-app-static",
        "partial": "Static Settings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/Network-Wai-Application-Static.html#v:defaultFileServerSettings",
      "description": {
        "fct-descr": "\u003cp\u003eSettings optimized for a file server. More conservative caching will be\n applied, and indices and listings are enabled.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Application.Static",
        "fct-package": "wai-app-static",
        "fct-signature": "FilePath-\u003e StaticSettings",
        "fct-type": "function",
        "title": "defaultFileServerSettings"
      },
      "index": {
        "description": "Settings optimized for file server More conservative caching will be applied and indices and listings are enabled",
        "hierarchy": "Network Wai Application Static",
        "module": "Network.Wai.Application.Static",
        "name": "defaultFileServerSettings",
        "normalized": "FilePath-\u003eStaticSettings",
        "package": "wai-app-static",
        "partial": "File Server Settings",
        "signature": "FilePath-\u003eStaticSettings"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/Network-Wai-Application-Static.html#v:defaultWebAppSettings",
      "description": {
        "fct-descr": "\u003cp\u003eSettings optimized for a web application. Files will have aggressive\n caching applied and hashes calculated, and indices and listings are disabled.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Application.Static",
        "fct-package": "wai-app-static",
        "fct-signature": "FilePath-\u003e StaticSettings",
        "fct-type": "function",
        "title": "defaultWebAppSettings"
      },
      "index": {
        "description": "Settings optimized for web application Files will have aggressive caching applied and hashes calculated and indices and listings are disabled",
        "hierarchy": "Network Wai Application Static",
        "module": "Network.Wai.Application.Static",
        "name": "defaultWebAppSettings",
        "normalized": "FilePath-\u003eStaticSettings",
        "package": "wai-app-static",
        "partial": "Web App Settings",
        "signature": "FilePath-\u003eStaticSettings"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/Network-Wai-Application-Static.html#v:embeddedSettings",
      "description": {
        "fct-descr": "\u003cp\u003eServe the list of path/content pairs directly from memory.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Application.Static",
        "fct-package": "wai-app-static",
        "fct-signature": "[(FilePath, ByteString)] -\u003e StaticSettings",
        "fct-source": "src/WaiAppStatic-Storage-Embedded-Runtime.html#embeddedSettings",
        "fct-type": "function",
        "title": "embeddedSettings"
      },
      "index": {
        "description": "Serve the list of path content pairs directly from memory",
        "hierarchy": "Network Wai Application Static",
        "module": "Network.Wai.Application.Static",
        "name": "embeddedSettings",
        "normalized": "[(FilePath,ByteString)]-\u003eStaticSettings",
        "package": "wai-app-static",
        "partial": "Settings",
        "signature": "[(FilePath,ByteString)]-\u003eStaticSettings"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/Network-Wai-Application-Static.html#v:ssGetMimeType",
      "description": {
        "fct-descr": "\u003cp\u003eDetermine the mime type of the given file. Note that this function\n lives in \u003ccode\u003eIO\u003c/code\u003e in case you want to perform more complicated mimetype\n analysis, such as via the \u003ccode\u003efile\u003c/code\u003e utility.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Application.Static",
        "fct-package": "wai-app-static",
        "fct-signature": "StaticSettings -\u003e File -\u003e IO MimeType",
        "fct-source": "src/WaiAppStatic-Types.html#ssGetMimeType",
        "fct-type": "function",
        "title": "ssGetMimeType"
      },
      "index": {
        "description": "Determine the mime type of the given file Note that this function lives in IO in case you want to perform more complicated mimetype analysis such as via the file utility",
        "hierarchy": "Network Wai Application Static",
        "module": "Network.Wai.Application.Static",
        "name": "ssGetMimeType",
        "normalized": "StaticSettings-\u003eFile-\u003eIO MimeType",
        "package": "wai-app-static",
        "partial": "Get Mime Type",
        "signature": "StaticSettings-\u003eFile-\u003eIO MimeType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/Network-Wai-Application-Static.html#v:ssIndices",
      "description": {
        "fct-descr": "\u003cp\u003eOrdered list of filenames to be used for indices. If the user\n requests a folder, and a file with the given name is found in that\n folder, that file is served. This supercedes any directory listing.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Application.Static",
        "fct-package": "wai-app-static",
        "fct-signature": "StaticSettings -\u003e [Piece]",
        "fct-source": "src/WaiAppStatic-Types.html#ssIndices",
        "fct-type": "function",
        "title": "ssIndices"
      },
      "index": {
        "description": "Ordered list of filenames to be used for indices If the user requests folder and file with the given name is found in that folder that file is served This supercedes any directory listing",
        "hierarchy": "Network Wai Application Static",
        "module": "Network.Wai.Application.Static",
        "name": "ssIndices",
        "normalized": "StaticSettings-\u003e[Piece]",
        "package": "wai-app-static",
        "partial": "Indices",
        "signature": "StaticSettings-\u003e[Piece]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/Network-Wai-Application-Static.html#v:ssListing",
      "description": {
        "fct-descr": "\u003cp\u003eHow to perform a directory listing. Optional. Will be used when the\n user requested a folder.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Application.Static",
        "fct-package": "wai-app-static",
        "fct-signature": "StaticSettings -\u003e Maybe Listing",
        "fct-source": "src/WaiAppStatic-Types.html#ssListing",
        "fct-type": "function",
        "title": "ssListing"
      },
      "index": {
        "description": "How to perform directory listing Optional Will be used when the user requested folder",
        "hierarchy": "Network Wai Application Static",
        "module": "Network.Wai.Application.Static",
        "name": "ssListing",
        "normalized": "StaticSettings-\u003eMaybe Listing",
        "package": "wai-app-static",
        "partial": "Listing",
        "signature": "StaticSettings-\u003eMaybe Listing"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/Network-Wai-Application-Static.html#v:ssLookupFile",
      "description": {
        "fct-descr": "\u003cp\u003eLookup a single file or folder. This is how you can control storage\n backend (filesystem, embedded, etc) and where to lookup.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Application.Static",
        "fct-package": "wai-app-static",
        "fct-signature": "StaticSettings -\u003e Pieces -\u003e IO LookupResult",
        "fct-source": "src/WaiAppStatic-Types.html#ssLookupFile",
        "fct-type": "function",
        "title": "ssLookupFile"
      },
      "index": {
        "description": "Lookup single file or folder This is how you can control storage backend filesystem embedded etc and where to lookup",
        "hierarchy": "Network Wai Application Static",
        "module": "Network.Wai.Application.Static",
        "name": "ssLookupFile",
        "normalized": "StaticSettings-\u003ePieces-\u003eIO LookupResult",
        "package": "wai-app-static",
        "partial": "Lookup File",
        "signature": "StaticSettings-\u003ePieces-\u003eIO LookupResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/Network-Wai-Application-Static.html#v:ssMaxAge",
      "description": {
        "fct-descr": "\u003cp\u003eValue to provide for max age in the cache-control.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Application.Static",
        "fct-package": "wai-app-static",
        "fct-signature": "StaticSettings -\u003e MaxAge",
        "fct-source": "src/WaiAppStatic-Types.html#ssMaxAge",
        "fct-type": "function",
        "title": "ssMaxAge"
      },
      "index": {
        "description": "Value to provide for max age in the cache-control",
        "hierarchy": "Network Wai Application Static",
        "module": "Network.Wai.Application.Static",
        "name": "ssMaxAge",
        "normalized": "StaticSettings-\u003eMaxAge",
        "package": "wai-app-static",
        "partial": "Max Age",
        "signature": "StaticSettings-\u003eMaxAge"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/Network-Wai-Application-Static.html#v:ssMkRedirect",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a requested path and a new destination, construct a string\n that will go there. Default implementation will use relative paths.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Application.Static",
        "fct-package": "wai-app-static",
        "fct-signature": "StaticSettings -\u003e Pieces -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/WaiAppStatic-Types.html#ssMkRedirect",
        "fct-type": "function",
        "title": "ssMkRedirect"
      },
      "index": {
        "description": "Given requested path and new destination construct string that will go there Default implementation will use relative paths",
        "hierarchy": "Network Wai Application Static",
        "module": "Network.Wai.Application.Static",
        "name": "ssMkRedirect",
        "normalized": "StaticSettings-\u003ePieces-\u003eByteString-\u003eByteString",
        "package": "wai-app-static",
        "partial": "Mk Redirect",
        "signature": "StaticSettings-\u003ePieces-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/Network-Wai-Application-Static.html#v:ssRedirectToIndex",
      "description": {
        "fct-descr": "\u003cp\u003eIf \u003ccode\u003eTrue\u003c/code\u003e, send a redirect to the user when a folder is requested\n and an index page should be displayed. When \u003ccode\u003eFalse\u003c/code\u003e, display the\n content immediately.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Application.Static",
        "fct-package": "wai-app-static",
        "fct-signature": "StaticSettings -\u003e Bool",
        "fct-source": "src/WaiAppStatic-Types.html#ssRedirectToIndex",
        "fct-type": "function",
        "title": "ssRedirectToIndex"
      },
      "index": {
        "description": "If True send redirect to the user when folder is requested and an index page should be displayed When False display the content immediately",
        "hierarchy": "Network Wai Application Static",
        "module": "Network.Wai.Application.Static",
        "name": "ssRedirectToIndex",
        "normalized": "StaticSettings-\u003eBool",
        "package": "wai-app-static",
        "partial": "Redirect To Index",
        "signature": "StaticSettings-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/Network-Wai-Application-Static.html#v:staticApp",
      "description": {
        "fct-descr": "\u003cp\u003eTurn a \u003ccode\u003eStaticSettings\u003c/code\u003e into a WAI application.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Application.Static",
        "fct-package": "wai-app-static",
        "fct-signature": "StaticSettings -\u003e Application",
        "fct-source": "src/Network-Wai-Application-Static.html#staticApp",
        "fct-type": "function",
        "title": "staticApp"
      },
      "index": {
        "description": "Turn StaticSettings into WAI application",
        "hierarchy": "Network Wai Application Static",
        "module": "Network.Wai.Application.Static",
        "name": "staticApp",
        "normalized": "StaticSettings-\u003eApplication",
        "package": "wai-app-static",
        "partial": "App",
        "signature": "StaticSettings-\u003eApplication"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/Network-Wai-Application-Static.html#v:webAppSettingsWithLookup",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003edefaultWebAppSettings\u003c/code\u003e, but additionally uses a specialized\n \u003ccode\u003eETagLookup\u003c/code\u003e in place of the standard one. This can allow you to cache your\n hash values, or even precompute them.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Application.Static",
        "fct-package": "wai-app-static",
        "fct-signature": "FilePath-\u003e ETagLookup-\u003e StaticSettings",
        "fct-type": "function",
        "title": "webAppSettingsWithLookup"
      },
      "index": {
        "description": "Same as defaultWebAppSettings but additionally uses specialized ETagLookup in place of the standard one This can allow you to cache your hash values or even precompute them",
        "hierarchy": "Network Wai Application Static",
        "module": "Network.Wai.Application.Static",
        "name": "webAppSettingsWithLookup",
        "normalized": "FilePath-\u003eETagLookup-\u003eStaticSettings",
        "package": "wai-app-static",
        "partial": "App Settings With Lookup",
        "signature": "FilePath-\u003eETagLookup-\u003eStaticSettings"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Listing.html#",
      "description": {
        "fct-module": "WaiAppStatic.Listing",
        "fct-package": "wai-app-static",
        "fct-signature": "module",
        "fct-source": "src/WaiAppStatic-Listing.html",
        "fct-type": "module",
        "title": "Listing"
      },
      "index": {
        "description": "",
        "hierarchy": "WaiAppStatic Listing",
        "module": "WaiAppStatic.Listing",
        "name": "Listing",
        "normalized": "",
        "package": "wai-app-static",
        "partial": "Listing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Listing.html#v:defaultListing",
      "description": {
        "fct-descr": "\u003cp\u003eProvides a default directory listing, suitable for most apps.\n\u003c/p\u003e\u003cp\u003eCode below taken from Happstack: \u003ca\u003ehttp://patch-tag.com/r/mae/happstack/snapshot/current/content/pretty/happstack-server/src/Happstack/Server/FileServe/BuildingBlocks.hs\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "WaiAppStatic.Listing",
        "fct-package": "wai-app-static",
        "fct-signature": "Listing",
        "fct-source": "src/WaiAppStatic-Listing.html#defaultListing",
        "fct-type": "function",
        "title": "defaultListing"
      },
      "index": {
        "description": "Provides default directory listing suitable for most apps Code below taken from Happstack http patch-tag.com mae happstack snapshot current content pretty happstack-server src Happstack Server FileServe BuildingBlocks.hs",
        "hierarchy": "WaiAppStatic Listing",
        "module": "WaiAppStatic.Listing",
        "name": "defaultListing",
        "normalized": "",
        "package": "wai-app-static",
        "partial": "Listing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Storage-Embedded.html#",
      "description": {
        "fct-module": "WaiAppStatic.Storage.Embedded",
        "fct-package": "wai-app-static",
        "fct-signature": "module",
        "fct-source": "src/WaiAppStatic-Storage-Embedded.html",
        "fct-type": "module",
        "title": "Embedded"
      },
      "index": {
        "description": "",
        "hierarchy": "WaiAppStatic Storage Embedded",
        "module": "WaiAppStatic.Storage.Embedded",
        "name": "Embedded",
        "normalized": "",
        "package": "wai-app-static",
        "partial": "Embedded",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Storage-Embedded.html#t:EmbeddableEntry",
      "description": {
        "fct-descr": "\u003cp\u003eUsed at compile time to hold data about an entry to embed into the compiled executable.\n\u003c/p\u003e",
        "fct-module": "WaiAppStatic.Storage.Embedded",
        "fct-package": "wai-app-static",
        "fct-signature": "data",
        "fct-source": "src/WaiAppStatic-Storage-Embedded-TH.html#EmbeddableEntry",
        "fct-type": "data",
        "title": "EmbeddableEntry"
      },
      "index": {
        "description": "Used at compile time to hold data about an entry to embed into the compiled executable",
        "hierarchy": "WaiAppStatic Storage Embedded",
        "module": "WaiAppStatic.Storage.Embedded",
        "name": "EmbeddableEntry",
        "normalized": "",
        "package": "wai-app-static",
        "partial": "Embeddable Entry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Storage-Embedded.html#t:Etag",
      "description": {
        "fct-descr": "\u003cp\u003eAn Etag is used to return 304 Not Modified responses so the client does not need\n   to download resources a second time.  Usually the etag is built from a hash of\n   the content.  To disable Etags, you can pass the empty string.  This will cause the\n   content to be redownloaded on every request.\n\u003c/p\u003e",
        "fct-module": "WaiAppStatic.Storage.Embedded",
        "fct-package": "wai-app-static",
        "fct-signature": "type",
        "fct-source": "src/WaiAppStatic-Storage-Embedded-TH.html#Etag",
        "fct-type": "type",
        "title": "Etag"
      },
      "index": {
        "description": "An Etag is used to return Not Modified responses so the client does not need to download resources second time Usually the etag is built from hash of the content To disable Etags you can pass the empty string This will cause the content to be redownloaded on every request",
        "hierarchy": "WaiAppStatic Storage Embedded",
        "module": "WaiAppStatic.Storage.Embedded",
        "name": "Etag",
        "normalized": "",
        "package": "wai-app-static",
        "partial": "Etag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Storage-Embedded.html#v:EmbeddableEntry",
      "description": {
        "fct-module": "WaiAppStatic.Storage.Embedded",
        "fct-package": "wai-app-static",
        "fct-signature": "EmbeddableEntry",
        "fct-source": "src/WaiAppStatic-Storage-Embedded-TH.html#EmbeddableEntry",
        "fct-type": "function",
        "title": "EmbeddableEntry"
      },
      "index": {
        "description": "",
        "hierarchy": "WaiAppStatic Storage Embedded",
        "module": "WaiAppStatic.Storage.Embedded",
        "name": "EmbeddableEntry",
        "normalized": "",
        "package": "wai-app-static",
        "partial": "Embeddable Entry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Storage-Embedded.html#v:eContent",
      "description": {
        "fct-descr": "\u003cp\u003eThe content itself.  The content can be given as a tag and bytestring,\n   in which case the content will be embedded directly into the execuatble.\n   Alternatively, the content can be given as a template haskell expression\n   returning \u003ccode\u003eIO (\u003ccode\u003e\u003ca\u003eEtag\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e in which case this action will\n   be executed on every request to reload the content (this is useful\n   for a debugging mode).\n\u003c/p\u003e",
        "fct-module": "WaiAppStatic.Storage.Embedded",
        "fct-package": "wai-app-static",
        "fct-signature": "Either (Etag, ByteString) ExpQ",
        "fct-source": "src/WaiAppStatic-Storage-Embedded-TH.html#EmbeddableEntry",
        "fct-type": "function",
        "title": "eContent"
      },
      "index": {
        "description": "The content itself The content can be given as tag and bytestring in which case the content will be embedded directly into the execuatble Alternatively the content can be given as template haskell expression returning IO Etag ByteString in which case this action will be executed on every request to reload the content this is useful for debugging mode",
        "hierarchy": "WaiAppStatic Storage Embedded",
        "module": "WaiAppStatic.Storage.Embedded",
        "name": "eContent",
        "normalized": "Either(Etag,ByteString)ExpQ",
        "package": "wai-app-static",
        "partial": "Content",
        "signature": "Either(Etag,ByteString)ExpQ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Storage-Embedded.html#v:eLocation",
      "description": {
        "fct-descr": "\u003cp\u003eThe location where this resource should be served from.  The\n   location can contain forward slashes (/) to simulate directories,\n   but must not end with a forward slash.\n\u003c/p\u003e",
        "fct-module": "WaiAppStatic.Storage.Embedded",
        "fct-package": "wai-app-static",
        "fct-signature": "Text",
        "fct-source": "src/WaiAppStatic-Storage-Embedded-TH.html#EmbeddableEntry",
        "fct-type": "function",
        "title": "eLocation"
      },
      "index": {
        "description": "The location where this resource should be served from The location can contain forward slashes to simulate directories but must not end with forward slash",
        "hierarchy": "WaiAppStatic Storage Embedded",
        "module": "WaiAppStatic.Storage.Embedded",
        "name": "eLocation",
        "normalized": "",
        "package": "wai-app-static",
        "partial": "Location",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Storage-Embedded.html#v:eMimeType",
      "description": {
        "fct-descr": "\u003cp\u003eThe mime type.\n\u003c/p\u003e",
        "fct-module": "WaiAppStatic.Storage.Embedded",
        "fct-package": "wai-app-static",
        "fct-signature": "MimeType",
        "fct-source": "src/WaiAppStatic-Storage-Embedded-TH.html#EmbeddableEntry",
        "fct-type": "function",
        "title": "eMimeType"
      },
      "index": {
        "description": "The mime type",
        "hierarchy": "WaiAppStatic Storage Embedded",
        "module": "WaiAppStatic.Storage.Embedded",
        "name": "eMimeType",
        "normalized": "",
        "package": "wai-app-static",
        "partial": "Mime Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Storage-Embedded.html#v:embeddedSettings",
      "description": {
        "fct-descr": "\u003cp\u003eServe the list of path/content pairs directly from memory.\n\u003c/p\u003e",
        "fct-module": "WaiAppStatic.Storage.Embedded",
        "fct-package": "wai-app-static",
        "fct-signature": "[(FilePath, ByteString)] -\u003e StaticSettings",
        "fct-source": "src/WaiAppStatic-Storage-Embedded-Runtime.html#embeddedSettings",
        "fct-type": "function",
        "title": "embeddedSettings"
      },
      "index": {
        "description": "Serve the list of path content pairs directly from memory",
        "hierarchy": "WaiAppStatic Storage Embedded",
        "module": "WaiAppStatic.Storage.Embedded",
        "name": "embeddedSettings",
        "normalized": "[(FilePath,ByteString)]-\u003eStaticSettings",
        "package": "wai-app-static",
        "partial": "Settings",
        "signature": "[(FilePath,ByteString)]-\u003eStaticSettings"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Storage-Embedded.html#v:mkSettings",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eStaticSettings\u003c/a\u003e\u003c/code\u003e at compile time that embeds resources directly into the compiled\n   executable.  The embedded resources are precompressed (depending on mime type)\n   so that during runtime the resource can be served very quickly.\n\u003c/p\u003e\u003cp\u003eBecause of GHC Template Haskell stage restrictions, you must define\n   the entries in a different module than where you create the \u003ccode\u003e\u003ca\u003eStaticSettings\u003c/a\u003e\u003c/code\u003e.\n   For example,\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE TemplateHaskell, QuasiQuotes, OverloadedStrings #-}\n module A (mkEmbedded) where\n \n import WaiAppStatic.Storage.Embedded\n import Crypto.Hash.MD5 (hashlazy)\n import qualified Data.ByteString.Lazy as BL\n import qualified Data.ByteString.Base64 as B64\n import qualified Data.Text as T\n import qualified Data.Text.Encoding as T\n \n hash :: BL.ByteString -\u003e T.Text\n hash = T.take 8 . T.decodeUtf8 . B64.encode . hashlazy\n \n mkEmbedded :: IO [EmbeddableEntry]\n mkEmbedded = do\n     file \u003c- BL.readFile \"test.css\"\n     let emb = EmbeddableEntry {\n                   eLocation = \"somedir/test.css\"\n                 , eMimeType = \"text/css\"\n                 , eContent  = Left (hash file, file)\n                 }\n \n     let reload = EmbeddableEntry {\n                      eLocation = \"anotherdir/test2.txt\"\n                    , eMimeType = \"text/plain\"\n                    , eContent  = Right [| BL.readFile \"test2.txt\" \u003e\u003e= \\c -\u003e return (hash c, c) |]\n                    }\n \n     return [emb, reload]\n\u003c/pre\u003e\u003cp\u003eThe above \u003ccode\u003emkEmbedded\u003c/code\u003e will be executed at compile time.  It loads the contents of test.css and\n computes the hash of test.css for the etag.  The content will be available at the URL somedir/test.css.\n Internally, \u003ccode\u003eembedApp\u003c/code\u003e below will attempt to compress the content at compile time. The compression will\n only happen if the compressed content is shorter than the original and the mime type is either text or\n javascript.  If the content is compressed, at runtime the precomputed compressed content will be served\n with the appropriate HTTP header. If \u003ccode\u003eembedApp\u003c/code\u003e decides not to compress the content, it will be\n served directly.\n\u003c/p\u003e\u003cp\u003eSecondly, \u003ccode\u003emkEmbedded\u003c/code\u003e creates a reloadable entry.  This will be available at the URL anotherdir/test2.txt.\n Whenver a request comes in for anotherdir/test2.txt, the action inside the quasiquote in eContent will\n be executed.  This will re-read the test2.txt file and recompute its hash.\n\u003c/p\u003e\u003cp\u003eFinally, here is a module which uses the above action to create a \u003ccode\u003e\u003ca\u003eApplication\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE TemplateHaskell #-}\n module B where\n \n import A\n import Network.Wai (Application)\n import Network.Wai.Application.Static (staticApp)\n import WaiAppStatic.Storage.Embedded\n import Network.Wai.Handler.Warp (run)\n \n myApp :: Application\n myApp = staticApp $(mkSettings mkEmbedded)\n \n main :: IO ()\n main = run 3000 myApp\n\u003c/pre\u003e",
        "fct-module": "WaiAppStatic.Storage.Embedded",
        "fct-package": "wai-app-static",
        "fct-signature": "IO [EmbeddableEntry] -\u003e ExpQ",
        "fct-source": "src/WaiAppStatic-Storage-Embedded-TH.html#mkSettings",
        "fct-type": "function",
        "title": "mkSettings"
      },
      "index": {
        "description": "Create StaticSettings at compile time that embeds resources directly into the compiled executable The embedded resources are precompressed depending on mime type so that during runtime the resource can be served very quickly Because of GHC Template Haskell stage restrictions you must define the entries in different module than where you create the StaticSettings For example LANGUAGE TemplateHaskell QuasiQuotes OverloadedStrings module mkEmbedded where import WaiAppStatic.Storage.Embedded import Crypto.Hash.MD5 hashlazy import qualified Data.ByteString.Lazy as BL import qualified Data.ByteString.Base64 as B64 import qualified Data.Text as import qualified Data.Text.Encoding as hash BL.ByteString T.Text hash T.take T.decodeUtf8 B64.encode hashlazy mkEmbedded IO EmbeddableEntry mkEmbedded do file BL.readFile test.css let emb EmbeddableEntry eLocation somedir test.css eMimeType text css eContent Left hash file file let reload EmbeddableEntry eLocation anotherdir test2.txt eMimeType text plain eContent Right BL.readFile test2.txt return hash return emb reload The above mkEmbedded will be executed at compile time It loads the contents of test.css and computes the hash of test.css for the etag The content will be available at the URL somedir test.css Internally embedApp below will attempt to compress the content at compile time The compression will only happen if the compressed content is shorter than the original and the mime type is either text or javascript If the content is compressed at runtime the precomputed compressed content will be served with the appropriate HTTP header If embedApp decides not to compress the content it will be served directly Secondly mkEmbedded creates reloadable entry This will be available at the URL anotherdir test2.txt Whenver request comes in for anotherdir test2.txt the action inside the quasiquote in eContent will be executed This will re-read the test2.txt file and recompute its hash Finally here is module which uses the above action to create Application LANGUAGE TemplateHaskell module where import import Network.Wai Application import Network.Wai.Application.Static staticApp import WaiAppStatic.Storage.Embedded import Network.Wai.Handler.Warp run myApp Application myApp staticApp mkSettings mkEmbedded main IO main run myApp",
        "hierarchy": "WaiAppStatic Storage Embedded",
        "module": "WaiAppStatic.Storage.Embedded",
        "name": "mkSettings",
        "normalized": "IO[EmbeddableEntry]-\u003eExpQ",
        "package": "wai-app-static",
        "partial": "Settings",
        "signature": "IO[EmbeddableEntry]-\u003eExpQ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Storage-Filesystem.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAccess files on the filesystem.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "WaiAppStatic.Storage.Filesystem",
        "fct-package": "wai-app-static",
        "fct-signature": "module",
        "fct-source": "src/WaiAppStatic-Storage-Filesystem.html",
        "fct-type": "module",
        "title": "Filesystem"
      },
      "index": {
        "description": "Access files on the filesystem",
        "hierarchy": "WaiAppStatic Storage Filesystem",
        "module": "WaiAppStatic.Storage.Filesystem",
        "name": "Filesystem",
        "normalized": "",
        "package": "wai-app-static",
        "partial": "Filesystem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Storage-Filesystem.html#t:ETagLookup",
      "description": {
        "fct-descr": "\u003cp\u003eHow to calculate etags. Can perform filesystem reads on each call, or use\n some caching mechanism.\n\u003c/p\u003e",
        "fct-module": "WaiAppStatic.Storage.Filesystem",
        "fct-package": "wai-app-static",
        "fct-signature": "type",
        "fct-source": "src/WaiAppStatic-Storage-Filesystem.html#ETagLookup",
        "fct-type": "type",
        "title": "ETagLookup"
      },
      "index": {
        "description": "How to calculate etags Can perform filesystem reads on each call or use some caching mechanism",
        "hierarchy": "WaiAppStatic Storage Filesystem",
        "module": "WaiAppStatic.Storage.Filesystem",
        "name": "ETagLookup",
        "normalized": "",
        "package": "wai-app-static",
        "partial": "ETag Lookup",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Storage-Filesystem.html#v:defaultFileServerSettings",
      "description": {
        "fct-descr": "\u003cp\u003eSettings optimized for a file server. More conservative caching will be\n applied, and indices and listings are enabled.\n\u003c/p\u003e",
        "fct-module": "WaiAppStatic.Storage.Filesystem",
        "fct-package": "wai-app-static",
        "fct-signature": "FilePath-\u003e StaticSettings",
        "fct-type": "function",
        "title": "defaultFileServerSettings"
      },
      "index": {
        "description": "Settings optimized for file server More conservative caching will be applied and indices and listings are enabled",
        "hierarchy": "WaiAppStatic Storage Filesystem",
        "module": "WaiAppStatic.Storage.Filesystem",
        "name": "defaultFileServerSettings",
        "normalized": "FilePath-\u003eStaticSettings",
        "package": "wai-app-static",
        "partial": "File Server Settings",
        "signature": "FilePath-\u003eStaticSettings"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Storage-Filesystem.html#v:defaultWebAppSettings",
      "description": {
        "fct-descr": "\u003cp\u003eSettings optimized for a web application. Files will have aggressive\n caching applied and hashes calculated, and indices and listings are disabled.\n\u003c/p\u003e",
        "fct-module": "WaiAppStatic.Storage.Filesystem",
        "fct-package": "wai-app-static",
        "fct-signature": "FilePath-\u003e StaticSettings",
        "fct-type": "function",
        "title": "defaultWebAppSettings"
      },
      "index": {
        "description": "Settings optimized for web application Files will have aggressive caching applied and hashes calculated and indices and listings are disabled",
        "hierarchy": "WaiAppStatic Storage Filesystem",
        "module": "WaiAppStatic.Storage.Filesystem",
        "name": "defaultWebAppSettings",
        "normalized": "FilePath-\u003eStaticSettings",
        "package": "wai-app-static",
        "partial": "Web App Settings",
        "signature": "FilePath-\u003eStaticSettings"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Storage-Filesystem.html#v:webAppSettingsWithLookup",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003edefaultWebAppSettings\u003c/code\u003e, but additionally uses a specialized\n \u003ccode\u003eETagLookup\u003c/code\u003e in place of the standard one. This can allow you to cache your\n hash values, or even precompute them.\n\u003c/p\u003e",
        "fct-module": "WaiAppStatic.Storage.Filesystem",
        "fct-package": "wai-app-static",
        "fct-signature": "FilePath-\u003e ETagLookup-\u003e StaticSettings",
        "fct-type": "function",
        "title": "webAppSettingsWithLookup"
      },
      "index": {
        "description": "Same as defaultWebAppSettings but additionally uses specialized ETagLookup in place of the standard one This can allow you to cache your hash values or even precompute them",
        "hierarchy": "WaiAppStatic Storage Filesystem",
        "module": "WaiAppStatic.Storage.Filesystem",
        "name": "webAppSettingsWithLookup",
        "normalized": "FilePath-\u003eETagLookup-\u003eStaticSettings",
        "package": "wai-app-static",
        "partial": "App Settings With Lookup",
        "signature": "FilePath-\u003eETagLookup-\u003eStaticSettings"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#",
      "description": {
        "fct-module": "WaiAppStatic.Types",
        "fct-package": "wai-app-static",
        "fct-signature": "module",
        "fct-source": "src/WaiAppStatic-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "",
        "hierarchy": "WaiAppStatic Types",
        "module": "WaiAppStatic.Types",
        "name": "Types",
        "normalized": "",
        "package": "wai-app-static",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#t:File",
      "description": {
        "fct-descr": "\u003cp\u003eInformation on an individual file.\n\u003c/p\u003e",
        "fct-module": "WaiAppStatic.Types",
        "fct-package": "wai-app-static",
        "fct-signature": "data",
        "fct-source": "src/WaiAppStatic-Types.html#File",
        "fct-type": "data",
        "title": "File"
      },
      "index": {
        "description": "Information on an individual file",
        "hierarchy": "WaiAppStatic Types",
        "module": "WaiAppStatic.Types",
        "name": "File",
        "normalized": "",
        "package": "wai-app-static",
        "partial": "File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#t:Folder",
      "description": {
        "fct-descr": "\u003cp\u003eRepresent contents of a single folder, which can be itself either a file\n or a folder.\n\u003c/p\u003e",
        "fct-module": "WaiAppStatic.Types",
        "fct-package": "wai-app-static",
        "fct-signature": "data",
        "fct-source": "src/WaiAppStatic-Types.html#Folder",
        "fct-type": "data",
        "title": "Folder"
      },
      "index": {
        "description": "Represent contents of single folder which can be itself either file or folder",
        "hierarchy": "WaiAppStatic Types",
        "module": "WaiAppStatic.Types",
        "name": "Folder",
        "normalized": "",
        "package": "wai-app-static",
        "partial": "Folder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#t:FolderName",
      "description": {
        "fct-descr": "\u003cp\u003eJust the name of a folder.\n\u003c/p\u003e",
        "fct-module": "WaiAppStatic.Types",
        "fct-package": "wai-app-static",
        "fct-signature": "type",
        "fct-source": "src/WaiAppStatic-Types.html#FolderName",
        "fct-type": "type",
        "title": "FolderName"
      },
      "index": {
        "description": "Just the name of folder",
        "hierarchy": "WaiAppStatic Types",
        "module": "WaiAppStatic.Types",
        "name": "FolderName",
        "normalized": "",
        "package": "wai-app-static",
        "partial": "Folder Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#t:Listing",
      "description": {
        "fct-descr": "\u003cp\u003eHow to construct a directory listing page for the given request path and\n the resulting folder.\n\u003c/p\u003e",
        "fct-module": "WaiAppStatic.Types",
        "fct-package": "wai-app-static",
        "fct-signature": "type",
        "fct-source": "src/WaiAppStatic-Types.html#Listing",
        "fct-type": "type",
        "title": "Listing"
      },
      "index": {
        "description": "How to construct directory listing page for the given request path and the resulting folder",
        "hierarchy": "WaiAppStatic Types",
        "module": "WaiAppStatic.Types",
        "name": "Listing",
        "normalized": "",
        "package": "wai-app-static",
        "partial": "Listing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#t:LookupResult",
      "description": {
        "fct-descr": "\u003cp\u003eResult of looking up a file in some storage backend.\n\u003c/p\u003e\u003cp\u003eThe lookup is either a file or folder, or does not exist.\n\u003c/p\u003e",
        "fct-module": "WaiAppStatic.Types",
        "fct-package": "wai-app-static",
        "fct-signature": "data",
        "fct-source": "src/WaiAppStatic-Types.html#LookupResult",
        "fct-type": "data",
        "title": "LookupResult"
      },
      "index": {
        "description": "Result of looking up file in some storage backend The lookup is either file or folder or does not exist",
        "hierarchy": "WaiAppStatic Types",
        "module": "WaiAppStatic.Types",
        "name": "LookupResult",
        "normalized": "",
        "package": "wai-app-static",
        "partial": "Lookup Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#t:MaxAge",
      "description": {
        "fct-descr": "\u003cp\u003eValues for the max-age component of the cache-control response header.\n\u003c/p\u003e",
        "fct-module": "WaiAppStatic.Types",
        "fct-package": "wai-app-static",
        "fct-signature": "data",
        "fct-source": "src/WaiAppStatic-Types.html#MaxAge",
        "fct-type": "data",
        "title": "MaxAge"
      },
      "index": {
        "description": "Values for the max-age component of the cache-control response header",
        "hierarchy": "WaiAppStatic Types",
        "module": "WaiAppStatic.Types",
        "name": "MaxAge",
        "normalized": "",
        "package": "wai-app-static",
        "partial": "Max Age",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#t:Piece",
      "description": {
        "fct-descr": "\u003cp\u003eAn individual component of a path, or of a filepath.\n\u003c/p\u003e\u003cp\u003eThis is the core type used by wai-app-static for doing lookups. It provides\n a smart constructor to avoid the possibility of constructing unsafe path\n segments (though \u003ccode\u003eunsafeToPiece\u003c/code\u003e can get around that as necessary).\n\u003c/p\u003e\u003cp\u003eIndividual file lookup backends must know how to convert from a \u003ccode\u003ePiece\u003c/code\u003e to\n their storage system.\n\u003c/p\u003e",
        "fct-module": "WaiAppStatic.Types",
        "fct-package": "wai-app-static",
        "fct-signature": "data",
        "fct-source": "src/WaiAppStatic-Types.html#Piece",
        "fct-type": "data",
        "title": "Piece"
      },
      "index": {
        "description": "An individual component of path or of filepath This is the core type used by wai-app-static for doing lookups It provides smart constructor to avoid the possibility of constructing unsafe path segments though unsafeToPiece can get around that as necessary Individual file lookup backends must know how to convert from Piece to their storage system",
        "hierarchy": "WaiAppStatic Types",
        "module": "WaiAppStatic.Types",
        "name": "Piece",
        "normalized": "",
        "package": "wai-app-static",
        "partial": "Piece",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#t:Pieces",
      "description": {
        "fct-descr": "\u003cp\u003eRequest coming from a user. Corresponds to \u003ccode\u003epathInfo\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "WaiAppStatic.Types",
        "fct-package": "wai-app-static",
        "fct-signature": "type",
        "fct-source": "src/WaiAppStatic-Types.html#Pieces",
        "fct-type": "type",
        "title": "Pieces"
      },
      "index": {
        "description": "Request coming from user Corresponds to pathInfo",
        "hierarchy": "WaiAppStatic Types",
        "module": "WaiAppStatic.Types",
        "name": "Pieces",
        "normalized": "",
        "package": "wai-app-static",
        "partial": "Pieces",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#t:StaticSettings",
      "description": {
        "fct-descr": "\u003cp\u003eAll of the settings available to users for tweaking wai-app-static.\n\u003c/p\u003e\u003cp\u003eNote that you should use the settings type approach for modifying values.\n See \u003ca\u003ehttp://www.yesodweb.com/book/settings-types\u003c/a\u003e for more information.\n\u003c/p\u003e",
        "fct-module": "WaiAppStatic.Types",
        "fct-package": "wai-app-static",
        "fct-signature": "data",
        "fct-source": "src/WaiAppStatic-Types.html#StaticSettings",
        "fct-type": "data",
        "title": "StaticSettings"
      },
      "index": {
        "description": "All of the settings available to users for tweaking wai-app-static Note that you should use the settings type approach for modifying values See http www.yesodweb.com book settings-types for more information",
        "hierarchy": "WaiAppStatic Types",
        "module": "WaiAppStatic.Types",
        "name": "StaticSettings",
        "normalized": "",
        "package": "wai-app-static",
        "partial": "Static Settings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#v:File",
      "description": {
        "fct-module": "WaiAppStatic.Types",
        "fct-package": "wai-app-static",
        "fct-signature": "File",
        "fct-source": "src/WaiAppStatic-Types.html#File",
        "fct-type": "function",
        "title": "File"
      },
      "index": {
        "description": "",
        "hierarchy": "WaiAppStatic Types",
        "module": "WaiAppStatic.Types",
        "name": "File",
        "normalized": "",
        "package": "wai-app-static",
        "partial": "File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#v:Folder",
      "description": {
        "fct-module": "WaiAppStatic.Types",
        "fct-package": "wai-app-static",
        "fct-signature": "Folder",
        "fct-source": "src/WaiAppStatic-Types.html#Folder",
        "fct-type": "function",
        "title": "Folder"
      },
      "index": {
        "description": "",
        "hierarchy": "WaiAppStatic Types",
        "module": "WaiAppStatic.Types",
        "name": "Folder",
        "normalized": "",
        "package": "wai-app-static",
        "partial": "Folder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#v:LRFile",
      "description": {
        "fct-module": "WaiAppStatic.Types",
        "fct-package": "wai-app-static",
        "fct-signature": "LRFile File",
        "fct-source": "src/WaiAppStatic-Types.html#LookupResult",
        "fct-type": "function",
        "title": "LRFile"
      },
      "index": {
        "description": "",
        "hierarchy": "WaiAppStatic Types",
        "module": "WaiAppStatic.Types",
        "name": "LRFile",
        "normalized": "",
        "package": "wai-app-static",
        "partial": "LRFile",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#v:LRFolder",
      "description": {
        "fct-module": "WaiAppStatic.Types",
        "fct-package": "wai-app-static",
        "fct-signature": "LRFolder Folder",
        "fct-source": "src/WaiAppStatic-Types.html#LookupResult",
        "fct-type": "function",
        "title": "LRFolder"
      },
      "index": {
        "description": "",
        "hierarchy": "WaiAppStatic Types",
        "module": "WaiAppStatic.Types",
        "name": "LRFolder",
        "normalized": "",
        "package": "wai-app-static",
        "partial": "LRFolder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#v:LRNotFound",
      "description": {
        "fct-module": "WaiAppStatic.Types",
        "fct-package": "wai-app-static",
        "fct-signature": "LRNotFound",
        "fct-source": "src/WaiAppStatic-Types.html#LookupResult",
        "fct-type": "function",
        "title": "LRNotFound"
      },
      "index": {
        "description": "",
        "hierarchy": "WaiAppStatic Types",
        "module": "WaiAppStatic.Types",
        "name": "LRNotFound",
        "normalized": "",
        "package": "wai-app-static",
        "partial": "LRNot Found",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#v:MaxAgeForever",
      "description": {
        "fct-descr": "\u003cp\u003eessentially infinite caching; in reality, probably one year\n\u003c/p\u003e",
        "fct-module": "WaiAppStatic.Types",
        "fct-package": "wai-app-static",
        "fct-signature": "MaxAgeForever",
        "fct-source": "src/WaiAppStatic-Types.html#MaxAge",
        "fct-type": "function",
        "title": "MaxAgeForever"
      },
      "index": {
        "description": "essentially infinite caching in reality probably one year",
        "hierarchy": "WaiAppStatic Types",
        "module": "WaiAppStatic.Types",
        "name": "MaxAgeForever",
        "normalized": "",
        "package": "wai-app-static",
        "partial": "Max Age Forever",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#v:MaxAgeSeconds",
      "description": {
        "fct-descr": "\u003cp\u003eset to the given number of seconds\n\u003c/p\u003e",
        "fct-module": "WaiAppStatic.Types",
        "fct-package": "wai-app-static",
        "fct-signature": "MaxAgeSeconds Int",
        "fct-source": "src/WaiAppStatic-Types.html#MaxAge",
        "fct-type": "function",
        "title": "MaxAgeSeconds"
      },
      "index": {
        "description": "set to the given number of seconds",
        "hierarchy": "WaiAppStatic Types",
        "module": "WaiAppStatic.Types",
        "name": "MaxAgeSeconds",
        "normalized": "",
        "package": "wai-app-static",
        "partial": "Max Age Seconds",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#v:NoMaxAge",
      "description": {
        "fct-descr": "\u003cp\u003eno cache-control set\n\u003c/p\u003e",
        "fct-module": "WaiAppStatic.Types",
        "fct-package": "wai-app-static",
        "fct-signature": "NoMaxAge",
        "fct-source": "src/WaiAppStatic-Types.html#MaxAge",
        "fct-type": "function",
        "title": "NoMaxAge"
      },
      "index": {
        "description": "no cache-control set",
        "hierarchy": "WaiAppStatic Types",
        "module": "WaiAppStatic.Types",
        "name": "NoMaxAge",
        "normalized": "",
        "package": "wai-app-static",
        "partial": "No Max Age",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#v:StaticSettings",
      "description": {
        "fct-module": "WaiAppStatic.Types",
        "fct-package": "wai-app-static",
        "fct-signature": "StaticSettings",
        "fct-source": "src/WaiAppStatic-Types.html#StaticSettings",
        "fct-type": "function",
        "title": "StaticSettings"
      },
      "index": {
        "description": "",
        "hierarchy": "WaiAppStatic Types",
        "module": "WaiAppStatic.Types",
        "name": "StaticSettings",
        "normalized": "",
        "package": "wai-app-static",
        "partial": "Static Settings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#v:fileGetHash",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate a hash of the contents of this file, such as for etag.\n\u003c/p\u003e",
        "fct-module": "WaiAppStatic.Types",
        "fct-package": "wai-app-static",
        "fct-signature": "IO (Maybe ByteString)",
        "fct-source": "src/WaiAppStatic-Types.html#File",
        "fct-type": "function",
        "title": "fileGetHash"
      },
      "index": {
        "description": "Calculate hash of the contents of this file such as for etag",
        "hierarchy": "WaiAppStatic Types",
        "module": "WaiAppStatic.Types",
        "name": "fileGetHash",
        "normalized": "",
        "package": "wai-app-static",
        "partial": "Get Hash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#v:fileGetModified",
      "description": {
        "fct-descr": "\u003cp\u003eLast modified time, used for both display in listings and if-modified-since.\n\u003c/p\u003e",
        "fct-module": "WaiAppStatic.Types",
        "fct-package": "wai-app-static",
        "fct-signature": "Maybe EpochTime",
        "fct-source": "src/WaiAppStatic-Types.html#File",
        "fct-type": "function",
        "title": "fileGetModified"
      },
      "index": {
        "description": "Last modified time used for both display in listings and if-modified-since",
        "hierarchy": "WaiAppStatic Types",
        "module": "WaiAppStatic.Types",
        "name": "fileGetModified",
        "normalized": "",
        "package": "wai-app-static",
        "partial": "Get Modified",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#v:fileGetSize",
      "description": {
        "fct-descr": "\u003cp\u003eSize of file in bytes\n\u003c/p\u003e",
        "fct-module": "WaiAppStatic.Types",
        "fct-package": "wai-app-static",
        "fct-signature": "Int",
        "fct-source": "src/WaiAppStatic-Types.html#File",
        "fct-type": "function",
        "title": "fileGetSize"
      },
      "index": {
        "description": "Size of file in bytes",
        "hierarchy": "WaiAppStatic Types",
        "module": "WaiAppStatic.Types",
        "name": "fileGetSize",
        "normalized": "",
        "package": "wai-app-static",
        "partial": "Get Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#v:fileName",
      "description": {
        "fct-descr": "\u003cp\u003eLast component of the filename.\n\u003c/p\u003e",
        "fct-module": "WaiAppStatic.Types",
        "fct-package": "wai-app-static",
        "fct-signature": "Piece",
        "fct-source": "src/WaiAppStatic-Types.html#File",
        "fct-type": "function",
        "title": "fileName"
      },
      "index": {
        "description": "Last component of the filename",
        "hierarchy": "WaiAppStatic Types",
        "module": "WaiAppStatic.Types",
        "name": "fileName",
        "normalized": "",
        "package": "wai-app-static",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#v:fileToResponse",
      "description": {
        "fct-descr": "\u003cp\u003eHow to construct a WAI response for this file. Some files are stored\n on the filesystem and can use \u003ccode\u003eResponseFile\u003c/code\u003e, while others are stored\n in memory and should use \u003ccode\u003eResponseBuilder\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "WaiAppStatic.Types",
        "fct-package": "wai-app-static",
        "fct-signature": "Status -\u003e ResponseHeaders -\u003e Response",
        "fct-source": "src/WaiAppStatic-Types.html#File",
        "fct-type": "function",
        "title": "fileToResponse"
      },
      "index": {
        "description": "How to construct WAI response for this file Some files are stored on the filesystem and can use ResponseFile while others are stored in memory and should use ResponseBuilder",
        "hierarchy": "WaiAppStatic Types",
        "module": "WaiAppStatic.Types",
        "name": "fileToResponse",
        "normalized": "Status-\u003eResponseHeaders-\u003eResponse",
        "package": "wai-app-static",
        "partial": "To Response",
        "signature": "Status-\u003eResponseHeaders-\u003eResponse"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#v:folderContents",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "WaiAppStatic.Types",
        "fct-package": "wai-app-static",
        "fct-signature": "[Either FolderName File]",
        "fct-source": "src/WaiAppStatic-Types.html#Folder",
        "fct-type": "function",
        "title": "folderContents"
      },
      "index": {
        "description": "",
        "hierarchy": "WaiAppStatic Types",
        "module": "WaiAppStatic.Types",
        "name": "folderContents",
        "normalized": "[Either FolderName File]",
        "package": "wai-app-static",
        "partial": "Contents",
        "signature": "[Either FolderName File]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#v:fromPiece",
      "description": {
        "fct-module": "WaiAppStatic.Types",
        "fct-package": "wai-app-static",
        "fct-signature": "Piece -\u003e Text",
        "fct-source": "src/WaiAppStatic-Types.html#fromPiece",
        "fct-type": "function",
        "title": "fromPiece"
      },
      "index": {
        "description": "",
        "hierarchy": "WaiAppStatic Types",
        "module": "WaiAppStatic.Types",
        "name": "fromPiece",
        "normalized": "Piece-\u003eText",
        "package": "wai-app-static",
        "partial": "Piece",
        "signature": "Piece-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#v:ssGetMimeType",
      "description": {
        "fct-descr": "\u003cp\u003eDetermine the mime type of the given file. Note that this function\n lives in \u003ccode\u003eIO\u003c/code\u003e in case you want to perform more complicated mimetype\n analysis, such as via the \u003ccode\u003efile\u003c/code\u003e utility.\n\u003c/p\u003e",
        "fct-module": "WaiAppStatic.Types",
        "fct-package": "wai-app-static",
        "fct-signature": "File -\u003e IO MimeType",
        "fct-source": "src/WaiAppStatic-Types.html#StaticSettings",
        "fct-type": "function",
        "title": "ssGetMimeType"
      },
      "index": {
        "description": "Determine the mime type of the given file Note that this function lives in IO in case you want to perform more complicated mimetype analysis such as via the file utility",
        "hierarchy": "WaiAppStatic Types",
        "module": "WaiAppStatic.Types",
        "name": "ssGetMimeType",
        "normalized": "File-\u003eIO MimeType",
        "package": "wai-app-static",
        "partial": "Get Mime Type",
        "signature": "File-\u003eIO MimeType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#v:ssIndices",
      "description": {
        "fct-descr": "\u003cp\u003eOrdered list of filenames to be used for indices. If the user\n requests a folder, and a file with the given name is found in that\n folder, that file is served. This supercedes any directory listing.\n\u003c/p\u003e",
        "fct-module": "WaiAppStatic.Types",
        "fct-package": "wai-app-static",
        "fct-signature": "[Piece]",
        "fct-source": "src/WaiAppStatic-Types.html#StaticSettings",
        "fct-type": "function",
        "title": "ssIndices"
      },
      "index": {
        "description": "Ordered list of filenames to be used for indices If the user requests folder and file with the given name is found in that folder that file is served This supercedes any directory listing",
        "hierarchy": "WaiAppStatic Types",
        "module": "WaiAppStatic.Types",
        "name": "ssIndices",
        "normalized": "[Piece]",
        "package": "wai-app-static",
        "partial": "Indices",
        "signature": "[Piece]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#v:ssListing",
      "description": {
        "fct-descr": "\u003cp\u003eHow to perform a directory listing. Optional. Will be used when the\n user requested a folder.\n\u003c/p\u003e",
        "fct-module": "WaiAppStatic.Types",
        "fct-package": "wai-app-static",
        "fct-signature": "Maybe Listing",
        "fct-source": "src/WaiAppStatic-Types.html#StaticSettings",
        "fct-type": "function",
        "title": "ssListing"
      },
      "index": {
        "description": "How to perform directory listing Optional Will be used when the user requested folder",
        "hierarchy": "WaiAppStatic Types",
        "module": "WaiAppStatic.Types",
        "name": "ssListing",
        "normalized": "",
        "package": "wai-app-static",
        "partial": "Listing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#v:ssLookupFile",
      "description": {
        "fct-descr": "\u003cp\u003eLookup a single file or folder. This is how you can control storage\n backend (filesystem, embedded, etc) and where to lookup.\n\u003c/p\u003e",
        "fct-module": "WaiAppStatic.Types",
        "fct-package": "wai-app-static",
        "fct-signature": "Pieces -\u003e IO LookupResult",
        "fct-source": "src/WaiAppStatic-Types.html#StaticSettings",
        "fct-type": "function",
        "title": "ssLookupFile"
      },
      "index": {
        "description": "Lookup single file or folder This is how you can control storage backend filesystem embedded etc and where to lookup",
        "hierarchy": "WaiAppStatic Types",
        "module": "WaiAppStatic.Types",
        "name": "ssLookupFile",
        "normalized": "Pieces-\u003eIO LookupResult",
        "package": "wai-app-static",
        "partial": "Lookup File",
        "signature": "Pieces-\u003eIO LookupResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#v:ssMaxAge",
      "description": {
        "fct-descr": "\u003cp\u003eValue to provide for max age in the cache-control.\n\u003c/p\u003e",
        "fct-module": "WaiAppStatic.Types",
        "fct-package": "wai-app-static",
        "fct-signature": "MaxAge",
        "fct-source": "src/WaiAppStatic-Types.html#StaticSettings",
        "fct-type": "function",
        "title": "ssMaxAge"
      },
      "index": {
        "description": "Value to provide for max age in the cache-control",
        "hierarchy": "WaiAppStatic Types",
        "module": "WaiAppStatic.Types",
        "name": "ssMaxAge",
        "normalized": "",
        "package": "wai-app-static",
        "partial": "Max Age",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#v:ssMkRedirect",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a requested path and a new destination, construct a string\n that will go there. Default implementation will use relative paths.\n\u003c/p\u003e",
        "fct-module": "WaiAppStatic.Types",
        "fct-package": "wai-app-static",
        "fct-signature": "Pieces -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/WaiAppStatic-Types.html#StaticSettings",
        "fct-type": "function",
        "title": "ssMkRedirect"
      },
      "index": {
        "description": "Given requested path and new destination construct string that will go there Default implementation will use relative paths",
        "hierarchy": "WaiAppStatic Types",
        "module": "WaiAppStatic.Types",
        "name": "ssMkRedirect",
        "normalized": "Pieces-\u003eByteString-\u003eByteString",
        "package": "wai-app-static",
        "partial": "Mk Redirect",
        "signature": "Pieces-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#v:ssRedirectToIndex",
      "description": {
        "fct-descr": "\u003cp\u003eIf \u003ccode\u003eTrue\u003c/code\u003e, send a redirect to the user when a folder is requested\n and an index page should be displayed. When \u003ccode\u003eFalse\u003c/code\u003e, display the\n content immediately.\n\u003c/p\u003e",
        "fct-module": "WaiAppStatic.Types",
        "fct-package": "wai-app-static",
        "fct-signature": "Bool",
        "fct-source": "src/WaiAppStatic-Types.html#StaticSettings",
        "fct-type": "function",
        "title": "ssRedirectToIndex"
      },
      "index": {
        "description": "If True send redirect to the user when folder is requested and an index page should be displayed When False display the content immediately",
        "hierarchy": "WaiAppStatic Types",
        "module": "WaiAppStatic.Types",
        "name": "ssRedirectToIndex",
        "normalized": "",
        "package": "wai-app-static",
        "partial": "Redirect To Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#v:ssUseHash",
      "description": {
        "fct-descr": "\u003cp\u003ePrefer usage of etag caching to last-modified caching.\n\u003c/p\u003e",
        "fct-module": "WaiAppStatic.Types",
        "fct-package": "wai-app-static",
        "fct-signature": "Bool",
        "fct-source": "src/WaiAppStatic-Types.html#StaticSettings",
        "fct-type": "function",
        "title": "ssUseHash"
      },
      "index": {
        "description": "Prefer usage of etag caching to last-modified caching",
        "hierarchy": "WaiAppStatic Types",
        "module": "WaiAppStatic.Types",
        "name": "ssUseHash",
        "normalized": "",
        "package": "wai-app-static",
        "partial": "Use Hash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#v:toPiece",
      "description": {
        "fct-descr": "\u003cp\u003eSmart constructor for a \u003ccode\u003ePiece\u003c/code\u003e. Won't allow unsafe components, such as\n pieces beginning with a period or containing a slash. This \u003cem\u003ewill\u003c/em\u003e, however,\n allow null pieces.\n\u003c/p\u003e",
        "fct-module": "WaiAppStatic.Types",
        "fct-package": "wai-app-static",
        "fct-signature": "Text -\u003e Maybe Piece",
        "fct-source": "src/WaiAppStatic-Types.html#toPiece",
        "fct-type": "function",
        "title": "toPiece"
      },
      "index": {
        "description": "Smart constructor for Piece Won allow unsafe components such as pieces beginning with period or containing slash This will however allow null pieces",
        "hierarchy": "WaiAppStatic Types",
        "module": "WaiAppStatic.Types",
        "name": "toPiece",
        "normalized": "Text-\u003eMaybe Piece",
        "package": "wai-app-static",
        "partial": "Piece",
        "signature": "Text-\u003eMaybe Piece"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#v:toPieces",
      "description": {
        "fct-descr": "\u003cp\u003eCall \u003ccode\u003etoPiece\u003c/code\u003e on a list.\n\u003c/p\u003e\u003cpre\u003e toPieces = mapM toPiece\n\u003c/pre\u003e",
        "fct-module": "WaiAppStatic.Types",
        "fct-package": "wai-app-static",
        "fct-signature": "[Text] -\u003e Maybe Pieces",
        "fct-source": "src/WaiAppStatic-Types.html#toPieces",
        "fct-type": "function",
        "title": "toPieces"
      },
      "index": {
        "description": "Call toPiece on list toPieces mapM toPiece",
        "hierarchy": "WaiAppStatic Types",
        "module": "WaiAppStatic.Types",
        "name": "toPieces",
        "normalized": "[Text]-\u003eMaybe Pieces",
        "package": "wai-app-static",
        "partial": "Pieces",
        "signature": "[Text]-\u003eMaybe Pieces"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-app-static/docs/WaiAppStatic-Types.html#v:unsafeToPiece",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a \u003ccode\u003ePiece\u003c/code\u003e without input validation.\n\u003c/p\u003e",
        "fct-module": "WaiAppStatic.Types",
        "fct-package": "wai-app-static",
        "fct-signature": "Text -\u003e Piece",
        "fct-source": "src/WaiAppStatic-Types.html#unsafeToPiece",
        "fct-type": "function",
        "title": "unsafeToPiece"
      },
      "index": {
        "description": "Construct Piece without input validation",
        "hierarchy": "WaiAppStatic Types",
        "module": "WaiAppStatic.Types",
        "name": "unsafeToPiece",
        "normalized": "Text-\u003ePiece",
        "package": "wai-app-static",
        "partial": "To Piece",
        "signature": "Text-\u003ePiece"
      }
    }
  }
]