[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/download-curl/docs/Network-Curl-Download-Lazy.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA binding to curl, an efficient, high level library for\n retrieving files using Uniform Resource Locators (URLs).\n\u003c/p\u003e\u003cp\u003eContent may be retrieved as a lazy \u003ca\u003eByteString\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eError handling is encapsulated in the \u003ca\u003eEither\u003c/a\u003e type.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Curl.Download.Lazy",
        "fct-package": "download-curl",
        "fct-signature": "module",
        "fct-source": "src/Network-Curl-Download-Lazy.html",
        "fct-type": "module",
        "title": "Lazy"
      },
      "index": {
        "description": "binding to curl an efficient high level library for retrieving files using Uniform Resource Locators URLs Content may be retrieved as lazy ByteString Error handling is encapsulated in the Either type",
        "hierarchy": "Network Curl Download Lazy",
        "module": "Network.Curl.Download.Lazy",
        "name": "Lazy",
        "normalized": "",
        "package": "download-curl",
        "partial": "Lazy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/download-curl/docs/Network-Curl-Download-Lazy.html#v:openLazyURI",
      "description": {
        "fct-descr": "\u003cp\u003eDownload content specified by a url using curl, returning the\n content as a lazy \u003ca\u003eByteString\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eIf an error occurs, \u003ca\u003eLeft\u003c/a\u003e is returned, with a\n protocol-specific error string.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e openLazyURI \"http://haskell.org\"\n\u003c/pre\u003e",
        "fct-module": "Network.Curl.Download.Lazy",
        "fct-package": "download-curl",
        "fct-signature": "String -\u003e IO (Either String ByteString)",
        "fct-source": "src/Network-Curl-Download-Lazy.html#openLazyURI",
        "fct-type": "function",
        "title": "openLazyURI"
      },
      "index": {
        "description": "Download content specified by url using curl returning the content as lazy ByteString If an error occurs Left is returned with protocol-specific error string Examples openLazyURI http haskell.org",
        "hierarchy": "Network Curl Download Lazy",
        "module": "Network.Curl.Download.Lazy",
        "name": "openLazyURI",
        "normalized": "String-\u003eIO(Either String ByteString)",
        "package": "download-curl",
        "partial": "Lazy URI",
        "signature": "String-\u003eIO(Either String ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/download-curl/docs/Network-Curl-Download-Lazy.html#v:openLazyURIWithOpts",
      "description": {
        "fct-descr": "\u003cp\u003eLike openURI, but takes curl options.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e openLazyURIWithOpts [CurlPost True] \"http://haskell.org\"\n\u003c/pre\u003e",
        "fct-module": "Network.Curl.Download.Lazy",
        "fct-package": "download-curl",
        "fct-signature": "[CurlOption] -\u003e String -\u003e IO (Either String ByteString)",
        "fct-source": "src/Network-Curl-Download-Lazy.html#openLazyURIWithOpts",
        "fct-type": "function",
        "title": "openLazyURIWithOpts"
      },
      "index": {
        "description": "Like openURI but takes curl options Examples openLazyURIWithOpts CurlPost True http haskell.org",
        "hierarchy": "Network Curl Download Lazy",
        "module": "Network.Curl.Download.Lazy",
        "name": "openLazyURIWithOpts",
        "normalized": "[CurlOption]-\u003eString-\u003eIO(Either String ByteString)",
        "package": "download-curl",
        "partial": "Lazy URIWith Opts",
        "signature": "[CurlOption]-\u003eString-\u003eIO(Either String ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/download-curl/docs/Network-Curl-Download.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA binding to curl, an efficient, high level library for\n retrieving files using Uniform Resource Locators (URLs).\n\u003c/p\u003e\u003cp\u003eContent may be retrieved as a strings, \u003ca\u003eByteString\u003c/a\u003e or parsed\n as HTML tags, XML or RSS and Atom feeds.\n\u003c/p\u003e\u003cp\u003eError handling is encapsulated in the \u003ca\u003eEither\u003c/a\u003e type.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Curl.Download",
        "fct-package": "download-curl",
        "fct-signature": "module",
        "fct-source": "src/Network-Curl-Download.html",
        "fct-type": "module",
        "title": "Download"
      },
      "index": {
        "description": "binding to curl an efficient high level library for retrieving files using Uniform Resource Locators URLs Content may be retrieved as strings ByteString or parsed as HTML tags XML or RSS and Atom feeds Error handling is encapsulated in the Either type",
        "hierarchy": "Network Curl Download",
        "module": "Network.Curl.Download",
        "name": "Download",
        "normalized": "",
        "package": "download-curl",
        "partial": "Download",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/download-curl/docs/Network-Curl-Download.html#v:openAsFeed",
      "description": {
        "fct-descr": "\u003cp\u003eDownload the content as for \u003ca\u003eopenURI\u003c/a\u003e, but return it as parsed RSS\n or Atom content, using the feed library parser.\n\u003c/p\u003e",
        "fct-module": "Network.Curl.Download",
        "fct-package": "download-curl",
        "fct-signature": "String -\u003e IO (Either String Feed)",
        "fct-source": "src/Network-Curl-Download.html#openAsFeed",
        "fct-type": "function",
        "title": "openAsFeed"
      },
      "index": {
        "description": "Download the content as for openURI but return it as parsed RSS or Atom content using the feed library parser",
        "hierarchy": "Network Curl Download",
        "module": "Network.Curl.Download",
        "name": "openAsFeed",
        "normalized": "String-\u003eIO(Either String Feed)",
        "package": "download-curl",
        "partial": "As Feed",
        "signature": "String-\u003eIO(Either String Feed)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/download-curl/docs/Network-Curl-Download.html#v:openAsTags",
      "description": {
        "fct-descr": "\u003cp\u003eDownload the content as for \u003ca\u003eopenURI\u003c/a\u003e, but return it as a list of\n parsed tags using the tagsoup html parser.\n\u003c/p\u003e",
        "fct-module": "Network.Curl.Download",
        "fct-package": "download-curl",
        "fct-signature": "String -\u003e IO (Either String [Tag String])",
        "fct-source": "src/Network-Curl-Download.html#openAsTags",
        "fct-type": "function",
        "title": "openAsTags"
      },
      "index": {
        "description": "Download the content as for openURI but return it as list of parsed tags using the tagsoup html parser",
        "hierarchy": "Network Curl Download",
        "module": "Network.Curl.Download",
        "name": "openAsTags",
        "normalized": "String-\u003eIO(Either String[Tag String])",
        "package": "download-curl",
        "partial": "As Tags",
        "signature": "String-\u003eIO(Either String[Tag String])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/download-curl/docs/Network-Curl-Download.html#v:openAsXML",
      "description": {
        "fct-descr": "\u003cp\u003eDownload the content as for \u003ca\u003eopenURI\u003c/a\u003e, but return it as parsed XML,\n using the xml-light parser.\n\u003c/p\u003e",
        "fct-module": "Network.Curl.Download",
        "fct-package": "download-curl",
        "fct-signature": "String -\u003e IO (Either String [Content])",
        "fct-source": "src/Network-Curl-Download.html#openAsXML",
        "fct-type": "function",
        "title": "openAsXML"
      },
      "index": {
        "description": "Download the content as for openURI but return it as parsed XML using the xml-light parser",
        "hierarchy": "Network Curl Download",
        "module": "Network.Curl.Download",
        "name": "openAsXML",
        "normalized": "String-\u003eIO(Either String[Content])",
        "package": "download-curl",
        "partial": "As XML",
        "signature": "String-\u003eIO(Either String[Content])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/download-curl/docs/Network-Curl-Download.html#v:openURI",
      "description": {
        "fct-descr": "\u003cp\u003eDownload content specified by a url using curl, returning the\n content as a strict \u003ca\u003eByteString\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eIf an error occurs, \u003ca\u003eLeft\u003c/a\u003e is returned, with a\n protocol-specific error string.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e openURI \"http://haskell.org\"\n\u003c/pre\u003e",
        "fct-module": "Network.Curl.Download",
        "fct-package": "download-curl",
        "fct-signature": "String -\u003e IO (Either String ByteString)",
        "fct-source": "src/Network-Curl-Download.html#openURI",
        "fct-type": "function",
        "title": "openURI"
      },
      "index": {
        "description": "Download content specified by url using curl returning the content as strict ByteString If an error occurs Left is returned with protocol-specific error string Examples openURI http haskell.org",
        "hierarchy": "Network Curl Download",
        "module": "Network.Curl.Download",
        "name": "openURI",
        "normalized": "String-\u003eIO(Either String ByteString)",
        "package": "download-curl",
        "partial": "URI",
        "signature": "String-\u003eIO(Either String ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/download-curl/docs/Network-Curl-Download.html#v:openURIString",
      "description": {
        "fct-descr": "\u003cp\u003eLike openURI, but returns the result as a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e openURIString \"http://haskell.org\"\n\u003c/pre\u003e",
        "fct-module": "Network.Curl.Download",
        "fct-package": "download-curl",
        "fct-signature": "String -\u003e IO (Either String String)",
        "fct-source": "src/Network-Curl-Download.html#openURIString",
        "fct-type": "function",
        "title": "openURIString"
      },
      "index": {
        "description": "Like openURI but returns the result as String Examples openURIString http haskell.org",
        "hierarchy": "Network Curl Download",
        "module": "Network.Curl.Download",
        "name": "openURIString",
        "normalized": "String-\u003eIO(Either String String)",
        "package": "download-curl",
        "partial": "URIString",
        "signature": "String-\u003eIO(Either String String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/download-curl/docs/Network-Curl-Download.html#v:openURIWithOpts",
      "description": {
        "fct-descr": "\u003cp\u003eLike openURI, but takes curl options.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e openURIWithOpts [CurlPost True] \"http://haskell.org\"\n\u003c/pre\u003e",
        "fct-module": "Network.Curl.Download",
        "fct-package": "download-curl",
        "fct-signature": "[CurlOption] -\u003e String -\u003e IO (Either String ByteString)",
        "fct-source": "src/Network-Curl-Download.html#openURIWithOpts",
        "fct-type": "function",
        "title": "openURIWithOpts"
      },
      "index": {
        "description": "Like openURI but takes curl options Examples openURIWithOpts CurlPost True http haskell.org",
        "hierarchy": "Network Curl Download",
        "module": "Network.Curl.Download",
        "name": "openURIWithOpts",
        "normalized": "[CurlOption]-\u003eString-\u003eIO(Either String ByteString)",
        "package": "download-curl",
        "partial": "URIWith Opts",
        "signature": "[CurlOption]-\u003eString-\u003eIO(Either String ByteString)"
      }
    }
  }
]